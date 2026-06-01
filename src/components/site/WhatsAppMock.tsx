import { CheckCheck } from "lucide-react";

export type WaMessage = {
  from: "them" | "you";
  text?: string;
  time?: string;
  card?: {
    title: string;
    price: string;
    emoji: string;
    desc?: string;
    img?: string;
    added?: boolean;
    section?: string;
  };
  replyBtns?: string[];
  urlBtn?: string;
};

const defaultMessages: WaMessage[] = [
  {
    from: "them",
    text: "Your Cart 🧾\n\nJollof Rice + Chicken x1  GHS 55.00\nBanku with Tilapia x1  GHS 75.00\n\nSubtotal: GHS 130.00\n\nHow would you like to receive your order?",
    replyBtns: ["🚚 Delivery", "🏃 Pickup", "✏️ Update"],
    time: "12:31",
  },
  { from: "you", text: "🚚 Delivery", time: "12:31" },
  {
    from: "them",
    text: "Order Confirmed! 🎉\n\nOrder #0042\nDelivery to: Tf Hostel, UG\nTotal paid: GHS 150.00\n\nPreparing your food now 👨‍🍳",
    urlBtn: "📦 Track My Order",
    time: "12:34",
  },
];

// ─── Catalogue view (mirrors S3 in the demo) ────────────────────────────────

