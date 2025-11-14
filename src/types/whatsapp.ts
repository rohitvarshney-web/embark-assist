export interface WhatsAppSession {
  sessionId: string;
  phoneNumber: string | null;
  isPhoneCollected: boolean;
  isWhatsAppConnected: boolean;
}

export interface WhatsAppMessage {
  id: string;
  from: 'user' | 'bot' | 'whatsapp';
  text: string;
  timestamp: Date;
  deliveryStatus?: 'sending' | 'sent' | 'delivered' | 'failed';
}

export interface SendMessageRequest {
  phoneNumber: string;
  message: string;
  sessionId: string;
  context?: string;
}

export interface SendMessageResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}
