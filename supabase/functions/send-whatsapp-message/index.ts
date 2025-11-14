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

    // Controlled list of likely endpoints to test
    const endpoints = [
      "https://api.periskope.app/v1/message/send",
      "https://api.periskope.app/message/send",
      "https://api.periskope.app/v1/messages/send",
      "https://api.periskope.app/messages/send",
      "https://api.periskope.app/v1/message",
    ];

    const headersBase = {
      Authorization: `Bearer ${periskopeApiKey}`,
      "x-phone": businessWhatsAppNumber,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const attempts: Array<{ url: string; status: number | string; body: string | null }> = [];

    for (const url of endpoints) {
      try {
        console.log("Attempting endpoint:", url);
        const res = await fetch(url, {
          method: "POST",
          headers: headersBase,
          body: JSON.stringify({ chat_id: chatId, message: fullMessage }),
        });
        const text = await readSafeBody(res);
        console.log("Endpoint result", { url, status: res.status, textPreview: text?.slice?.(0, 2000) });
        attempts.push({ url, status: res.status, body: text });

        if (res.ok) {
          let parsed = null;
          try {
            parsed = JSON.parse(text || "null");
          } catch (_e) {
            parsed = text;
          }
          return new Response(JSON.stringify({ success: true, endpoint: url, data: parsed }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
      } catch (err) {
        console.error("Fetch error for", url, err instanceof Error ? err.message : err);
        attempts.push({ url, status: "fetch_error", body: String(err) });
      }
    }

    console.error(
      "All endpoints failed. Attempts:",
      attempts.map((a) => ({ url: a.url, status: a.status })),
    );
    return new Response(
      JSON.stringify({ error: "Failed to send message via WhatsApp (all tested endpoints failed)", attempts }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Unhandled error", err instanceof Error ? err.message : err);
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
