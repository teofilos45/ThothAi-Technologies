import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsAppMock } from "@/components/site/WhatsAppMock";
import { MessageCircle, Store, ShoppingCart, CreditCard, CheckCircle2, MapPin, ChefHat } from "lucide-react";

export const Route = createFileRoute("/thothfood/how-it-works")({
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

const R = "Severin Plus";

// These 7 steps mirror the 7 numbered scenes in the demo exactly.
const steps = [
  // Scene 1: "1 · Customer opens the chat and taps the catalogue icon"
  {
    icon: MessageCircle,
    title: "Customer opens the chat and taps the catalogue icon",
    desc: "Spot a ThothFood restaurant on Instagram, a flyer, or a friend's share. Tap their WhatsApp link — the chat opens. Then tap the 🛍️ shop icon in the header to browse the menu.",
    mock: {
      restaurant: R,
      messages: [
        {
          from: "them" as const,
          text: "👋 Welcome to Severin Plus!\n\nWe're online and ready to take your order.\n\nTap 🛍️ above to browse our full menu.",
          time: "9:41",
        },
      ],
    },
  },

  // Scene 2: "2 · They browse the menu and add items"
  {
    icon: Store,
    title: "They browse the menu and add items",
    desc: "The full catalogue opens inside WhatsApp — real photos, real prices. Tap + to add items. The cart badge updates live. When ready, tap Place Your Order.",
    mock: {
      restaurant: R,
      catalogue: true,
      messages: [
        {
          from: "them" as const,
          card: {
            title: "Jollof Rice + Chicken", price: "GHS 55.00", emoji: "🍛",
            desc: "Party-style with fried plantain",
            img: "https://images.unsplash.com/photo-1664993101841-036f189719b6?w=180&h=180&fit=crop&q=80",
            added: true, section: "Main Dishes",
          },
        },
        {
          from: "them" as const,
          card: {
            title: "Banku with Tilapia", price: "GHS 75.00", emoji: "🐟",
            desc: "Fermented corn dough with grilled tilapia",
            img: "https://images.unsplash.com/photo-1665401015549-712c0dc5ef85?w=180&h=180&fit=crop&q=80",
            added: true, section: "Main Dishes",
          },
        },
        {
          from: "them" as const,
          card: {
            title: "Waakye Special", price: "GHS 35.00", emoji: "🍲",
            desc: "Rice & beans with gari & stew",
            img: "https://images.unsplash.com/photo-1743630458593-286a8ae99625?w=180&h=180&fit=crop&q=80",
            section: "Main Dishes",
          },
        },
        {
          from: "them" as const,
          card: {
            title: "Fried Rice & Chicken", price: "GHS 60.00", emoji: "🍽️",
            desc: "Seasoned fried rice with grilled chicken",
            img: "https://images.unsplash.com/photo-1579112965143-9139ed2a522a?w=180&h=180&fit=crop&q=80",
            section: "Main Dishes",
          },
        },
        {
          from: "them" as const,
          card: {
            title: "Sobolo (Hibiscus)", price: "GHS 15.00", emoji: "🥤",
            desc: "Fresh, chilled, local",
            img: "https://images.unsplash.com/photo-1559159266-17d182ec7c24?w=180&h=180&fit=crop&q=80",
            section: "Drinks",
          },
        },
        {
          from: "them" as const,
          card: {
            title: "Malt Drink", price: "GHS 12.00", emoji: "🍺",
            desc: "Malta, Amstel or Supermalt",
            img: "https://images.unsplash.com/photo-1495399396117-a3763646f854?w=180&h=180&fit=crop&q=80",
            section: "Drinks",
          },
        },
      ],
    },
  },

  // Scene 3: "3 · Cart, address, and order summary — all in WhatsApp"
  {
    icon: ShoppingCart,
    title: "Cart, address, and order summary — all in WhatsApp",
    desc: "The bot confirms the cart, asks for delivery or pickup, collects the address, checks for notes, then shows the full order summary before payment — all inside the chat.",
    mock: {
      restaurant: R,
      messages: [
        {
          from: "you" as const,
          text: "🧾 Order (2 items)\n  • Jollof Rice + Chicken × 1\n  • Banku with Tilapia × 1\nGHS 130.00",
          time: "12:31",
        },
        {
          from: "them" as const,
          text: "Your Cart 🧾\n\nJollof Rice + Chicken x1  GHS 55.00\nBanku with Tilapia x1  GHS 75.00\n\nSubtotal: GHS 130.00\n\nHow would you like to receive your order?",
          replyBtns: ["🚚 Delivery", "🏃 Pickup", "✏️ Update"],
          time: "12:31",
        },
        { from: "you" as const, text: "🚚 Delivery", time: "12:31" },
        { from: "them" as const, text: "Please share your delivery address 📍", time: "12:31" },
        { from: "you" as const, text: "Tf Hostel, UG", time: "12:32" },
        {
          from: "them" as const,
          text: "Any notes for the kitchen? (allergies, extra sauce, etc.)",
          replyBtns: ["⭕ Skip"],
          time: "12:32",
        },
        { from: "you" as const, text: "⭕ Skip", time: "12:32" },
      ],
    },
  },

  // Scene 4: "4 · Paystack opens, payment confirmed"
  {
    icon: CreditCard,
    title: "Paystack opens, payment confirmed",
    desc: "After reviewing the full order summary and confirming, the bot sends a secure Paystack link. Tap Pay Online, select MTN MoMo, and pay GHS 150.00 in seconds.",
    mock: {
      restaurant: R,
      messages: [
        {
          from: "them" as const,
          text: "Order Summary 🧾\n\nJollof Rice + Chicken x1  GHS 55.00\nBanku with Tilapia x1     GHS 75.00\n\nSubtotal:     GHS 130.00\nDelivery fee: GHS  20.00\n─────────────────────\nTOTAL:        GHS 150.00\n\nDelivery to: Tf Hostel, UG\nNotes: None\n\nIs everything correct?",
          replyBtns: ["✅ Confirm & Pay", "✏️ Update", "🔄 Restart"],
          time: "12:33",
        },
        { from: "you" as const, text: "✅ Confirm & Pay", time: "12:33" },
        {
          from: "them" as const,
          text: "How would you like to pay? 💳",
          replyBtns: ["💳 Pay Online", "💵 Cash on Delivery", "🔄 Restart"],
          time: "12:33",
        },
        { from: "you" as const, text: "💳 Pay Online", time: "12:33" },
        {
          from: "them" as const,
          text: "Complete your payment here 💳",
          urlBtn: "💳 Pay Now",
          time: "12:33",
        },
        { from: "you" as const, text: "💳 Pay Now", time: "12:33" },
      ],
    },
  },

  // Scene 5: "5 · Order confirmed — tap to track your delivery live"
  {
    icon: CheckCircle2,
    title: "Order confirmed — tap to track your delivery live",
    desc: "Payment lands instantly. An order confirmation drops into the chat — Order #0042, full item list, delivery address, total paid — and a live tracking link.",
    mock: {
      restaurant: R,
      messages: [
        {
          from: "them" as const,
          text: "Order Confirmed! 🎉\n\nOrder #0042\nJollof Rice + Chicken x1\nBanku with Tilapia x1\nDelivery to: Tf Hostel, UG\nTotal paid: GHS 150.00\n\nWe'll notify you when your order is ready 👨‍🍳",
          urlBtn: "📦 Track My Order",
          time: "12:34",
        },
        { from: "you" as const, text: "📦 Track My Order", time: "12:34" },
      ],
    },
  },

  // Scene 6: "6 · Real-time order tracking in the browser"
  {
    icon: MapPin,
    title: "Real-time order tracking in the browser",
    desc: "Tap the tracking link and a live order page opens at track.thothaigh.com — showing every status from Order Placed and Accepted, through Preparing, all the way to Delivered.",
    mock: {
      restaurant: R,
      messages: [
        { from: "them" as const, text: "Order Confirmed! 🎉\n\nOrder #0042\nDelivery to: Tf Hostel, UG\nTotal paid: GHS 150.00", time: "12:34" },
        {
          from: "them" as const,
          text: "Track your order live 📦",
          urlBtn: "📦 Track My Order",
          time: "12:34",
        },
        { from: "you" as const, text: "📦 Track My Order", time: "12:34" },
      ],
    },
  },

  // Scene 7: "7 · Kitchen accepted — your food is being prepared"
  {
    icon: ChefHat,
    title: "Kitchen accepted — your food is being prepared",
    desc: "The kitchen confirms your order and the notification lands straight in your WhatsApp. No calls. No waiting on hold. Just a message and your food is on its way.",
    mock: {
      restaurant: R,
      messages: [
        { from: "them" as const, text: "Track your order live 📦", urlBtn: "📦 Track My Order", time: "12:34" },
        { from: "you" as const, text: "📦 Track My Order", time: "12:34" },
        {
          from: "them" as const,
          text: "✅ Severin Plus has accepted your order!\nYour food is being prepared 👨‍🍳",
          time: "12:35",
        },
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
                <WhatsAppMock
                  restaurant={s.mock.restaurant}
                  messages={s.mock.messages}
                  catalogue={(s.mock as { catalogue?: boolean }).catalogue}
                />
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
              to="/thothfood/restaurants"
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
