"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoPreview() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink-900 via-ink-900/95 to-[#3F5C4D] py-20 md:py-28">
      <div className="editorial-num">02</div>

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* セクションヘッダー */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
              02
            </span>
            <div className="section-divider"></div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
              Free Lesson Video
            </span>
          </div>

          <div className="max-w-2xl">
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-honey-50 leading-[1.2] mb-4">
              無料養生知識動画
            </h2>
            <p className="text-base md:text-lg text-honey-100/80 max-w-md">
              伝統中医学に基づいた養生方法と穴位按摩の実踐方法を動画でご紹介します。
            </p>
          </div>
        </div>

        {/* ビデオプレーヤー */}
        <div className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border border-honey-400/20 shadow-2xl">
          {/* ビデオコンテナ */}
          <div className="relative aspect-video w-full bg-black/80">
            {isPlaying ? (
              <video
                src="/videos/lesson-video.mp4"
                controls
                autoPlay
                className="w-full h-full"
              />
            ) : (
              <>
                {/* プレビュー画像（ビデオの最初のフレーム） */}
                <div className="absolute inset-0 bg-gradient-to-br from-ink-900/50 via-ink-900/30 to-honey-900/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 675%22><defs><pattern id=%22grid%22 width=%2240%22 height=%2240%22 patternUnits=%22userSpaceOnUse%22><path d=%22M 40 0 L 0 0 0 40%22 fill=%22none%22 stroke=%22rgba(218,180,105,0.05)%22 stroke-width=%221%22/></pattern></defs><rect width=%221200%22 height=%22675%22 fill=%22%23000%22/><rect width=%221200%22 height=%22675%22 fill=%22url(%23grid)%22/></svg>')] opacity-30" />

                  {/* プレイボタン */}
                  <Button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 h-20 w-20 rounded-full bg-honey-500 hover:bg-honey-600 text-ink-900 shadow-2xl transition-all hover:scale-110"
                  >
                    <Play className="h-8 w-8 fill-current" />
                  </Button>

                  {/* テキストオーバーレイ */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-honey-100/60 text-sm font-medium mt-32">
                      クリックして再生
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* ビデオ情報 */}
          <div className="bg-gradient-to-r from-ink-900/80 to-ink-900/60 backdrop-blur-sm border-t border-honey-400/10 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-honey-50 mb-2">
                  中医学養生講座：健康維持の実踐方法
                </h3>
                <p className="text-sm md:text-base text-honey-100/70">
                  資深中医師による養生の基本テクニックと日常生活への取り入れ方をご紹介します。
                </p>
              </div>
              <div className="flex items-center gap-3 text-honey-300/80 whitespace-nowrap">
                <span className="text-sm font-mono">HD Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* 特徴リスト */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "実踐的な手法",
              description: "資深中医師による正確な養生テクニック",
            },
            {
              title: "日常生活への応用",
              description: "自宅で簡単に実踐できる養生方法",
            },
            {
              title: "科学的根拠",
              description: "伝統中医学に基づいた健康維持の理論",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-honey-400/20 bg-honey-50/5 p-6 backdrop-blur-sm hover:border-honey-400/40 transition-colors"
            >
              <h4 className="text-base md:text-lg font-semibold text-honey-50 mb-3">
                {item.title}
              </h4>
              <p className="text-sm md:text-base text-honey-100/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
