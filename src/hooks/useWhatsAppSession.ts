import { useState, useEffect, useCallback, useRef } from 'react';
import { WhatsAppSession, WhatsAppMessage } from '@/types/whatsapp';
import { toast } from '@/hooks/use-toast';

export function useWhatsAppSession() {
  const [session, setSession] = useState<WhatsAppSession>(() => {
    const savedSessionId = sessionStorage.getItem('whatsapp_session_id');
    const savedPhoneNumber = sessionStorage.getItem('whatsapp_phone_number');
    
    return {
      sessionId: savedSessionId || crypto.randomUUID(),
      phoneNumber: savedPhoneNumber || null,
      isPhoneCollected: !!savedPhoneNumber,
      isWhatsAppConnected: !!savedPhoneNumber,
    };
  });

  const [incomingMessages, setIncomingMessages] = useState<WhatsAppMessage[]>([]);
  const eventSourceRef = useRef<EventSource | null>(null);

  // Save session to sessionStorage
  useEffect(() => {
    sessionStorage.setItem('whatsapp_session_id', session.sessionId);
    if (session.phoneNumber) {
      sessionStorage.setItem('whatsapp_phone_number', session.phoneNumber);
    }
  }, [session.sessionId, session.phoneNumber]);

  // Connect to SSE stream for incoming messages
  useEffect(() => {
    if (!session.isPhoneCollected || !session.phoneNumber) return;

    const projectId = 'ykfgtfqggbypjyaolaus';
    const sseUrl = `https://${projectId}.supabase.co/functions/v1/whatsapp-sse-stream?sessionId=${session.sessionId}&phoneNumber=${session.phoneNumber}`;

    console.log('Connecting to SSE stream:', sseUrl);

    const eventSource = new EventSource(sseUrl);
    eventSourceRef.current = eventSource;

    eventSource.onopen = () => {
      console.log('SSE connection established');
    };

    eventSource.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        console.log('Received SSE message:', message);
        
        if (message.type === 'heartbeat') return;

        const whatsappMessage: WhatsAppMessage = {
          id: message.messageId || `wa_${Date.now()}`,
          from: 'whatsapp',
          text: message.message,
          timestamp: new Date(message.timestamp),
          deliveryStatus: 'delivered',
        };

        setIncomingMessages((prev) => [...prev, whatsappMessage]);
      } catch (error) {
        console.error('Error parsing SSE message:', error);
      }
    };

    eventSource.onerror = (error) => {
      console.error('SSE error:', error);
      eventSource.close();
      
      // Reconnect after 5 seconds
      setTimeout(() => {
        if (session.isPhoneCollected) {
          console.log('Attempting to reconnect SSE...');
        }
      }, 5000);
    };

    return () => {
      console.log('Closing SSE connection');
      eventSource.close();
      eventSourceRef.current = null;
    };
  }, [session.sessionId, session.isPhoneCollected, session.phoneNumber]);

  const updatePhoneNumber = useCallback((phoneNumber: string) => {
    setSession((prev) => ({
      ...prev,
      phoneNumber,
      isPhoneCollected: true,
      isWhatsAppConnected: true,
    }));
  }, []);

  const sendToWhatsApp = useCallback(
    async (message: string, context?: string) => {
      if (!session.phoneNumber) {
        toast({
          title: 'Phone number required',
          description: 'Please provide your phone number first.',
          variant: 'destructive',
        });
        return { success: false, error: 'No phone number' };
      }

      try {
        const projectId = 'ykfgtfqggbypjyaolaus';
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/send-whatsapp-message`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              phoneNumber: session.phoneNumber,
              message,
              sessionId: session.sessionId,
              context,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message');
        }

        console.log('Message sent to WhatsApp:', data);
        return { success: true, messageId: data.messageId };
      } catch (error) {
        console.error('Error sending to WhatsApp:', error);
        toast({
          title: 'Failed to send to WhatsApp',
          description: error instanceof Error ? error.message : 'Please try again',
          variant: 'destructive',
        });
        return { success: false, error: String(error) };
      }
    },
    [session.phoneNumber, session.sessionId]
  );

  return {
    session,
    incomingMessages,
    updatePhoneNumber,
    sendToWhatsApp,
    clearIncomingMessages: () => setIncomingMessages([]),
  };
}
