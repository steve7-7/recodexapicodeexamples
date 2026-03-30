import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft, FileText } from "lucide-react";

const docs = [
  {
    name: "Request Essentials",
    path: "/skalpha/guides/request-essentials",
    description:
      "Query aliases, validation rules, pagination limits, and screener payload requirements",
  },
  {
    name: "Content & Media",
    path: "/skalpha/content",
    description:
      "News, articles, press releases, filings, authors, and feed cards",
  },
  {
    name: "Market Data",
    path: "/skalpha/market-data",
    description:
      "Prices, quotes, options, market status, charts, ETF performance, and aggregated symbol data",
  },
  {
    name: "Symbol Subresources",
    path: "/skalpha/symbols",
    description:
      "Per-symbol fundamentals, content feeds, peers, ratings, and discovery helpers",
  },
  {
    name: "Reference & Discovery",
    path: "/skalpha/reference",
    description: "Metrics, calendars, screeners, and search APIs",
  },
];

export default function SkalphaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-8">
            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              SeekingAlpha API Documentation
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Financial market data API providing news, articles, market data,
              stock quotes, options data, and symbol analytics for investment
              research.
            </p>
          </div>

          {/* Example Request */}
          <section className="mb-12">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Example Request
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border bg-card p-4">
              <pre className="font-mono text-sm text-card-foreground">
                <code>{`curl "https://{api-host}/api/skalpha/news?filter_category=market-news::technology&page_size=20"`}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Replace{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                {"{api-host}"}
              </code>{" "}
              with the host exposing this proxy. Parameters must satisfy the
              validation rules documented in the guides.
            </p>
          </section>

          {/* Error Handling Note */}
          <section className="mb-12">
            <div className="rounded-lg border border-border bg-secondary/50 p-4">
              <h3 className="mb-2 font-semibold text-foreground">
                Error Handling
              </h3>
              <p className="text-sm text-muted-foreground">
                Errors use a JSON:API style wrapper. See the Request Essentials
                guide for details on error formats and handling.
              </p>
            </div>
          </section>

          {/* Documentation Sections */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Documentation Sections
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {docs.map((doc) => (
                <Link
                  key={doc.name}
                  href={doc.path}
                  className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="mb-1 font-semibold text-card-foreground group-hover:text-primary">
                      {doc.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {doc.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* OpenAPI Spec Note */}
          <section className="mt-12">
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-2 font-semibold text-foreground">
                OpenAPI Specification
              </h3>
              <p className="text-sm text-muted-foreground">
                The full OpenAPI description lives at{" "}
                <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                  skalpha/openapi/openapi-seekingalpha.yaml
                </code>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
