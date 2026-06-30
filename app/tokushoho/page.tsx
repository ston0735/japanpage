import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, COURSE, PROMO, CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description:
    "ベスト株式会社が提供するオンライン健康維持コースに関する、特定商取引法に基づく表記ページです。",
};

type Row = { label: string; value: React.ReactNode };

const ROWS: readonly Row[] = [
  { label: "販売事業者", value: COMPANY.legalName },
  { label: "代表責任者", value: COMPANY.representative },
  {
    label: "所在地",
    value: (
      <>
        {COMPANY.address}
        <br />
        <span className="text-ink-500">{COMPANY.addressEn}</span>
      </>
    ),
  },
  { label: "日本国内連絡先", value: COMPANY.localContact },
  { label: "電話番号", value: COMPANY.phone },
  { label: "メールアドレス", value: `${COMPANY.email} / ${COMPANY.localContactEmail}` },
  {
    label: "販売価格",
    value: (
      <>
        <strong className="text-ink-900">{COURSE.trialName}</strong>：¥0（
        {PROMO.startDate}〜{PROMO.endDate} 期間限定）
        <br />
        <strong className="text-ink-900">{COURSE.paidName}</strong>：
        {COURSE.paidPriceLabel}（税込）
      </>
    ),
  },
  {
    label: "商品代金以外の必要料金",
    value: "通信料はお客様のご負担となります。",
  },
  {
    label: "お支払い方法",
    value: COURSE.paymentMethods.join(" / "),
  },
  {
    label: "お支払い時期",
    value:
      "クレジットカード決済：ご注文時に確定／銀行振込：ご注文後 7 日以内にご入金ください。",
  },
  {
    label: "サービスの提供時期",
    value:
      "ご入金確認後、24 時間以内にオンライン受講のご案内をメールでお送りします。",
  },
  {
    label: "返品・キャンセルについて",
    value:
      "デジタルコンテンツの性質上、ご購入後の返品・キャンセルは原則承っておりません。ただし、當社の重大な瑕疵による場合はこの限りではありません。",
  },
  {
    label: "動作環境",
    value:
      "最新のモダンブラウザ（Chrome / Safari / Edge / Firefox）および安定したインターネット接続を推奨いたします。",
  },
];

export default function TokushohoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-20">
      <header>
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
          Tokutei Shōtorihiki-hō
        </p>
        <h1 className="mt-2 font-display text-3xl text-ink-900 md:text-5xl">
          特定商取引法に基づく表記
        </h1>
        <p className="mt-4 text-base text-ink-700 leading-relaxed">
          {COMPANY.legalName}が提供するオンライン健康維持コースに関する、
          特定商取引法に基づく事業者情報および取引条件を明示いたします。
        </p>
      </header>

      <section className="mt-12 overflow-hidden rounded-2xl border border-ink-200/60 bg-white shadow-sm">
        <dl className="divide-y divide-ink-200/60">
          {ROWS.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 px-6 py-5 md:grid-cols-[200px_1fr] md:gap-6 md:py-6"
            >
              <dt className="font-display text-sm text-honey-700 md:text-base">
                {row.label}
              </dt>
              <dd className="text-sm text-ink-800 leading-relaxed md:text-base">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 rounded-2xl border-l-4 border-honey-500 bg-honey-50 p-6 md:p-8">
        <h2 className="font-display text-xl text-ink-900">
          無料コースと有料コースについて（重要）
        </h2>
        <p className="mt-3 text-sm leading-[1.9] text-ink-700 md:text-base">
          {COURSE.paidDisclaimer}
        </p>
        <p className="mt-4 text-sm leading-[1.9] text-ink-700 md:text-base">
          無料コースで提供される<strong className="text-ink-900">「{COURSE.benefits[0].title}」</strong>
          および<strong className="text-ink-900">「{COURSE.benefits[1].title}」</strong>
          は、有料コースをご購入いただかなくてもそのままご利用いただけます。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl text-ink-900 md:text-2xl">
          お問い合わせ
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-700 md:text-base">
          ご不明な点がございましたら、以下の方法でお気軽にお問い合わせください。
        </p>
        <ul className="mt-4 space-y-2 text-sm text-ink-700 md:text-base">
          <li>
            電話：<a className="text-honey-700 hover:underline" href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phone}</a>
          </li>
          <li>
            メール：<a className="text-honey-700 hover:underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </li>
          <li>
            LINE：
            <a
              className="text-honey-700 hover:underline"
              href={CONTACT.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.lineId}
            </a>
          </li>
        </ul>
      </section>

      <p className="mt-12 text-xs text-ink-500">
        最終更新日：{PROMO.startDate} ／
        <Link href="/" className="ml-2 underline hover:text-honey-700">
          トップへ戻る
        </Link>
      </p>
    </div>
  );
}
