import type { Metadata } from "next";
import ScrollFx from "@/components/scroll-fx";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "株式会社MARU｜縁ある人を豊かにする",
    template: "%s｜株式会社MARU",
  },
  description:
    "株式会社MARUは「縁ある人を豊かにする」を企業理念に、三重県・愛知県で美容（メンズ脱毛BOSS・眉毛サロンBROW）、パーソナルジムSOL、Natural整体、987サウナを運営しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- root layout <head> is the supported place for static third-party font links in the App Router */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&family=Zen+Old+Mincho:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollFx />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
