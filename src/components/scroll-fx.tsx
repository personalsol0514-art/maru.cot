"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * ページ内の `.reveal` 要素のスクロールフェードイン、
 * `.count[data-count]` のカウントアップ、スクロール進捗バーを制御する。
 * App Router のクライアント側遷移でも動くよう、pathname が変わるたびに再スキャンする。
 */
export default function ScrollFx() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const progress = progressRef.current;

    const onScroll = () => {
      if (!progress) return;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = max > 0 ? `${(y / max) * 100}%` : "0";
    };
    onScroll();
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", scrollHandler, { passive: true });

    // ---------- スクロールで要素をフェードイン ----------
    const revealTargets = document.querySelectorAll(".reveal");
    let revealObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
      );
      revealTargets.forEach((el) => revealObserver?.observe(el));
    } else {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    }

    // ---------- 数字のカウントアップ ----------
    const counters = document.querySelectorAll<HTMLElement>(".count[data-count]");
    const animateCount = (el: HTMLElement) => {
      const target = parseInt(el.dataset.count || "0", 10);
      if (reduceMotion) {
        el.textContent = String(target);
        return;
      }
      const duration = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 4);
        el.textContent = String(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    let countObserver: IntersectionObserver | undefined;
    if (counters.length && "IntersectionObserver" in window) {
      countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target as HTMLElement);
              countObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => countObserver?.observe(el));
    } else {
      counters.forEach((el) => (el.textContent = el.dataset.count || "0"));
    }

    // ---------- 装飾のパララックス ----------
    const parallaxEls = document.querySelectorAll<HTMLElement>("[data-parallax]");
    const parallaxHandler = () => {
      if (reduceMotion) return;
      const y = window.scrollY;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.1");
        el.style.translate = `0 ${y * speed}px`;
      });
    };
    parallaxHandler();
    window.addEventListener("scroll", parallaxHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("scroll", parallaxHandler);
      revealObserver?.disconnect();
      countObserver?.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}
