import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// In-memory broadcast channel for cross-isolate communication
const messageChannel = new BroadcastChannel("whatsapp-incoming-messages");

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    console.log('Received webhook from Periskope:', JSON.stringify(payload, null, 2));

    // Periskope sends different payload formats, handle both
    // Format 1: Direct message object with chat_id, body, from, etc.
    // Format 2: Nested with messages array
    let messageData;
    
    if (payload.messages && Array.isArray(payload.messages) && payload.messages.length > 0) {
      // Format with messages array
      messageData = payload.messages[0];
    } else {
      // Direct message object
      messageData = payload;
    }

    const { 
      chat_id, 
      from, 
      body, 
      message, 
      timestamp, 
      id: messageId,
      from_name,
      pushname
    } = messageData;

    // Extract actual message text (could be in 'body' or 'message' field)
    const messageText = body || message;
    // Extract sender number (from chat_id or from)
    const senderNumber = (chat_id || from || '').replace('@c.us', '').replace('@s.whatsapp.net', '');
    const senderName = from_name || pushname || 'User';

    if (!senderNumber || !messageText) {
      console.error('Invalid webhook payload - missing required fields:', payload);
      return new Response(
        JSON.stringify({ error: 'Invalid payload - missing chat_id/from or body/message' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Broadcast message to all connected SSE clients
    const incomingMessage = {
      type: 'whatsapp-message',
      from: senderNumber,
      fromName: senderName,
      message: messageText,
      timestamp: timestamp || Date.now(),
      messageId: messageId || `wa_${Date.now()}`,
    };

    console.log('Broadcasting incoming WhatsApp message:', incomingMessage);
    messageChannel.postMessage(incomingMessage);

    // Return 200 OK immediately to Periskope
    return new Response(
      JSON.stringify({ success: true, received: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in periskope-webhook:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
