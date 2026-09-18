import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/lib/demo-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Recallpatient" },
      {
        name: "description",
        content:
          "Answers to common questions about Recallpatient: WhatsApp and SMS delivery, automation cadences, data security, pricing and plan changes.",
      },
      { property: "og:title", content: "FAQ — Recallpatient" },
      {
        property: "og:description",
        content: "Everything clinics ask before switching on patient follow-up automation.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-border bg-hero">
          <div className="mx-auto w-full max-w-4xl px-5 py-16 lg:py-20">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
              FAQ
            </Badge>
            <h1 className="mt-5 text-4xl sm:text-5xl">Frequently asked questions</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Things clinics ask us before switching on automation. Can't find your question?
              Send it to us directly.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-4xl px-5 py-16">
          <Card className="rounded-2xl border-border/80">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, i) => (
                  <AccordionItem key={item.question} value={`item-${i}`}>
                    <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-8 rounded-3xl border-border/80 bg-muted/60">
            <CardContent className="flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl">Still have a question?</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reach the team directly and we'll get back to you within a day.
                </p>
              </div>
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact us <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
