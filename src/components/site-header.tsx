import { Link } from "@tanstack/react-router";
import { Activity, Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useDemoAuth } from "@/lib/demo-auth";

const nav = [
  { to: "/", label: "Home" },
  { to: "/team", label: "Team" },
] as const;

export function SiteHeader() {
  const { user } = useDemoAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Activity className="size-4.5" />
          </span>
          <span className="font-display text-lg">Recallpatient</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          {user ? (
            <Button asChild size="sm" className="ml-2">
              <Link to="/dashboard">Open portal</Link>
            </Button>
          ) : (
            <Button asChild size="sm" className="ml-2">
              <Link to="/login">Demo login</Link>
            </Button>
          )}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-lg border border-border md:hidden"
        >
          <Menu className="size-4" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={user ? "/dashboard" : "/login"}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-primary"
            >
              {user ? "Open portal" : "Demo login"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
