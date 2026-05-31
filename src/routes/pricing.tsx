import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — ThothFood" },
      { name: "description", content: "ThothFood pricing is commission-based and tailored to your restaurant. Talk to us." },
      { property: "og:title", content: "Pricing — ThothFood" },
      { property: "og:description", content: "Commission-based pricing, tailored to your restaurant." },
    ],
  }),
  component: Pricing,
});

const included = [
  "Dedicated WhatsApp ordering line",
  "Real-time kitchen dashboard",
  "Menu management & in-chat catalogue",
  "MoMo + card payments via Paystack",
  "Delivery zones & rider management",
  "Promotions, analytics & merchant wallet",
  "Customer dispute resolution",
  "Onboarding & ongoing support",
];

function Pricing() {
  return (
    <>
      <section className="bg-background py-20 md:py-28">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Pricing
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            Pricing as flexible as your menu.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/65">
            Every restaurant is different. Volumes, margins, delivery footprint — they all shape what works.
            That's why ThothFood pricing is <span className="font-semibold text-foreground">commission-based and tailored</span> to your business.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-background shadow-[0_30px_80px_-30px_oklch(0.18_0.005_50/0.2)]">
            <div className="bg-dark p-10 text-dark-foreground md:p-14">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Tailored plan</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                Built around <span className="text-primary">your kitchen.</span>
              </h2>
              <p className="mt-4 max-w-md text-white/65">
                Our team works with you to set a fair commission and onboarding plan based on your order volume, average ticket, and delivery setup.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground"
              >
                Talk to us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="p-10 md:p-14">
              <p className="font-display text-sm font-bold uppercase tracking-wider text-foreground/50">
                What's included
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {included.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-success text-success-foreground">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-2xl text-center text-sm text-foreground/60">
            No upfront fees. No "platform subscription." You earn — we earn. Simple.
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-page">
          <div className="rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-14">
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Tell us about your restaurant.
            </h2>
            <p className="mx-auto mt-3 max-w-lg opacity-80">
              We'll come back with a plan that actually fits.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex h-14 items-center gap-2 rounded-full bg-dark px-8 font-semibold text-dark-foreground hover:bg-dark-card"
            >
              <MessageCircle className="h-5 w-5" /> Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
