'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, X, Send, Loader2, Sparkles } from 'lucide-react';
import { handleChatQuery } from '@/app/actions';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: "Hello! I'm the EmpressTech AI assistant. Ask me about our services!",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await handleChatQuery({ question: input });

    if (response.useAssistant) {
      const assistantMessage: Message = { role: 'assistant', content: response.answer };
      setMessages(prev => [...prev, assistantMessage]);
    } else {
        const notRelevantMessage: Message = { role: 'assistant', content: "I can only answer questions about EmpressTech's services: AI Solutions, Automation, Cloud Systems, Web Development, and Data Analytics. How can I help with those?" };
        setMessages(prev => [...prev, notRelevantMessage]);
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className={`fixed bottom-4 right-4 z-50 transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}>
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-primary text-primary-foreground shadow-2xl shadow-primary/40 animate-pulse-glow"
          onClick={() => setIsOpen(true)}
        >
          <Sparkles className="h-8 w-8" />
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] h-[calc(100vh-5rem)] max-w-sm max-h-[600px] glass-card flex flex-col animate-slide-in-bottom">
          <header className="flex items-center justify-between p-4 border-b">
            <h3 className="font-headline text-lg flex items-center gap-2">
              <Bot className="text-primary" />
              AI Assistant
            </h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </header>

          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div className="bg-muted rounded-lg px-4 py-3 flex items-center">
                        <Loader2 className="h-5 w-5 text-primary animate-spin" />
                    </div>
                 </div>
              )}
            </div>
          </ScrollArea>
          
          <footer className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <Input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="bg-transparent border-primary/40 focus:bg-primary/5"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </footer>
        </div>
      )}
    </>
  );
}
