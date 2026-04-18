"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { menuCategories, menuTabs } from "@/data/menu";
import MenuCard from "./MenuCard";
import ScrollReveal from "./ScrollReveal";

export default function MenuSection() {
  const { lang, dict } = useLanguage();
  const [activeTab, setActiveTab] = useState("pizza");

  const activeDef = menuTabs.find((t) => t.id === activeTab)!;
  const activeCategories = activeDef.categoryIndices.map(
    (i) => menuCategories[i]
  );

  const sizeLabels = dict.menu.sizes as Record<string, string>;

  return (
    <section
      id="menu"
      className="py-20 lg:py-28 bg-[var(--section-alt)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-700/10 dark:bg-brand-400/10 text-brand-700 dark:text-brand-400 text-sm font-semibold mb-4">
            <span className="material-icons-outlined text-lg">restaurant_menu</span>
            {dict.menu.title}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-3 ${
              lang === "ar" ? "font-[family-name:var(--font-cairo)]" : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {dict.menu.title}
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-md mx-auto">
            {dict.menu.subtitle}
          </p>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal delay={100} className="mb-10">
          <div
            className="flex gap-2 overflow-x-auto menu-tabs pb-2 px-1 -mx-1"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            {menuTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? "tab-active"
                    : "bg-[var(--card-bg)] text-[var(--muted)] border border-[var(--card-border)] hover:border-brand-300 dark:hover:border-brand-600 hover:text-brand-600 dark:hover:text-brand-400"
                }`}
              >
                <span className="material-icons-outlined text-lg">
                  {tab.icon}
                </span>
                <span className={lang === "ar" ? "font-[family-name:var(--font-cairo)]" : "font-[family-name:var(--font-inter)]"}>
                  {lang === "ar" ? tab.nameAr : tab.nameEn}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Content */}
        <div className="space-y-10">
          {activeCategories.map((category, catIdx) => (
            <ScrollReveal key={`${activeTab}-${catIdx}`} delay={catIdx * 100}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="material-icons-outlined text-2xl text-brand-600 dark:text-brand-400">
                  {category.icon}
                </span>
                <h3
                  className={`text-xl sm:text-2xl font-bold text-[var(--foreground)] ${
                    lang === "ar" ? "font-[family-name:var(--font-cairo)]" : "font-[family-name:var(--font-inter)]"
                  }`}
                >
                  {lang === "ar" ? category.nameAr : category.nameEn}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-brand-700/20 to-transparent dark:from-brand-400/20" />
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {category.items.map((item, itemIdx) => (
                  <MenuCard
                    key={`${item.nameEn}-${itemIdx}`}
                    item={item}
                    sizes={category.sizes}
                    currency={dict.menu.currency}
                    sizeLabels={sizeLabels}
                    index={itemIdx}
                  />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
