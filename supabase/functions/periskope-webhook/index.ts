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
    console.log('Received webhook from Periskope:', payload);

    const { from, message, timestamp, messageId } = payload;

    if (!from || !message) {
      console.error('Invalid webhook payload:', payload);
      return new Response(
        JSON.stringify({ error: 'Invalid payload' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Broadcast message to all connected SSE clients
    const incomingMessage = {
      type: 'whatsapp-message',
      from,
      message,
      timestamp: timestamp || Date.now(),
      messageId: messageId || `wa_${Date.now()}`,
    };

    console.log('Broadcasting message:', incomingMessage);
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
