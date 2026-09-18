import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { plans } from "@/lib/demo-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Recallpatient" },
      {
        name: "description",
        content:
          "Simple, per-clinic pricing for patient follow-up automation. Starter, Growth and Multi-location plans with no setup fee on monthly plans.",
      },
      { property: "og:title", content: "Pricing — Recallpatient" },
      {
        property: "og:description",
        content: "Plans for a single chair up to multi-branch polyclinics — switch anytime.",
      },
    ],
  }),
  component: PricingPage,
});

const faqStrip = [
  {
    q: "Is there a setup fee?",
    a: "No setup fee on Starter or Growth. Multi-location includes a guided onboarding session.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes, upgrade or downgrade anytime from the Billing page — changes apply next cycle.",
  },
  {
    q: "What counts as an active patient?",
    a: "Anyone with a scheduled reminder, recovery sequence or nudge in the last 90 days.",
  },
];

function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-border bg-hero">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 text-center lg:py-20">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
              Pricing
            </Badge>
            <h1 className="mt-5 text-4xl sm:text-5xl">One plan per clinic. No per-patient fees.</h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Every plan includes reminders, recovery sequences and patient history. Pick the tier
              that matches how many chairs and active patients you run.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`rounded-3xl border-border/80 shadow-soft ${
                  plan.highlighted ? "border-primary shadow-lift lg:-translate-y-3" : ""
                }`}
              >
                <CardContent className="flex h-full flex-col p-7">
                  {plan.highlighted && (
                    <Badge className="mb-4 w-fit rounded-full bg-primary text-primary-foreground">
                      Most popular
                    </Badge>
                  )}
                  <h2 className="text-xl">{plan.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-4xl">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{plan.bestFor}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-success" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className="mt-8"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <Link to="/login">
                      {plan.price === "Custom" ? "Talk to us" : "Try it in the demo"}
                      <ArrowRight className="ml-1 size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Not sure which plan fits?{" "}
            <Link to="/contact" className="font-medium text-primary hover:underline">
              Talk to Clinic Success
            </Link>{" "}
            and we'll size it for your patient volume.
          </p>
        </section>

        <section className="border-y border-border bg-muted/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-16">
            <h2 className="text-2xl sm:text-3xl">Quick answers</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {faqStrip.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <p className="text-sm font-medium">{f.q}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/faq" className="text-sm font-medium text-primary hover:underline">
                Read the full FAQ →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
