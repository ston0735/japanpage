import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdvisorCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="editorial-num">10</div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            10
          </span>
          <div className="section-divider" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            AI Advisor
          </span>
        </div>

        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-honey-100 via-honey-200 to-honey-300 p-10 md:p-16 shadow-xl shadow-honey-300/30">
          <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-honey-700 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                NEW｜AI 養生アドバイザー
              </div>
              <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.2]">
                体質に合った養生を、
                <br />
                <span className="text-honey-700">AI が一緒に考えます。</span>
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-800 md:text-lg">
                睡眠、冷え、消化、肌荒れ、ストレス──
                気になる体調を入力するだけで、AI が養生の視点から
                おすすめの養生法と関連レッスンをご提案します。登録不要・無料でご利用いただけます。
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-ink-900 text-honey-50 hover:bg-ink-700 rounded-full px-8 h-12"
              >
                <Link href="/advisor">
                  相談を始める
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="hidden items-center justify-center lg:flex">
              <div className="grid h-56 w-56 place-items-center rounded-3xl bg-white/60 p-8 backdrop-blur shadow-lg">
                <div className="text-center">
                  <p className="font-display italic text-7xl text-honey-700/40 leading-none">
                    気
                  </p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-500">
                    Qi · Vital Energy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
