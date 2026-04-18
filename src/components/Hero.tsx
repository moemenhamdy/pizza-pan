"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageProvider";

export default function Hero() {
  const { dict, lang } = useLanguage();

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Base gradient (fallback + overlay) */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-700 to-brand-800" />

        {/* Cover image */}
        <Image
          src="/images/cover.jpg"
          alt="Pizza Pan food showcase"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
          sizes="100vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Geometric pattern overlay (subtle) */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center w-full">
        {/* Logo */}
        <div className="animate-fade-down mb-6">
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto animate-float">
            <Image
              src="/images/logo.png"
              alt="Pizza Pan Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 640px) 192px, 256px"
            />
          </div>
        </div>

        {/* Tagline */}
        <div className="animate-fade-up mb-4" style={{ animationDelay: "0.2s" }}>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight ${
              lang === "ar" ? "font-[family-name:var(--font-cairo)]" : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {dict.hero.tagline}
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <p
            className={`text-lg sm:text-xl text-white/80 mb-10 ${
              lang === "ar" ? "font-[family-name:var(--font-cairo)]" : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {dict.hero.subtitle}
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="animate-fade-up flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={() => handleScroll("#menu")}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-brand-700 font-bold text-base sm:text-lg rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gold-400 hover:text-brand-900 overflow-hidden max-w-xs"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="material-icons-outlined">restaurant_menu</span>
              {dict.hero.viewMenu}
            </span>
            <div className="absolute inset-0 shimmer rounded-full" />
          </button>

          <a
            href="tel:15616"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/40 text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 hover:bg-white hover:text-brand-700 hover:scale-105 hover:border-white flex items-center justify-center gap-2 max-w-xs"
          >
            <span className="material-icons-outlined">phone</span>
            {dict.hero.callUs}
            <span className="font-mono tracking-wider">15616</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => handleScroll("#menu")}
          className="text-white/60 hover:text-white transition-colors"
        >
          <span className="material-icons-outlined text-3xl">
            expand_more
          </span>
        </button>
      </div>
    </section>
  );
}
