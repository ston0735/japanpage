import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, PROMO } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 md:py-32">
      <div className="washi-paper absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-[#3a3329] to-ink-900" />

      <div className="editorial-num text-honey-300/15">了</div>

      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-honey-400/50" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-200/90">
            Final Step
          </span>
          <div className="h-px w-12 bg-honey-400/50" />
        </div>

        <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-honey-50 leading-[1.2]">
          今日から、
          <br />
          <span className="italic text-outline-honey">養生をはじめましょう。</span>
        </h2>

        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg leading-[1.9] text-honey-50/85">
          {PROMO.label}。
          <br />
          LINE 友だち追加で、養生動画と電子書籍をすぐにお受け取りいただけます。
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[var(--color-line)] hover:bg-[var(--color-line-dark)] text-white rounded-full px-10 h-14 text-base shadow-2xl shadow-[var(--color-line)]/30"
          >
            <a
              href={CONTACT.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              LINE で無料特典を受取
            </a>
          </Button>
          <p className="text-xs text-honey-50/60">
            登録は無料・解除はいつでも可能です
          </p>
        </div>
      </div>
    </section>
  );
}
