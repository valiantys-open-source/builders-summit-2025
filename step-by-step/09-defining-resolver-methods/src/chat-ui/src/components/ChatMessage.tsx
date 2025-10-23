import type { Message } from "./ChatInterface";
import { router } from "@forge/bridge";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const handleViewLink = (url: string) => {
    router.navigate(url);
  };

  const isUser = message.role === "user";

  return (
    <div className={`flex items-start gap-3 ${isUser && "flex-row-reverse"}`}>
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          isUser
            ? "bg-[var(--user-message-bg)]"
            : "bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)]"
        }`}
      >
        {isUser ? (
          <svg className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        ) : (
          <span className="text-sm font-semibold text-primary-foreground">AI</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div
          className={`max-w-[600px] rounded-2xl px-4 py-3 shadow-sm ${
            isUser ? "bg-[var(--user-message-bg)] text-primary-foreground" : "bg-[var(--ai-message-bg)] text-foreground"
          }`}
        >
          {message.role === "user" || !message.content.startsWith("http") ? (
            <p className="text-sm leading-relaxed">{message.content}</p>
          ) : (
            <button
              onClick={() => {
                handleViewLink(message.content);
              }}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </button>
          )}
        </div>

        <span className={`px-2 text-xs text-muted-foreground ${isUser && "text-right"}`}>
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
