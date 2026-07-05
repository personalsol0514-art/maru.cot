import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/hero-slideshow";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero-has-media">
        <HeroSlideshow />
        <div className="container hero-inner">
          <p className="hero-label">MARU Inc. — Beauty / Fitness / Seitai / Sauna / Support</p>
          <h1 className="hero-catch">
            <span className="line">
              <span>縁ある人を、</span>
            </span>
            <span className="line">
              <span>
                <span className="accent">豊か</span>にする。
              </span>
            </span>
          </h1>
          <p className="hero-sub">
            株式会社MARUは、美容・フィットネス・整体・サウナ、そして店舗運営支援の5つの事業を通じて、
            縁ある人の生活の質の向上に貢献し、物心両面の幸福を追求します。
          </p>
          <div className="hero-actions">
            <Link href="/business" className="btn btn-primary">
              事業内容を見る<span className="arrow">→</span>
            </Link>
            <Link href="/about" className="btn btn-outline">
              MARUについて
            </Link>
          </div>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <div className="marquee-group">
            <span className="marquee-item">メンズ脱毛BOSS</span>
            <span className="marquee-item solid">●</span>
            <span className="marquee-item">眉毛サロンBROW</span>
            <span className="marquee-item solid">●</span>
            <span className="marquee-item">パーソナルジムSOL</span>
            <span className="marquee-item solid">●</span>
            <span className="marquee-item">Natural整体</span>
            <span className="marquee-item solid">●</span>
            <span className="marquee-item">987サウナ</span>
            <span className="marquee-item solid">●</span>
          </div>
          <div className="marquee-group">
            <span className="marquee-item">メンズ脱毛BOSS</span>
            <span className="marquee-item solid">●</span>
            <span className="marquee-item">眉毛サロンBROW</span>
            <span className="marquee-item solid">●</span>
            <span className="marquee-item">パーソナルジムSOL</span>
            <span className="marquee-item solid">●</span>
            <span className="marquee-item">Natural整体</span>
            <span className="marquee-item solid">●</span>
            <span className="marquee-item">987サウナ</span>
            <span className="marquee-item solid">●</span>
          </div>
        </div>
      </div>

      {/* Business */}
      <section className="section">
        <div className="container">
          <div className="reveal section-head">
            <span className="ghost" aria-hidden="true">
              Business
            </span>
            <span className="section-label">Business</span>
            <h2 className="section-title">生活の質を高める、5つの事業</h2>
            <p className="section-lead">
              美しくなること、動くこと、整えること、休むこと。そして、その場をつくる人を支えること。
              MARUは三重県・愛知県で、暮らしに寄り添う5つの事業を展開しています。
            </p>
          </div>
          <div className="business-grid">
            <article className="business-card reveal">
              <div className="card-head">
                <span className="num">01</span>
                <span className="en">Beauty</span>
              </div>
              <h3>美容事業</h3>
              <p>メンズ脱毛BOSS・眉毛サロンBROWを三重・愛知で6店舗展開。「なりたい自分」を支えます。</p>
              <Link href="/business#beauty" className="text-link">
                詳しく見る →
              </Link>
            </article>
            <article className="business-card reveal">
              <div className="card-head">
                <span className="num">02</span>
                <span className="en">Fitness</span>
              </div>
              <h3>フィットネス事業</h3>
              <p>パーソナルジムSOLを岡崎市に2店舗展開。マンツーマン指導で運動習慣づくりをサポート。</p>
              <Link href="/business#fitness" className="text-link">
                詳しく見る →
              </Link>
            </article>
            <article className="business-card reveal">
              <div className="card-head">
                <span className="num">03</span>
                <span className="en">Seitai</span>
              </div>
              <h3>整体事業</h3>
              <p>Natural整体（岡崎）で、日々の疲れやからだの不調に丁寧に向き合います。</p>
              <Link href="/business#seitai" className="text-link">
                詳しく見る →
              </Link>
            </article>
            <article className="business-card reveal">
              <div className="card-head">
                <span className="num">04</span>
                <span className="en">Sauna</span>
              </div>
              <h3>サウナ事業</h3>
              <p>987サウナ（2026年3月OPEN）で、深く「ととのう」上質な休息の時間を提供します。</p>
              <Link href="/business#sauna" className="text-link">
                詳しく見る →
              </Link>
            </article>
            <article className="business-card reveal">
              <div className="card-head">
                <span className="num">05</span>
                <span className="en">Support</span>
              </div>
              <h3>店舗運営支援事業</h3>
              <p>自社で店舗を育ててきた実践ノウハウをもとに、開業準備から集客・採用まで店舗づくりを伴走支援します。</p>
              <Link href="/business#support" className="text-link">
                詳しく見る →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats-band">
        <div className="container">
          <div className="reveal section-head">
            <span className="section-label">MARU in Numbers</span>
            <h2 className="section-title">数字で見るMARU</h2>
          </div>
          <div className="stats-grid reveal">
            <div className="stat">
              <div className="stat-num">
                <span className="count" data-count="5">
                  0
                </span>
                <span className="unit">事業</span>
              </div>
              <div className="stat-label">BUSINESS</div>
            </div>
            <div className="stat">
              <div className="stat-num">
                <span className="count" data-count="5">
                  0
                </span>
                <span className="unit">ブランド</span>
              </div>
              <div className="stat-label">BRANDS</div>
            </div>
            <div className="stat">
              <div className="stat-num">
                <span className="count" data-count="10">
                  0
                </span>
                <span className="unit">店舗</span>
              </div>
              <div className="stat-label">STORES</div>
            </div>
            <div className="stat">
              <div className="stat-num">
                <span className="count" data-count="2">
                  0
                </span>
                <span className="unit">県で展開</span>
              </div>
              <div className="stat-label">PREFECTURES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section philosophy-band">
        <div className="hero-circle hero-circle-1"></div>
        <div className="container reveal">
          <span className="section-label">Philosophy</span>
          <p className="philosophy-copy">縁ある人を豊かにする。</p>
          <p className="desc">
            株式会社MARUは、縁ある人の生活の質の向上に貢献し、 物心両面の幸福の追求を目的とする会社です。
            縁あって仲間となった人財の夢・目標の実現舞台となり、 提供するサービスで顧客の感動を生み続けます。
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/about" className="btn btn-outline-light">
              理念・ビジョンを見る<span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="section">
        <div className="container">
          <div className="reveal section-head">
            <span className="ghost" aria-hidden="true">
              Works
            </span>
            <span className="section-label">Works</span>
            <h2 className="section-title">運営店舗・ブランド</h2>
          </div>
          <div className="works-grid">
            <article className="work-card reveal">
              <div className="work-thumb work-thumb-logo">
                <Image src="/images/brands/boss.png" alt="メンズ脱毛BOSS ロゴ" width={388} height={564} />
              </div>
              <div className="work-body">
                <span className="tag">美容</span>
                <h3>メンズ脱毛BOSS</h3>
                <p>清潔感を大切にする男性のための脱毛サロン。四日市・鈴鹿・岡崎・桑名の4店舗を展開しています。</p>
                <Link href="/works" className="text-link">
                  店舗・実績一覧へ →
                </Link>
              </div>
            </article>
            <article className="work-card reveal">
              <div className="work-thumb work-thumb-logo">
                <Image src="/images/brands/sol.png" alt="パーソナルジムSOL ロゴ" width={514} height={640} />
              </div>
              <div className="work-body">
                <span className="tag">フィットネス</span>
                <h3>パーソナルジムSOL</h3>
                <p>愛知県岡崎市のパーソナルジム。マンツーマン指導で、一人ひとりのペースに合わせた運動習慣づくりをサポートします。</p>
                <Link href="/works" className="text-link">
                  店舗・実績一覧へ →
                </Link>
              </div>
            </article>
            <article className="work-card reveal">
              <div className="work-thumb work-thumb-logo">
                <Image src="/images/brands/natural-seitai.png" alt="Natural整体 ロゴ" width={560} height={621} />
              </div>
              <div className="work-body">
                <span className="tag">整体</span>
                <h3>Natural整体</h3>
                <p>愛知県岡崎市の整体院。日々の疲れやからだの不調に丁寧に向き合い、本来のコンディションを取り戻すお手伝いをします。</p>
                <Link href="/works" className="text-link">
                  店舗・実績一覧へ →
                </Link>
              </div>
            </article>
            <article className="work-card reveal">
              <div className="work-thumb work-thumb-logo">
                <Image src="/images/brands/987sauna.png" alt="987サウナ ロゴ" width={653} height={361} />
              </div>
              <div className="work-body">
                <span className="tag">サウナ</span>
                <h3>987サウナ</h3>
                <p>深いリラックスと「ととのう」体験にこだわったサウナ施設。2026年3月にオープンしました。</p>
                <Link href="/works" className="text-link">
                  店舗・実績一覧へ →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal section-head">
            <span className="ghost" aria-hidden="true">
              News
            </span>
            <span className="section-label">News</span>
            <h2 className="section-title">お知らせ</h2>
          </div>
          <ul className="news-list reveal">
            <li>
              <Link href="/news" className="news-item">
                <span className="news-meta">
                  <time className="news-date" dateTime="2026-07-01">
                    2026.07.01
                  </time>
                  <span className="news-cat">お知らせ</span>
                </span>
                <span className="news-title-text">コーポレートサイトを公開しました</span>
              </Link>
            </li>
            <li>
              <Link href="/news" className="news-item">
                <span className="news-meta">
                  <time className="news-date" dateTime="2026-03-01">
                    2026.03
                  </time>
                  <span className="news-cat">店舗情報</span>
                </span>
                <span className="news-title-text">987サウナをオープンしました</span>
              </Link>
            </li>
            <li>
              <Link href="/news" className="news-item">
                <span className="news-meta">
                  <time className="news-date" dateTime="2025-06-01">
                    2025.06
                  </time>
                  <span className="news-cat">店舗情報</span>
                </span>
                <span className="news-title-text">整体LIGHT岡崎店を「Natural整体」としてリニューアルしました</span>
              </Link>
            </li>
          </ul>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/news" className="btn btn-outline">
              お知らせ一覧へ<span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <div className="container reveal">
          <span className="section-label" style={{ justifyContent: "center", display: "inline-flex" }}>
            Contact / Recruit
          </span>
          <h2 className="section-title">MARUと、一緒に。</h2>
          <p>
            事業に関するご相談・取材のご依頼はお気軽にお問い合わせください。
            <br />
            縁ある人を豊かにする仲間も募集しています。
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              お問い合わせ<span className="arrow">→</span>
            </Link>
            <Link href="/recruit" className="btn btn-outline">
              採用情報を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
