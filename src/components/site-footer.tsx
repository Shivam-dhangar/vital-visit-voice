import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg">Recallpatient Solutions</p>
          <p className="mt-2 max-w-xs text-sm text-ink-foreground/70">
            Patient follow-up automation for small clinics and dental practices.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-medium">Product</p>
          <ul className="mt-3 space-y-2 text-ink-foreground/70">
            <li>
              <Link to="/features" className="hover:text-ink-foreground">
                Features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-ink-foreground">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-ink-foreground">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-medium">Company</p>
          <ul className="mt-3 space-y-2 text-ink-foreground/70">
            <li>
              <Link to="/team" className="hover:text-ink-foreground">
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ink-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-ink-foreground">
                Demo login
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-medium">Legal</p>
          <ul className="mt-3 space-y-2 text-ink-foreground/70">
            <li>
              <Link to="/privacy" className="hover:text-ink-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-ink-foreground">
                Terms of Service
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-xs text-ink-foreground/60">
            Demo access
            <br />
            demo@recallpatient.com / demo1234
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-ink-foreground/60">
        © 2026 Recallpatient Solutions. Demo experience — no real patient data.
      </div>
    </footer>
  );
}
