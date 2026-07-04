import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "採用情報",
  description: "株式会社MARUの採用情報です。美容サロンスタッフ・パーソナルトレーナー・整体師・サウナ施設スタッフを募集しています。",
};

export default function RecruitPage() {
  return (
    <>
      <PageHero en="Recruit" title="採用情報" />

      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Message</span>
            <h2 className="section-title">あなたの夢・目標の、実現舞台に。</h2>
            <p className="section-lead">
              MARUのビジョンは「人財とお金が縁で回る企業」。
              縁あって仲間となった人財の夢・目標の実現舞台となることを目指しています。
              提供するサービスで顧客の感動を生み、仲間の成長を感動共有により創造する。
              自らの一度の人生にワクワクし、縁ある人へGIVEの精神で向き合える方をお待ちしています。
            </p>
          </div>

          <div className="values-grid recruit-env-grid">
            <article className="value-card reveal">
              <span className="num">Environment 01</span>
              <h3>事業を横断できるキャリア</h3>
              <p>美容・フィットネス・整体・サウナと4つの事業があるからこそ、興味や適性に合わせたキャリアの広げ方ができます。</p>
            </article>
            <article className="value-card reveal">
              <span className="num">Environment 02</span>
              <h3>成長を感動共有する文化</h3>
              <p>目標の達成度だけでなく成長度を大切にし、仲間の成長をつくる情報共有・肯定的なコミュニケーションを重視しています。</p>
            </article>
            <article className="value-card reveal">
              <span className="num">Environment 03</span>
              <h3>拡大中だから任される裁量</h3>
              <p>2019年の1店舗目から店舗・事業を拡大中。新店舗の立ち上げや運営に、早い段階から関わるチャンスがあります。</p>
            </article>
            <article className="value-card reveal">
              <span className="num">Environment 04</span>
              <h3>未経験からの挑戦を歓迎</h3>
              <p>研修とOJTでサポートするので、接客やトレーナーが未経験の方も安心してスタートできます。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Positions</span>
            <h2 className="section-title">募集職種</h2>
          </div>

          {/* TODO: 募集要項を正式な内容に差し替え */}
          <article className="job-card reveal">
            <h3>美容サロンスタッフ（メンズ脱毛BOSS／眉毛サロンBROW）</h3>
            <table className="info-table">
              <tbody>
                <tr>
                  <th>雇用形態</th>
                  <td>正社員／アルバイト・パート</td>
                </tr>
                <tr>
                  <th>勤務地</th>
                  <td>三重県（四日市・鈴鹿・津・桑名）／愛知県（岡崎）の各店舗</td>
                </tr>
                <tr>
                  <th>仕事内容</th>
                  <td>脱毛・眉毛施術、カウンセリング、受付・接客、店舗運営業務</td>
                </tr>
                <tr>
                  <th>求める人物像</th>
                  <td>お客様一人ひとりに丁寧に向き合える方。未経験可（研修あり）。</td>
                </tr>
                <tr>
                  <th>給与</th>
                  <td>当社規定による（経験・能力を考慮）</td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="job-card reveal">
            <h3>パーソナルトレーナー（パーソナルジムSOL）</h3>
            <table className="info-table">
              <tbody>
                <tr>
                  <th>雇用形態</th>
                  <td>正社員／業務委託</td>
                </tr>
                <tr>
                  <th>勤務地</th>
                  <td>愛知県岡崎市（岡崎店・康生店）</td>
                </tr>
                <tr>
                  <th>仕事内容</th>
                  <td>マンツーマンでのトレーニング指導、カウンセリング、メニュー作成、店舗運営業務</td>
                </tr>
                <tr>
                  <th>求める人物像</th>
                  <td>人と向き合うことが好きな方。未経験可（研修あり）、資格保有者歓迎。</td>
                </tr>
                <tr>
                  <th>給与</th>
                  <td>当社規定による（経験・能力を考慮）</td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="job-card reveal">
            <h3>整体師・セラピスト（Natural整体）</h3>
            <table className="info-table">
              <tbody>
                <tr>
                  <th>雇用形態</th>
                  <td>正社員／業務委託</td>
                </tr>
                <tr>
                  <th>勤務地</th>
                  <td>愛知県岡崎市（Natural整体）</td>
                </tr>
                <tr>
                  <th>仕事内容</th>
                  <td>整体施術、カウンセリング、受付・接客、店舗運営業務</td>
                </tr>
                <tr>
                  <th>求める人物像</th>
                  <td>からだの仕組みに興味があり、お客様の不調に丁寧に向き合える方。</td>
                </tr>
                <tr>
                  <th>給与</th>
                  <td>当社規定による（経験・能力を考慮）</td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="job-card reveal">
            <h3>サウナ施設スタッフ（987サウナ）</h3>
            <table className="info-table">
              <tbody>
                <tr>
                  <th>雇用形態</th>
                  <td>正社員／アルバイト・パート</td>
                </tr>
                <tr>
                  <th>勤務地</th>
                  <td>987サウナ</td>
                </tr>
                <tr>
                  <th>仕事内容</th>
                  <td>受付・接客、館内の環境管理、ロウリュ等のサービス運営、SNS発信</td>
                </tr>
                <tr>
                  <th>求める人物像</th>
                  <td>サウナが好きな方、心地よい空間づくりにこだわれる方。</td>
                </tr>
                <tr>
                  <th>給与</th>
                  <td>当社規定による（経験・能力を考慮）</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <div className="container reveal">
          <h2 className="section-title">応募・ご相談はこちら</h2>
          <p>
            応募をご希望の方は、お問い合わせフォームより「採用について」を選択のうえご連絡ください。
            <br />
            「まず話を聞いてみたい」というカジュアルなご相談も歓迎です。
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              応募・お問い合わせ<span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
