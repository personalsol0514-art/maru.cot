"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { href: "/about", label: "会社概要", en: "About" },
  { href: "/business", label: "事業内容", en: "Business" },
  { href: "/works", label: "店舗・実績", en: "Works" },
  { href: "/news", label: "お知らせ", en: "News" },
  { href: "/recruit", label: "採用情報", en: "Recruit" },
  { href: "/contact", label: "お問い合わせ", en: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastY = useRef(0);

  // メニューを開いた状態でページ遷移したら閉じる
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", isOpen);
  }, [isOpen]);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 10);
      if (y > 320 && y > lastY.current + 4) {
        setIsHidden(true);
      } else if (y < lastY.current - 4) {
        setIsHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`site-header${isScrolled ? " is-scrolled" : ""}${isHidden ? " is-hidden" : ""}`}
      >
        <div className="container header-inner">
          <Link href="/" className="header-logo">
            <Image
              src="/assets/logo-mark.png"
              alt=""
              width={766}
              height={425}
              priority
              className="header-logo-mark"
            />
            <span className="header-logo-text">MARU</span>
          </Link>
          <nav className="global-nav" aria-label="グローバルナビゲーション">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      item.href === "/contact"
                        ? "nav-contact-btn"
                        : pathname === item.href
                          ? "is-current"
                          : undefined
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className={`menu-toggle${isOpen ? " is-open" : ""}`}
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
            aria-controls="mobileNav"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <nav
        className={`mobile-nav${isOpen ? " is-open" : ""}`}
        id="mobileNav"
        aria-label="モバイルナビゲーション"
      >
        <div className="container">
          <ul>
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                <span className="mobile-nav-en">Top</span>トップ
              </Link>
            </li>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  <span className="mobile-nav-en">{item.en}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
