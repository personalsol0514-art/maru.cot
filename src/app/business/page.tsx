import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "事業内容",
  description: "株式会社MARUの事業内容。メンズ脱毛・眉毛サロンなどの美容事業、パーソナルジム、整体、サウナ事業をご紹介します。",
};

export default function BusinessPage() {
  return (
    <>
      <PageHero en="Business" title="事業内容" />

      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Our Business</span>
            <h2 className="section-title">生活の質を高める、4つの事業</h2>
            <p className="section-lead">
              美容・フィットネス・整体・サウナ。 MARUは三重県・愛知県で4つの事業を展開し、
              縁ある人の生活の質の向上に貢献します。
            </p>
          </div>

          {/* Beauty */}
          <div className="biz-section biz-reverse reveal" id="beauty">
            <div className="biz-visual v-beauty">BEAUTY</div>
            <div className="biz-text">
              <span className="en">Beauty</span>
              <h2>美容事業</h2>
              <p>
                「メンズ脱毛BOSS」を三重県・愛知県で4店舗、「眉毛サロンBROW」を三重県で2店舗運営しています。
                清潔感を大切にする男性のための脱毛サロンと、顔の印象を整える眉毛サロン。
                確かな技術と通いやすさで、お客様の「なりたい自分」を支えます。
              </p>
              <ul className="biz-points">
                <li>メンズ脱毛BOSS（四日市・鈴鹿・岡崎・桑名）</li>
                <li>眉毛サロンBROW（津・桑名）</li>
                <li>一人ひとりに合わせた丁寧なカウンセリング</li>
              </ul>
            </div>
          </div>

          {/* Fitness */}
          <div className="biz-section reveal" id="fitness">
            <div className="biz-visual v-fitness">FITNESS</div>
            <div className="biz-text">
              <span className="en">Fitness</span>
              <h2>フィットネス事業</h2>
              <p>
                愛知県岡崎市で「パーソナルジムSOL」を2店舗（岡崎店・康生店）運営しています。
                マンツーマン指導で、ダイエット・姿勢改善・運動習慣づくりを
                一人ひとりのペースに合わせてサポートします。
              </p>
              <ul className="biz-points">
                <li>パーソナルジムSOL（岡崎・康生）</li>
                <li>マンツーマン指導で初心者も安心</li>
                <li>体調・体力に合わせるオーダーメイドメニュー</li>
              </ul>
            </div>
          </div>

          {/* Seitai */}
          <div className="biz-section biz-reverse reveal" id="seitai">
            <div className="biz-visual v-seitai">SEITAI</div>
            <div className="biz-text">
              <span className="en">Seitai</span>
              <h2>整体事業</h2>
              <p>
                愛知県岡崎市で「Natural整体」を運営しています。
                日々の疲れやからだの不調に丁寧に向き合い、 本来のコンディションを取り戻すお手伝いをします。
                フィットネス事業との連携で、「動く」と「整える」の両面からサポートできるのが強みです。
              </p>
              <ul className="biz-points">
                <li>Natural整体（岡崎）</li>
                <li>一人ひとりの状態に合わせた施術</li>
                <li>パーソナルジムとの連携によるからだづくり</li>
              </ul>
            </div>
          </div>

          {/* Sauna */}
          <div className="biz-section reveal" id="sauna">
            <div className="biz-visual v-sauna">SAUNA</div>
            <div className="biz-text">
              <span className="en">Sauna</span>
              <h2>サウナ事業</h2>
              <p>
                2026年3月、「987サウナ」をオープン。 深く「ととのう」体験を追求したサウナ施設として、
                日常から少し離れて心身をリセットできる上質な休息の時間をお届けします。
              </p>
              <ul className="biz-points">
                <li>987サウナ（2026年3月OPEN）</li>
                <li>「ととのう」体験にこだわった空間・動線設計</li>
                <li>サウナ・水風呂・外気浴の質を追求</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <div className="container reveal">
          <h2 className="section-title">店舗・ブランドを見る</h2>
          <p>各事業の店舗・ブランドの詳細は、店舗・実績ページでご紹介しています。</p>
          <div className="cta-actions">
            <Link href="/works" className="btn btn-primary">
              店舗・実績を見る<span className="arrow">→</span>
            </Link>
            <Link href="/contact" className="btn btn-outline">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
