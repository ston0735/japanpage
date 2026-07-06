import { Stethoscope, Smartphone, MessageCircleHeart } from "lucide-react";

const BADGES = [
  {
    icon: Stethoscope,
    title: "專門家による直接監修",
    desc: "臨床経験豊富な資深專門家が、すべてのレッスンを監修・解説。養生の本物の智慧をそのままお届けします。",
  },
  {
    icon: Smartphone,
    title: "オンラインでいつでも受講",
    desc: "スマートフォン・PC・タブレット対応。通勤中や寝る前など、ご自身のペースで学習いただけます。",
  },
  {
    icon: MessageCircleHeart,
    title: "個別ご相談にも対応",
    desc: "LINE 公式アカウントで、講座内容や体質に関するご質問を直接お受けします。学びを続けやすい伴走型サポート。",
  },
] as const;

export function TrustBadges() {
  return (
    <section className="relative overflow-hidden bg-honey-50 py-16 md:py-24">
      <div className="editorial-num">03</div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            03
          </span>
          <div className="section-divider" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            Promise
          </span>
        </div>

        <h2 className="font-display font-light text-4xl md:text-5xl text-ink-900 mb-12 max-w-3xl leading-[1.25]">
          「学びやすく、続けられる」を、お約束します。
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {BADGES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-ink-200/60 bg-white p-8 transition-all duration-500 hover:border-honey-300 hover:shadow-xl hover:shadow-honey-200/40 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf-50">
                <Icon className="h-7 w-7 text-leaf-700" />
              </div>
              <h3 className="mt-6 font-display text-xl text-ink-900">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
                {desc}
              </p>
              <div className="absolute right-6 top-6 font-display italic text-3xl text-honey-200">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
