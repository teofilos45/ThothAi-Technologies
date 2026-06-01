import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/thothfood/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ThothFood" },
      { name: "description", content: "Get in touch with the ThothFood team. Customer or restaurant owner — we'd love to hear from you." },
      { property: "og:title", content: "Contact ThothFood" },
      { property: "og:description", content: "Reach the ThothFood team in Accra." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="bg-dark py-20 text-dark-foreground md:py-28">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Contact
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            Let's <span className="text-primary">chat.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">
            Hungry customer with a question? Restaurant ready to go live? Drop us a line.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-success/15 text-success">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h2 className="mt-6 font-display text-3xl font-extrabold">Message sent!</h2>
                <p className="mt-2 max-w-sm text-foreground/65">
                  Thanks for reaching out — someone from the ThothFood team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <label className="text-sm font-semibold">I am a…</label>
                  <select
                    required
                    defaultValue=""
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="" disabled>Select one</option>
                    <option value="customer">Customer</option>
                    <option value="restaurant">Restaurant owner</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Ama Boateng"
                      className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold">Message</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us what's on your mind…"
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-background p-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-[0_12px_30px_-12px_oklch(0.745_0.165_60/0.6)] sm:w-auto"
                >
                  Send message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-secondary p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">Email</h3>
              <p className="mt-1 text-foreground/65">
                <a href="mailto:admin@thothaigh.com" className="hover:text-primary">admin@thothaigh.com</a>
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">Based in</h3>
              <p className="mt-1 text-foreground/65">Accra, Ghana 🇬🇭<br />Serving customers and restaurants across the country.</p>
            </div>
            <div className="rounded-2xl bg-dark p-6 text-dark-foreground">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-success text-success-foreground">
                <MessageCircle className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">Just want food?</h3>
              <p className="mt-1 text-white/65">Skip the form — message a ThothFood restaurant on WhatsApp and start ordering.</p>
              <a
                href="https://wa.me/233000000000"
                className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
              >
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
