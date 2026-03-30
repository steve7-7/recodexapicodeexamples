import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft, FileText } from "lucide-react";

const docs = [
  {
    name: "Request Essentials",
    path: "/flashscore/guides/request-essentials",
    description: "Base URL, defaults, errors, and response formats",
  },
  {
    name: "Feeds and Scoreboards",
    path: "/flashscore/feeds",
    description: "Raw feeds and sport scoreboards",
  },
  {
    name: "Feed Naming Patterns",
    path: "/flashscore/feeds/patterns",
    description: "Common feed name patterns for /feed endpoint",
  },
  {
    name: "Navigation and Categories",
    path: "/flashscore/navigation",
    description: "Navigation, categories, and tournament lists",
  },
  {
    name: "Tournaments",
    path: "/flashscore/tournaments",
    description: "Fixtures, results, tables, and tournament metadata",
  },
  {
    name: "Matches",
    path: "/flashscore/matches",
    description: "Match detail endpoints",
  },
  {
    name: "Participants",
    path: "/flashscore/participants",
    description: "Team and participant resources",
  },
  {
    name: "Players",
    path: "/flashscore/players",
    description: "Player profiles and stats tables",
  },
  {
    name: "Rankings",
    path: "/flashscore/rankings",
    description: "Ranking discovery and tables",
  },
  {
    name: "News",
    path: "/flashscore/news",
    description: "News lists and articles",
  },
  {
    name: "Search",
    path: "/flashscore/search",
    description: "Search and suggestions",
  },
  {
    name: "Updates and System",
    path: "/flashscore/updates",
    description: "Updates and status endpoints",
  },
  {
    name: "GraphQL and Odds",
    path: "/flashscore/graphql",
    description: "Hash-based query endpoints",
  },
  {
    name: "Media and Assets",
    path: "/flashscore/media",
    description: "Banners, stats, and images",
  },
  {
    name: "Schemas",
    path: "/flashscore/reference/schemas",
    description: "Response object shapes",
  },
  {
    name: "Sport IDs",
    path: "/flashscore/reference/sport-ids",
    description: "Known sportId values",
  },
];

export default function FlashScorePage() {
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
              FlashScore / Live Sports Data API
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Live sports data API with real-time scoreboards, match details,
              tournaments, player profiles, rankings, and comprehensive sports
              statistics.
            </p>
          </div>

          {/* Example Request */}
          <section className="mb-12">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Example Request
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border bg-card p-4">
              <pre className="font-mono text-sm text-card-foreground">
                <code>{`curl "https://live-sports-data-api.p.rapidapi.com/api/livescores/sports/1/scoreboard?dayOffset=0&lang=en"`}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Common flow: Call a scoreboard endpoint and read{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                sharedindexes_event_id
              </code>{" "}
              from{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                records[].fields
              </code>
              . Use that eventId with match detail endpoints.
            </p>
          </section>

          {/* Documentation Sections */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Documentation Sections
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
