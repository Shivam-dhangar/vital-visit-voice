import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Activity,
  BellRing,
  CalendarClock,
  LogOut,
  MessageSquare,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDemoAuth } from "@/lib/demo-auth";
import { automations, patients, timeline, weeklyRecovery, type Patient } from "@/lib/demo-data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Clinic portal — Recallpatient demo" },
      {
        name: "description",
        content:
          "Demo clinic portal: today's follow-up queue, missed-appointment recovery, automation rules and patient history timeline.",
      },
      { property: "og:title", content: "Clinic portal — Recallpatient demo" },
      {
        property: "og:description",
        content: "Follow-up queue, recovery sequences and patient history in one demo portal.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

const statusStyles: Record<Patient["status"], string> = {
  "On track": "bg-primary/12 text-primary",
  Missed: "bg-destructive/12 text-destructive",
  Recovered: "bg-success/15 text-success",
  "Awaiting reply": "bg-warning/20 text-warning-foreground",
};

function DashboardPage() {
  const { user, ready, signOut } = useDemoAuth();
  const navigate = useNavigate();
  const [rules, setRules] = useState(automations);
  const [selected, setSelected] = useState<Patient>(patients[0]!);

  useEffect(() => {
    if (ready && !user) navigate({ to: "/login", replace: true });
  }, [ready, user, navigate]);

  if (!ready || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
        Loading portal…
      </div>
    );
  }

  const kpis = [
    { label: "Active patients", value: "412", icon: Users, delta: "+18 this month" },
    { label: "Follow-ups scheduled", value: "1,286", icon: CalendarClock, delta: "next 30 days" },
    { label: "Messages delivered", value: "3,041", icon: MessageSquare, delta: "97.4% delivery" },
    { label: "Revenue recovered", value: "₹4.2L", icon: TrendingUp, delta: "from no-shows" },
  ];

  function handleSignOut() {
    signOut();
    toast.success("Signed out of the demo portal");
    navigate({ to: "/login", replace: true });
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Activity className="size-4.5" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm">{user.clinic}</p>
              <p className="text-[11px] text-muted-foreground">{user.role}</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="hidden rounded-full sm:inline-flex">
              {user.name}
            </Badge>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="mr-1.5 size-3.5" /> Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-5 py-8">
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

        <Tabs defaultValue="queue" className="mt-8">
          <TabsList className="flex-wrap">
            <TabsTrigger value="queue">Follow-up queue</TabsTrigger>
            <TabsTrigger value="patients">Patient history</TabsTrigger>
            <TabsTrigger value="automations">Automations</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="queue" className="mt-5">
            <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
              <Card className="rounded-2xl border-border/80">
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {patients.map((p) => (
                      <div
                        key={p.id}
                        className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
                      >
                        <div>
                          <p className="text-sm font-medium">{p.name}</p>
                          <p className="text-xs text-muted-foreground">{p.nextAction}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <p className="text-xs font-medium">{p.dueIn}</p>
                            <p className="text-[11px] text-muted-foreground">{p.channel}</p>
                          </div>
                          <span
                            className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyles[p.status]}`}
                          >
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
          </TabsContent>

          <TabsContent value="patients" className="mt-5">
            <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
              <Card className="rounded-2xl border-border/80">
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {patients.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelected(p)}
                        className={`flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-secondary/60 ${
                          selected.id === p.id ? "bg-secondary/70" : ""
                        }`}
                      >
                        <div>
                          <p className="text-sm font-medium">{p.name}</p>
                          <p className="text-xs text-muted-foreground">{p.treatment}</p>
                        </div>
                        <span className="text-[11px] text-muted-foreground">{p.id}</span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border/80">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl">{selected.name}</h2>
                      <p className="text-xs text-muted-foreground">
                        {selected.id} · {selected.phone}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyles[selected.status]}`}
                    >
                      {selected.status}
                    </span>
                  </div>

                  <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    {[
                      ["Treatment", selected.treatment],
                      ["Last visit", selected.lastVisit],
                      ["Next action", selected.nextAction],
                      ["Scheduled", selected.dueIn],
                      ["Channel", selected.channel],
                      ["Consent", "Opted in for reminders"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl bg-muted/60 p-3">
                        <dt className="text-[11px] text-muted-foreground">{label}</dt>
                        <dd className="mt-1 font-medium">{value}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-6 text-sm font-medium">Message history</p>
                  <div className="mt-3 space-y-3">
                    {[
                      ["Sent", "Hi, this is a reminder for your upcoming visit. Reply 1 to confirm."],
                      ["Reply", "1"],
                      ["Sent", "Confirmed. See you at the clinic — bring your previous prescription."],
                    ].map(([kind, text], i) => (
                      <div
                        key={i}
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs ${
                          kind === "Reply"
                            ? "ml-auto bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="automations" className="mt-5">
            <div className="grid gap-4 md:grid-cols-2">
              {rules.map((rule, i) => (
                <Card key={rule.name} className="rounded-2xl border-border/80">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium">{rule.name}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{rule.trigger}</p>
                      </div>
                      <Switch
                        checked={rule.active}
                        onCheckedChange={(checked) => {
                          setRules((prev) =>
                            prev.map((r, idx) => (idx === i ? { ...r, active: checked } : r)),
                          );
                          toast.success(
                            `${rule.name} ${checked ? "enabled" : "paused"} (demo only)`,
                          );
                        }}
                        aria-label={`Toggle ${rule.name}`}
                      />
                    </div>
                    <div className="mt-4 grid gap-2 text-xs text-muted-foreground">
                      <p>Cadence · {rule.cadence}</p>
                      <p>Channel · {rule.channel}</p>
                      <p>Rebooked this quarter · {rule.recovered}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="mt-5">
            <div className="grid gap-5 lg:grid-cols-2">
              <Card className="rounded-2xl border-border/80">
                <CardContent className="p-5">
                  <p className="text-sm font-medium">Messages sent per week</p>
                  <div className="mt-4 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={weeklyRecovery}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                        <XAxis dataKey="week" stroke="var(--muted-foreground)" fontSize={12} />
                        <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                        <Tooltip />
                        <Bar dataKey="sent" fill="var(--primary)" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-border/80">
                <CardContent className="p-5">
                  <p className="text-sm font-medium">Patients rebooked per week</p>
                  <div className="mt-4 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={weeklyRecovery}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                        <XAxis dataKey="week" stroke="var(--muted-foreground)" fontSize={12} />
                        <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="rebooked"
                          stroke="var(--success)"
                          strokeWidth={3}
                          dot={{ r: 3 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
