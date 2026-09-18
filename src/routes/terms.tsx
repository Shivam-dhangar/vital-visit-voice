import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Recallpatient" },
      {
        name: "description",
        content: "The terms that govern use of the Recallpatient clinic follow-up portal.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Using the service",
    body: "Recallpatient is licensed to clinics for scheduling and sending patient reminders, missed-appointment recovery and re-checkup nudges. Access is limited to staff a clinic invites to its account.",
  },
  {
    title: "2. Clinic responsibilities",
    body: "The clinic is responsible for the accuracy of patient data entered, for obtaining any consent required to message patients, and for keeping staff access up to date when someone leaves.",
  },
  {
    title: "3. Acceptable use",
    body: "Message templates must stay clinical — appointment, treatment and billing related. Promotional or unrelated marketing content through automated sequences is not permitted.",
  },
  {
    title: "4. Billing",
    body: "Plans are billed monthly in advance. Upgrading or downgrading a plan takes effect from the next billing cycle. Multi-location pricing is agreed separately in a signed order form.",
  },
  {
    title: "5. Service availability",
    body: "We target high uptime for scheduling and delivery, but message delivery ultimately depends on WhatsApp Business API and SMS gateway partners outside our direct control.",
  },
  {
    title: "6. Termination",
    body: "Either party may cancel a subscription with 30 days' notice. On cancellation, scheduled automations stop and patient data is retained per the Privacy Policy before deletion.",
  },
  {
    title: "7. Changes to these terms",
    body: "We'll notify clinic owners by email before any material change to these terms takes effect.",
  },
];

function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-border bg-hero">
          <div className="mx-auto w-full max-w-3xl px-5 py-16">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
              Legal
            </Badge>
            <h1 className="mt-5 text-4xl">Terms of Service</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated 1 September 2026</p>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              This is a demo product built to showcase a patient follow-up automation portal. This
              page reflects the terms such a product would run under.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-3xl px-5 py-16">
          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-medium">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
