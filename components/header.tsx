import Link from "next/link";
import { Code2, Github } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">Recodex API</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="#apis"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            APIs
          </Link>
          <Link
            href="#examples"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Examples
          </Link>
          <a
            href="https://github.com/steve7-7/recodexapicodeexamples"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
