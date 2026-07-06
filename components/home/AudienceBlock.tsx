import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const TARGETS = [
  "体調を整えたい方",
  "ご家族の健康を守りたい方",
  "植物中心の食生活に興味がある方",
  "生活習慣や体質改善に関心がある方",
  "体にやさしい食事を学びたい方",
  "食事管理について知りたい方",
] as const;

export function AudienceBlock() {
  return (
    <section className="relative overflow-hidden bg-honey-50 py-20 md:py-28">
      <div className="editorial-num">対</div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            03.8
          </span>
          <div className="section-divider" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            For Whom
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl shadow-honey-300/30 ring-1 ring-honey-200/60 lg:order-2">
            <Image
              src="/images/audience-couple.jpg"
              alt="食事と健康の講座 — こんな方におすすめ"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
          </div>

          <div className="lg:order-1">
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.2]">
              こんな方に
              <br />
              <span className="text-honey-700">おすすめ。</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink-700 leading-[1.9] max-w-md">
              養生は、特定の病気の治療法ではなく、
              「体質を整える生活の工夫」を体系化した知恵です。
              次のような方にぴったりです。
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {TARGETS.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-2 rounded-xl border border-honey-200/70 bg-white px-4 py-3 text-sm text-ink-800 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
