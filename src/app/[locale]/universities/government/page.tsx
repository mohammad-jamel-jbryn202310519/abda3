import { getTranslations } from "next-intl/server";
import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UniversityCard from "@/components/UniversityCard";
// import removed

interface GovernmentUniversitiesProps {
  params: { locale: string };
}

export default async function GovernmentUniversities({ params }: GovernmentUniversitiesProps) {
  const t = await getTranslations({ locale: params.locale });
  const universities = await prisma.university.findMany({ where: { type: "GOVERNMENT" }, orderBy: { worldRanking: "asc" } });

  return (
    <main>
      <Navbar locale={params.locale} />
      <section className="container py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">{t("governmentUniversities")}</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">{t("governmentUniversities")}</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {universities.map((university) => (
            <UniversityCard
              key={university.id}
              title={params.locale === "ar" ? university.nameArabic : university.nameEnglish}
              location={university.location}
              ranking={university.worldRanking || 0}
              imageUrl={university.imageUrl || "/images/university-placeholder.jpg"}
              googleMapsUrl={university.googleMapsUrl || ""}
            />
          ))}
        </div>
      </section>
      <Footer locale={params.locale} />
    </main>
  );
}
