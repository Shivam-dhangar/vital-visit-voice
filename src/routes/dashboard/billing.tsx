import { Link, createFileRoute } from "@tanstack/react-router";
import { CreditCard, Download } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { invoices, plans } from "@/lib/demo-data";

export const Route = createFileRoute("/dashboard/billing")({
  head: () => ({
    meta: [
      { title: "Billing — Recallpatient demo" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: BillingPage,
});

const currentPlan = plans.find((p) => p.id === "growth")!;

function BillingPage() {
  return (
    <div>
      <h1 className="text-3xl">Billing</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Your plan, payment method and past invoices.
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.3fr]">
        <Card className="rounded-2xl border-border/80">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Current plan</p>
              <Badge className="rounded-full bg-primary text-primary-foreground">Active</Badge>
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-3xl">{currentPlan.name}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {currentPlan.price}
              {currentPlan.period} · billed monthly
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{currentPlan.bestFor}</p>
            <p className="mt-4 text-xs text-muted-foreground">Next billing date · 01 Oct 2026</p>
            <Button asChild variant="outline" className="mt-5 w-full">
              <Link to="/pricing">Compare plans</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/80">
          <CardContent className="p-6">
            <p className="text-sm font-medium">Payment method</p>
            <div className="mt-4 flex items-center gap-4 rounded-xl bg-muted/60 p-4">
              <span className="flex size-10 items-center justify-center rounded-lg bg-background">
                <CreditCard className="size-5 text-primary" />
              </span>
              <div>
                <p className="text-sm font-medium">Visa •••• 4242</p>
                <p className="text-xs text-muted-foreground">Expires 08/29 · billing contact Dr. Ananya Rao</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => toast.success("Payment method update flow — demo only")}
            >
              Update payment method
            </Button>

            <p className="mt-6 text-sm font-medium">Invoice history</p>
            <div className="mt-3 divide-y divide-border rounded-xl border border-border">
              {invoices.map((inv) => (
                <div key={inv.id} className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">{inv.period}</p>
                    <p className="text-xs text-muted-foreground">{inv.id} · {inv.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">{inv.amount}</span>
                    <Badge variant="secondary" className="rounded-full text-[11px]">
                      {inv.status}
                    </Badge>
                    <button
                      type="button"
                      onClick={() => toast.success(`Downloading ${inv.id} (demo only)`)}
                      className="text-muted-foreground hover:text-foreground"
                      aria-label={`Download ${inv.id}`}
                    >
                      <Download className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
