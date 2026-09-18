import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { clinicStaff } from "@/lib/demo-data";
import { useDemoAuth } from "@/lib/demo-auth";

export const Route = createFileRoute("/dashboard/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Recallpatient demo" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const { user } = useDemoAuth();
  const [notifications, setNotifications] = useState({
    whatsapp: true,
    sms: true,
    quietHours: true,
  });

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Clinic profile saved (demo only)");
  }

  return (
    <div>
      <h1 className="text-3xl">Settings</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Clinic profile, notification defaults and staff access.
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
        <Card className="rounded-2xl border-border/80">
          <CardContent className="p-6">
            <p className="text-sm font-medium">Clinic profile</p>
            <form onSubmit={handleSave} className="mt-4 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="clinicName">Clinic name</Label>
                  <Input id="clinicName" defaultValue={user?.clinic} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Owner name</Label>
                  <Input id="ownerName" defaultValue={user?.name} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="clinicEmail">Notification email</Label>
                <Input id="clinicEmail" type="email" defaultValue={user?.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clinicAddress">Address</Label>
                <Input id="clinicAddress" defaultValue="14 MG Road, Bengaluru 560001" />
              </div>
              <Button type="submit">Save changes</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card className="rounded-2xl border-border/80">
            <CardContent className="p-6">
              <p className="text-sm font-medium">Notification channels</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">WhatsApp reminders</p>
                    <p className="text-xs text-muted-foreground">Primary channel for all automations</p>
                  </div>
                  <Switch
                    checked={notifications.whatsapp}
                    onCheckedChange={(checked) => {
                      setNotifications((n) => ({ ...n, whatsapp: checked }));
                      toast.success(`WhatsApp reminders ${checked ? "enabled" : "disabled"} (demo only)`);
                    }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">SMS fallback</p>
                    <p className="text-xs text-muted-foreground">Used when WhatsApp isn't delivered</p>
                  </div>
                  <Switch
                    checked={notifications.sms}
                    onCheckedChange={(checked) => {
                      setNotifications((n) => ({ ...n, sms: checked }));
                      toast.success(`SMS fallback ${checked ? "enabled" : "disabled"} (demo only)`);
                    }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Respect quiet hours</p>
                    <p className="text-xs text-muted-foreground">No sends between 9 PM and 8 AM</p>
                  </div>
                  <Switch
                    checked={notifications.quietHours}
                    onCheckedChange={(checked) => {
                      setNotifications((n) => ({ ...n, quietHours: checked }));
                      toast.success(`Quiet hours ${checked ? "enabled" : "disabled"} (demo only)`);
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/80">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Staff access</p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => toast.success("Invite sent (demo only)")}
                >
                  Invite staff
                </Button>
              </div>
              <div className="mt-4 divide-y divide-border">
                {clinicStaff.map((s) => (
                  <div key={s.email} className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-sm font-medium">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.role} · {s.email}</p>
                    </div>
                    <Badge variant={s.status === "Active" ? "secondary" : "outline"} className="rounded-full text-[11px]">
                      {s.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-destructive/40 bg-destructive/5">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-destructive">Danger zone</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Deactivating pauses every automation and signs out all staff. This is a demo — no
                account will actually be affected.
              </p>
              <Button
                variant="destructive"
                size="sm"
                className="mt-4"
                onClick={() => toast.error("Account deactivation is disabled in the demo portal")}
              >
                Deactivate account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
