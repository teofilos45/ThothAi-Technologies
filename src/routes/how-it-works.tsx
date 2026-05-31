import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsAppMock } from "@/components/site/WhatsAppMock";
import { MessageCircle, Search, ShoppingBag, Truck, Wallet, CheckCircle2, Bell } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — ThothFood" },
      { name: "description", content: "From craving to chow: the full ThothFood ordering journey on WhatsApp, step by step." },
      { property: "og:title", content: "How ThothFood works" },
      { property: "og:description", content: "From craving to chow: the full ThothFood ordering journey on WhatsApp." },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    icon: Search,
    title: "Find a restaurant",
    desc: "Spot a ThothFood-enabled restaurant on Instagram, a flyer, or a friend's recommendation. Tap their WhatsApp link.",
    mock: {
      restaurant: "Auntie Muni's Kitchen",
      messages: [
        { from: "them" as const, text: "Welcome to Auntie Muni's 🍲 What can we make for you today?", time: "12:00" },
      ],
    },
  },
  {
    icon: ShoppingBag,
    title: "Browse the menu",
    desc: "The full menu loads right inside WhatsApp — real photos, real prices. Powered by Meta's native Product Catalogue.",
    mock: {
      restaurant: "Auntie Muni's Kitchen",
      messages: [
        { from: "you" as const, text: "Show me the menu 📖", time: "12:01" },
        { from: "them" as const, card: { title: "Jollof + Chicken", price: "GHS 65", emoji: "🍗" }, time: "12:01" },
        { from: "them" as const, card: { title: "Waakye Special", price: "GHS 45", emoji: "🍛" }, time: "12:01" },
      ],
    },
  },
  {
    icon: ShoppingBag,
    title: "Add to cart",
    desc: "Tap items to add. Adjust quantities. Add notes ('no shito please'). Your cart syncs in real time.",
    mock: {
      restaurant: "Auntie Muni's Kitchen",
      messages: [
        { from: "you" as const, text: "2x Jollof + Chicken. No shito 🙏", time: "12:03" },
        { from: "them" as const, text: "Got it. Cart: 2x Jollof + Chicken — GHS 130", time: "12:03" },
      ],
    },
  },
  {
    icon: Truck,
    title: "Delivery or pickup",
    desc: "Pick delivery and drop a pin, or schedule a pickup time. Delivery fees are calculated by zone — no surprises.",
    mock: {
      restaurant: "Auntie Muni's Kitchen",
      messages: [
        { from: "them" as const, text: "Delivery or pickup?", time: "12:04" },
        { from: "you" as const, text: "Delivery to East Legon 📍", time: "12:04" },
        { from: "them" as const, text: "Delivery fee: GHS 15. Total: GHS 145.", time: "12:04" },
      ],
    },
  },
  {
    icon: Wallet,
    title: "Pay with MoMo",
    desc: "Tap the secure checkout link. Pay with Mobile Money or card via Paystack. Back in chat in seconds.",
    mock: {
      restaurant: "Auntie Muni's Kitchen",
      messages: [
        { from: "them" as const, text: "Tap to pay → paystack.com/...", time: "12:05" },
        { from: "you" as const, text: "Paid ✅", time: "12:06" },
        { from: "them" as const, text: "✅ Payment confirmed. Sending to the kitchen!", time: "12:06" },
      ],
    },
  },
  {
    icon: Bell,
    title: "Track in WhatsApp",
    desc: "Get live updates: kitchen accepted, food cooking, rider dispatched, almost there. All in the same chat thread.",
    mock: {
      restaurant: "Auntie Muni's Kitchen",
      messages: [
        { from: "them" as const, text: "👨‍🍳 Kitchen is on it.", time: "12:10" },
        { from: "them" as const, text: "🛵 Rider Kwame is on the way!", time: "12:24" },
        { from: "them" as const, text: "📍 2 minutes away.", time: "12:30" },
      ],
    },
  },
  {
    icon: CheckCircle2,
    title: "Eat. Repeat.",
    desc: "Food arrives. You eat. Next time you're hungry, the chat's already there — just say 'menu' and go again.",
    mock: {
      restaurant: "Auntie Muni's Kitchen",
      messages: [
        { from: "them" as const, text: "🎉 Delivered. Enjoy your meal!", time: "12:32" },
        { from: "you" as const, text: "🔥🔥🔥", time: "12:45" },
      ],
    },
  },
];

function HowItWorks() {
  return (
    <>
      <section className="bg-dark py-20 text-dark-foreground md:py-28">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
            How it works
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            From craving to <span className="text-primary">chow.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/65">
            The full ThothFood journey, step by step. Every step happens right inside WhatsApp.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-page space-y-24">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-bold uppercase tracking-wider text-primary">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-md text-lg text-foreground/65">{s.desc}</p>
              </div>
              <div>
                <WhatsAppMock restaurant={s.mock.restaurant} messages={s.mock.messages} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            That's it. Seriously.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/65">
            No accounts. No app store. No "we sent you an email." Just food, fast.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/233000000000"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-5 w-5" /> Order on WhatsApp
            </a>
            <Link
              to="/restaurants"
              className="inline-flex h-14 items-center rounded-full border border-border bg-background px-7 font-semibold text-foreground hover:bg-muted"
            >
              I run a restaurant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
