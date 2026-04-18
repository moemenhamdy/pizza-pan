"use client";

import { useLanguage } from "@/context/LanguageProvider";
import type { MenuItem, SizedPrices } from "@/data/menu";

type Props = {
  item: MenuItem;
  sizes?: string[];
  currency: string;
  sizeLabels: Record<string, string>;
  index: number;
};

export default function MenuCard({
  item,
  sizes,
  currency,
  sizeLabels,
  index,
}: Props) {
  const { lang } = useLanguage();
  const name = lang === "ar" ? item.nameAr : item.nameEn;
  const isSinglePrice = typeof item.prices === "number";

  return (
    <div
      className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-brand-700/10 dark:hover:shadow-brand-400/10 hover:-translate-y-1"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* New badge */}
      {item.isNew && (
        <span className="absolute -top-2 -end-2 bg-gold-500 text-brand-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow-md animate-pulse">
          ★ NEW
        </span>
      )}

      {/* Item Name */}
      <h4
        className={`font-semibold text-sm mb-2 text-[var(--foreground)] group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors ${
          lang === "ar" ? "font-[family-name:var(--font-cairo)]" : "font-[family-name:var(--font-inter)]"
        }`}
      >
        {name}
      </h4>

      {/* Prices */}
      {isSinglePrice ? (
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold text-brand-600 dark:text-brand-400">
            {item.prices as number}
          </span>
          <span className="text-xs text-[var(--muted)]">{currency}</span>
        </div>
      ) : (
        <div className="flex flex-wrap gap-1.5">
          {(sizes || ["mini", "small", "medium", "large"]).map((size) => {
            const price = (item.prices as SizedPrices)[
              size as keyof SizedPrices
            ];
            if (!price) return null;
            return (
              <div
                key={size}
                className="flex flex-col items-center bg-[var(--section-alt)] rounded-lg px-1.5 sm:px-2 py-1.5 min-w-[42px] flex-1"
              >
                <span className="text-[10px] text-[var(--muted)] leading-none mb-0.5">
                  {sizeLabels[size] || size}
                </span>
                <span className="text-sm font-bold text-brand-700 dark:text-brand-400">
                  {price}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
