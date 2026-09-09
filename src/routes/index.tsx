import { Link, createFileRoute } from "@tanstack/react-router";
import {
  AlarmClock,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  LineChart,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Recallpatient — Patient Follow-up Automation for Clinics" },
      {
        name: "description",
        content:
          "Automate medicine reminders, appointment follow-ups and re-checkup nudges over WhatsApp and SMS. Recover repeat patients your clinic is quietly losing.",
      },
      { property: "og:title", content: "Recallpatient — Patient Follow-up Automation for Clinics" },
      {
        property: "og:description",
        content:
          "Auto-scheduling by treatment type, missed-appointment recovery and a full patient history dashboard for small clinics and dentists.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: CalendarClock,
    title: "Auto-scheduling by treatment",
    body: "Pick the treatment — RCT, braces, scaling, post-op — and the follow-up cadence builds itself with the right spacing.",
  },
  {
    icon: RefreshCcw,
    title: "Missed-appointment recovery",
    body: "A no-show triggers a warm 3-step recovery sequence with a one-tap rebooking link, before the patient drifts away.",
  },
  {
    icon: AlarmClock,
    title: "Medicine reminders",
    body: "Dose-time nudges for the full course, so patients complete treatment and come back for the review visit.",
  },
  {
    icon: LineChart,
    title: "Patient history dashboard",
    body: "Every visit, message, reply and rebooking on one timeline — your front desk stops guessing who to call.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp first, SMS fallback",
    body: "Messages go where patients actually read them, and fall back automatically when WhatsApp isn't available.",
  },
  {
    icon: ShieldCheck,
    title: "Consent-first by default",
    body: "Opt-outs honoured instantly, quiet hours respected, and templates kept clinical — never spammy.",
  },
];

const steps = [
  {
    n: "01",
    title: "Add the visit",
    body: "Front desk logs treatment type and prescription in under 20 seconds.",
  },
  {
    n: "02",
    title: "Sequences build themselves",
    body: "Reminders, review visits and re-checkups are scheduled from clinical protocols.",
  },
  {
    n: "03",
    title: "Patients come back",
    body: "Replies, confirmations and rebookings land on your dashboard as they happen.",
  },
];

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-hero">
          <img
            src="/hero-bg.jpg"
            alt=""
            aria-hidden
            className="absolute inset-0 size-full object-cover opacity-[0.14]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" aria-hidden />
          <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
          <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div>
              <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
                For clinics, dentists & polyclinics
              </Badge>
              <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                Your patients don't leave. They just never get reminded.
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                Recallpatient automates medicine reminders, appointment follow-ups and re-checkup
                nudges over WhatsApp and SMS — so repeat revenue comes back without anyone at the
                front desk making a single call.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/login">
                    Try the demo portal <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/team">Meet the team</Link>
                </Button>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
                {[
                  ["38%", "of no-shows rebooked"],
                  ["6 min", "front-desk time per day"],
                  ["0", "manual reminder calls"],
                ].map(([stat, label]) => (
                  <div key={label} className="rounded-xl border border-border bg-card/70 p-4">
                    <dt className="font-display text-2xl text-primary">{stat}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <Card className="rounded-3xl border-border/80 shadow-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Today's follow-up queue</p>
                    <Badge className="rounded-full bg-success text-success-foreground">Live</Badge>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      ["Iqbal Sheikh", "Medicine reminder 3/5", "21:00", "WhatsApp"],
                      ["Sana Kapoor", "No-show recovery · step 2", "Overdue", "SMS"],
                      ["Meera Joshi", "6-month re-checkup nudge", "In 3 days", "WhatsApp"],
                      ["Aisha Rahman", "Post-op day 7 check", "In 2 days", "WhatsApp"],
                    ].map(([name, action, when, ch]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between rounded-2xl border border-border bg-muted/50 px-4 py-3"
                      >
                        <div>
                          <p className="text-sm font-medium">{name}</p>
                          <p className="text-xs text-muted-foreground">{action}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-medium">{when}</p>
                          <p className="text-[11px] text-muted-foreground">{ch}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-2 rounded-2xl bg-primary/10 px-4 py-3 text-xs text-foreground">
                    <Stethoscope className="size-4 text-primary" />
                    Sequences auto-generated from treatment type — nothing scheduled by hand.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-20">
          <h2 className="text-3xl sm:text-4xl">Everything a small clinic actually needs</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            No CRM bloat. Just the follow-up layer that sits on top of how your clinic already works.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title} className="rounded-2xl border-border/80 shadow-soft">
                <CardContent className="p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <f.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-muted/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-20">
            <h2 className="text-3xl sm:text-4xl">How it runs, day to day</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <p className="font-display text-sm text-primary">{s.n}</p>
                  <h3 className="mt-3 text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl">The revenue you're already losing</h2>
              <p className="mt-4 text-muted-foreground">
                A clinic seeing 30 patients a day loses a handful of repeat visits every week — not
                to competitors, but to silence. Recallpatient closes that gap automatically.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Recover ₹40,000+ of monthly treatment value from no-shows alone",
                  "Higher treatment completion on multi-sitting plans",
                  "Front desk freed from chasing patients on the phone",
                  "Every message, reply and rebooking logged per patient",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-success" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="rounded-3xl border-border/80 bg-ink text-ink-foreground shadow-lift">
              <CardContent className="p-8">
                <p className="font-display text-2xl leading-snug">
                  “We stopped calling patients to remind them. Recall messages do it, and our
                  cleaning appointments are booked three weeks out now.”
                </p>
                <p className="mt-6 text-sm text-ink-foreground/70">
                  Dr. Praveen K. — 2-chair dental practice, Kochi
                </p>
                <Button asChild variant="secondary" className="mt-8">
                  <Link to="/login">Explore the demo portal</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
