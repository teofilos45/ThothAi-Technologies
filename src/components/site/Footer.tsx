import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, MessageCircle, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-page py-16">
        {/* ThothShop teaser */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-dark-card p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Coming Soon
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
                Food was just the beginning.
              </h3>
              <p className="mt-2 text-base text-white/65">
                <span className="font-semibold text-white">ThothShop</span> — WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts. If you sell it, you can sell it on WhatsApp.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center rounded-full bg-white/10 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              Get early access
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display text-2xl font-extrabold">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
              </span>
              Thoth<span className="text-primary">Food</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/55">
              Hungry? Just WhatsApp it. Order food from your favourite spots in Ghana — no app, no stress.
            </p>
            <p className="mt-6 text-xs text-white/40">
              A product of ThothAI Technologies · Accra, Ghana
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">Product</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/how-it-works" className="text-white/70 hover:text-primary">How it works</Link></li>
              <li><Link to="/restaurants" className="text-white/70 hover:text-primary">For Restaurants</Link></li>
              <li><Link to="/pricing" className="text-white/70 hover:text-primary">Pricing</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">Follow</h4>
            <div className="mt-4 flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/40">
              contact@thothai.com
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} ThothAI Technologies. All rights reserved.</p>
          <p>Made with 🌶️ in Accra</p>
        </div>
      </div>
    </footer>
  );
}
