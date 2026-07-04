import type { Metadata } from "next";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "株式会社MARUからのお知らせ・ニュース一覧です。",
};

const NEWS_ITEMS = [
  { date: "2026-07-01", label: "2026.07.01", cat: "お知らせ", title: "コーポレートサイトを公開しました" },
  { date: "2026-03-01", label: "2026.03", cat: "店舗情報", title: "987サウナをオープンしました" },
  {
    date: "2025-06-01",
    label: "2025.06",
    cat: "店舗情報",
    title: "整体LIGHT岡崎店を「Natural整体」としてリニューアルしました",
  },
  { date: "2024-05-01", label: "2024.05", cat: "店舗情報", title: "パーソナルジムSOL 康生店をオープンしました" },
  {
    date: "2023-12-01",
    label: "2023.12",
    cat: "店舗情報",
    title: "メンズ脱毛BOSS 桑名店・眉毛サロンBROW 桑名店をオープンしました",
  },
  { date: "2023-08-01", label: "2023.08", cat: "店舗情報", title: "眉毛サロンBROW 津店をオープンしました" },
];

export default function NewsPage() {
  return (
    <>
      <PageHero en="News" title="お知らせ" />

      <section className="section">
        <div className="container">
          {/*
            お知らせの追加方法:
            NEWS_ITEMS 配列の先頭に { date, label, cat, title } を追加してください。
            カテゴリの例: お知らせ / 店舗情報 / 採用 / メディア
          */}
          <ul className="news-list reveal">
            {NEWS_ITEMS.map((item) => (
              <li key={item.date + item.title}>
                <div className="news-item">
                  <span className="news-meta">
                    <time className="news-date" dateTime={item.date}>
                      {item.label}
                    </time>
                    <span className="news-cat">{item.cat}</span>
                  </span>
                  <span className="news-title-text">{item.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
