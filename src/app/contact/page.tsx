import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "株式会社MARUへのお問い合わせはこちらから。事業に関するご相談、採用への応募、取材のご依頼などを受け付けています。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero en="Contact" title="お問い合わせ" />

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="reveal">
            <p className="section-lead" style={{ marginTop: 0 }}>
              事業に関するご相談、採用への応募、取材のご依頼などは、下記のフォームよりお気軽にお問い合わせください。
              内容を確認のうえ、担当者よりご連絡いたします。
            </p>
          </div>

          {/*
            送信の仕組み:
            現在はメールソフトが起動する形式（mailto）です。
            Formspree や Googleフォーム等を使う場合は、src/components/contact-form.tsx の CONTACT_EMAIL 付近を差し替えてください。
          */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
