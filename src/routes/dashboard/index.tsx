import { createFileRoute } from "@tanstack/react-router";
import { BellRing, CalendarClock, MessageSquare, TrendingUp, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { patients, timeline, type Patient } from "@/lib/demo-data";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({
    meta: [
      { title: "Overview — Recallpatient demo" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: OverviewPage,
});

const statusStyles: Record<Patient["status"], string> = {
  "On track": "bg-primary/12 text-primary",
  Missed: "bg-destructive/12 text-destructive",
  Recovered: "bg-success/15 text-success",
  "Awaiting reply": "bg-warning/20 text-warning-foreground",
};

const kpis = [
  { label: "Active patients", value: "412", icon: Users, delta: "+18 this month" },
  { label: "Follow-ups scheduled", value: "1,286", icon: CalendarClock, delta: "next 30 days" },
  { label: "Messages delivered", value: "3,041", icon: MessageSquare, delta: "97.4% delivery" },
  { label: "Revenue recovered", value: "₹4.2L", icon: TrendingUp, delta: "from no-shows" },
];

function OverviewPage() {
  return (
    <div>
      <h1 className="text-3xl">Follow-up control room</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Everything scheduled, sent and recovered for your practice this month.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.label} className="rounded-2xl border-border/80 shadow-soft">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{k.label}</p>
                <k.icon className="size-4 text-primary" />
              </div>
              <p className="mt-3 font-display text-2xl">{k.value}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{k.delta}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <Card className="rounded-2xl border-border/80">
          <CardContent className="p-0">
            <p className="px-5 pt-5 text-sm font-medium">Today's follow-up queue</p>
            <div className="mt-2 divide-y divide-border">
              {patients.map((p) => (
                <div key={p.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                  <div>
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.nextAction}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xs font-medium">{p.dueIn}</p>
                      <p className="text-[11px] text-muted-foreground">{p.channel}</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyles[p.status]}`}>
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/80">
          <CardContent className="p-5">
            <p className="flex items-center gap-2 text-sm font-medium">
              <BellRing className="size-4 text-primary" /> Recent activity
            </p>
            <ol className="mt-4 space-y-4">
              {timeline.map((item) => (
                <li key={item.title} className="border-l-2 border-primary/30 pl-4">
                  <p className="text-[11px] text-muted-foreground">{item.time}</p>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
