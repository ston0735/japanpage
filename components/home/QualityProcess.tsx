import Image from "next/image";

const STEPS = [
  ["LINE 友だち追加", "公式 LINE を友だち追加するだけで、無料特典のお受け取りが始まります。"],
  ["無料特典を受取", "養生知識動画 (約60分) と養生電子書籍 (PDF) をすぐにお送りします。"],
  ["無料体験コース受講", "期間限定で全コンテンツを無料公開。あなたのペースで養生の基礎を学べます。"],
  ["本講座のご案内", "ご希望の方には本講座 (¥26,000) をご案内。受講は任意でご判断ください。"],
] as const;

export function QualityProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="editorial-num">07</div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            07
          </span>
          <div className="section-divider" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            How it works
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-start">
          <div>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.2] mb-12 max-w-2xl">
              4ステップで、
              <br />
              養生をはじめる。
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              {STEPS.map(([title, desc], i) => (
                <div key={title} className="group">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-display italic text-2xl text-honey-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-ink-200" />
                  </div>
                  <h3 className="font-display text-lg text-ink-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-ink-700 leading-[1.8]">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl shadow-honey-300/30 ring-1 ring-honey-200/60">
            <Image
              src="/images/online-class.jpg"
              alt="專門家によるオンライン養生講座を受講する女性"
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
