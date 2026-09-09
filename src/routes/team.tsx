import { Link, createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { team } from "@/lib/demo-data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Recallpatient Solutions" },
      {
        name: "description",
        content:
          "Meet the clinic operators, engineers and designers building patient follow-up automation at Recallpatient Solutions.",
      },
      { property: "og:title", content: "Team — Recallpatient Solutions" },
      {
        property: "og:description",
        content:
          "Clinic operators, engineers and designers building recall automation for small practices.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-border bg-hero">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-20">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
              Team
            </Badge>
            <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl">
              Built by people who have worked a clinic front desk.
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              We are a small team split between clinical operations and messaging infrastructure. Every
              recall protocol in the product came out of sitting in real practices during peak hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Bengaluru · remote-friendly
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="size-4 text-primary" /> hello@recallpatient.io
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="rounded-2xl border-border/80 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="size-12 rounded-2xl object-cover"
                      />
                    ) : (
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 font-display text-base text-primary">
                        {member.initials}
                      </span>
                    )}
                    <div>
                      <h2 className="text-lg leading-tight">{member.name}</h2>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
                  <Badge variant="outline" className="mt-4 rounded-full text-[11px] font-normal">
                    {member.focus}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 rounded-3xl border-border/80 bg-muted/60">
            <CardContent className="flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl">Want to see what we built?</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sign in with the demo account and walk through the full clinic portal.
                </p>
              </div>
              <Button asChild size="lg">
                <Link to="/login">Open demo portal</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
