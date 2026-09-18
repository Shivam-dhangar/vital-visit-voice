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
  balanceDue: string;
  messages: { kind: "Sent" | "Reply"; text: string; time: string }[];
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
    balanceDue: "₹0",
    messages: [
      { kind: "Sent", text: "Hi Rohit, this is a reminder for sitting 2 of your root canal tomorrow at 10:30. Reply 1 to confirm.", time: "Yesterday, 18:00" },
      { kind: "Reply", text: "1", time: "Yesterday, 18:04" },
      { kind: "Sent", text: "Confirmed — see you tomorrow. Please avoid eating 1 hour before the visit.", time: "Yesterday, 18:05" },
    ],
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
    balanceDue: "₹1,200",
    messages: [
      { kind: "Sent", text: "We missed you for your braces adjustment on 2 Aug. Tap to rebook: recall.link/rebook/0987", time: "4 days ago" },
      { kind: "Sent", text: "Following up — your adjustment is now overdue. Rebooking keeps your treatment on schedule.", time: "2 days ago" },
    ],
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
    balanceDue: "₹0",
    messages: [
      { kind: "Sent", text: "Reminder: take dose 2 of 5 of your antibiotic course now.", time: "Yesterday, 21:00" },
      { kind: "Reply", text: "Done, thanks", time: "Yesterday, 21:12" },
    ],
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
    balanceDue: "₹0",
    messages: [
      { kind: "Sent", text: "It's been 6 months since your scaling — time for a quick re-checkup. Book here: recall.link/book/0771", time: "Today, 09:10" },
    ],
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
    balanceDue: "₹4,500",
    messages: [
      { kind: "Sent", text: "We noticed you missed your implant review. Rebook in one tap: recall.link/rebook/1203", time: "6 days ago" },
      { kind: "Reply", text: "Sorry, was travelling. Booking now", time: "5 days ago" },
      { kind: "Sent", text: "Great — you're booked for 4 Sep, 11:00. See you then.", time: "5 days ago" },
    ],
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
    balanceDue: "₹0",
    messages: [
      { kind: "Sent", text: "Day 3 check-in: any swelling or pain? Reply 1 for OK, 2 to talk to the clinic.", time: "4 days ago" },
      { kind: "Reply", text: "1", time: "4 days ago" },
    ],
  },
  {
    id: "P-1266",
    name: "Farhan Ali",
    phone: "+91 91••• 4409",
    treatment: "Crown fitting",
    lastVisit: "30 Aug 2026",
    nextAction: "Fitting review",
    dueIn: "In 5 days",
    channel: "WhatsApp",
    status: "On track",
    balanceDue: "₹2,800",
    messages: [
      { kind: "Sent", text: "Your crown fitting review is scheduled for next week — we'll confirm the exact slot 2 days before.", time: "Today, 10:00" },
    ],
  },
  {
    id: "P-1301",
    name: "Neha Bhatt",
    phone: "+91 88••• 0091",
    treatment: "Cavity filling",
    lastVisit: "14 Aug 2026",
    nextAction: "Missed-appointment recovery — step 1",
    dueIn: "Overdue by 1 day",
    channel: "SMS",
    status: "Missed",
    balanceDue: "₹600",
    messages: [
      { kind: "Sent", text: "We missed you yesterday for your filling review. Reply YES to rebook.", time: "Today, 08:30" },
    ],
  },
  {
    id: "P-1355",
    name: "Karan Malhotra",
    phone: "+91 95••• 2287",
    treatment: "Whitening — session 2 of 2",
    lastVisit: "05 Sep 2026",
    nextAction: "Session 2 reminder",
    dueIn: "In 6 days",
    channel: "WhatsApp",
    status: "On track",
    balanceDue: "₹0",
    messages: [
      { kind: "Sent", text: "Your second whitening session is coming up. We'll send the exact time 2 days before.", time: "2 days ago" },
    ],
  },
];

export type Automation = {
  name: string;
  trigger: string;
  cadence: string;
  channel: string;
  active: boolean;
  recovered: number;
  description: string;
};

