import Image from "next/image";
import Link from "next/link";

const FOOTER_NAV = [
  { href: "/about", label: "会社概要" },
  { href: "/business", label: "事業内容" },
  { href: "/works", label: "店舗・実績" },
  { href: "/news", label: "お知らせ" },
  { href: "/recruit", label: "採用情報" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <Link href="/" className="footer-logo">
              <Image
                src="/assets/logo-mark-white.png"
                alt=""
                width={766}
                height={425}
                className="footer-logo-mark"
              />
              <span className="footer-logo-text">MARU</span>
            </Link>
            <address className="footer-address">
              {/* TODO: 正式な住所に差し替え */}
              〒000-0000 （所在地を記載）
            </address>
          </div>
          <nav className="footer-nav" aria-label="フッターナビゲーション">
            <ul>
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <Link href="/privacy">プライバシーポリシー</Link>
          <small>&copy; MARU Inc. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}
