import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ApiCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  categories?: string[];
  className?: string;
}

export function ApiCard({
  title,
  description,
  href,
  icon,
  categories,
  className,
}: ApiCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {categories && categories.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {categories.slice(0, 4).map((category) => (
            <span
              key={category}
              className="inline-flex rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {category}
            </span>
          ))}
          {categories.length > 4 && (
            <span className="inline-flex rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              +{categories.length - 4} more
            </span>
          )}
        </div>
      )}
      <div className="flex items-center text-sm font-medium text-primary">
        View Documentation
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
