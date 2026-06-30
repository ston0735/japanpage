# ベスト Best｜健康維持コース LP

ベスト株式会社が提供する「伝統中医学の秘密・健康維持コース」のオンライン受講ランディングページ。日本人ターゲット向け、日本語サイト。

## 機能

- 🏠 **トップページ (LP)**：Hero（期間限定無料告知）→ Heritage 数字 → 信頼バッジ → コース内容 (7 テーマ + 料金カード + 法令対応免責文) → ブランドストーリー → 受講フロー → スローガンマーキー → 受講者の声 → 養生ノート → AI アドバイザー CTA → 最終 CTA
- ⚖️ **/tokushoho**：特定商取引法に基づく表記（販売事業者・所在地・販売価格・支払・返品・無料/有料コース銜接の免責文）
- 📝 **/blog**：Notion を CMS として、養生・中医学に関する記事を ISR 60s で配信
- 🤖 **/advisor**：AI 養生アドバイザー（Gemini 2.5 Flash・ストリーミング応答・中医学プロンプト・薬機法配慮）

## 技術スタック

- Next.js 16.2.4（App Router、Turbopack）
- React 19.2.4 + TypeScript
- Tailwind CSS v4 + shadcn/ui（new-york style）
- Vercel AI SDK v6 + `@ai-sdk/google`（Gemini 2.5 Flash）
- Notion API v5（`dataSources.query`）
- Vitest 4

## クライアント要望（広告・LP 修正に対応した内容）

| 修正要望 | 反映場所 |
|---------|--------|
| 「本日限定 無料」→ 明確な期限を表示（5/1〜5/30 期間限定 無料） | `lib/site.ts` の `PROMO`、Hero / CourseSection / FinalCTA / 特商法表記 |
| 「無料特典」の中身を明示（無料養生知識動画・無料養生電子書） | `COURSE.benefits` で一元管理、Hero/CourseSection/特商法ページに表示 |
| 特定商取引法表記（会社情報・価格・支払方法） | `/tokushoho` |
| 無料 → 有料コース銜接の免責文（¥26,000 の本講座） | `COURSE.paidDisclaimer`、CourseSection と特商法ページに掲示 |

会社情報は `lib/site.ts` 内の `COMPANY` で一元管理：
- ベスト株式会社
- 台湾 新北市板橋区文化路一段329号4階
- (02) 7748-0829
- support@bestptr.life

## イメージ素材

`public/images/` 配下に主要ビジュアルを格納：

- `hero-herbs.jpg` — 漢方薬膳 (棗・枸杞・山薬・薬膳鍋) のメインビジュアル
- `audience-couple.jpg` — 「こんな方におすすめ」 中年夫婦の食事シーン
- `concerns-vs-vitality.jpg` — 「こんなお悩み」 → 元気な高齢者の対比
- `online-flow.jpg` — オンライン受講フロー (LINE → 特典 → 受講)

差し替える場合はファイル名を維持して同じパスに上書き。

## セットアップ

```bash
cp .env.example .env.local
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # 本番起動
pnpm test         # vitest
```

## 環境変数

| 変数 | 用途 | 必須 |
|------|------|------|
| `GOOGLE_GENERATIVE_AI_API_KEY` | AI 養生アドバイザー | AI 機能を使う場合 |
| `NOTION_TOKEN` | 養生ノート (Blog) | Blog を使う場合 |
| `NOTION_BLOG_DB_ID` | 養生ノート database | Blog を使う場合 |
| `NEXT_PUBLIC_LINE_URL` | LINE 公式アカウント友だち追加 URL | デフォルト: `https://lin.ee/uRckWeC` |
| `NEXT_PUBLIC_LINE_ID` | LINE ID 表示用 | デフォルト: `@best` |
| `NEXT_PUBLIC_PHONE` | 電話番号表示用 | デフォルト: `(02) 7748-0829` |
| `REVALIDATE_SECRET` | ISR 再検証用シークレット | 任意 |

## Notion Database スキーマ（養生ノート）

| プロパティ | 型 | 用途 |
|----------|-----|------|
| `Title` | title | 記事タイトル |
| `Slug` | rich_text | URL slug |
| `Category` | select | 分類（例：四季養生・経絡保健・薬膳） |
| `Excerpt` | rich_text | 抜粋 |
| `Keywords` | multi_select | SEO キーワード |
| `Cover` | files & media | カバー画像 |
| `Status` | status | `Published` のみ表示 |
| `PublishedAt` | date | 公開日 |

## デプロイ

```bash
vercel deploy --prod
```

Vercel プロジェクト設定に上記の環境変数を必ず登録してください。

## カスタマイズメモ

- カラーパレットは `app/globals.css` の `--color-honey-*`（暖金/真鍮）と `--color-leaf-*`（抹茶綠）。`--color-line` は LINE ブランドカラー。
- フォントは `Noto Sans JP` + `Shippori Mincho`（明朝体）で、和の質感を演出。
- ブランドロゴは Header/Footer 内の "養" 文字の円形マーク。差し替える場合は `components/layout/Header.tsx` の `<span>` 部分。
