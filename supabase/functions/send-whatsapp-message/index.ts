import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-phone",
};

/**
 * Helper: safe JSON parse for response bodies
 */
async function safeJson(resp: Response) {
  try {
    return await resp.json();
  } catch (_e) {
    try {
      return await resp.text();
    } catch (_e2) {
      return null;
    }
  }
}

/**
 * Probe Periskope /v1/phones to find a usable x-phone value for your org.
 * Returns either a `phone-xxxx` id or a numeric phone string (countrycode + number) if available.
 */
async function probePhones(periskopeApiKey: string) {
  const url = "https://api.periskope.app/v1/phones";
  const headers = {
    Authorization: `Bearer ${periskopeApiKey}`,
    Accept: "application/json",
  };

  try {
    const resp = await fetch(url, { method: "GET", headers });
    const body = await safeJson(resp);
    console.log("probePhones status", resp.status, "bodyPreview:", JSON.stringify(body)?.slice(0, 400));

    if (!resp.ok) return null;

    // Expected shape: array of phones or object with `data` — handle both
    const phones = Array.isArray(body) ? body : body?.data || body?.phones || [];
    if (!Array.isArray(phones) || phones.length === 0) return null;

    // Prefer explicit phone-id (phone-xxxx). If not available, return numeric phone (country+number)
    for (const p of phones) {
      if (p?.id && String(p.id).startsWith("phone-")) return p.id;
    }
    for (const p of phones) {
      if (p?.number) return String(p.number).replace(/\D/g, "");
      if (p?.phone) return String(p.phone).replace(/\D/g, "");
    }

    // Fallback: try first object that contains digits
    const fallback = phones[0];
    if (fallback) return fallback.id || fallback.number || fallback.phone || null;

    return null;
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

    // Basic validation
    if (!phoneNumber || !/^\d{10,15}$/.test(phoneNumber)) {
      return new Response(JSON.stringify({ error: "Invalid phone number format. Use E.164 digits only (no +)." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const sanitizedMessage = typeof message === "string" ? message.trim() : "";
    if (!sanitizedMessage) {
      return new Response(JSON.stringify({ error: "Message cannot be empty" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const periskopeApiKey = Deno.env.get("PERISKOPE_API_KEY") || "";
    let businessWhatsAppNumber = Deno.env.get("BUSINESS_WHATSAPP_NUMBER") || "";

    if (!periskopeApiKey) {
      console.error("Missing PERISKOPE_API_KEY");
      return new Response(JSON.stringify({ error: "Server configuration error: missing PERISKOPE_API_KEY" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // If BUSINESS_WHATSAPP_NUMBER is missing or looks invalid, try probing /v1/phones
    if (!businessWhatsAppNumber || !/^\w[\w-]*$/.test(businessWhatsAppNumber)) {
      console.log("BUSINESS_WHATSAPP_NUMBER missing or invalid — probing /v1/phones");
      const probed = await probePhones(periskopeApiKey);
      if (probed) {
        businessWhatsAppNumber = probed;
        console.log("Using probed x-phone value:", businessWhatsAppNumber);
      } else {
        console.error("Could not determine a valid x-phone value");
        return new Response(
          JSON.stringify({
            error: "Server configuration error: BUSINESS_WHATSAPP_NUMBER not set and /v1/phones probe failed",
          }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
    }

    // Build chat_id — for individual chats Periskope expects @c.us
    const chatId = `${phoneNumber}@c.us`;

    // Build final message with optional context
    const fullMessage = context ? `[Context: ${context}]\n\n${sanitizedMessage}` : sanitizedMessage;

    // Single canonical endpoint
    const endpoint = "https://api.periskope.app/v1/message/send";
    const headers = {
      Authorization: `Bearer ${periskopeApiKey}`,
      "x-phone": businessWhatsAppNumber,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    console.log("Sending to Periskope", {
      endpoint,
      chatIdPreview: chatId?.slice?.(-14),
      xPhonePreview: businessWhatsAppNumber?.slice?.(-8),
    });

    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ chat_id: chatId, message: fullMessage }),
    });

    const body = await safeJson(res);
    console.log("Periskope response", { status: res.status, bodyPreview: JSON.stringify(body)?.slice?.(0, 800) });

    if (res.ok) {
      // Normalize possible success fields
      const messageId = body?.queue_id || body?.messageId || body?.id || `msg_${Date.now()}`;
      return new Response(JSON.stringify({ success: true, messageId, data: body }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Non-ok response — return details to caller (useful for debug)
    return new Response(
      JSON.stringify({ error: "Failed to send message via WhatsApp", details: { status: res.status, body } }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error("Unhandled error in function", err instanceof Error ? err.message : err);
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
