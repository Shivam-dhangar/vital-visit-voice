export type Patient = {
  id: string;
  name: string;
  phone: string;
  treatment: string;
  lastVisit: string;
  nextAction: string;
  dueIn: string;
  channel: "WhatsApp" | "SMS";
  status: "On track" | "Missed" | "Recovered" | "Awaiting reply";
};

export const patients: Patient[] = [
  {
    id: "P-1042",
    name: "Rohit Menon",
    phone: "+91 98••• 4122",
    treatment: "Root canal — sitting 2 of 3",
    lastVisit: "12 Aug 2026",
    nextAction: "Sitting 2 reminder",
    dueIn: "Tomorrow, 10:30",
    channel: "WhatsApp",
    status: "On track",
  },
  {
    id: "P-0987",
    name: "Sana Kapoor",
    phone: "+91 90••• 8871",
    treatment: "Braces adjustment",
    lastVisit: "02 Aug 2026",
    nextAction: "Missed-appointment recovery",
    dueIn: "Overdue by 4 days",
    channel: "SMS",
    status: "Missed",
  },
  {
    id: "P-1120",
    name: "Iqbal Sheikh",
    phone: "+91 99••• 3310",
    treatment: "Antibiotic course (5 days)",
    lastVisit: "24 Aug 2026",
    nextAction: "Medicine reminder 3/5",
    dueIn: "Today, 21:00",
    channel: "WhatsApp",
    status: "On track",
  },
  {
    id: "P-0771",
    name: "Meera Joshi",
    phone: "+91 87••• 7745",
    treatment: "Scaling & polishing",
    lastVisit: "18 Feb 2026",
    nextAction: "6-month re-checkup nudge",
    dueIn: "In 3 days",
    channel: "WhatsApp",
    status: "Awaiting reply",
  },
  {
    id: "P-1203",
    name: "Daniel Fernandes",
    phone: "+91 76••• 2094",
    treatment: "Implant review",
    lastVisit: "09 Aug 2026",
    nextAction: "Rebooked after recovery SMS",
    dueIn: "04 Sep 2026",
    channel: "SMS",
    status: "Recovered",
  },
  {
    id: "P-1188",
    name: "Aisha Rahman",
    phone: "+91 82••• 6612",
    treatment: "Wisdom tooth extraction",
    lastVisit: "22 Aug 2026",
    nextAction: "Post-op day 7 check",
    dueIn: "In 2 days",
    channel: "WhatsApp",
    status: "On track",
  },
];

export type Automation = {
  name: string;
  trigger: string;
  cadence: string;
  channel: string;
  active: boolean;
  recovered: number;
};

export const automations: Automation[] = [
  {
    name: "Medicine course reminders",
    trigger: "Prescription added to visit",
    cadence: "Daily at dose time, until course ends",
    channel: "WhatsApp → SMS fallback",
    active: true,
    recovered: 0,
  },
  {
    name: "Missed appointment recovery",
    trigger: "No-show detected after 2h",
    cadence: "+2h, +1 day, +4 days",
    channel: "SMS + WhatsApp",
    active: true,
    recovered: 38,
  },
  {
    name: "Re-checkup nudge (6 months)",
    trigger: "Scaling / cleaning completed",
    cadence: "Day 165, Day 180, Day 200",
    channel: "WhatsApp",
    active: true,
    recovered: 61,
  },
  {
    name: "Multi-sitting treatment plan",
    trigger: "Treatment type = RCT / Braces",
    cadence: "Auto-spaced per protocol",
    channel: "WhatsApp",
    active: true,
    recovered: 22,
  },
  {
    name: "Birthday & goodwill message",
    trigger: "Patient birthday",
    cadence: "Once a year, 09:00",
    channel: "WhatsApp",
    active: false,
    recovered: 4,
  },
];

export const weeklyRecovery = [
  { week: "W1", sent: 210, rebooked: 26 },
  { week: "W2", sent: 248, rebooked: 34 },
  { week: "W3", sent: 232, rebooked: 31 },
  { week: "W4", sent: 286, rebooked: 47 },
  { week: "W5", sent: 301, rebooked: 52 },
  { week: "W6", sent: 322, rebooked: 61 },
];

export const timeline = [
  {
    time: "Today · 09:14",
    title: "WhatsApp delivered to Iqbal Sheikh",
    detail: "Medicine reminder 2/5 — read at 09:16",
  },
  {
    time: "Today · 08:40",
    title: "Sana Kapoor marked as no-show",
    detail: "Recovery sequence started automatically",
  },
  {
    time: "Yesterday · 18:02",
    title: "Meera Joshi re-checkup nudge sent",
    detail: "Reply expected — booking link included",
  },
  {
    time: "Yesterday · 11:27",
    title: "Daniel Fernandes rebooked",
    detail: "Recovered ₹4,500 of treatment value",
  },
];

export const team = [
  {
    name: "Prabhat Patel",
    role: "Founder & CEO",
    bio: "Ex-clinic operations lead. Designed the recall protocols after auditing 40+ dental practices.",
    initials: "PP",
    photo: "/team/prabhat-patel.jpg",
    focus: "Vision & clinical workflows",
  },
  {
    name: "Vikram Desai",
    role: "Co-founder & CTO",
    bio: "Built messaging infrastructure handling millions of scheduled sends at reliable delivery rates.",
    initials: "VD",
    photo: "/team/vikram-desai.jpg",
    focus: "Automation engine",
  },
  {
    name: "Fatima Noor",
    role: "Head of Clinic Success",
    bio: "Onboards every clinic personally and keeps recall templates tuned to how patients actually reply.",
    initials: "FN",
    photo: "/team/fatima-noor.jpg",
    focus: "Onboarding & retention",
  },
];
