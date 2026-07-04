# 株式会社MARU コーポレートサイト

美容・フィットネス・整体・サウナ事業を展開する株式会社MARUのコーポレートサイトです。
**Next.js (App Router) + TypeScript + Tailwind CSS** で構築し、`output: 'export'` による
静的サイト書き出しで **Cloudflare Pages** に配信します。

## 技術構成

- Next.js 14 (App Router, `output: 'export'` で静的HTML書き出し)
- TypeScript
- Tailwind CSS 3
- ビルド不要のNode.jsサーバーは使用しない完全な静的サイト

## ページ構成

| ルート | ソース | 内容 |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | トップページ |
| `/about` | `src/app/about/page.tsx` | 会社概要(企業理念・MVV・5つの行動指針・沿革・会社情報) |
| `/business` | `src/app/business/page.tsx` | 事業内容(美容・フィットネス・整体・サウナ) |
| `/works` | `src/app/works/page.tsx` | 店舗・実績(メンズ脱毛BOSS / 眉毛サロンBROW / パーソナルジムSOL / Natural整体 / 987サウナ) |
| `/news` | `src/app/news/page.tsx` | お知らせ一覧 |
| `/recruit` | `src/app/recruit/page.tsx` | 採用情報 |
| `/contact` | `src/app/contact/page.tsx` | お問い合わせフォーム |
| `/privacy` | `src/app/privacy/page.tsx` | プライバシーポリシー |

共通レイアウトは `src/app/layout.tsx`、共通コンポーネントは `src/components/` にあります。

- `site-header.tsx`: ヘッダー・グローバルナビ・ハンバーガーメニュー・スクロール時の表示制御
- `site-footer.tsx`: フッター
- `scroll-fx.tsx`: スクロールフェードイン(`.reveal`)・数字のカウントアップ・進捗バー
- `contact-form.tsx`: お問い合わせフォーム(mailto送信)
- `page-hero.tsx`: 下層ページ共通の見出し・パンくず

## ローカルでの開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## ビルド(静的書き出し)

```bash
npm run build
```

`next.config.mjs` の `output: 'export'` により、`out/` ディレクトリに静的HTMLが生成されます。
生成後は以下でローカル確認できます。

```bash
npx serve out
```

## 公開前に差し替えが必要な箇所

各ソース内に `TODO:` コメントでマークしてあります。

- **会社情報**(`src/app/about/page.tsx` とフッター): 住所・代表者名
- **各店舗サイトのURL**(`src/app/works/page.tsx`): `href="#"` を実際のURLに変更
- **お問い合わせ送信先**(`src/components/contact-form.tsx`): 先頭の `CONTACT_EMAIL` を実際のメールアドレスに変更
- **募集要項**(`src/app/recruit/page.tsx`): 給与・勤務条件などの正式な内容
- **プライバシーポリシーの制定日**(`src/app/privacy/page.tsx`)

## お知らせの追加方法

`src/app/news/page.tsx` の `NEWS_ITEMS` 配列の先頭に `{ date, label, cat, title }` を追加してください。
トップページ(`src/app/page.tsx`)の「お知らせ」セクションも同じ形式なので、最新3件を手動で反映してください。

## お問い合わせフォームについて

現在は送信ボタンを押すとメールソフトが起動する形式(mailto)です。
サーバーレスでフォーム送信したい場合は [Formspree](https://formspree.io/) や
Googleフォームの利用を推奨します。その場合は `src/components/contact-form.tsx` の送信処理を差し替えてください。

## Cloudflare Pages へのデプロイ

このリポジトリを GitHub に push した上で、Cloudflare Pages で以下の設定を行ってください。

| 項目 | 値 |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |

Pages 側の環境変数は現状不要です(すべてクライアントサイドの静的サイトのため)。
