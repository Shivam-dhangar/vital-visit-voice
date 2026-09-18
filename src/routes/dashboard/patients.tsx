import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { patients, type Patient } from "@/lib/demo-data";

export const Route = createFileRoute("/dashboard/patients")({
  head: () => ({
    meta: [
      { title: "Patients — Recallpatient demo" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PatientsPage,
});

const statusStyles: Record<Patient["status"], string> = {
  "On track": "bg-primary/12 text-primary",
  Missed: "bg-destructive/12 text-destructive",
  Recovered: "bg-success/15 text-success",
  "Awaiting reply": "bg-warning/20 text-warning-foreground",
};

const statusFilters = ["All", "On track", "Missed", "Awaiting reply", "Recovered"] as const;

function PatientsPage() {
  const [selected, setSelected] = useState<Patient>(patients[0]!);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<(typeof statusFilters)[number]>("All");

  const filtered = useMemo(() => {
    return patients.filter((p) => {
      const matchesQuery =
        query.trim().length === 0 ||
        p.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        p.id.toLowerCase().includes(query.trim().toLowerCase());
      const matchesStatus = status === "All" || p.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  return (
    <div>
      <h1 className="text-3xl">Patient history</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Search any patient to see their treatment, schedule and full message log.
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="mb-3 space-y-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or patient ID"
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {statusFilters.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStatus(s)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    status === s
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <Card className="rounded-2xl border-border/80">
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {filtered.length === 0 && (
                  <p className="px-5 py-8 text-center text-sm text-muted-foreground">
                    No patients match "{query}".
                  </p>
                )}
                {filtered.map((p) => (
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
        </div>

        <Card className="rounded-2xl border-border/80">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl">{selected.name}</h2>
                <p className="text-xs text-muted-foreground">
                  {selected.id} · {selected.phone}
                </p>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyles[selected.status]}`}>
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
                ["Balance due", selected.balanceDue],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-muted/60 p-3">
                  <dt className="text-[11px] text-muted-foreground">{label}</dt>
                  <dd className="mt-1 font-medium">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm font-medium">Message history</p>
            <div className="mt-3 space-y-3">
              {selected.messages.map((m, i) => (
                <div key={i}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs ${
                      m.kind === "Reply"
                        ? "ml-auto bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                  <p className={`mt-1 text-[10px] text-muted-foreground ${m.kind === "Reply" ? "text-right" : ""}`}>
                    {m.time}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
