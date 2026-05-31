import { createFileRoute, Link } from "@tanstack/react-router";
import {
  LayoutDashboard, MenuSquare, Wallet, MapPin, Users, Megaphone, BarChart3,
  ShieldCheck, Truck, Sparkles, ArrowRight, CheckCircle2
} from "lucide-react";

export const Route = createFileRoute("/restaurants")({
  head: () => ({
    meta: [
      { title: "For Restaurants — ThothFood" },
      { name: "description", content: "Put your restaurant on WhatsApp. Real-time kitchen dashboard, MoMo payments, menu management — and the customers are already there." },
      { property: "og:title", content: "Put your restaurant on WhatsApp — ThothFood" },
      { property: "og:description", content: "Take orders where your customers already are. Real-time kitchen dashboard, MoMo payments, delivery zones." },
    ],
  }),
  component: Restaurants,
});

const features = [
  { icon: LayoutDashboard, title: "Real-time kitchen dashboard", desc: "Every incoming order. Live. One screen. No printer chaos." },
  { icon: MenuSquare, title: "Menu management", desc: "Update items, prices, photos, availability — pushed to WhatsApp instantly." },
  { icon: Wallet, title: "MoMo + auto commission split", desc: "Customers pay via Paystack. Payouts and commission are handled automatically." },
  { icon: MapPin, title: "Delivery zone control", desc: "Draw your zones. Set per-zone fees and minimums. Stop losing money on far deliveries." },
  { icon: Users, title: "Staff management", desc: "Roles for managers, kitchen, riders. Everyone sees what they need." },
  { icon: Megaphone, title: "Promotions engine", desc: "Launch discounts, combos, and limited-time offers — straight to WhatsApp." },
  { icon: BarChart3, title: "Analytics that matter", desc: "Top items, peak hours, repeat customers. Make decisions with data." },
  { icon: Wallet, title: "Merchant wallet & withdrawals", desc: "Track your balance. Request withdrawals to your MoMo account on demand." },
];

const onboarding = [
  "Create your account", "Set up your restaurant profile", "Connect your WhatsApp number",
  "Upload your menu", "Configure delivery zones", "Connect payments (Paystack/MoMo)",
  "Invite your team", "Go live",
];

function Restaurants() {
  return (
    <>
      <section className="border-b border-border bg-background py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              For Restaurants
            </span>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Put your restaurant on WhatsApp. <span className="text-primary">Start taking orders today.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-foreground/65">
              Your customers already live on WhatsApp. Meet them there. No app to push, no website to maintain — just a dedicated number and a kitchen dashboard that does the heavy lifting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.55)]"
              >
                Get my restaurant on ThothFood <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex h-14 items-center rounded-full border border-border px-6 font-semibold hover:bg-muted"
              >
                See pricing
              </Link>
            </div>
          </div>

          {/* Dashboard mock */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/25 to-success/15 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-dark text-dark-foreground shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="h-2.5 w-2.5 rounded-full bg-success" />
                <span className="ml-3 text-xs text-white/50">Kitchen Dashboard</span>
              </div>
              <div className="grid grid-cols-3 gap-3 p-5 text-xs">
                {[
                  { label: "Live orders", v: "12", c: "text-primary" },
                  { label: "Today's revenue", v: "₵4,820", c: "text-success" },
                  { label: "Avg prep", v: "14m", c: "text-info" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-dark-card p-3">
                    <p className="text-white/50">{s.label}</p>
                    <p className={`mt-1 font-display text-2xl font-extrabold ${s.c}`}>{s.v}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 px-5 pb-5">
                {[
                  { id: "#1042", item: "2× Jollof + Chicken", status: "Cooking", c: "bg-primary/20 text-primary" },
                  { id: "#1041", item: "Waakye Special", status: "Out for delivery", c: "bg-info/20 text-info" },
                  { id: "#1040", item: "Banku + Tilapia", status: "New", c: "bg-success/20 text-success" },
                ].map((o) => (
                  <div key={o.id} className="flex items-center justify-between rounded-xl bg-dark-card p-3 text-xs">
                    <div>
                      <p className="font-mono text-white/50">{o.id}</p>
                      <p className="mt-0.5 font-medium">{o.item}</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${o.c}`}>{o.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Everything you need</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              A full restaurant OS, hiding in a WhatsApp chat.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-background p-6 ring-1 ring-border transition-transform hover:-translate-y-1">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/65">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="bg-background py-24">
        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">8-step onboarding</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                Live in days, not months.
              </h2>
              <p className="mt-4 max-w-md text-foreground/65">
                Our team walks you through every step. Most restaurants are taking real orders within a week.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {onboarding.map((step, i) => (
                <li key={step} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-primary font-display text-base font-extrabold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-2 font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-dark py-24 text-dark-foreground">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Built on trust</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Protection on both sides of the chat.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Merchant trust scoring", desc: "Earn a verified trust score as you fulfil orders reliably." },
              { icon: Sparkles, title: "Dispute resolution", desc: "Built-in system to resolve customer issues quickly and fairly." },
              { icon: Truck, title: "Cash on Delivery support", desc: "Accept COD where it makes sense — fully tracked through the platform." },
            ].map((t) => (
              <div key={t.title} className="rounded-2xl border border-white/10 bg-dark-card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <t.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-1.5 text-sm text-white/60">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">
              Ready to take orders on WhatsApp?
            </h2>
            <p className="mt-2 text-base opacity-80">Tell us about your restaurant. We'll handle the rest.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex h-14 items-center gap-2 rounded-full bg-dark px-8 font-semibold text-dark-foreground hover:bg-dark-card"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
