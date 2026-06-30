"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const MILESTONES = [
  {
    year: "1953",
    title: "創業者・修業の道へ",
    desc: "創業者が伝統中医学の道に入る。古典医書と臨床経験から養生の基礎を確立。",
  },
  {
    year: "1980",
    title: "中医診療の現場へ",
    desc: "台湾の中医診療所で多くの臨床に立ち会う。体質と病理の関係を体系化。",
  },
  {
    year: "2005",
    title: "養生講座の開設",
    desc: "「予防こそ最良の医」の思想のもと、家庭でできる養生を伝える講座を開始。",
  },
  {
    year: "2018",
    title: "ベスト株式会社 設立",
    desc: "オンライン教育の時代に合わせて法人化。動画と電子書籍による教材開発を本格化。",
  },
  {
    year: "2026",
    title: "健康維持コース 公開",
    desc: "二千年の中医智慧を 7 つのテーマに体系化し、日本の方々に向けてリリース。",
  },
] as const;

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    import("gsap").then((g) => {
      const gsap = g.default;
      import("gsap/ScrollTrigger").then((st) => {
        const ScrollTrigger = st.default;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // ストーリー画像のパララックス
          gsap.to(".bs-poster-img", {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: ".bs-poster",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });

          gsap.from(".bs-milestone", {
            opacity: 0,
            y: 32,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".bs-timeline",
              start: "top 80%",
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
      className="relative overflow-hidden bg-honey-50 py-20 md:py-28"
    >
      <div className="editorial-num">06</div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            06
          </span>
          <div className="section-divider" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            Heritage Timeline
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* 左：ストーリー ポスター画像 (タイトル + 本文 込み) */}
          <div className="bs-poster relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl shadow-honey-700/20 ring-1 ring-honey-200/60">
            <div className="bs-poster-img absolute inset-x-0 -top-[8%] h-[120%] will-change-transform">
              <Image
                src="/images/brand-story.jpg"
                alt="中医学の道、七十余年 — ベスト株式会社のストーリー"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

          {/* 右：年表 */}
          <div>
            <h2 className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-ink-900 leading-[1.2] mb-3">
              ベストの歩み、
              <br />
              <span className="italic text-honey-700">七十余年の軌跡。</span>
            </h2>
            <p className="text-base text-ink-700 leading-[1.9] mb-10 max-w-md">
              一筋の信念が、家業から養生講座へ。創業から現在までの主要な節目をたどります。
            </p>

            <div className="bs-timeline relative">
              <div className="absolute left-[8px] top-2 bottom-2 w-px bg-gradient-to-b from-honey-400 via-honey-300 to-transparent" />
              <ol className="space-y-10">
                {MILESTONES.map((m) => (
                  <li key={m.year} className="bs-milestone relative pl-10">
                    <span className="absolute left-0 top-2 h-[18px] w-[18px] rounded-full bg-honey-400 ring-4 ring-honey-50" />
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                      <span className="font-display italic text-3xl md:text-4xl text-honey-600 leading-none">
                        {m.year}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-500">
                        Milestone
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl text-ink-900">
                      {m.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-700 leading-relaxed">
                      {m.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
