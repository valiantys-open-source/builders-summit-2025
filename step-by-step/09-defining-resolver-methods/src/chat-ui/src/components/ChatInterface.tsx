import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ChatHeader } from "./ChatHeader";
import { invoke } from "@forge/bridge";

export interface Message {
  role: "user" | "rovo-ai";
  content: string;
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "rovo-ai",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    const requestId = Date.now().toString();

    await invoke("send-message-to-rovo", {
      requestId,
      prompt: content,
    });

    // Set an interval that rechecks if a new message is available and then add it to the messages
    const interval = setInterval(async () => {
      const aiMessage: Message = {
        role: "rovo-ai",
        content: "Hello! I am your AI assistant. How can I help you? This is a placeholder response.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
      clearInterval(interval);
    }, 1500);
  };

  return (
    <div className="flex h-screen flex-col bg-gradient-to-br from-background via-background to-accent/20">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto px-4 py-6 min-h-92">
        <div className="mx-auto max-w-3xl space-y-6">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}

          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)]">
                <span className="text-sm font-semibold text-primary-foreground">AI</span>
              </div>
              <div className="flex items-center gap-1 rounded-2xl bg-[var(--ai-message-bg)] px-4 py-3">
                <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
                <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
                <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
              </div>
            </div>
          )}
        </div>
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
