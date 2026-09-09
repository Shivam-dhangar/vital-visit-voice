import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { Activity, ArrowRight, KeyRound } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEMO_CREDENTIALS, useDemoAuth } from "@/lib/demo-auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Demo login — Recallpatient portal" },
      {
        name: "description",
        content:
          "Sign in with the Recallpatient demo account to explore the clinic follow-up portal, automations and patient history dashboard.",
      },
      { property: "og:title", content: "Demo login — Recallpatient portal" },
      {
        property: "og:description",
        content: "Use the shared demo credentials to explore the full clinic portal instantly.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { user, ready, signIn, signInAsDemo } = useDemoAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (ready && user) navigate({ to: "/dashboard", replace: true });
  }, [ready, user, navigate]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = signIn(email, password);
    if (!result.ok) {
      setError(result.error ?? "Sign in failed");
      return;
    }
    setError(null);
    toast.success("Signed in to the demo clinic portal");
    navigate({ to: "/dashboard" });
  }

  function handleInstantDemo() {
    signInAsDemo();
    toast.success("Demo account loaded");
    navigate({ to: "/dashboard" });
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden flex-col justify-between bg-ink p-12 text-ink-foreground lg:flex">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Activity className="size-4.5" />
          </span>
          <span className="font-display text-lg">Recallpatient</span>
        </Link>
        <div>
          <h1 className="max-w-md text-4xl leading-tight">
            Step inside a clinic that never forgets a follow-up.
          </h1>
          <p className="mt-4 max-w-md text-sm text-ink-foreground/70">
            The demo portal is loaded with a sample dental practice: live follow-up queue,
            missed-appointment recovery, automations and full patient history.
          </p>
        </div>
        <p className="text-xs text-ink-foreground/60">
          Demo environment — all patients and messages are fictional.
        </p>
      </div>

      <div className="flex items-center justify-center bg-background px-5 py-14">
        <div className="w-full max-w-sm">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground lg:hidden">
            ← Back to site
          </Link>
          <h2 className="mt-4 text-3xl">Sign in</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Use the demo account below to view the clinic portal.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="demo@recallpatient.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full" size="lg">
              Sign in <ArrowRight className="ml-1 size-4" />
            </Button>
          </form>

          <Card className="mt-6 rounded-2xl border-dashed bg-muted/60">
            <CardContent className="p-5">
              <p className="flex items-center gap-2 text-sm font-medium">
                <KeyRound className="size-4 text-primary" /> Demo credentials
              </p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {DEMO_CREDENTIALS.email}
                <br />
                {DEMO_CREDENTIALS.password}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setEmail(DEMO_CREDENTIALS.email);
                    setPassword(DEMO_CREDENTIALS.password);
                    setError(null);
                  }}
                >
                  Fill credentials
                </Button>
                <Button type="button" size="sm" variant="secondary" onClick={handleInstantDemo}>
                  Enter demo instantly
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
