import Image from "next/image";

const CONCERNS = [
  "体の不調が続く",
  "白髪が増えてきた",
  "眠りが浅い・夜中に目が覚める",
  "慢性的な体の不調",
] as const;

export function ConcernsBlock() {
  return (
    <section className="relative overflow-hidden bg-leaf-700 py-20 md:py-28">
      <div className="washi-paper absolute inset-0 opacity-30" />
      <div className="editorial-num text-honey-300/15">悩</div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-200/90">
            03.5
          </span>
          <div className="h-px w-[60px] bg-gradient-to-r from-honey-200/60 to-transparent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-200/90">
            Concerns
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-center">
          <div>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-honey-50 leading-[1.2]">
              こんなお悩み、
              <br />
              <span className="italic text-outline-honey">ありませんか？</span>
            </h2>
            <ul className="mt-8 space-y-3 text-base md:text-lg text-honey-50/90">
              {CONCERNS.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 border-l-2 border-honey-400/60 pl-4 leading-relaxed"
                >
                  <span className="text-honey-300">●</span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm md:text-base text-honey-50/80 leading-[1.9]">
              同じ年齢なのに、こんなに差が出る。
              <br />
              いろいろ試したのに、なかなか実感できない。
              <br />
              <strong className="text-honey-200">
                もう遠回りはやめませんか？
              </strong>
              大切な時間を、もっと自分のために。
            </p>
          </div>

          <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl shadow-ink-900/40 ring-1 ring-honey-400/30">
            <Image
              src="/images/concerns-vs-vitality.jpg"
              alt="加齢による不調から、活力ある毎日へ"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
