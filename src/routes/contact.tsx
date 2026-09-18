import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Recallpatient" },
      {
        name: "description",
        content:
          "Get in touch with the Recallpatient team about pricing, onboarding a clinic, or a multi-location rollout.",
      },
      { property: "og:title", content: "Contact — Recallpatient" },
      {
        property: "og:description",
        content: "Talk to Clinic Success about pricing, onboarding or a multi-branch rollout.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: "hello@recallpatient.com" },
  { icon: MapPin, label: "Office", value: "Bengaluru, India · remote-friendly" },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent (demo only) — Clinic Success will follow up over email.");
      e.currentTarget.reset();
    }, 600);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-border bg-hero">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-20">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
              Contact
            </Badge>
            <h1 className="mt-5 max-w-2xl text-4xl sm:text-5xl">Talk to Clinic Success</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Whether you're sizing a plan, rolling out to multiple branches, or just want to see
              the portal walked through live — send a note and we'll follow up.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
              {channels.map((c) => (
                <Card key={c.label} className="rounded-2xl border-border/80">
                  <CardContent className="flex items-center gap-4 p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <c.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="text-sm font-medium">{c.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="rounded-2xl border-dashed bg-muted/60">
                <CardContent className="p-5 text-sm text-muted-foreground">
                  This is a demo product — messages sent from this form aren't delivered anywhere.
                  To explore the portal itself, use the{" "}
                  <a href="/login" className="font-medium text-primary hover:underline">
                    demo login
                  </a>
                  .
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-2xl border-border/80">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Dr. Ananya Rao" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clinic">Clinic name</Label>
                      <Input id="clinic" placeholder="Bright Smile Dental Studio" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@clinic.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your clinic — number of chairs, patient volume, or what you're trying to fix."
                      className="min-h-[140px]"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? "Sending…" : "Send message"}
                    {!submitting && <Send className="ml-1.5 size-4" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
