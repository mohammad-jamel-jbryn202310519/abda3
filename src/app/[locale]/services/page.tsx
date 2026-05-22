import { getTranslations } from "next-intl/server";
import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
// import removed

interface ServicesPageProps {
  params: { locale: string };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const t = await getTranslations({ locale: params.locale });
  const services = await prisma.service.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } });

  return (
    <main>
      <Navbar locale={params.locale} />
      <section className="container py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">{t("services")}</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">{t("services")}</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={params.locale === "ar" ? service.titleArabic : service.titleEnglish}
              description={params.locale === "ar" ? service.descriptionArabic : service.descriptionEnglish}
              icon={service.icon || "/icons/service.svg"}
            />
          ))}
        </div>
      </section>
      <Footer locale={params.locale} />
    </main>
  );
}
