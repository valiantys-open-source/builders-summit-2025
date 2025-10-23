# Step 4: Adding More Modules

Through this step, you will have setup the base of the UI that we will create.

## Instructions

1. In your terminal type: `cd src` to go to that directory.
2. Once in the `src` directory, type `npm create vite@latest chat-ui`
3. Choose `React`
4. Choose `TypeScript`
5. Choose `No`
6. Choose `Yes`
7. Hold CTRL and press C to cancel out of the terminal process. `CTRL + C`
8. Open the `src/chat-ui/vite.config.ts` file, and change it to:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
});
```

9. Type `cd chat-ui` in the terminal, to navigate to this directory.
10. Type `npm install @tailwindcss/vite @forge/bridge tailwindcss tw-animate-css` to install all the libraries we will need all at once, to save some time.
11. Next, let's go to the `rovo-in-jsm-portal/src/chat-ui/src/App.tsx` file and change the boilerplate code to:

```tsx
import "./App.css";
import { ChatInterface } from "./components/ChatInterface";

function App() {
  return (
    <>
      <ChatInterface />
    </>
  );
}

export default App;
```

12. Delete everything inside the `rovo-in-jsm-portal/src/chat-ui/src/App.css` file so it is empty.
13. Replacing everything inside the `rovo-in-jsm-portal/src/chat-ui/src/index.css` file with:

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(0.99 0.005 240);
  --foreground: oklch(0.25 0.015 240);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.25 0.015 240);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.25 0.015 240);
  --primary: oklch(0.48 0.18 254);
  --primary-foreground: oklch(0.99 0.005 240);
  --secondary: oklch(0.96 0.01 240);
  --secondary-foreground: oklch(0.25 0.015 240);
  --muted: oklch(0.96 0.01 240);
  --muted-foreground: oklch(0.55 0.015 240);
  --accent: oklch(0.94 0.02 240);
  --accent-foreground: oklch(0.25 0.015 240);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.99 0.005 240);
  --border: oklch(0.92 0.01 240);
  --input: oklch(0.92 0.01 240);
  --ring: oklch(0.48 0.18 254);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.75rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);

  /* Added Atlassian-inspired gradient colors */
  --gradient-start: oklch(0.48 0.18 254);
  --gradient-end: oklch(0.58 0.16 264);
  --ai-message-bg: oklch(0.97 0.01 240);
  --user-message-bg: oklch(0.48 0.18 254);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.58 0.16 254);
  --primary-foreground: oklch(0.99 0.005 240);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);

  /* Dark mode gradient adjustments */
  --gradient-start: oklch(0.58 0.16 254);
  --gradient-end: oklch(0.48 0.18 264);
  --ai-message-bg: oklch(0.22 0.01 240);
  --user-message-bg: oklch(0.48 0.18 254);
}

@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }

  /* Added subtle animated gradient background */
  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 50%,
        oklch(0.55 0.12 254 / 0.08) 0%,
        transparent 50%
      ), radial-gradient(circle at 80% 80%, oklch(0.6 0.1 270 / 0.06) 0%, transparent
          50%);
    pointer-events: none;
    z-index: 0;
  }

  main {
    position: relative;
    z-index: 1;
  }
}
```

14. Let's create a folder called `components` inside the `rovo-in-jsm-portal/src/chat-ui/src` folder.
**NOTE:** You can skip steps 14-18, by simply copying the entire components folder from this step to your workshop code.

15. Let's create a file in this `components` folder called: `ChatHeader.tsx` and paste the following code:

```tsx
export function ChatHeader() {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] shadow-lg">
            <svg
              className="h-4 w-4 text-primary-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              Rovo AI - Form Finder
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-0.5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">Online</span>
          </div>
        </div>
      </div>
    </header>
  );
}
```

16. Let's create another file in the `components` folder called: `ChatInput.tsx` and paste the following:

```ts
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
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <span className="ml-2">Send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
```

17. Create another file in the `components` folder called: `ChatInterface.tsx` and paste the following:

```ts
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
                <span className="text-sm font-semibold text-primary-foreground">
                  AI
                </span>
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
```

18. Create another file in the `components` folder called: `ChatMessage.tsx` and paste the following:

```ts
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
          <svg
            className="h-5 w-5 text-primary-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        ) : (
          <span className="text-sm font-semibold text-primary-foreground">
            AI
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div
          className={`max-w-[600px] rounded-2xl px-4 py-3 shadow-sm ${
            isUser
              ? "bg-[var(--user-message-bg)] text-primary-foreground"
              : "bg-[var(--ai-message-bg)] text-foreground"
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

        <span
          className={`px-2 text-xs text-muted-foreground ${
            isUser && "text-right"
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
```

19. Once all of this is set, open your terminal. Make sure you are in the directory with your `manifest.yml` file. If you were following alone the steps exactly, you can type `cd ../..` to go to the right directory. Please confirm you are in the right place before trying the next step.
20. Finally, type `forge deploy` and then once it is done, go check your portal to see the UI.
