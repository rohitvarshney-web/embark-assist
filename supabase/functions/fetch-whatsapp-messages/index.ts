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
    const { chat_id } = await req.json();
    
    if (!chat_id) {
      return new Response(
        JSON.stringify({ error: 'chat_id is required' }),
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

    // Fetch messages from Periskope
    const response = await fetch(
      `https://api.periskope.app/chat/${chat_id}/messages`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${periskopeApiKey}`,
          'phone': businessWhatsAppNumber,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Periskope API error:', response.status, errorText);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to fetch messages from Periskope',
          details: errorText 
        }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log('Successfully fetched messages for chat:', chat_id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        messages: data.messages || [],
        count: data.count || 0
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in fetch-whatsapp-messages:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
