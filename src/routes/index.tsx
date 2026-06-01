import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Menu, X, Instagram, Twitter, Linkedin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ThothAI Technologies — Building WhatsApp Commerce for Africa" },
      { name: "description", content: "ThothAI Technologies builds WhatsApp-native commerce tools for the African market — starting with Ghana." },
      { property: "og:title", content: "ThothAI Technologies" },
      { property: "og:description", content: "Building WhatsApp Commerce for Africa." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ThothAIHome,
});

function ThothAIWordmark({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <svg className={className} width="260" height="120" viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M128,7 C162,2 204,9 224,26 C244,43 246,68 236,86 C226,104 200,114 166,116 C132,118 88,114 60,100 C32,86 12,66 14,48 C16,30 38,12 72,7 C90,3 108,2 128,7 Z"
        stroke="#F69B12"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        transform="rotate(-3 130 60)"
      />
      <text
        x="130"
        y="55"
        fontFamily="'Bricolage Grotesque', system-ui, sans-serif"
        fontWeight="800"
        fontSize="30"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={dark ? "#FAFAF8" : "#211E1B"}
      >
        Thoth
        <tspan stroke="#F69B12" strokeWidth="1px" fill="transparent" fontWeight="800">AI</tspan>
      </text>
      <text
        x="130"
        y="78"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontWeight="500"
        fontSize="10"
        textAnchor="middle"
        letterSpacing="2"
        fill={dark ? "rgba(250,250,248,0.6)" : "rgba(33,30,27,0.6)"}
      >
        TECHNOLOGIES
      </text>
    </svg>
  );
}

