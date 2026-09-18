import { Link, createFileRoute } from "@tanstack/react-router";
import {
  AlarmClock,
  ArrowRight,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  History,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Recallpatient" },
      {
        name: "description",
        content:
          "See how Recallpatient automates medicine reminders, missed-appointment recovery, multi-sitting treatment plans and re-checkup nudges for small clinics.",
      },
      { property: "og:title", content: "Features — Recallpatient" },
      {
        property: "og:description",
        content:
          "Auto-scheduling, recovery sequences, patient history and insights — everything a small clinic needs to stop losing repeat visits.",
      },
    ],
  }),
  component: FeaturesPage,
});

const groups = [
  {
    icon: CalendarClock,
    title: "Scheduling that reads the treatment",
    body: "Log the treatment type once and the entire follow-up cadence builds itself — no per-patient scheduling.",
    points: [
      "Protocol-based cadences for RCT, braces, scaling, implants and post-op care",
      "Multi-sitting plans auto-space themselves across weeks",
      "Pre-visit prep reminders matched to the procedure booked",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Missed-appointment recovery",
    body: "A no-show doesn't need a phone call from the front desk — it triggers a warm sequence within minutes.",
    points: [
      "3-step recovery sequence with a one-tap rebooking link",
      "Escalates from WhatsApp to SMS if there's no read receipt",
      "Recovered revenue tracked per automation, per week",
    ],
  },
  {
    icon: AlarmClock,
    title: "Medicine & dose reminders",
    body: "Patients complete the full course they were prescribed, so they actually come back for the review visit.",
    points: [
      "Dose-time nudges for the full length of a prescription",
      "Day 3 / day 7 post-op check-ins with a simple reply-to-confirm flow",
      "Course completion tracked against the review-visit booking",
    ],
  },
  {
    icon: History,
    title: "Patient history dashboard",
    body: "Every visit, message, reply and rebooking lands on one timeline — nobody has to remember who to call.",
    points: [
      "Full message history per patient, searchable by name or ID",
      "Status at a glance: on track, missed, awaiting reply, recovered",
      "Outstanding balance shown alongside the next scheduled action",
    ],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp first, SMS fallback",
    body: "Messages go where patients actually read them, and quietly fall back when WhatsApp isn't available.",
    points: [
      "WhatsApp Business templates approved for clinical use",
      "Automatic SMS fallback on non-delivery",
      "Delivery and read receipts logged against every automation",
    ],
  },
  {
    icon: BarChart3,
    title: "Insights that front desks can act on",
    body: "Weekly send and rebooking trends, channel split and treatment mix — without exporting anything to a spreadsheet.",
    points: [
      "Messages sent and patients rebooked, tracked week over week",
      "Channel split between WhatsApp and SMS",
      "Treatment mix across your active patient base",
    ],
  },
];

const security = [
  {
    icon: ShieldCheck,
    title: "Consent-first messaging",
    body: "Opt-outs are honoured instantly, quiet hours are respected, and every template stays clinical — never promotional.",
  },
  {
    icon: Users,
    title: "Role-based staff access",
    body: "Front desk, associate dentists and the clinic owner each see exactly what they need — nothing more.",
  },
  {
    icon: Sparkles,
    title: "Encrypted patient data",
    body: "Phone numbers are masked in the interface and message logs are encrypted at rest.",
  },
];

function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-border bg-hero">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-20">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
              Features
            </Badge>
            <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl">
              Everything your front desk stopped having time for.
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Recallpatient replaces reminder calls, sticky notes and half-remembered follow-ups
              with automation that reads straight from the treatment you log.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/login">
                  Try the demo portal <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-2">
            {groups.map((g) => (
              <Card key={g.title} className="rounded-2xl border-border/80 shadow-soft">
                <CardContent className="p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <g.icon className="size-5" />
                  </span>
                  <h2 className="mt-4 text-xl">{g.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{g.body}</p>
                  <ul className="mt-4 space-y-2">
                    {g.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-muted/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-20">
            <h2 className="text-3xl sm:text-4xl">Built to be trusted with patient data</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Automation only helps if patients and staff can trust it. Security and consent are
              defaults, not settings you have to remember to turn on.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {security.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-20">
          <Card className="rounded-3xl border-border/80 bg-ink text-ink-foreground shadow-lift">
            <CardContent className="flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl">Walk through it yourself</h2>
                <p className="mt-2 max-w-md text-sm text-ink-foreground/70">
                  The demo portal is loaded with a sample dental practice — real follow-up queue,
                  automations and insights, nothing to configure.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary">
                <Link to="/login">Open the demo portal</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
