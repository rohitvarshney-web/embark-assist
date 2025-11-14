import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-phone",
};

async function readSafeBody(resp: Response) {
  try {
    return await resp.text();
  } catch (_e) {
    return null;
  }
}

async function probePhones(periskopeApiKey: string) {
  const url = "https://api.periskope.app/v1/phones";
  const headers = { Authorization: `Bearer ${periskopeApiKey}`, Accept: "application/json" };
  try {
    const resp = await fetch(url, { method: "GET", headers });
    const text = await readSafeBody(resp);
    console.log("probePhones status", resp.status, "bodyPreview:", text?.slice(0, 800));
    if (!resp.ok) return null;
    const body = JSON.parse(text || "null");
    const phones = Array.isArray(body) ? body : body?.data || body?.phones || [];
    if (!Array.isArray(phones) || phones.length === 0) return null;
    for (const p of phones) {
      if (p?.id && String(p.id).startsWith("phone-")) return p.id;
    }
    for (const p of phones) {
      if (p?.number) return String(p.number).replace(/\D/g, "");
      if (p?.phone) return String(p.phone).replace(/\D/g, "");
    }
    return phones[0]?.id || phones[0]?.number || phones[0]?.phone || null;
  } catch (err) {
    console.error("probePhones error", err instanceof Error ? err.message : err);
    return null;
  }
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const json = await req.json().catch(() => ({}));
    const { phoneNumber, message, sessionId, context } = json;
    console.log("Incoming request", { sessionId, phoneNumberPreview: phoneNumber?.slice?.(-6) });

    if (!phoneNumber || !/^\d{10,15}$/.test(phoneNumber)) {
      return new Response(JSON.stringify({ error: "Invalid phone number format. Use E.164 digits only (no +)." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const sanitizedMessage = typeof message === "string" ? message.trim() : "";
    if (!sanitizedMessage)
      return new Response(JSON.stringify({ error: "Message cannot be empty" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });

    const periskopeApiKey = Deno.env.get("PERISKOPE_API_KEY") || "";
    let businessWhatsAppNumber = Deno.env.get("BUSINESS_WHATSAPP_NUMBER") || "";

    if (!periskopeApiKey) {
      console.error("Missing PERISKOPE_API_KEY");
      return new Response(JSON.stringify({ error: "Server configuration error: missing PERISKOPE_API_KEY" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!businessWhatsAppNumber) {
      console.log("BUSINESS_WHATSAPP_NUMBER not set — probing /v1/phones");
      const probed = await probePhones(periskopeApiKey);
      if (probed) {
        businessWhatsAppNumber = probed;
        console.log("Using probed x-phone value:", businessWhatsAppNumber);
      } else {
        console.error("Could not determine x-phone value");
        return new Response(
          JSON.stringify({
            error: "Server config error: BUSINESS_WHATSAPP_NUMBER not set and /v1/phones probe failed",
          }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
    }

    const chatId = `${phoneNumber}@c.us`;
    const fullMessage = context ? `[Context: ${context}]\n\n${sanitizedMessage}` : sanitizedMessage;

    // Use the correct Periskope API endpoint: POST /v1/message
    const url = "https://api.periskope.app/message";
    
    const headers = {
      Authorization: `Bearer ${periskopeApiKey}`,
      "x-phone": businessWhatsAppNumber,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    console.log("Sending to Periskope API:", { 
      url, 
      chat_id: chatId, 
      phoneHeader: businessWhatsAppNumber 
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify({ 
          chat_id: chatId, 
          message: fullMessage,
          body: fullMessage
        }),
      });

      const responseText = await readSafeBody(response);
      console.log("Periskope API response:", { 
        status: response.status, 
        body: responseText?.slice(0, 2000) 
      });

      if (!response.ok) {
        console.error("Periskope API error:", response.status, responseText);
        return new Response(
          JSON.stringify({ 
            error: "Failed to send message via WhatsApp",
            details: responseText ? JSON.parse(responseText || '{}') : "No response body",
            hint: response.status === 401 ? "Check if BUSINESS_WHATSAPP_NUMBER secret is correct and authorized in Periskope" : null
          }),
          { 
            status: response.status, 
            headers: { ...corsHeaders, "Content-Type": "application/json" } 
          }
        );
      }

      const data = responseText ? JSON.parse(responseText) : {};
      console.log("✅ Message sent successfully:", data?.queue_id || data?.messageId);
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          messageId: data?.queue_id || data?.messageId || "unknown",
          data 
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );

    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error("Failed to send message:", errorMsg);
      return new Response(
        JSON.stringify({ 
          error: "Failed to send message via WhatsApp",
          details: errorMsg 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }
  } catch (err) {
    console.error("Unhandled error", err instanceof Error ? err.message : err);
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
