import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { automations } from "@/lib/demo-data";

export const Route = createFileRoute("/dashboard/automations")({
  head: () => ({
    meta: [
      { title: "Automations — Recallpatient demo" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AutomationsPage,
});

function AutomationsPage() {
  const [rules, setRules] = useState(automations);

  return (
    <div>
      <h1 className="text-3xl">Automations</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Every sequence runs from a trigger and a cadence — turn any one off without touching the
        others.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
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
                    setRules((prev) => prev.map((r, idx) => (idx === i ? { ...r, active: checked } : r)));
                    toast.success(`${rule.name} ${checked ? "enabled" : "paused"} (demo only)`);
                  }}
                  aria-label={`Toggle ${rule.name}`}
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{rule.description}</p>
              <div className="mt-4 grid gap-2 text-xs text-muted-foreground">
                <p>Cadence · {rule.cadence}</p>
                <p>Channel · {rule.channel}</p>
                <p>Rebooked this quarter · {rule.recovered}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