const navLinks = [
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "why-whatsapp", label: "Why WhatsApp" },
  { id: "contact", label: "Contact" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function ThothAINavbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["about", "products", "why-whatsapp", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/">
          <ThothAIWordmark className="w-40 h-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                activeSection === l.id
                  ? "text-foreground border-b-2 border-primary pb-0.5"
                  : "text-foreground/70"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/thothfood/"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5"
          >
            Explore ThothFood
          </Link>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => { scrollTo(l.id); setOpen(false); }}
                className={`rounded-md px-3 py-3 text-left text-base font-medium hover:bg-muted ${
                  activeSection === l.id ? "text-foreground bg-muted" : "text-foreground/80"
                }`}
              >
                {l.label}
              </button>
            ))}
            <Link
              to="/thothfood/"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary px-5 font-semibold text-primary-foreground"
            >
              Explore ThothFood
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function ThothAIHome() {
  return (
    <div className="flex min-h-screen flex-col">
      <ThothAINavbar />

      <main className="flex-1">
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
          <div className="container-page relative py-24 text-center md:py-32">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              ⚡ Building WhatsApp Commerce for Africa
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mx-auto mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              We're putting African businesses on{" "}
              <span className="text-primary">WhatsApp.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
            >
              ThothAI Technologies builds WhatsApp-native commerce tools for the African market — starting with Ghana.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/thothfood/"
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.7)] transition-transform hover:-translate-y-0.5"
              >
                Explore ThothFood
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#about"
                className="inline-flex h-14 items-center rounded-full border border-white/20 px-6 text-base font-semibold text-white/90 hover:bg-white/5"
              >
                Learn about us
              </a>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-success" />
                🇬🇭 Based in Accra
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Live product
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                More coming soon
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-secondary py-24">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                We build the infrastructure for WhatsApp commerce.
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-background p-7 ring-1 ring-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Our Mission</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  To make WhatsApp the default commerce channel for small businesses — removing the barrier of apps, websites, and complex tech between sellers and their customers.
                </p>
              </div>
              <div className="rounded-2xl bg-background p-7 ring-1 ring-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Our Vision</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  A future where any business in Africa, no matter how small, can sell to anyone on the continent through a single WhatsApp message.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="text-lg text-foreground/65">
                ThothAI Technologies is an Accra-based technology company building commerce tools for Africa's WhatsApp generation. We believe the next wave of African businesses shouldn't need a website or an app to sell — they just need WhatsApp.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                {[
                  { emoji: "📍", label: "Based in Accra, Ghana" },
                  { emoji: "🚀", label: "Launched 2025" },
                  { emoji: "🌍", label: "Built for Africa" },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium"
                  >
                    <span>{t.emoji}</span>
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="bg-background py-24">
          <div className="container-page">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Products</p>
              <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                Built for Africa's WhatsApp generation.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {/* ThothFood — active */}
              <div className="group overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-all hover:-translate-y-1 hover:ring-primary/40 hover:shadow-[0_20px_40px_-20px_oklch(0.745_0.165_60/0.3)]">
                <div className="h-1.5 w-full bg-primary" />
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-extrabold">ThothFood</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" />
                      Live
                    </span>
                  </div>
                  <p className="mt-4 text-foreground/65">
                    Order food from your favourite local restaurants — directly on WhatsApp. No app. No stress. Pay with MoMo.
                  </p>
                  <Link
                    to="/thothfood/"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    Explore ThothFood <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* ThothShop — coming soon */}
              <div className="overflow-hidden rounded-3xl border-t-2 border-dashed border-primary/40 bg-muted/50 ring-1 ring-border opacity-80">
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-extrabold">ThothShop</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      ⏳ Coming Soon
                    </span>
                  </div>
                  <p className="mt-4 text-foreground/65">
                    WhatsApp commerce for every small business. Clothing, electronics, beauty, crafts — sell anything on WhatsApp.
                  </p>
                  <span className="mt-6 inline-flex cursor-not-allowed items-center gap-1 text-sm font-semibold text-foreground/40">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY WHATSAPP */}
        <section id="why-whatsapp" className="bg-dark py-24 text-dark-foreground">
          <div className="container-page">
            <div className="text-center">
              <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                WhatsApp is Africa's internet.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl bg-dark-card p-8 text-center">
                <p className="font-display text-5xl font-extrabold text-primary">3 Billion+</p>
                <p className="mt-3 text-white/65">WhatsApp users worldwide</p>
              </div>
              <div className="rounded-3xl bg-dark-card p-8 text-center">
                <p className="font-display text-5xl font-extrabold text-primary">#1</p>
                <p className="mt-3 text-white/65">Most used app in Ghana</p>
              </div>
              <div className="flex items-center justify-center rounded-3xl bg-dark-card p-8 text-center">
                <p className="text-base leading-relaxed text-white/65">
                  Still taking orders via phone calls & Instagram DMs
                </p>
              </div>
            </div>

            <p className="mt-10 text-center font-display text-2xl font-bold text-primary">
              ThothAI is changing that.
            </p>
          </div>
        </section>

        {/* CTA / CONTACT */}
        <section id="contact" className="bg-dark py-24 text-dark-foreground">
          <div className="container-page text-center">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Ready to put your business on WhatsApp?
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/thothfood/"
                className="inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5"
              >
                Explore ThothFood
              </Link>
              <Link
                to="/thothfood/contact"
                className="inline-flex h-14 items-center rounded-full border border-white/20 px-6 text-base font-semibold text-white/90 hover:bg-white/5"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* THOTHAI FOOTER */}
      <footer className="border-t border-white/10 bg-dark text-dark-foreground">
        <div className="container-page py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Link to="/">
                <ThothAIWordmark dark className="w-36 h-auto" />
              </Link>
              <p className="mt-3 text-sm text-white/55">Built in Accra, Ghana 🇬🇭</p>
            </div>

            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">Products</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link to="/thothfood/" className="text-white/70 hover:text-primary">
                    ThothFood
                  </Link>
                </li>
                <li className="flex items-center gap-2 text-white/40">
                  ThothShop
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    Coming Soon
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">Follow</h4>
              <div className="mt-4 flex gap-3">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Twitter, label: "Twitter/X" },
                  { Icon: Linkedin, label: "LinkedIn" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} ThothAI Technologies. All rights reserved.</p>
            <p>Made with 🌶️ in Accra</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
