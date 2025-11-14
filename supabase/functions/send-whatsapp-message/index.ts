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

    console.log('Sending message to WhatsApp:', { phoneNumber, sessionId, messageLength: message.length });

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

    // Build message with context if provided
    const fullMessage = context 
      ? `[Context: ${context}]\n\n${sanitizedMessage}`
      : sanitizedMessage;

    // Call Periskope API
    const periskopeResponse = await fetch('https://api.periskope.app/message/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${periskopeApiKey}`,
        'x-phone': businessWhatsAppNumber,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: phoneNumber,
        message: fullMessage,
      }),
    });

    const periskopeData = await periskopeResponse.json();

    if (!periskopeResponse.ok) {
      console.error('Periskope API error:', periskopeData);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send message via WhatsApp',
          details: periskopeData 
        }),
        { status: periskopeResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Message sent successfully:', periskopeData);

    return new Response(
      JSON.stringify({ 
        success: true,
        messageId: periskopeData.messageId || `msg_${Date.now()}`,
        data: periskopeData
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in send-whatsapp-message:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
