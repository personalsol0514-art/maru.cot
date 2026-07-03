# 株式会社MARU コーポレートサイト

美容・フィットネス・サウナ事業を展開する株式会社MARUのコーポレートサイトです。
ビルド不要の静的サイト(HTML / CSS / JavaScript)で構成されています。

## ページ構成

| ファイル | 内容 |
| --- | --- |
| `index.html` | トップページ |
| `about.html` | 会社概要(企業理念・MVV・5つの行動指針・沿革・会社情報) |
| `business.html` | 事業内容(美容・フィットネス・整体・サウナ) |
| `works.html` | 店舗・実績(メンズ脱毛BOSS / 眉毛サロンBROW / パーソナルジムSOL / Natural整体 / 987サウナ) |
| `news.html` | お知らせ一覧 |
| `recruit.html` | 採用情報 |
| `contact.html` | お問い合わせフォーム |
| `privacy.html` | プライバシーポリシー |

## ローカルでの確認方法

```bash
cd maru-corporate
python3 -m http.server 8000
```

ブラウザで http://localhost:8000 を開いてください。

## 公開前に差し替えが必要な箇所

各HTMLファイル内に `<!-- TODO: ... -->` のコメントでマークしてあります。

- **会社情報** (`about.html` とフッター): 住所・代表者名
- **各店舗サイトのURL** (`works.html`): `href="#"` を実際のURLに変更
- **お問い合わせ送信先** (`js/main.js`): 先頭の `CONTACT_EMAIL` を実際のメールアドレスに変更
- **募集要項** (`recruit.html`): 給与・勤務条件などの正式な内容
- **プライバシーポリシーの制定日** (`privacy.html`)

## お知らせの追加方法

`news.html` の `<ul class="news-list">` 内の `<li>` ブロックをコピーして一番上に追加し、
日付・カテゴリ・タイトルを書き換えてください。トップページ(`index.html`)の
「お知らせ」セクションも同じ形式なので、最新3件を手動で反映してください。

## お問い合わせフォームについて

現在は送信ボタンを押すとメールソフトが起動する形式(mailto)です。
サーバーレスでフォーム送信したい場合は [Formspree](https://formspree.io/) や
Googleフォームの利用を推奨します。その場合は `js/main.js` のフォーム送信処理を差し替えてください。

## デプロイ

静的サイトなので、以下のいずれでもそのまま公開できます。

- **Cloudflare Pages / Netlify / Vercel**: このフォルダをそのままアップロード
- **GitHub Pages**: リポジトリにpushして Pages を有効化
- **レンタルサーバー**: FTP等で全ファイルをアップロード
