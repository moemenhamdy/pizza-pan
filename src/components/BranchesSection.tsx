"use client";

import { useLanguage } from "@/context/LanguageProvider";
import ScrollReveal from "./ScrollReveal";

const branches = [
  {
    key: "kafrElSheikh" as const,
    icon: "store",
    isMain: true,
    services: ["outdoor", "roadside", "instore"] as const,
  },
  {
    key: "deltaLagoons" as const,
    icon: "pool",
    isMain: false,
    services: ["outdoor", "instore"] as const,
  },
  {
    key: "damanhour" as const,
    icon: "storefront",
    isMain: false,
    services: ["outdoor", "roadside", "instore"] as const,
  },
];

const serviceIcons: Record<string, string> = {
  outdoor: "deck",
  roadside: "directions_car",
  instore: "shopping_bag",
};

export default function BranchesSection() {
  const { lang, dict } = useLanguage();

  return (
    <section id="branches" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-700/10 dark:bg-brand-400/10 text-brand-700 dark:text-brand-400 text-sm font-semibold mb-4">
            <span className="material-icons-outlined text-lg">location_on</span>
            {dict.branches.title}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-3 ${
              lang === "ar" ? "font-[family-name:var(--font-cairo)]" : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {dict.branches.title}
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-md mx-auto">
            {dict.branches.subtitle}
          </p>
        </ScrollReveal>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches.map((branch, idx) => {
            const location =
              dict.branches.locations[branch.key];
            return (
              <ScrollReveal
                key={branch.key}
                delay={idx * 150}
                direction="up"
              >
                <div
                  className={`relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-5 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    branch.isMain
                      ? "ring-2 ring-brand-600/30 dark:ring-brand-400/30"
                      : ""
                  }`}
                >
                  {/* Main branch badge */}
                  {branch.isMain && (
                    <div className="absolute -top-3 start-6 bg-gradient-to-r from-brand-700 to-brand-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      <span className="material-icons-outlined text-sm align-middle me-1">
                        star
                      </span>
                      {dict.branches.mainBranch}
                    </div>
                  )}

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center mb-5 shadow-lg">
                    <span className="material-icons-outlined text-2xl text-white">
                      {branch.icon}
                    </span>
                  </div>

                  {/* Name */}
                  <h3
                    className={`text-xl font-bold text-[var(--foreground)] mb-2 ${
                      lang === "ar" ? "font-[family-name:var(--font-cairo)]" : "font-[family-name:var(--font-inter)]"
                    }`}
                  >
                    {location.name}
                  </h3>

                  {/* Address */}
                  <p className="text-[var(--muted)] text-sm mb-5 flex items-start gap-2">
                    <span className="material-icons-outlined text-brand-600 dark:text-brand-400 text-lg shrink-0 mt-0.5">
                      place
                    </span>
                    {location.address}
                  </p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2">
                    {branch.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--section-alt)] text-xs font-medium text-[var(--muted)]"
                      >
                        <span className="material-icons-outlined text-sm text-brand-600 dark:text-brand-400">
                          {serviceIcons[service]}
                        </span>
                        {dict.branches.services[service]}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
