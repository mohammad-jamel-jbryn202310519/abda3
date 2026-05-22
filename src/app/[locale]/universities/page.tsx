import { prisma } from "@/lib/prisma";
import UniversitiesList from "@/components/UniversitiesList";
import Navbar from "@/components/Navbar";

export default async function UniversitiesPage({ params }: { params: { locale: string } }) {
  const universities = await prisma.university.findMany({ 
    orderBy: { nameArabic: "asc" } 
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar locale={params.locale} />
      <div className="container py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {params.locale === "ar" ? "اختر جامعتك" : "Choose University"}
          </h1>
          <p className="text-slate-600">
            {params.locale === "ar" ? "تصفح الجامعات وتعرف على التفاصيل والرسوم" : "Browse universities and see details and tuition fees"}
          </p>
        </div>
        
        <UniversitiesList universities={universities} locale={params.locale} />
      </div>
    </main>
  );
}
