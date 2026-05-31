import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ShoppingBag, Wallet, MapPin, Sparkles, Shield, Bot, Smartphone, ArrowRight } from "lucide-react";
import { WhatsAppMock } from "@/components/site/WhatsAppMock";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ThothFood — Hungry? Just WhatsApp it." },
      { name: "description", content: "Order food on WhatsApp from your favourite restaurants in Ghana. No app, no stress. Pay with MoMo or card." },
      { property: "og:title", content: "ThothFood — Hungry? Just WhatsApp it." },
      { property: "og:description", content: "Order food on WhatsApp from your favourite restaurants in Ghana." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-dark text-dark-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 0%, oklch(0.745 0.165 60 / 0.35) 0%, transparent 70%), radial-gradient(40% 40% at 10% 100%, oklch(0.72 0.18 145 / 0.18) 0%, transparent 70%)",
          }}
        />
        <div className="container-page relative grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28 lg:py-32">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Live in Accra
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Order food on{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">WhatsApp.</span>
              </span>
              <br />
              No app. No stress.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-lg text-lg text-white/70"
            >
              If you can text, you can eat. Browse menus, pay with MoMo, and track your delivery — all without leaving your favourite chat app.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="https://wa.me/233000000000"
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.7)] transition-transform hover:-translate-y-0.5"
              >
                Order Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/how-it-works"
                className="inline-flex h-14 items-center rounded-full border border-white/20 px-6 text-base font-semibold text-white/90 hover:bg-white/5"
              >
                See how it works
              </Link>
            </motion.div>
            <div className="mt-10 flex items-center gap-6 text-xs text-white/50">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-success" /> MoMo & Card</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> No download</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-info" /> Live tracking</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/30 via-transparent to-success/20 blur-3xl" />
            <WhatsAppMock />
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-background py-24">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                Three taps. One hot meal.
              </h2>
            </div>
            <p className="max-w-md text-foreground/60">
              No accounts. No downloads. No "please verify your email." Just open WhatsApp and start eating.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                icon: MessageCircle,
                title: "Message a restaurant",
                desc: "Tap the WhatsApp link on your favourite spot. Say hi — that's it.",
              },
              {
                step: "02",
                icon: ShoppingBag,
                title: "Browse & add to cart",
                desc: "Scroll the full menu right in chat. Tap to add. Change your mind. Repeat.",
              },
              {
                step: "03",
                icon: Wallet,
                title: "Pay with MoMo",
                desc: "Checkout in seconds. Mobile Money or card. Order arrives at your door.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_oklch(0.745_0.165_60/0.3)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl font-extrabold text-foreground/10">{s.step}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THOTHFOOD */}
      <section className="bg-secondary py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why ThothFood</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Built for how you actually order.
            </h2>
            <p className="mt-4 text-foreground/65">
              You don't need another app cluttering your home screen. You need food. Fast. From the spots you already love.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Smartphone, title: "Zero downloads", desc: "If you have WhatsApp, you're already set up. That's the whole tech stack." },
              { icon: Wallet, title: "MoMo + card checkout", desc: "Paystack-powered. MTN, Telecel, AirtelTigo — all covered." },
              { icon: MapPin, title: "Delivery or pickup", desc: "Get it brought to you, or swing by. Your call, every order." },
              { icon: MessageCircle, title: "Live order tracking", desc: "Status updates land right in your chat. No refresh-the-app dance." },
              { icon: Bot, title: "AI support that gets it", desc: "Ask 'where's my food?' and get a real answer, not a canned reply." },
              { icon: Shield, title: "Dispute protection", desc: "Something off? Our resolution system has your back. Always." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl bg-background p-6 ring-1 ring-border">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{b.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/65">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THOTHSHOP TEASER */}
      <section className="bg-dark py-24 text-dark-foreground">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-dark-card p-10 md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
            />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Coming Soon
                </span>
                <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-6xl">
                  Food was just<br />the beginning.
                </h2>
                <p className="mt-5 max-w-lg text-lg text-white/65">
                  Meet <span className="font-semibold text-white">ThothShop</span> — WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts. One chat. Anything you sell.
                </p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-dark hover:bg-primary hover:text-primary-foreground"
                >
                  Join the waitlist <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                {["👗 Fashion", "💄 Beauty", "📱 Electronics", "🎨 Crafts"].map((t) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/5 py-6 font-display text-base font-bold">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-background py-24">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-3xl font-display text-5xl font-extrabold tracking-tight md:text-6xl">
            Start ordering today.<br />
            <span className="text-primary">Just open WhatsApp.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-foreground/65">
            Your favourite kitchens are one tap away. Lunch sorted in under a minute.
          </p>
          <a
            href="https://wa.me/233000000000"
            className="mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" /> Order on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
