import { getTranslations } from "next-intl/server";
import AppHome from "@/components/AppHome";

interface PageProps {
  params: { locale: string };
}

export default async function HomePage({ params }: PageProps) {
  // Using AppHome client component for the new mobile-first animated layout
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <AppHome locale={params.locale} />
    </main>
  );
}
