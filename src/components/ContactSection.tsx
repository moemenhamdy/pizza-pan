"use client";

import { useLanguage } from "@/context/LanguageProvider";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const { lang, dict } = useLanguage();

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[var(--section-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-700/10 dark:bg-brand-400/10 text-brand-700 dark:text-brand-400 text-sm font-semibold mb-4">
            <span className="material-icons-outlined text-lg">call</span>
            {dict.contact.title}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-3 ${
              lang === "ar" ? "font-[family-name:var(--font-cairo)]" : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {dict.contact.title}
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-md mx-auto">
            {dict.contact.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Hotline Card */}
          <ScrollReveal direction="left">
            <div className="relative bg-gradient-to-br from-brand-700 to-brand-900 rounded-3xl p-6 sm:p-10 text-center text-white overflow-hidden">
              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-pulse-glow">
                  <span className="material-icons-outlined text-3xl sm:text-4xl">
                    phone_in_talk
                  </span>
                </div>

                <p className="text-white/70 text-base sm:text-lg mb-2 font-medium">
                  {dict.contact.hotline}
                </p>

                <a
                  href="tel:15616"
                  className="inline-block text-4xl sm:text-5xl md:text-6xl font-black tracking-widest hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  15616
                </a>

                <p className="text-white/50 text-sm mt-4">
                  {lang === "ar" ? "اتصل دلوقتي واطلب" : "Call now to order"}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Info Cards */}
          <div className="space-y-5">
            {/* Address */}
            <ScrollReveal direction="right" delay={100}>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 flex items-start gap-4 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-brand-700/10 dark:bg-brand-400/10 flex items-center justify-center shrink-0">
                  <span className="material-icons-outlined text-2xl text-brand-600 dark:text-brand-400">
                    location_on
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-1">
                    {dict.contact.address}
                  </h4>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {dict.branches.locations.kafrElSheikh.address}
                    <br />
                    {dict.branches.locations.kafrElSheikh.city}
                    {lang === "ar" ? " ، مصر 33511" : ", Egypt 33511"}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Social Media */}
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6">
                <h4 className="font-semibold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <span className="material-icons-outlined text-brand-600 dark:text-brand-400">
                    share
                  </span>
                  {dict.contact.followUs}
                </h4>
                <div className="flex gap-3">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/Pizza.Pan.Kfs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 flex-1 bg-[var(--section-alt)] rounded-xl p-4 transition-all hover:bg-blue-600 hover:text-white"
                  >
                    <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="font-medium text-sm">Facebook</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/pizza___pan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 flex-1 bg-[var(--section-alt)] rounded-xl p-4 transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:text-white"
                  >
                    <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <span className="font-medium text-sm">Instagram</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Services */}
            <ScrollReveal direction="right" delay={300}>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6">
                <h4 className="font-semibold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <span className="material-icons-outlined text-brand-600 dark:text-brand-400">
                    room_service
                  </span>
                  {dict.contact.services}
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {(
                    [
                      { key: "outdoor", icon: "deck" },
                      { key: "roadside", icon: "directions_car" },
                      { key: "instore", icon: "shopping_bag" },
                    ] as const
                  ).map((service) => (
                    <div
                      key={service.key}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[var(--section-alt)]"
                    >
                      <span className="material-icons-outlined text-2xl text-brand-600 dark:text-brand-400">
                        {service.icon}
                      </span>
                      <span className="text-xs text-center font-medium text-[var(--muted)]">
                        {dict.branches.services[service.key]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
