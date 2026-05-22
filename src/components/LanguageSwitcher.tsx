"use client";

import Link from "next/link";

interface LanguageSwitcherProps {
  locale: string;
  currentPath: string;
}

export default function LanguageSwitcher({ locale, currentPath }: LanguageSwitcherProps) {
  const nextLocale = locale === "ar" ? "en" : "ar";
  const switchPath = currentPath.replace(`/${locale}`, `/${nextLocale}`) || `/${nextLocale}`;

  return (
    <Link href={switchPath} className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-400 hover:text-brand-600">
      {nextLocale.toUpperCase()}
    </Link>
  );
}
