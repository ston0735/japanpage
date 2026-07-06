export const SITE = {
  name: "ベスト",
  legalName: "ベスト株式会社 / Bestptr Co., Ltd. / 百事博股份有限公司(百事博數位)",
  romanizedName: "Bestptr Co., Ltd.",
  tagline: "伝統中医学の秘密・健康維持コース",
  description:
    "資深中医師が直接指導する養生入門講座。体質判定から四季の養生、経絡保健、薬膳まで、伝統中医学の知恵を現代の暮らしに届けます。",
  url: "https://bashibo-health.com",
} as const;

export const COMPANY = {
  legalName: "ベスト株式会社 / Bestptr Co., Ltd. / 百事博股份有限公司(百事博數位)",
  representative: "林志傑",
  address: "台灣新北市板橋区文化路一段329号4階",
  addressEn: "4F., No. 329, Sec. 1, Wenhua Rd., Banqiao Dist., New Taipei City 220, Taiwan (R.O.C.)",
  phone: "080-4956-0029",
  phoneTel: "+818049560029",
  email: "support@bashibo-health.com",
  localContact: "藤木りえ",
  localContactEmail: "19509204725@163.com",
} as const;

export const PROMO = {
  startDate: "2026年5月1日",
  endDate: "2026年5月30日",
  startIso: "2026-05-01",
  endIso: "2026-05-30",
  label: "2026年5月1日〜5月30日 期間限定 無料",
  shortLabel: "5/1〜5/30 期間限定 無料",
} as const;

export const COURSE = {
  trialName: "健康維持コース・無料体験",
  trialDescription:
    "中医師が指導する養生入門講座。期間限定で無料公開。ご登録後、すぐに無料特典をお受け取りいただけます。",
  paidName: "健康維持コース・本講座",
  paidPrice: 26000,
  paidCurrency: "JPY",
  paidPriceLabel: "¥26,000",
  paymentMethods: ["オンラインクレジットカード決済", "銀行振込"] as const,
  benefits: [
    {
      title: "無料 養生知識動画",
      detail: "資深中医師による解説動画・約60分・オンラインでいつでも視聴可能",
    },
    {
      title: "無料 養生電子書籍 (PDF)",
      detail: "四季の調理法と経絡保健の要点を収録した電子書籍",
    },
  ] as const,
  paidDisclaimer:
    "無料コース終了後、関連する有料コース「健康維持コース・本講座」（¥26,000）のご案内をいたします。ご購入はご自身の判断によるもので、有料コースに参加されない場合でも、無料特典の受け取りには影響ありません。",
  topics: [
    "中医体質判定",
    "四季養生・節気カレンダー",
    "経絡とツボの保健",
    "薬膳・食療法",
    "睡眠と情志(感情)の調整",
    "更年期・シニア向け健康法",
    "毎日の養生 Q&A",
  ] as const,
} as const;

const FALLBACK_LINE_URL = "https://lin.ee/5z9mR9X";
const FALLBACK_LINE_ID = "@best";

export const CONTACT = {
  lineUrl: process.env.NEXT_PUBLIC_LINE_URL ?? FALLBACK_LINE_URL,
  lineId: process.env.NEXT_PUBLIC_LINE_ID ?? FALLBACK_LINE_ID,
  phone: process.env.NEXT_PUBLIC_PHONE ?? COMPANY.phone,
} as const;
