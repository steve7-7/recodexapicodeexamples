import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft, ExternalLink } from "lucide-react";

const sportsApis = [
  {
    name: "All Sports",
    href: "https://rapidapi.com/fluis.lacasse/api/allsportsapi2",
    description: "Unified API for all sports data",
  },
  {
    name: "Football/Soccer",
    href: "https://rapidapi.com/fluis.lacasse/api/footapi7/",
    description: "Soccer matches, leagues, and statistics",
  },
  {
    name: "Tennis",
    href: "https://rapidapi.com/fluis.lacasse/api/tennisapi1/",
    description: "Tennis tournaments, matches, and rankings",
  },
  {
    name: "Ice Hockey",
    href: "https://rapidapi.com/fluis.lacasse/api/icehockeyapi/",
    description: "Hockey leagues, games, and player stats",
  },
  {
    name: "American Football",
    href: "https://rapidapi.com/fluis.lacasse/api/americanfootballapi/",
    description: "NFL and college football data",
  },
  {
    name: "Baseball",
    href: "https://rapidapi.com/fluis.lacasse/api/baseballapi/",
    description: "MLB and baseball league data",
  },
  {
    name: "Basketball",
    href: "https://rapidapi.com/fluis.lacasse/api/basketapi1/",
    description: "NBA and basketball league data",
  },
  {
    name: "Cricket",
    href: "https://rapidapi.com/fluis.lacasse/api/cricketapi21/",
    description: "Cricket matches and tournaments",
  },
  {
    name: "Esports",
    href: "https://rapidapi.com/fluis.lacasse/api/esportapi1/",
    description: "Esports tournaments and matches",
  },
  {
    name: "Motorsport",
    href: "https://rapidapi.com/fluis.lacasse/api/motorsportapi/",
    description: "Racing and motorsport data",
  },
  {
    name: "Rugby",
    href: "https://rapidapi.com/fluis.lacasse/api/rugbyapi2/",
    description: "Rugby matches and tournaments",
  },
];

const otherApis = [
  {
    name: "Volleyball",
    href: "https://rapidapi.com/fluis.lacasse/api/volleyballapi",
  },
  {
    name: "Handball",
    href: "https://rapidapi.com/fluis.lacasse/api/handballapi",
  },
  {
    name: "MMA",
    href: "https://rapidapi.com/fluis.lacasse/api/mmaapi",
  },
];

const folders = [
  {
    name: "Basketapi",
    path: "/allsportsapi/basketapi",
    description: "Basketball-specific examples (shotmaps, player stats)",
  },
  {
    name: "Footapi",
    path: "/allsportsapi/footapi",
    description: "Football/Soccer examples (shotmaps, heatmaps)",
  },
  {
    name: "Tennisapi",
    path: "/allsportsapi/tennisapi",
    description: "Tennis examples (cup trees visualization)",
  },
  {
    name: "Examples",
    path: "/allsportsapi/examples",
    description: "Generic examples (player images, API calls)",
  },
  {
    name: "Models",
    path: "/allsportsapi/models",
    description: "API data models documentation",
  },
];

export default function AllSportsApiPage() {
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
              AllSportsAPI Documentation
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Comprehensive sports data API covering multiple sports with
              real-time scores, statistics, player data, and more.
            </p>
          </div>

          {/* Documentation Folders */}
          <section className="mb-12">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Documentation & Examples
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {folders.map((folder) => (
                <Link
                  key={folder.name}
                  href={folder.path}
                  className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <h3 className="mb-1 font-semibold text-card-foreground group-hover:text-primary">
                    {folder.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {folder.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Sports APIs */}
          <section className="mb-12">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Available Sports APIs
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sportsApis.map((api) => (
                <a
                  key={api.name}
                  href={api.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <div>
                    <h3 className="mb-1 font-semibold text-card-foreground group-hover:text-primary">
                      {api.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {api.description}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                </a>
              ))}
            </div>
          </section>

          {/* Other APIs */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Other APIs (Separate from AllSportsAPI)
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              These APIs are not included in the main AllSportsAPI due to import
              size limits.
            </p>
            <div className="flex flex-wrap gap-4">
              {otherApis.map((api) => (
                <a
                  key={api.name}
                  href={api.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-all hover:border-primary/50"
                >
                  {api.name}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
