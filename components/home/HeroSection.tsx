"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, PROMO } from "@/lib/site";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    import("gsap").then((g) => {
      const gsap = g.default;
      import("gsap/ScrollTrigger").then((st) => {
        const ScrollTrigger = st.default;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // スクロール連動：テキスト群フェード + 上昇
          gsap.to(".hero-text-stack", {
            opacity: 0,
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });

          // スクロール連動：背景画像のパララックス + ズーム
          gsap.to(".hero-image", {
            scale: 1.12,
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });

          // スクロール連動：暗グラデのオーバーレイ強化
          gsap.to(".hero-vignette", {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });

          // 下部 Scroll/Since1953 はスクロールで先に消える
          gsap.to(".hero-bottombar", {
            opacity: 0,
            y: 20,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "30% top",
              scrub: 0.3,
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
      className="relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#3F5C4D]"
    >
      <div className="hero-image absolute inset-0 will-change-transform">
        <Image
          src="/images/hero-herbs.jpg"
          alt="伝統中医学の薬膳食材と陶器の鍋"
          fill
          priority
          fetchPriority="high"
          unoptimized
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/55 to-ink-900/15 md:from-ink-900/80 md:via-ink-900/35 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-transparent to-ink-900/55" />
      <div className="hero-vignette absolute inset-0 bg-ink-900/0 opacity-0" />

      <div className="editorial-num text-honey-300/15">壱</div>

      <div className="relative z-10 flex h-full flex-col justify-center px-4 pt-24 pb-24 md:pl-16 md:pr-8 md:pt-28 md:pb-28 lg:pl-24 xl:pl-32">
        <div className="hero-text-stack max-w-3xl will-change-transform">
          <div
            className="hero-rise flex items-center gap-4"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-200/95">
              01 / Best Health
            </span>
            <div className="h-px w-[60px] bg-gradient-to-r from-honey-200/80 to-transparent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-200/95">
              健康維持コース
            </span>
          </div>

          <div
            className="hero-rise mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-honey-400/50 bg-ink-900/70 px-4 py-1.5 text-xs font-medium text-honey-200 backdrop-blur md:text-sm"
            style={{ animationDelay: "0.18s" }}
          >
            <span className="grid h-2 w-2 place-items-center">
              <span className="h-full w-full animate-ping rounded-full bg-honey-300/80" />
            </span>
            {PROMO.label}
          </div>

          <h1
            className="hero-rise mt-5 font-display font-light text-honey-50 leading-[1.1] tracking-tight drop-shadow-[0_4px_28px_rgba(0,0,0,0.55)] text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ animationDelay: "0.28s" }}
          >
            伝統中医学のメソッドで、
          </h1>
          <h1
            className="hero-rise font-display font-light italic text-outline-honey leading-[1.1] tracking-tight text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ animationDelay: "0.4s" }}
          >
            毎日の健康をやさしくサポート。
          </h1>

          <p
            className="hero-rise mt-5 max-w-xl text-sm leading-relaxed text-honey-50 md:text-base lg:text-lg drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]"
            style={{ animationDelay: "0.55s" }}
          >
            体質判定から四季の養生、経絡保健まで、伝統中医学の知恵を現代の暮らしに届けます。期間限定で全コンテンツを無料公開中。
          </p>

          <div
            className="hero-rise mt-6 flex flex-wrap gap-3 md:mt-7"
            style={{ animationDelay: "0.7s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[var(--color-line)] text-white hover:bg-[var(--color-line-dark)] rounded-full px-7 h-12 shadow-2xl shadow-ink-900/50"
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-honey-50/40 bg-white/5 text-honey-50 hover:bg-honey-50 hover:text-ink-900 backdrop-blur rounded-full px-7 h-12"
            >
              <Link href="/#course">
                コース内容を見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <ul
            className="hero-rise mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-honey-50/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: "0.85s" }}
          >
            <li className="flex items-center gap-2">
              <span className="text-honey-300">●</span>
              無料 養生知識動画 (約60分)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-honey-300">●</span>
              無料 養生電子書籍 (PDF)
            </li>
          </ul>
        </div>
      </div>

      <div
        className="hero-bottombar hero-rise pointer-events-none absolute inset-x-0 bottom-5 z-10 flex items-end justify-between px-4 md:bottom-8 md:pl-16 md:pr-8 lg:pl-24 xl:pl-32"
        style={{ animationDelay: "1s" }}
      >
        <div className="hidden md:flex items-center gap-3 text-honey-50/75">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em]">
            Scroll
          </span>
          <div className="relative h-12 w-px bg-honey-50/20 overflow-hidden">
            <div className="absolute inset-x-0 h-full bg-honey-300 animate-[scroll-down_1.8s_infinite]" />
          </div>
        </div>
        <div className="ml-auto text-right text-honey-50/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-85">
            伝統中医学
          </p>
          <p className="font-display italic text-xl md:text-2xl mt-0.5">
            Since 1953
          </p>
        </div>
      </div>
    </section>
  );
}
