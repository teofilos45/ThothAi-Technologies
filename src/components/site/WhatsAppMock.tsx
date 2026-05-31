import { Check } from "lucide-react";

type Message = {
  from: "them" | "you" | "system";
  text?: string;
  time?: string;
  card?: {
    title: string;
    price: string;
    emoji: string;
  };
};

const defaultMessages: Message[] = [
  { from: "them", text: "Hey! Welcome to Auntie Muni's 👋 What are you craving today?", time: "12:31" },
  { from: "you", text: "Jollof + chicken please 😋", time: "12:31" },
  {
    from: "them",
    card: { title: "Jollof + Grilled Chicken", price: "GHS 65", emoji: "🍗" },
    time: "12:32",
  },
  { from: "you", text: "Add to cart. Deliver to East Legon 🏠", time: "12:32" },
  { from: "them", text: "Got it. MoMo or card?", time: "12:32" },
  { from: "you", text: "MoMo 📱", time: "12:33" },
  { from: "them", text: "✅ Paid. Kitchen is on it — arrives in ~25 min. We'll keep you posted.", time: "12:33" },
];

export function WhatsAppMock({
  messages = defaultMessages,
  restaurant = "Auntie Muni's Kitchen",
  status = "online",
}: {
  messages?: Message[];
  restaurant?: string;
  status?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[2.25rem] border-[10px] border-dark bg-dark shadow-[0_30px_80px_-20px_oklch(0.18_0.005_50/0.45)]">
      {/* Header */}
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-base font-bold text-primary-foreground">
          {restaurant.charAt(0)}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold">{restaurant}</p>
          <p className="text-[11px] opacity-80">{status}</p>
        </div>
      </div>

      {/* Chat body */}
      <div
        className="space-y-2 px-3 py-4"
        style={{
          background:
            "linear-gradient(180deg, #ECE5DD 0%, #E4DDD2 100%)",
          minHeight: "440px",
        }}
      >
        {messages.map((m, i) => {
          if (m.card) {
            return (
              <div key={i} className="flex">
                <div className="ml-1 max-w-[78%] overflow-hidden rounded-2xl rounded-tl-md bg-white shadow-sm">
                  <div className="grid h-32 w-full place-items-center bg-accent text-5xl">
                    {m.card.emoji}
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-semibold text-foreground">{m.card.title}</p>
                    <p className="mt-0.5 text-base font-bold text-primary">{m.card.price}</p>
                    <button className="mt-2 w-full rounded-lg bg-primary py-2 text-xs font-semibold text-primary-foreground">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          }
          const mine = m.from === "you";
          return (
            <div key={i} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-[13px] leading-snug shadow-sm ${
                  mine
                    ? "rounded-tr-md bg-[#DCF8C6] text-foreground"
                    : "rounded-tl-md bg-white text-foreground"
                }`}
              >
                <p>{m.text}</p>
                <div className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-foreground/50">
                  <span>{m.time}</span>
                  {mine && <Check className="h-3 w-3 text-info" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
