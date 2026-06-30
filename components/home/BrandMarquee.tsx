const PHRASE = "伝統中医学 — 体質判定 — 四季養生 — 経絡保健 — 薬膳食療 — ";

export function BrandMarquee() {
  return (
    <section className="relative overflow-hidden bg-honey-100/50 py-12 md:py-16">
      <div className="relative w-[200vw] left-[-50vw] -rotate-[1.5deg] pointer-events-none">
        <div className="animate-marquee">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="font-display italic text-[9vw] md:text-[7vw] font-light tracking-tight text-outline-honey px-4 flex-shrink-0 leading-none"
            >
              {PHRASE}
              {PHRASE}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
