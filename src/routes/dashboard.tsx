import { Link, Outlet, createFileRoute, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  Activity,
  BarChart3,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Repeat,
  Settings,
  Users,
} from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useDemoAuth } from "@/lib/demo-auth";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

const sections = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/dashboard/patients", label: "Patients", icon: Users, exact: false },
  { to: "/dashboard/automations", label: "Automations", icon: Repeat, exact: false },
  { to: "/dashboard/insights", label: "Insights", icon: BarChart3, exact: false },
  { to: "/dashboard/billing", label: "Billing", icon: CreditCard, exact: false },
  { to: "/dashboard/settings", label: "Settings", icon: Settings, exact: false },
] as const;

function DashboardLayout() {
  const { user, ready, signOut } = useDemoAuth();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

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
        <nav className="mx-auto flex w-full max-w-7xl gap-1 overflow-x-auto px-5 pb-2 lg:hidden">
          {sections.map((s) => {
            const active = s.exact ? pathname === s.to : pathname.startsWith(s.to);
            return (
              <Link
                key={s.to}
                to={s.to}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60"
                }`}
              >
                <s.icon className="size-3.5" /> {s.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <div className="mx-auto flex w-full max-w-7xl gap-6 px-5 py-8">
        <aside className="hidden w-56 shrink-0 lg:block">
          <nav className="sticky top-24 space-y-1">
            {sections.map((s) => {
              const active = s.exact ? pathname === s.to : pathname.startsWith(s.to);
              return (
                <Link
                  key={s.to}
                  to={s.to}
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    active
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                  }`}
                >
                  <s.icon className="size-4" /> {s.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
