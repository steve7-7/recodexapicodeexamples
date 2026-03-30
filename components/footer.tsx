import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-semibold">Recodex API</span>
          </div>
          <p className="text-sm text-muted-foreground">
            API documentation and code examples for sports and financial data.
          </p>
        </div>
      </div>
    </footer>
  );
}
