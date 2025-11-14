import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get('sessionId');
  const phoneNumber = url.searchParams.get('phoneNumber');

  if (!sessionId || !phoneNumber) {
    return new Response('Missing sessionId or phoneNumber', { status: 400 });
  }

  console.log('SSE client connected:', { sessionId, phoneNumber });

  // Create SSE stream
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();

      // Send initial connection message
      controller.enqueue(
        encoder.encode(`data: ${JSON.stringify({ type: 'connected', sessionId })}\n\n`)
      );

      // Subscribe to broadcast channel for incoming messages
      const messageChannel = new BroadcastChannel("whatsapp-incoming-messages");
      
      messageChannel.onmessage = (event) => {
        const message = event.data;
        console.log('Received broadcast message:', message);

        // Only send messages for this phone number
        if (message.from === phoneNumber) {
          const sseData = {
            type: 'message',
            message: message.message,
            timestamp: message.timestamp,
            messageId: message.messageId,
          };
          
          console.log('Sending to SSE client:', sseData);
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(sseData)}\n\n`)
          );
        }
      };

      // Send heartbeat every 30 seconds to keep connection alive
      const heartbeatInterval = setInterval(() => {
        try {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: 'heartbeat', timestamp: Date.now() })}\n\n`)
          );
        } catch (error) {
          console.error('Error sending heartbeat:', error);
          clearInterval(heartbeatInterval);
        }
      }, 30000);

      // Cleanup on connection close
      req.signal.addEventListener('abort', () => {
        console.log('SSE client disconnected:', { sessionId, phoneNumber });
        clearInterval(heartbeatInterval);
        messageChannel.close();
        try {
          controller.close();
        } catch (error) {
          console.error('Error closing controller:', error);
        }
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    },
  });
});
