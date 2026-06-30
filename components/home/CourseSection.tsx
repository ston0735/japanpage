import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COURSE, CONTACT, PROMO } from "@/lib/site";

export function CourseSection() {
  return (
    <section
      id="course"
      className="relative overflow-hidden bg-honey-100/40 py-20 md:py-28 scroll-mt-20"
    >
      <div className="editorial-num">04</div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            04
          </span>
          <div className="section-divider" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            Course
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.2] max-w-2xl">
            7つのテーマで、
            <br />
            体系的に学ぶ。
          </h2>
          <p className="text-base text-ink-700 leading-[1.9] max-w-md">
            中医学の基礎から日々の養生まで、現代の暮らしにそのまま使える知識を体系的にご紹介します。
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {COURSE.topics.map((topic, i) => (
            <div
              key={topic}
              className="flex items-start gap-3 rounded-2xl border border-ink-200/60 bg-white p-5 transition-all duration-300 hover:border-honey-400 hover:shadow-lg hover:shadow-honey-200/30"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-honey-100 font-display italic text-base text-honey-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg text-ink-900 leading-snug">
                  {topic}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Course Pricing Card */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* 無料体験 */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-leaf-500 bg-white p-8 md:p-10 shadow-xl shadow-leaf-500/10">
            <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-leaf-500 via-leaf-300 to-leaf-500" />
            <div className="inline-flex items-center gap-2 rounded-full bg-leaf-50 px-3 py-1 text-xs font-medium text-leaf-700">
              {PROMO.shortLabel}
            </div>
            <h3 className="mt-4 font-display text-2xl md:text-3xl text-ink-900">
              {COURSE.trialName}
            </h3>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-display text-5xl md:text-6xl text-leaf-700 leading-none">
                ¥0
              </span>
              <span className="text-sm text-ink-500">
                {PROMO.startDate}〜{PROMO.endDate}
              </span>
            </div>
            <p className="mt-4 text-sm text-ink-700 leading-[1.8]">
              {COURSE.trialDescription}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink-700">
              {COURSE.benefits.map((b) => (
                <li key={b.title} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                  <span>
                    <strong className="text-ink-900">{b.title}</strong>
                    <span className="ml-1 text-ink-500">— {b.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="mt-7 w-full bg-[var(--color-line)] hover:bg-[var(--color-line-dark)] text-white rounded-full h-12"
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
          </div>

          {/* 有料コース */}
          <div className="relative overflow-hidden rounded-3xl border border-ink-200/60 bg-honey-50 p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-honey-200 px-3 py-1 text-xs font-medium text-honey-700">
              本講座
            </div>
            <h3 className="mt-4 font-display text-2xl md:text-3xl text-ink-900">
              {COURSE.paidName}
            </h3>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-display text-5xl md:text-6xl text-honey-700 leading-none">
                {COURSE.paidPriceLabel}
              </span>
              <span className="text-sm text-ink-500">(税込)</span>
            </div>
            <p className="mt-4 text-sm text-ink-700 leading-[1.8]">
              無料体験で養生の基礎を学んだ方向けに、より深い臨床応用と個別相談を含む本講座をご用意しています。
            </p>
            <dl className="mt-5 space-y-2 text-sm text-ink-700">
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-ink-500">お支払い</dt>
                <dd>{COURSE.paymentMethods.join(" / ")}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-ink-500">受講形式</dt>
                <dd>オンライン (動画・電子書籍・LINE 個別相談)</dd>
              </div>
            </dl>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-7 w-full border-honey-500 text-honey-700 hover:bg-honey-100 rounded-full h-12"
            >
              <Link href="/tokushoho">
                料金・取引条件の詳細
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 法令対応：付費銜接の免責聲明 */}
        <div className="mt-10 rounded-2xl border-l-4 border-honey-500 bg-honey-50 p-5 md:p-6 text-sm leading-relaxed text-ink-700">
          <p className="font-medium text-ink-900 mb-1">ご案内</p>
          <p>{COURSE.paidDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
