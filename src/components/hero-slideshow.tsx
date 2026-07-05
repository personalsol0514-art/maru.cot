"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  { src: "/images/hero/hero-sauna.jpg", alt: "987サウナの温かみのある室内" },
  { src: "/images/hero/hero-fitness.jpg", alt: "パーソナルジムSOLのトレーニング風景" },
  { src: "/images/hero/hero-beauty.jpg", alt: "美容サロンの落ち着いた施術スペース" },
];

const INTERVAL_MS = 5500;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-media">
      {SLIDES.map((slide, i) => (
        <div key={slide.src} className={`hero-slide${i === index ? " is-active" : ""}`} aria-hidden={i !== index}>
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            priority={i === 0}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-dots" role="tablist" aria-label="ヒーロー画像の切り替え">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`${i + 1}枚目の画像を表示`}
            className={`hero-dot${i === index ? " is-active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
