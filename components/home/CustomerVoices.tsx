const VOICES = [
  {
    name: "佐藤 美咲 さん",
    role: "40代・東京都",
    quote:
      "更年期に入って体調の波が大きくなり、何から始めれば良いか分かりませんでした。体質判定のレッスンで自分のタイプが分かってから、四季の養生がすっと腑に落ちて。続けられる学び方だと感じています。",
  },
  {
    name: "鈴木 健一 さん",
    role: "50代・大阪府",
    quote:
      "薬に頼らず日々の食事で整えたいと思っていました。薬膳のレッスンで身近な食材で十分と知れたのが大きな収穫。LINE で先生に相談できる安心感も、独学にはない価値です。",
  },
  {
    name: "山田 由香 さん",
    role: "30代・福岡県",
    quote:
      "経絡のレッスンが特に良かったです。仕事の合間にツボを押すだけで肩こりが楽になり、夜の眠りも深くなりました。動画は何度も見返せて、忙しくても自分のペースで続けられます。",
  },
] as const;

export function CustomerVoices() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="editorial-num">08</div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            08
          </span>
          <div className="section-divider" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            Voices
          </span>
        </div>

        <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.2] mb-16">
          受講者の声。
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {VOICES.map((v) => (
            <div key={v.name} className="border-t border-honey-300/60 pt-8">
              <p className="font-display italic text-xl text-ink-900/85 leading-[1.8] mb-8">
                &ldquo;{v.quote}&rdquo;
              </p>
              <p className="font-display text-base text-ink-900">{v.name}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
                {v.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
