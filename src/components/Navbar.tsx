"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";
import { useLanguage } from "@/context/LanguageProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, dict, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#home", label: dict.nav.home },
    { href: "#menu", label: dict.nav.menu },
    { href: "#branches", label: dict.nav.branches },
    { href: "#contact", label: dict.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-xl transition-transform group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="Pizza Pan"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <span
              className={`hidden sm:inline text-lg sm:text-xl font-bold transition-colors ${
                scrolled
                  ? "text-brand-700 dark:text-brand-400"
                  : "text-white drop-shadow-lg"
              }`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Pizza Pan
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-brand-700/10 dark:hover:bg-brand-400/10 ${
                  scrolled
                    ? "text-[var(--foreground)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Divider */}
            <div
              className={`w-px h-6 mx-2 ${
                scrolled ? "bg-[var(--card-border)]" : "bg-white/30"
              }`}
            />

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-200 hover:scale-105 ${
                scrolled
                  ? "border-brand-700/30 text-brand-700 hover:bg-brand-700 hover:text-white dark:border-brand-400/30 dark:text-brand-400 dark:hover:bg-brand-400 dark:hover:text-black"
                  : "border-white/40 text-white hover:bg-white hover:text-brand-700"
              }`}
            >
              {dict.lang.switch}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                scrolled
                  ? "text-[var(--foreground)] hover:bg-brand-700/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <span className="material-icons-outlined text-xl">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLang}
              className={`px-2 py-1 rounded-full text-xs font-bold border transition-all ${
                scrolled
                  ? "border-brand-700/30 text-brand-700 dark:border-brand-400/30 dark:text-brand-400"
                  : "border-white/40 text-white"
              }`}
            >
              {lang === "ar" ? "EN" : "ع"}
            </button>
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full transition-all ${
                scrolled
                  ? "text-[var(--foreground)]"
                  : "text-white"
              }`}
            >
              <span className="material-icons-outlined text-xl">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-1.5 rounded-full transition-all ${
                scrolled
                  ? "text-[var(--foreground)]"
                  : "text-white"
              }`}
            >
              <span className="material-icons-outlined text-2xl">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass mt-2 mx-4 rounded-2xl p-4 flex flex-col gap-1 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-start px-4 py-3 rounded-xl text-sm font-medium text-[var(--foreground)] hover:bg-brand-700/10 dark:hover:bg-brand-400/10 transition-colors"
            >
              <span className="material-icons-outlined text-brand-600 dark:text-brand-400 text-lg align-middle me-3">
                {link.href === "#home"
                  ? "home"
                  : link.href === "#menu"
                    ? "restaurant_menu"
                    : link.href === "#branches"
                      ? "location_on"
                      : "call"}
              </span>
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
