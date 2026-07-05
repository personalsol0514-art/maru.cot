import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "店舗・実績",
  description:
    "株式会社MARUが運営する店舗・ブランド（メンズ脱毛BOSS、眉毛サロンBROW、パーソナルジムSOL、Natural整体、987サウナ）をご紹介します。",
};

export default function WorksPage() {
  return (
    <>
      <PageHero en="Works" title="店舗・実績" />

      <section className="section">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Brands</span>
            <h2 className="section-title">運営店舗・ブランド一覧</h2>
            <p className="section-lead">
              三重県・愛知県で展開する5つのブランドをご紹介します。
              それぞれの場所で、縁ある人の生活の質を高めるサービスをお届けしています。
            </p>
          </div>
          <div className="works-grid">
            <article className="work-card reveal">
              <div className="work-thumb work-thumb-logo">
                <Image src="/images/brands/boss.png" alt="メンズ脱毛BOSS ロゴ" width={388} height={564} />
              </div>
              <div className="work-body">
                <span className="tag">美容</span>
                <h3>メンズ脱毛BOSS</h3>
                <p>
                  清潔感を大切にする男性のための脱毛サロン。
                  2019年の四日市店を皮切りに、鈴鹿店・岡崎店・桑名店の4店舗を展開しています。
                </p>
                <p style={{ marginTop: 8, fontSize: 13, color: "#8A8078" }}>店舗: 四日市／鈴鹿／岡崎／桑名</p>
                {/* TODO: 店舗サイトのURLに差し替え */}
                <a href="#" className="text-link">
                  店舗サイトへ →
                </a>
              </div>
            </article>
            <article className="work-card reveal">
              <div className="work-thumb work-thumb-logo">
                <Image src="/images/brands/brow.png" alt="眉毛サロンBROW ロゴ" width={116} height={55} />
              </div>
              <div className="work-body">
                <span className="tag">美容</span>
                <h3>眉毛サロンBROW</h3>
                <p>
                  顔の印象を左右する眉を、一人ひとりの骨格・表情に合わせてデザインする眉毛サロン。
                  三重県内に2店舗を展開しています。
                </p>
                <p style={{ marginTop: 8, fontSize: 13, color: "#8A8078" }}>店舗: 津／桑名</p>
                {/* TODO: 店舗サイトのURLに差し替え */}
                <a href="#" className="text-link">
                  店舗サイトへ →
                </a>
              </div>
            </article>
            <article className="work-card reveal">
              <div className="work-thumb work-thumb-logo">
                <Image src="/images/brands/sol.png" alt="パーソナルジムSOL ロゴ" width={514} height={640} />
              </div>
              <div className="work-body">
                <span className="tag">フィットネス</span>
                <h3>パーソナルジムSOL</h3>
                <p>
                  愛知県岡崎市のパーソナルジム。マンツーマン指導で、
                  ダイエット・姿勢改善・運動習慣づくりを一人ひとりのペースに合わせてサポートします。
                </p>
                <p style={{ marginTop: 8, fontSize: 13, color: "#8A8078" }}>店舗: 岡崎／康生</p>
                {/* TODO: 店舗サイトのURLに差し替え */}
                <a href="#" className="text-link">
                  店舗サイトへ →
                </a>
              </div>
            </article>
            <article className="work-card reveal">
              <div className="work-thumb work-thumb-logo">
                <Image src="/images/brands/natural-seitai.png" alt="Natural整体 ロゴ" width={560} height={621} />
              </div>
              <div className="work-body">
                <span className="tag">整体</span>
                <h3>Natural整体</h3>
                <p>
                  愛知県岡崎市の整体院。日々の疲れやからだの不調に丁寧に向き合い、
                  本来のコンディションを取り戻すお手伝いをします。2025年6月にリニューアルオープンしました。
                </p>
                <p style={{ marginTop: 8, fontSize: 13, color: "#8A8078" }}>店舗: 岡崎</p>
                {/* TODO: 店舗サイトのURLに差し替え */}
                <a href="#" className="text-link">
                  店舗サイトへ →
                </a>
              </div>
            </article>
            <article className="work-card reveal">
              <div className="work-thumb work-thumb-logo">
                <Image src="/images/brands/987sauna.png" alt="987サウナ ロゴ" width={653} height={361} />
              </div>
              <div className="work-body">
                <span className="tag">サウナ</span>
                <h3>987サウナ</h3>
                <p>
                  深いリラックスと「ととのう」体験にこだわったサウナ施設。
                  2026年3月にオープンしました。日常から少し離れて、心身をリセットできる空間を提供しています。
                </p>
                {/* TODO: 店舗サイトのURLに差し替え */}
                <a href="#" className="text-link">
                  店舗サイトへ →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <div className="container reveal">
          <h2 className="section-title">出店・協業のご相談</h2>
          <p>新規出店や協業に関するご相談は、お問い合わせフォームよりお気軽にご連絡ください。</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              お問い合わせ<span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
