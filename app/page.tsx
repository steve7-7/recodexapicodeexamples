import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ApiCard } from "@/components/api-card";
import { FeatureCard } from "@/components/feature-card";
import {
  Trophy,
  TrendingUp,
  Zap,
  FileJson,
  Code,
  BookOpen,
  Activity,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background px-4 py-20 md:py-28">
          <div className="container mx-auto text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              API Documentation & Code Examples
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Comprehensive documentation and ready-to-use code examples for
              sports data and financial market APIs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#apis"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Browse APIs
              </a>
              <a
                href="https://github.com/steve7-7/recodexapicodeexamples"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* APIs Section */}
        <section id="apis" className="px-4 py-16 md:py-24">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Available APIs
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Choose from our collection of well-documented APIs for sports
                data and financial information.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ApiCard
                title="AllSportsAPI"
                description="Comprehensive sports data API covering football, basketball, tennis, cricket, esports, and more with real-time scores, statistics, and player data."
                href="/allsportsapi"
                icon={<Trophy className="h-6 w-6" />}
                categories={[
                  "Football",
                  "Basketball",
                  "Tennis",
                  "Cricket",
                  "Esports",
                  "Hockey",
                  "Baseball",
                  "Rugby",
                ]}
              />
              <ApiCard
                title="FlashScore / Live Sports Data"
                description="Live sports data API with real-time scoreboards, match details, tournaments, player profiles, rankings, and comprehensive sports statistics."
                href="/flashscore"
                icon={<Activity className="h-6 w-6" />}
                categories={[
                  "Live Scores",
                  "Matches",
                  "Tournaments",
                  "Players",
                  "Rankings",
                ]}
              />
              <ApiCard
                title="SeekingAlpha"
                description="Financial market data API providing news, articles, market data, stock quotes, options data, and symbol analytics for investment research."
                href="/skalpha"
                icon={<TrendingUp className="h-6 w-6" />}
                categories={[
                  "Market Data",
                  "News",
                  "Stock Quotes",
                  "Options",
                  "Analytics",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="examples"
          className="border-t border-border bg-secondary/30 px-4 py-16 md:py-24"
        >
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                What You Get
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Everything you need to integrate these APIs into your projects
                quickly and efficiently.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                title="OpenAPI Specs"
                description="Complete OpenAPI/Swagger specifications for all endpoints with request/response schemas."
                icon={<FileJson className="h-6 w-6" />}
              />
              <FeatureCard
                title="Code Examples"
                description="Ready-to-use code examples in JavaScript, Python, HTML, and React for common use cases."
                icon={<Code className="h-6 w-6" />}
              />
              <FeatureCard
                title="Documentation"
                description="Detailed guides covering authentication, endpoints, parameters, and response formats."
                icon={<BookOpen className="h-6 w-6" />}
              />
              <FeatureCard
                title="Real-time Data"
                description="Access live sports scores, match updates, and real-time market data through these APIs."
                icon={<Zap className="h-6 w-6" />}
              />
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Quick Links
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Jump directly to specific documentation sections or API
                resources.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <QuickLink
                title="Football API"
                href="/allsportsapi/footapi"
                description="Soccer/Football endpoints including heatmaps and shotmaps"
              />
              <QuickLink
                title="Basketball API"
                href="/allsportsapi/basketapi"
                description="Basketball data with shot charts and player stats"
              />
              <QuickLink
                title="Tennis API"
                href="/allsportsapi/tennisapi"
                description="Tennis matches, tournaments, and cup trees"
              />
              <QuickLink
                title="Live Scores"
                href="/flashscore/feeds"
                description="Real-time scoreboards and live match data"
              />
              <QuickLink
                title="Market Data"
                href="/skalpha/market-data"
                description="Stock quotes, prices, and options data"
              />
              <QuickLink
                title="API Models"
                href="/allsportsapi/models"
                description="Data models and response schemas"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function QuickLink({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="group flex flex-col rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
    >
      <h3 className="mb-1 font-semibold text-card-foreground group-hover:text-primary">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </a>
  );
}
