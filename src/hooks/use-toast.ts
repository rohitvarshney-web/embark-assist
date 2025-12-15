import { message, notification } from "antd";

type ToastOptions = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

// Simple toast function using Ant Design's message API
export function toast({ title, description, variant }: ToastOptions) {
  if (variant === "destructive") {
    message.error(description || title || "Error");
  } else {
    message.success(description || title || "Success");
  }
}

// Notification function for more complex notifications
export function showNotification({ title, description, variant }: ToastOptions) {
  if (variant === "destructive") {
    notification.error({
      message: title,
      description,
    });
  } else {
    notification.success({
      message: title,
      description,
    });
  }
}

// Hook for compatibility
export function useToast() {
  return {
    toast,
    toasts: [] as any[],
    dismiss: () => {},
  };
}
