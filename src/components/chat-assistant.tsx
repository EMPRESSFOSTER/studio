'use client';

import { Button } from '@/components/ui/button';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-8 w-8"
  >
    <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.3-.3.1-.1.1-.2 0-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.3c.1.1 1.5.7 3.5 2.5.5.4.8.6 1.1.8.5.2.9.2 1.2.1.4-.1 1.5-.6 1.7-1.2.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z"></path>
    <path d="M12.1 2.1C6.6 2.1 2.2 6.5 2.2 12c0 1.8.5 3.5 1.4 5L2.5 22l5.3-1.4c1.4.8 3 1.3 4.7 1.3h.1c5.5 0 9.9-4.4 9.9-9.9.1-5.5-4.3-9.9-9.8-9.9zM12 20.1c-1.6 0-3.2-.5-4.5-1.4l-.3-.2-3.4.9.9-3.3-.2-.3c-1-1.4-1.5-3.1-1.5-4.8 0-4.5 3.6-8.1 8.1-8.1 4.5 0 8.1 3.6 8.1 8.1 0 4.5-3.6 8.1-8.1 8.1z"></path>
  </svg>
);


export function ChatAssistant() {
  const phoneNumber = "2349015028666"; // Your WhatsApp number without '+'
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        asChild
        size="icon"
        className="rounded-full w-16 h-16 bg-[#25D366] text-white hover:bg-[#1DA851] shadow-2xl shadow-green-500/40 animate-pulse-glow"
        style={{ animation: 'pulse-glow 2s infinite', '--primary': '60 70% 50%' } as React.CSSProperties}
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <WhatsAppIcon />
        </a>
      </Button>
    </div>
  );
}
