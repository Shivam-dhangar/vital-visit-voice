import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type DemoUser = {
  name: string;
  email: string;
  clinic: string;
  role: string;
};

export const DEMO_CREDENTIALS = {
  email: "demo@recallpatient.io",
  password: "demo1234",
};

const DEMO_USER: DemoUser = {
  name: "Dr. Ananya Rao",
  email: DEMO_CREDENTIALS.email,
  clinic: "Bright Smile Dental Studio",
  role: "Clinic Owner (Demo)",
};

const STORAGE_KEY = "recallpatient.demo.session";

type AuthValue = {
  user: DemoUser | null;
  ready: boolean;
  signIn: (email: string, password: string) => { ok: boolean; error?: string };
  signInAsDemo: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthValue | null>(null);

export function DemoAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw) as DemoUser);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const persist = useCallback((next: DemoUser | null) => {
    setUser(next);
    try {
      if (next) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<AuthValue>(
    () => ({
      user,
      ready,
      signIn: (email, password) => {
        const matches =
          email.trim().toLowerCase() === DEMO_CREDENTIALS.email &&
          password === DEMO_CREDENTIALS.password;
        if (!matches) {
          return { ok: false, error: "Use the demo credentials shown below to explore the portal." };
        }
        persist(DEMO_USER);
        return { ok: true };
      },
      signInAsDemo: () => persist(DEMO_USER),
      signOut: () => persist(null),
    }),
    [user, ready, persist],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useDemoAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useDemoAuth must be used inside DemoAuthProvider");
  return ctx;
}
