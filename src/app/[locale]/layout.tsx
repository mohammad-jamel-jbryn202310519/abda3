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
      <div dir={params.locale === "ar" ? "rtl" : "ltr"} className="min-h-screen relative overflow-hidden animated-bg">
        {/* Floating animated gold background bubbles */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] floating-bubble" style={{ animationDelay: "0s", animationDuration: "25s" }} />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] floating-bubble" style={{ animationDelay: "-7s", animationDuration: "35s" }} />
        <div className="absolute top-[50%] left-[20%] w-[400px] h-[400px] floating-bubble" style={{ animationDelay: "-14s", animationDuration: "20s" }} />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