export const automations: Automation[] = [
  {
    name: "Medicine course reminders",
    trigger: "Prescription added to visit",
    cadence: "Daily at dose time, until course ends",
    channel: "WhatsApp → SMS fallback",
    active: true,
    recovered: 0,
    description: "Fires the moment a prescription is logged against a visit — no manual scheduling.",
  },
  {
    name: "Missed appointment recovery",
    trigger: "No-show detected after 2h",
    cadence: "+2h, +1 day, +4 days",
    channel: "SMS + WhatsApp",
    active: true,
    recovered: 38,
    description: "A 3-step warm sequence with a one-tap rebooking link before the patient goes cold.",
  },
  {
    name: "Re-checkup nudge (6 months)",
    trigger: "Scaling / cleaning completed",
    cadence: "Day 165, Day 180, Day 200",
    channel: "WhatsApp",
    active: true,
    recovered: 61,
    description: "Brings routine-cleaning patients back before the recall window closes.",
  },
  {
    name: "Multi-sitting treatment plan",
    trigger: "Treatment type = RCT / Braces",
    cadence: "Auto-spaced per protocol",
    channel: "WhatsApp",
    active: true,
    recovered: 22,
    description: "Reads the treatment type and builds the full sitting cadence automatically.",
  },
  {
    name: "Pre-visit prep instructions",
    trigger: "Appointment confirmed",
    cadence: "24h and 2h before the visit",
    channel: "WhatsApp",
    active: true,
    recovered: 9,
    description: "Fasting, medication or paperwork reminders matched to the procedure booked.",
  },
  {
    name: "Birthday & goodwill message",
    trigger: "Patient birthday",
    cadence: "Once a year, 09:00",
    channel: "WhatsApp",
    active: false,
    recovered: 4,
    description: "A light-touch goodwill message — no offers, just a reason to stay top of mind.",
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

export const channelSplit = [
  { channel: "WhatsApp", value: 74 },
  { channel: "SMS", value: 26 },
];

export const treatmentMix = [
  { treatment: "Cleaning & scaling", value: 32 },
  { treatment: "Root canal", value: 21 },
  { treatment: "Braces / ortho", value: 18 },
  { treatment: "Extractions", value: 14 },
  { treatment: "Other", value: 15 },
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
  {
    time: "2 days ago · 16:48",
    title: "Neha Bhatt missed-appointment recovery started",
    detail: "Step 1 of 3 sent over SMS",
  },
  {
    time: "3 days ago · 10:05",
    title: "Automation edited",
    detail: "Pre-visit prep instructions cadence changed to 24h + 2h",
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

export type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  bestFor: string;
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹1,499",
    period: "/month",
    tagline: "For a single chair getting reminders off paper and phone calls.",
    bestFor: "Solo practitioners, up to 150 active patients",
    features: [
      "Medicine & appointment reminders",
      "Missed-appointment recovery sequence",
      "WhatsApp + SMS delivery",
      "Patient history timeline",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹3,499",
    period: "/month",
    tagline: "For clinics running multiple treatment types and chairs.",
    bestFor: "2–5 chair clinics, up to 1,500 active patients",
    features: [
      "Everything in Starter",
      "Multi-sitting treatment plans (RCT, braces)",
      "Re-checkup nudges by treatment protocol",
      "Automation rule builder",
      "Insights dashboard & weekly reports",
      "Priority WhatsApp support",
    ],
    highlighted: true,
  },
  {
    id: "multi-chair",
    name: "Multi-location",
    price: "Custom",
    period: "",
    tagline: "For groups running several branches on one recall protocol.",
    bestFor: "Polyclinics & chains, unlimited patients",
    features: [
      "Everything in Growth",
      "Multiple clinics under one account",
      "Role-based staff access",
      "Custom message templates & branding",
      "Dedicated onboarding specialist",
      "API access",
    ],
  },
];

export const faqs = [
  {
    question: "Do patients need to install anything?",
    answer:
      "No. Reminders and recovery messages arrive over WhatsApp or SMS — channels patients already use. There's no app for them to download.",
  },
  {
    question: "What happens if a patient doesn't have WhatsApp?",
    answer:
      "Recallpatient automatically falls back to SMS if a WhatsApp message isn't delivered or read within a set window, so no one falls through the cracks.",
  },
  {
    question: "How is the follow-up schedule decided?",
    answer:
      "Cadences are built from the treatment type you log — a root canal gets a different sitting schedule than a cleaning. You can edit any cadence from the Automations page.",
  },
  {
    question: "Can we turn off a specific automation?",
    answer:
      "Yes — every automation has its own on/off switch on the Automations page. Turning one off doesn't affect the others.",
  },
  {
    question: "Is patient data stored securely?",
    answer:
      "Patient phone numbers are masked in the interface, message logs are encrypted at rest, and only staff you invite can access the portal. See our Privacy Policy for details.",
  },
  {
    question: "Do you support clinics outside India?",
    answer:
      "The product is built around WhatsApp Business and Indian SMS gateways today. International SMS routing is on our roadmap — reach out and we'll let you know when it's ready for your region.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can move between Starter, Growth and Multi-location at any time from the Billing page. Changes apply from your next billing cycle.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No setup fee on Starter or Growth. Multi-location accounts include a one-time onboarding session with a Clinic Success specialist, covered in your custom quote.",
  },
];

export const testimonials = [
  {
    quote:
      "We stopped calling patients to remind them. Recall messages do it, and our cleaning appointments are booked three weeks out now.",
    name: "Dr. Praveen K.",
    role: "2-chair dental practice, Kochi",
  },
  {
    quote:
      "The missed-appointment recovery alone paid for the subscription in the first month. It just quietly rebooks people we would have written off.",
    name: "Dr. Simran Oberoi",
    role: "Smile Studio, Pune",
  },
  {
    quote:
      "Our front desk used to spend the first hour of every day on reminder calls. Now that hour goes to patients who are actually in the chair.",
    name: "Dr. Arjun Nair",
    role: "Coastal Dental Care, Kochi",
  },
];

export const invoices = [
  { id: "INV-2026-08", period: "August 2026", amount: "₹3,499", status: "Paid", date: "01 Sep 2026" },
  { id: "INV-2026-07", period: "July 2026", amount: "₹3,499", status: "Paid", date: "01 Aug 2026" },
  { id: "INV-2026-06", period: "June 2026", amount: "₹3,499", status: "Paid", date: "01 Jul 2026" },
  { id: "INV-2026-05", period: "May 2026", amount: "₹2,999", status: "Paid", date: "01 Jun 2026" },
];

export const clinicStaff = [
  { name: "Dr. Ananya Rao", role: "Clinic Owner", email: "ananya@brightsmile.demo", status: "Active" },
  { name: "Ritu Sharma", role: "Front Desk", email: "ritu@brightsmile.demo", status: "Active" },
  { name: "Dr. Sameer Iyer", role: "Associate Dentist", email: "sameer@brightsmile.demo", status: "Invited" },
];
