import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Recallpatient" },
      {
        name: "description",
        content: "How Recallpatient collects, stores and protects clinic and patient data.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. What we collect",
    body: "To run reminders and recovery sequences, we store patient names, phone numbers, treatment types, appointment dates and message logs on behalf of the clinic. We never collect patient data directly — it's entered by clinic staff.",
  },
  {
    title: "2. How data is used",
    body: "Data is used only to schedule and send the reminders, recovery messages and nudges a clinic configures. We do not sell patient data, and we do not use it to train models or for advertising.",
  },
  {
    title: "3. Storage & encryption",
    body: "Phone numbers are masked in the interface, and message logs are encrypted at rest. Access is restricted to staff accounts a clinic explicitly invites.",
  },
  {
    title: "4. Consent & opt-outs",
    body: "Every automated message respects patient consent. A patient can opt out of any channel at any time, and that opt-out is honoured immediately across every automation.",
  },
  {
    title: "5. Data retention",
    body: "Patient and message data is retained for as long as a clinic's account is active. On account closure, data is deleted within 30 days unless a longer retention period is required by law.",
  },
  {
    title: "6. Third parties",
    body: "Messages are delivered through WhatsApp Business API and SMS gateway partners solely to route the message — they do not retain patient data beyond what's required for delivery.",
  },
  {
    title: "7. Your rights",
    body: "Clinics can request an export or deletion of their data at any time by contacting Clinic Success. Patients can ask their clinic to remove them from any recall sequence.",
  },
];

function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-border bg-hero">
          <div className="mx-auto w-full max-w-3xl px-5 py-16">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
              Legal
            </Badge>
            <h1 className="mt-5 text-4xl">Privacy Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated 1 September 2026</p>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              This is a demo product built to showcase a patient follow-up automation portal. This
              page reflects the policy such a product would run under.
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
