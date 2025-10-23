export function ChatHeader() {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] shadow-lg">
            <svg className="h-4 w-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">Rovo AI - Form Finder</h1>
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
