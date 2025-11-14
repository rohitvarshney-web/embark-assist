import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phoneNumber, message, sessionId, context } = await req.json();

    console.log('Sending message to WhatsApp:', { sessionId, messageLength: message.length });

    // Validate phone number format (E.164 without +)
    if (!phoneNumber || !/^\d{10,15}$/.test(phoneNumber)) {
      return new Response(
        JSON.stringify({ error: 'Invalid phone number format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Sanitize message
    const sanitizedMessage = message.trim();
    if (!sanitizedMessage) {
      return new Response(
        JSON.stringify({ error: 'Message cannot be empty' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const periskopeApiKey = Deno.env.get('PERISKOPE_API_KEY');
    const businessWhatsAppNumber = Deno.env.get('BUSINESS_WHATSAPP_NUMBER');

    if (!periskopeApiKey || !businessWhatsAppNumber) {
      console.error('Missing required environment variables');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate BUSINESS_WHATSAPP_NUMBER format
    if (!/^\d{10,15}$/.test(businessWhatsAppNumber)) {
      console.error('Invalid BUSINESS_WHATSAPP_NUMBER format');
      return new Response(
        JSON.stringify({ error: 'Invalid BUSINESS_WHATSAPP_NUMBER – must include country code and digits only' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Build chatId with @c.us suffix for WhatsApp
    const chatId = phoneNumber.includes('@') ? phoneNumber : `${phoneNumber}@c.us`;

    // Build message with context if provided
    const fullMessage = context 
      ? `[Context: ${context}]\n\n${sanitizedMessage}`
      : sanitizedMessage;

    // Try multiple Periskope endpoints in order
    const endpoints = [
      {
        url: `https://api.periskope.app/api/v1/message/send/${encodeURIComponent(chatId)}`,
        body: { body: fullMessage }
      },
      {
        url: `https://api.periskope.app/message/send/${encodeURIComponent(chatId)}`,
        body: { body: fullMessage }
      },
      {
        url: 'https://api.periskope.app/api/v1/messages/send',
        body: { chat_id: chatId, body: fullMessage }
      },
      {
        url: 'https://api.periskope.app/message/send',
        body: { chat_id: chatId, body: fullMessage }
      }
    ];

    const headers = {
      'Authorization': `Bearer ${periskopeApiKey}`,
      'x-phone': businessWhatsAppNumber,
      'Content-Type': 'application/json',
    };

    let lastError: any = null;
    
    for (const endpoint of endpoints) {
      console.log('Attempting Periskope endpoint:', { 
        url: endpoint.url, 
        chatId,
        bodyKeys: Object.keys(endpoint.body) 
      });

      try {
        const periskopeResponse = await fetch(endpoint.url, {
          method: 'POST',
          headers,
          body: JSON.stringify(endpoint.body),
        });

        const periskopeData = await periskopeResponse.json();
        console.log('Periskope response:', { 
          endpoint: endpoint.url,
          status: periskopeResponse.status, 
          ok: periskopeResponse.ok,
          code: periskopeData?.code,
          message: periskopeData?.message?.substring(0, 100)
        });

        if (periskopeResponse.ok) {
          console.log('Message sent successfully via:', endpoint.url);
          return new Response(
            JSON.stringify({ 
              success: true,
              messageId: periskopeData.queue_id || periskopeData.messageId || `msg_${Date.now()}`,
              data: periskopeData
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        lastError = periskopeData;
      } catch (error) {
        console.error('Error calling endpoint:', endpoint.url, error);
        lastError = { error: error instanceof Error ? error.message : 'Unknown error' };
      }
    }

    // All endpoints failed
    console.error('All Periskope endpoints failed. Last error:', lastError);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send message via WhatsApp',
        details: lastError 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in send-whatsapp-message:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
