import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { channelSplit, treatmentMix, weeklyRecovery } from "@/lib/demo-data";

export const Route = createFileRoute("/dashboard/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Recallpatient demo" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: InsightsPage,
});

const CHANNEL_COLORS = ["var(--chart-1)", "var(--chart-3)"];
const TREATMENT_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

function InsightsPage() {
  return (
    <div>
      <h1 className="text-3xl">Insights</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        How follow-ups are trending across the practice this quarter.
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
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

        <Card className="rounded-2xl border-border/80">
          <CardContent className="p-5">
            <p className="text-sm font-medium">Delivery channel split</p>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelSplit}
                    dataKey="value"
                    nameKey="channel"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={2}
                  >
                    {channelSplit.map((entry, i) => (
                      <Cell key={entry.channel} fill={CHANNEL_COLORS[i % CHANNEL_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/80">
          <CardContent className="p-5">
            <p className="text-sm font-medium">Treatment mix</p>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={treatmentMix} layout="vertical" margin={{ left: 24 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
                  <XAxis type="number" stroke="var(--muted-foreground)" fontSize={12} unit="%" />
                  <YAxis
                    type="category"
                    dataKey="treatment"
                    stroke="var(--muted-foreground)"
                    fontSize={12}
                    width={120}
                  />
                  <Tooltip />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                    {treatmentMix.map((entry, i) => (
                      <Cell key={entry.treatment} fill={TREATMENT_COLORS[i % TREATMENT_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
