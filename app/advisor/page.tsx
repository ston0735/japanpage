import type { Metadata } from "next";
import { AdvisorChat } from "@/components/advisor/AdvisorChat";

export const metadata: Metadata = {
  title: "AI 養生アドバイザー",
  description:
    "ベスト AI 養生アドバイザーが、中医学の視点から日々の体調や養生のヒントをやさしく解説します。",
};

export default function AdvisorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
      <header className="mb-6">
        <h1 className="font-display text-section text-ink-900 md:text-4xl">
          AI 養生アドバイザー
        </h1>
        <p className="mt-2 text-base text-ink-700">
          気になる体調・お悩みを入力してください。中医学の視点から養生のヒントをご提案します。
        </p>
      </header>
      <AdvisorChat />
    </div>
  );
}
