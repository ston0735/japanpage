"use client";

import { useEffect, useRef } from "react";

type Stat = {
  readonly key: string;
  readonly value: number;
  readonly display: (n: number) => string;
  readonly label: string;
  readonly desc: string;
};

const STATS: readonly Stat[] = [
  {
    key: "years",
    value: 2000,
    display: (n) => `${Math.round(n)}+`,
    label: "Years",
    desc: "養生の歴史と知恵を現代へ",
  },
  {
    key: "lessons",
    value: 30,
    display: (n) => `${Math.round(n)}+`,
    label: "Lessons",
    desc: "体質判定から経絡まで、全7章の体系講座",
  },
  {
    key: "supervision",
    value: 100,
    display: (n) => `${Math.round(n)}%`,
    label: "監修",
    desc: "資深專門家による専門監修",
  },
] as const;

const JP_FINAL = "JP";
const JP_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function BrandStats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    import("gsap").then((g) => {
      const gsap = g.default;
      import("gsap/ScrollTrigger").then((st) => {
        const ScrollTrigger = st.default;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // Heading fade-in
          gsap.from(".bs-heading", {
            opacity: 0,
            y: 24,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".bs-heading",
              start: "top 85%",
              once: true,
            },
          });

          // 数値カウントアップ
          STATS.forEach((stat) => {
            const el = document.querySelector(
              `[data-stat="${stat.key}"]`,
            ) as HTMLElement | null;
            if (!el) return;

            const proxy = { val: 0 };
            ScrollTrigger.create({
              trigger: el,
              start: "top 85%",
              once: true,
              onEnter: () => {
                el.textContent = stat.display(0);
                gsap.to(proxy, {
                  val: stat.value,
                  duration: 2.0,
                  ease: "power2.out",
                  onUpdate: () => {
                    el.textContent = stat.display(proxy.val);
                  },
                });
              },
            });
          });

          // JP スクランブル
          const jpEl = document.querySelector("[data-stat=\"jp\"]") as
            | HTMLElement
            | null;
          if (jpEl) {
            ScrollTrigger.create({
              trigger: jpEl,
              start: "top 85%",
              once: true,
              onEnter: () => {
                const totalSteps = 16;
                const stepDuration = 70;
                let step = 0;
                const id = window.setInterval(() => {
                  step += 1;
                  if (step >= totalSteps) {
                    jpEl.textContent = JP_FINAL;
                    window.clearInterval(id);
                    return;
                  }
                  const a = JP_CHARS[Math.floor(Math.random() * JP_CHARS.length)];
                  const b = JP_CHARS[Math.floor(Math.random() * JP_CHARS.length)];
                  jpEl.textContent = `${a}${b}`;
                }, stepDuration);
              },
            });
          }

          // ステータスカード フェード
          gsap.from(".bs-stat-card", {
            opacity: 0,
            y: 28,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".bs-stats-grid",
              start: "top 85%",
              once: true,
            },
          });
        }, sectionRef);

        cleanup = () => ctx.revert();
      });
    });

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="editorial-num">02</div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            02
          </span>
          <div className="section-divider" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            Heritage
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20 items-start">
          <div className="bs-heading">
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.2] text-ink-900">
              二千年の養生を、
              <br />
              <span className="text-honey-600">あなたの暮らしへ。</span>
            </h2>
            <p className="mt-8 max-w-prose text-base leading-[1.9] text-ink-700">
              「健康維持コース」は、二千年以上の歴史を持つ伝統養生の智慧を、
              日々の暮らしに無理なく取り入れられるよう体系化した養生プログラムです。
              体質判定から四季の養生、経絡保健、薬膳まで、資深專門家が一つずつ丁寧に解説します。
            </p>
          </div>

          <div className="bs-stats-grid grid grid-cols-2 gap-x-6 gap-y-12">
            {STATS.map((stat) => (
              <div
                key={stat.key}
                className="bs-stat-card border-t border-ink-200 pt-5"
              >
                <div
                  data-stat={stat.key}
                  className="font-display font-light italic text-5xl md:text-6xl text-honey-600 leading-none tabular-nums"
                >
                  {stat.display(0)}
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-500">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-sm text-ink-700 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}

            {/* JP Support — スクランブル */}
            <div className="bs-stat-card border-t border-ink-200 pt-5">
              <div
                data-stat="jp"
                className="font-display font-light italic text-5xl md:text-6xl text-honey-600 leading-none tabular-nums"
              >
                {JP_FINAL}
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-500">
                Support
              </p>
              <p className="mt-1.5 text-sm text-ink-700 leading-relaxed">
                日本語ナビゲーションでわかりやすく
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
