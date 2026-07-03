/* 株式会社MARU コーポレートサイト 共通スクリプト */

// お問い合わせの送信先メールアドレス
// TODO: 正式なアドレスに差し替え。Formspree等を使う場合はフォーム送信処理を書き換えてください。
const CONTACT_EMAIL = "info@example.com";

document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- スクロールプログレスバー ----------
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.appendChild(progress);

  // ---------- ヘッダー: 背景付与 + 下スクロールで隠す ----------
  const header = document.querySelector(".site-header");
  const parallaxEls = document.querySelectorAll("[data-parallax]");
  let lastY = window.scrollY;
  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 10);

    // 下にスクロールしたら隠し、上に戻したら表示
    if (y > 320 && y > lastY + 4) {
      header.classList.add("is-hidden");
    } else if (y < lastY - 4) {
      header.classList.remove("is-hidden");
    }
    lastY = y;

    // 進捗バー
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = max > 0 ? `${(y / max) * 100}%` : "0";

    // 装飾のパララックス
    if (!reduceMotion) {
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.1;
        el.style.translate = `0 ${y * speed}px`;
      });
    }
    ticking = false;
  };
  onScroll();
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
      }
    },
    { passive: true }
  );

  // ---------- ハンバーガーメニュー ----------
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobileNav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
      document.body.classList.toggle("nav-locked", isOpen);
    });
    // メニュー内のリンクを押したら閉じる
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-locked");
      });
    });
  }

  // ---------- スクロールで要素をフェードイン ----------
  const revealTargets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  // ---------- 数字のカウントアップ ----------
  const counters = document.querySelectorAll(".count[data-count]");
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    if (reduceMotion) {
      el.textContent = target;
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      el.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (counters.length && "IntersectionObserver" in window) {
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => countObserver.observe(el));
  } else {
    counters.forEach((el) => (el.textContent = el.dataset.count));
  }

  // ---------- お問い合わせフォーム (mailto 起動) ----------
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        status.textContent = "未入力の必須項目があります。ご確認ください。";
        status.className = "form-status ng";
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
        `&body=${encodeURIComponent(body)}`;

      status.textContent = "メールソフトが起動します。送信を完了してください。";
      status.className = "form-status ok";
    });
  }
});
