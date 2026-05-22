import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

// dynamic parameters enabled for i18n

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const messages = await getMessages(params.locale);

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <div dir={params.locale === "ar" ? "rtl" : "ltr"} className="min-h-screen">
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
