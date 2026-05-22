import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import { MapPin, GraduationCap, FileText, DollarSign } from "lucide-react";

export default async function UniversityDetailsPage({ params }: { params: { locale: string, id: string } }) {
  const uni = await prisma.university.findUnique({
    where: { id: params.id }
  });

  if (!uni) notFound();

  const isAr = params.locale === "ar";
  const name = isAr ? uni.nameArabic : uni.nameEnglish;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Navbar locale={params.locale} />
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-10">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-slate-50 rounded-3xl p-4 flex items-center justify-center border border-slate-100 shadow-sm">
            {uni.logoUrl ? (
              <img src={uni.logoUrl} alt={name} className="max-w-full max-h-full object-contain" />
            ) : (
              <GraduationCap size={48} className="text-slate-300" />
            )}
          </div>
          <div className="text-center md:text-start flex-1">
            <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full mb-3">
              {uni.type === "GOVERNMENT" ? (isAr ? "جامعة حكومية" : "Government") : (isAr ? "جامعة خاصة" : "Private")}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{name}</h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 font-medium">
              <MapPin size={18} />
              <span>{uni.governorate || uni.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Gallery */}
          {uni.gallery.length > 0 && (
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{isAr ? "صور الجامعة" : "Gallery"}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {uni.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-2xl overflow-hidden bg-slate-100">
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tuition Fees */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-2xl text-green-600"><DollarSign size={24} /></div>
              <h2 className="text-2xl font-bold text-slate-900">{isAr ? "الرسوم وتفاصيل التخصصات" : "Tuition Fees"}</h2>
            </div>
            {uni.tuitionFees ? (
              <div className="prose prose-slate max-w-none whitespace-pre-wrap text-slate-700">
                {uni.tuitionFees}
              </div>
            ) : (
              <p className="text-slate-500 italic">{isAr ? "لا توجد تفاصيل حالياً." : "No details available."}</p>
            )}
          </div>
        </div>

        <div className="space-y-8">
          {/* Degrees */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">{isAr ? "الدرجات العلمية المتاحة" : "Available Degrees"}</h3>
            <div className="flex flex-wrap gap-2">
              {uni.degrees.length > 0 ? uni.degrees.map((degree, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg">
                  {degree}
                </span>
              )) : (
                <span className="text-slate-500 text-sm">{isAr ? "غير محدد" : "Not specified"}</span>
              )}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">{isAr ? "الأوراق المطلوبة" : "Required Documents"}</h3>
            <ul className="space-y-3">
              {uni.requiredDocuments.length > 0 ? uni.requiredDocuments.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                  <FileText size={16} className="text-brand-500 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              )) : (
                <span className="text-slate-500 text-sm">{isAr ? "غير محدد" : "Not specified"}</span>
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
