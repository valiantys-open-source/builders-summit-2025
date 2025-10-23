import type React from "react";

import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <div className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-4 py-2">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              placeholder="Type your message..."
              className="max-h-32 min-h-[12px] w-full resize-none rounded-xl border border-input bg-background px-4 py-1 pr-12 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              rows={1}
            />
            <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
              {input.length > 0 && `${input.length} chars`}
            </div>
          </div>

          <button
            type="submit"
            disabled={!input.trim()}
            className="h-[30px] rounded-xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] px-6 font-medium text-primary-foreground shadow-lg transition-all hover:shadow-xl disabled:opacity-50 flex items-center"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="ml-2">Send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
