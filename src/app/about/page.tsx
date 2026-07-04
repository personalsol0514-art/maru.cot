import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社MARUの企業理念「縁ある人を豊かにする」、ビジョン・ミッション・バリュー、5つの行動指針、沿革、会社情報をご紹介します。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero en="About" title="会社概要" />

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Philosophy</span>
            <h2 className="section-title">縁ある人を豊かにする</h2>
            <p className="section-lead">
              株式会社MARUは、縁ある人の生活の質の向上に貢献し、 物心両面の幸福の追求を目的とする会社です。
            </p>
            <p className="section-lead">
              自分が物心両面で豊かであるからこそ、お客さんを喜ばせることができる。
              それが会社の利益に繋がり、自分の収入があがり、周りを豊かにできる。
              この循環を大切にしています。
            </p>
          </div>
        </div>
      </section>

      {/* MVV */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Vision / Mission / Value</span>
            <h2 className="section-title">ビジョン・ミッション・バリュー</h2>
          </div>
          <div className="mvv-grid">
            <article className="mvv-card reveal">
              <span className="en">Vision</span>
              <span className="mvv-label">ビジョン（未来）</span>
              <h3>人財とお金が縁で回る企業</h3>
              <p>
                株式会社MARUは、縁あって仲間となった人財の夢・目標の実現舞台となり、
                縁ある人の生活の質が向上する事業展開を行う。
              </p>
            </article>
            <article className="mvv-card reveal">
              <span className="en">Mission</span>
              <span className="mvv-label">ミッション（使命）</span>
              <h3>感動共有</h3>
              <p>提供するサービスで顧客の感動を生み、 仲間の成長を感動共有により創造する。</p>
            </article>
            <article className="mvv-card reveal">
              <span className="en">Value</span>
              <span className="mvv-label">バリュー（価値観）</span>
              <h3>ワクワク</h3>
              <p>自らの一度の人生にワクワクし、 縁ある人へGIVE（与える）精神を大切にします。</p>
            </article>
          </div>
        </div>
      </section>

      {/* 行動指針 */}
      <section className="section philosophy-band">
        <div className="hero-circle hero-circle-1"></div>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Guidelines</span>
            <h2 className="section-title">5つの行動指針</h2>
          </div>
          <div className="guideline-list">
            <article className="guideline-item reveal">
              <div className="g-head">
                <span className="g-num">01</span>
                <h3>自分が源</h3>
              </div>
              <p>
                身の回りの環境は、全て自分の決断によってつくられたもの。
                他責ではなく、自責で考える。何事も当たり前と思わず、感謝する。
              </p>
            </article>
            <article className="guideline-item reveal">
              <div className="g-head">
                <span className="g-num">02</span>
                <h3>現実に差をつくる</h3>
              </div>
              <p>
                現状に満足することなく、業務効率の向上、利益増大に関する情報を常に前向きに学び続ける。
                報・連・相は素早く瞬時に行う。
              </p>
            </article>
            <article className="guideline-item reveal">
              <div className="g-head">
                <span className="g-num">03</span>
                <h3>仲間の成長をつくる</h3>
              </div>
              <p>相手の想いを深く考え、肯定的な発言・行動をする。 情報共有をして気づきを与える。</p>
            </article>
            <article className="guideline-item reveal">
              <div className="g-head">
                <span className="g-num">04</span>
                <h3>過去最高を超える</h3>
              </div>
              <p>目標の達成度は重要だが、さらに重要なのが成長度。 物事の優先順位を考え行動する。</p>
            </article>
            <article className="guideline-item reveal">
              <div className="g-head">
                <span className="g-num">05</span>
                <h3>未来に集中する</h3>
              </div>
              <p>
                今までの経験からではなく、理想の自分、理想の成果を強く思考する。
                その為に今何をしているのか。それは効果的か。もっといい方法はないかを考え実行する。
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">History</span>
            <h2 className="section-title">沿革</h2>
          </div>
          <div className="timeline reveal">
            <div className="timeline-item">
              <div className="timeline-year">2019年</div>
              <ul className="timeline-events">
                <li>
                  <span className="month">11月</span>メンズ脱毛BOSS 四日市店 OPEN
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021年</div>
              <ul className="timeline-events">
                <li>
                  <span className="month">3月</span>メンズ脱毛BOSS 鈴鹿店 OPEN
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022年</div>
              <ul className="timeline-events">
                <li>
                  <span className="month">3月</span>株式会社MARU 設立
                </li>
                <li>
                  <span className="month">5月</span>メンズ脱毛BOSS 岡崎店 OPEN
                </li>
                <li>
                  <span className="month">5月</span>パーソナルジムSOL 岡崎店 OPEN
                </li>
                <li>
                  <span className="month">11月</span>スタートヒア株式会社 設立
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023年</div>
              <ul className="timeline-events">
                <li>
                  <span className="month">8月</span>眉毛サロンBROW 津店 OPEN
                </li>
                <li>
                  <span className="month">12月</span>メンズ脱毛BOSS 桑名店 OPEN
                </li>
                <li>
                  <span className="month">12月</span>眉毛サロンBROW 桑名店 OPEN
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024年</div>
              <ul className="timeline-events">
                <li>
                  <span className="month">5月</span>パーソナルジムSOL 康生店 OPEN
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025年</div>
              <ul className="timeline-events">
                <li>
                  <span className="month">6月</span>整体LIGHT 岡崎店を「Natural整体」としてリニューアル
                </li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026年</div>
              <ul className="timeline-events">
                <li>
                  <span className="month">3月</span>987サウナ OPEN
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Company</span>
            <h2 className="section-title">会社情報</h2>
          </div>
          <table className="info-table reveal">
            <tbody>
              <tr>
                <th>会社名</th>
                <td>株式会社MARU</td>
              </tr>
              {/* TODO: 代表者名に差し替え */}
              <tr>
                <th>代表者</th>
                <td>代表取締役 ○○ ○○</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2022年3月</td>
              </tr>
              {/* TODO: 正式な住所に差し替え */}
              <tr>
                <th>所在地</th>
                <td>〒000-0000 （所在地を記載）</td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>メンズ脱毛サロン・眉毛サロン・パーソナルジム・整体・サウナ施設の運営</td>
              </tr>
              <tr>
                <th>展開エリア</th>
                <td>三重県（四日市市・鈴鹿市・津市・桑名市）／愛知県（岡崎市）</td>
              </tr>
              <tr>
                <th>グループ会社</th>
                <td>スタートヒア株式会社（2022年11月設立）</td>
              </tr>
              <tr>
                <th>お問い合わせ</th>
                <td>
                  <Link href="/contact" className="text-link">
                    お問い合わせフォームへ →
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <div className="container reveal">
          <h2 className="section-title">MARUと、一緒に。</h2>
          <p>事業に関するご相談・取材のご依頼はお気軽にお問い合わせください。</p>
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
