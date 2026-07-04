"use client";

import Link from "next/link";
import { useState } from "react";

// お問い合わせの送信先メールアドレス
// TODO: 正式なアドレスに差し替え。Formspree等を使う場合はこの送信処理を書き換えてください。
const CONTACT_EMAIL = "info@example.com";

export default function ContactForm() {
  const [status, setStatus] = useState<{ text: string; type: "ok" | "ng" } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setStatus({ text: "未入力の必須項目があります。ご確認ください。", type: "ng" });
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const subject = `【お問い合わせ】${data.get("type")} - ${data.get("name")}様`;
    const body = [
      `お問い合わせ種別: ${data.get("type")}`,
      `お名前: ${data.get("name")}`,
      `メールアドレス: ${data.get("email")}`,
      `電話番号: ${data.get("tel") || "（未記入）"}`,
      "",
      "お問い合わせ内容:",
      data.get("message"),
    ].join("\n");

    window.location.href =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(String(body))}`;

    setStatus({ text: "メールソフトが起動します。送信を完了してください。", type: "ok" });
  };

  return (
    <form className="contact-form reveal" id="contactForm" noValidate onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="type">
          お問い合わせ種別<span className="required-badge">必須</span>
        </label>
        <select id="type" name="type" required defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          <option>事業・サービスについて</option>
          <option>採用について</option>
          <option>取材・メディア掲載について</option>
          <option>出店・協業のご相談</option>
          <option>その他</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="name">
          お名前<span className="required-badge">必須</span>
        </label>
        <input type="text" id="name" name="name" autoComplete="name" required placeholder="例）丸山 花子" />
      </div>
      <div className="form-row">
        <label htmlFor="email">
          メールアドレス<span className="required-badge">必須</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          placeholder="例）example@maru.co.jp"
        />
      </div>
      <div className="form-row">
        <label htmlFor="tel">
          電話番号<span className="optional-badge">任意</span>
        </label>
        <input type="tel" id="tel" name="tel" autoComplete="tel" placeholder="例）090-0000-0000" />
      </div>
      <div className="form-row">
        <label htmlFor="message">
          お問い合わせ内容<span className="required-badge">必須</span>
        </label>
        <textarea id="message" name="message" required placeholder="お問い合わせ内容をご記入ください" />
        <p className="form-note">
          ご入力いただいた個人情報は、
          <Link href="/privacy" style={{ textDecoration: "underline" }}>
            プライバシーポリシー
          </Link>
          に基づき取り扱います。
        </p>
      </div>
      <div className="form-submit">
        <button type="submit" className="btn btn-primary" style={{ minWidth: 260 }}>
          送信する<span className="arrow">→</span>
        </button>
        {status && (
          <p className={`form-status ${status.type}`} role="status">
            {status.text}
          </p>
        )}
      </div>
    </form>
  );
}