function CatalogueView({ messages, restaurant }: { messages: WaMessage[]; restaurant: string }) {
  const items = messages.filter((m) => m.card);

  const addedItems = items.filter((m) => m.card?.added);
  const addedCount = addedItems.length;
  const addedTotal = addedItems.reduce((sum, m) => {
    const n = parseFloat(m.card!.price.replace(/[^0-9.]/g, ""));
    return sum + (isNaN(n) ? 0 : n);
  }, 0);

  // Group items by section
  const sectionMap: Record<string, WaMessage[]> = {};
  items.forEach((m) => {
    const sec = m.card?.section ?? "Main Dishes";
    if (!sectionMap[sec]) sectionMap[sec] = [];
    sectionMap[sec].push(m);
  });

  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col overflow-hidden rounded-[2.25rem] border-[10px] border-dark shadow-[0_30px_80px_-20px_oklch(0.18_0.005_50/0.45)]">
      {/* Status bar */}
      <div className="flex items-center justify-between bg-[#075E54] px-4 pb-0.5 pt-2 text-[10px] font-semibold text-white/90">
        <span>9:41</span>
        <span className="opacity-60 tracking-tight">▌▌▌▌ 5G ▲</span>
      </div>

      {/* Catalogue header */}
      <div className="flex items-center gap-2.5 bg-[#075E54] px-3 pb-3 pt-1 text-white">
        <span className="text-xl leading-none opacity-80">‹</span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold leading-tight">{restaurant}</p>
          <p className="text-[10.5px] opacity-70">Menu · 24 items</p>
        </div>
        <div className="relative grid h-8 w-8 place-items-center rounded-full bg-white/[0.12] text-[15px]">
          🛒
          {addedCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full border border-[#075E54] bg-[#25D366] text-[9px] font-extrabold text-white">
              {addedCount}
            </span>
          )}
        </div>
      </div>

      {/* Item list */}
      <div className="overflow-y-auto bg-white" style={{ maxHeight: "380px" }}>
        {Object.entries(sectionMap).map(([section, sectionItems]) => (
          <div key={section}>
            <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-[#888]">
              {section}
            </p>
            {sectionItems.map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 border-b border-[#f2f2f2] px-3 py-2.5 last:border-b-0"
              >
                {m.card?.img ? (
                  <img
                    src={m.card.img}
                    alt={m.card.title}
                    className="h-[54px] w-[54px] flex-shrink-0 rounded-lg object-cover"
                  />
                ) : (
                  <div className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-lg bg-[#f0f0f0] text-2xl">
                    {m.card?.emoji}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-[12.5px] font-semibold leading-snug text-[#111]">{m.card?.title}</p>
                  {m.card?.desc && (
                    <p className="mt-0.5 truncate text-[10.5px] text-[#888]">{m.card.desc}</p>
                  )}
                  <p className="mt-0.5 text-[12px] font-bold text-[#075E54]">{m.card?.price}</p>
                </div>
                <div
                  className={`grid h-[30px] w-[30px] flex-shrink-0 place-items-center rounded-full font-bold text-white shadow-sm ${
                    m.card?.added
                      ? "bg-[#075E54] text-[13px]"
                      : "bg-[#25D366] text-[18px] shadow-[0_2px_6px_rgba(37,211,102,.35)]"
                  }`}
                >
                  {m.card?.added ? "✓" : "+"}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Place Your Order bar */}
      {addedCount > 0 && (
        <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-[13px] font-bold text-white">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-white/25 px-1.5 py-0.5 text-[11px] font-extrabold">
              {addedCount}
            </span>
            <span>Place Your Order</span>
          </div>
          <span>GHS {addedTotal.toFixed(2)} →</span>
        </div>
      )}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export function WhatsAppMock({
  messages = defaultMessages,
  restaurant = "Severin Plus",
  status = "online",
  catalogue = false,
}: {
  messages?: WaMessage[];
  restaurant?: string;
  status?: string;
  catalogue?: boolean;
}) {
  if (catalogue) {
    return <CatalogueView messages={messages} restaurant={restaurant} />;
  }

  return (
    <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[2.25rem] border-[10px] border-dark shadow-[0_30px_80px_-20px_oklch(0.18_0.005_50/0.45)]">
      {/* Status bar */}
      <div className="flex items-center justify-between bg-[#075E54] px-4 pb-0.5 pt-2 text-[10px] font-semibold text-white/90">
        <span>9:41</span>
        <span className="opacity-60 tracking-tight">▌▌▌▌ 5G ▲</span>
      </div>

      {/* WhatsApp header */}
      <div className="flex items-center gap-2.5 bg-[#075E54] px-3 pb-3 pt-1 text-white">
        <span className="text-xl leading-none opacity-80">‹</span>
        <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-white/15 bg-[#1F8A6E] text-sm font-bold text-white">
          {restaurant.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold leading-tight">{restaurant}</p>
          <p className="flex items-center gap-1.5 text-[10px] opacity-75">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            {status}
          </p>
        </div>
        <div className="flex items-center gap-4 text-[15px] opacity-85">
          <span title="Catalogue">🛍️</span>
          <span>📹</span>
          <span className="text-base font-bold">⋮</span>
        </div>
      </div>

      {/* Chat body */}
      <div
        className="flex flex-col gap-1.5 px-2.5 py-3"
        style={{ background: "#E5DDD5", minHeight: "400px" }}
      >
        <div className="mx-auto mb-1 rounded-md bg-white/80 px-3 py-0.5 text-[10px] font-semibold text-[#555] shadow-sm">
          TODAY
        </div>

        {messages.map((m, i) => {
          const mine = m.from === "you";
          return (
            <div key={i} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[82%] overflow-hidden shadow-sm ${
                  mine
                    ? "rounded-xl rounded-tr-sm bg-[#DCF8C6]"
                    : "rounded-xl rounded-tl-sm bg-white"
                }`}
              >
                {m.text && (
                  <div className="px-3 pb-1 pt-2">
                    <p className="whitespace-pre-line text-[12.5px] leading-relaxed text-[#111]">
                      {m.text}
                    </p>
                    {m.time && (
                      <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#999]">
                        {m.time}
                        {mine && <CheckCheck className="h-3 w-3 text-[#4FC3F7]" />}
                      </div>
                    )}
                  </div>
                )}

                {m.replyBtns && !mine && (
                  <div className="border-t border-[#eeeeee]">
                    {m.replyBtns.map((btn, bi) => (
                      <div
                        key={bi}
                        className={`px-3 py-2 text-center text-[12.5px] font-medium text-[#0099FF] ${
                          bi < m.replyBtns!.length - 1 ? "border-b border-[#f0f0f0]" : ""
                        }`}
                      >
                        {btn}
                      </div>
                    ))}
                  </div>
                )}

                {m.urlBtn && !mine && (
                  <div className="flex items-center justify-center gap-1.5 border-t border-[#eeeeee] px-3 py-2 text-[12.5px] font-medium text-[#0099FF]">
                    <span className="text-[11px]">↗</span>
                    {m.urlBtn}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 bg-[#E5DDD5] px-2 py-1.5">
        <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-3 py-2 text-[11.5px] text-[#999] shadow-sm">
          <span>😊</span>
          <span className="flex-1">Type a message</span>
          <span>📎</span>
          <span>📷</span>
        </div>
        <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-[#075E54] text-sm text-white">
          🎤
        </div>
      </div>
    </div>
  );
}
