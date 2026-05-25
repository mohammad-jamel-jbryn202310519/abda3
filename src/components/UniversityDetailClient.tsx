"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, GraduationCap, FileText, DollarSign, Share2, Compass, ExternalLink,
  Check, X, MessageCircle, Copy, Search, ChevronDown, ChevronUp, Info
} from "lucide-react";
import Image from "next/image";

type Discount = {
  id: string; minGPA: number; maxGPA: number; discountAmount: number;
  discountType: string; labelArabic: string; appliesTo: string;
};
type Program = {
  id: string; nameArabic: string; nameEnglish: string; degree: string;
  creditHours: number | null; jordanianFeePerHour: number | null;
  parallelFeePerHour: number | null;
  internationalFeePerHour: number | null; internationalFeeUnit: string;
  discounts?: Discount[];
};
type Faculty = { id: string; nameArabic: string; nameEnglish: string; programs: Program[]; };
type SemesterFee = {
  id: string; degreeLevel: string; feeType: string; labelArabic: string;
  jordanianAmount: number | null; internationalAmount: number | null;
  internationalUnit: string; isRefundable: boolean;
};
type University = {
  id: string; nameArabic: string; nameEnglish: string; type: "GOVERNMENT" | "PRIVATE";
  location: string; governorate?: string | null; worldRanking?: number | null;
  imageUrl?: string | null; logoUrl?: string | null; gallery: string[];
  googleMapsUrl?: string | null; degrees: string[]; requiredDocuments: string[];
  requiredDocumentsJordanian?: string[];
  requiredDocumentsInternational?: string[];
  tuitionFees?: string | null;
  faculties?: Faculty[];
  semesterFees?: SemesterFee[];
};

const DEGREE_TABS = [
  { key: "BACHELOR", label: "بكالوريوس", labelEn: "Bachelor" },
  { key: "MASTER", label: "ماجستير", labelEn: "Master" },
  { key: "PHD", label: "دكتوراه", labelEn: "PhD" },
  { key: "HIGH_DIPLOMA", label: "دبلوم عالي", labelEn: "High Diploma" },
];

const FEE_LEVEL_LABELS: Record<string, string> = {
  BACHELOR: "البكالوريوس العامة", BACHELOR_DENTISTRY: "بكالوريوس طب الأسنان",
  MASTER: "الماجستير", PHD: "الدكتوراه", HIGH_DIPLOMA: "الدبلوم العالي"
};

export default function UniversityDetailClient({ uni, locale }: { uni: University; locale: string }) {
  const isAr = locale === "ar";
  const name = isAr ? uni.nameArabic : uni.nameEnglish;
  const isGov = uni.type === "GOVERNMENT";

  const [searchQuery, setSearchQuery] = useState("");
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeDegreeTab, setActiveDegreeTab] = useState("BACHELOR");
  const [expandedFaculty, setExpandedFaculty] = useState<string | null>("all");

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  // Determine if this university has structured data
  const hasStructuredData = uni.faculties && uni.faculties.length > 0;

  // Build available degree tabs based on actual programs
  const availableDegrees = hasStructuredData
    ? DEGREE_TABS.filter(tab => uni.faculties!.some(f => f.programs.some(p => p.degree === tab.key)))
    : DEGREE_TABS.slice(0, 2);

  // Filtered faculties for the active degree tab
  const facultiesForTab = hasStructuredData
    ? uni.faculties!.map(f => ({
        ...f,
        programs: f.programs.filter(p =>
          p.degree === activeDegreeTab &&
          (searchQuery === "" ||
            p.nameArabic.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      })).filter(f => f.programs.length > 0)
    : [];

  // Grouped semester fees
  const groupedFees = (uni.semesterFees || []).reduce((acc, fee) => {
    if (!acc[fee.degreeLevel]) acc[fee.degreeLevel] = [];
    acc[fee.degreeLevel].push(fee);
    return acc;
  }, {} as Record<string, SemesterFee[]>);

  // Fallback majors for universities without structured data
  const fallbackMajors = [
    { nameAr: "الطب البشري", nameEn: "Medicine", hours: 252, jodFee: 75, intlFee: 220, intlUnit: "USD", faculty: "الطب والصيدلة" },
    { nameAr: "هندسة البرمجيات", nameEn: "Software Engineering", hours: 132, jodFee: 25, intlFee: 85, intlUnit: "USD", faculty: "الهندسة والحاسوب" },
    { nameAr: "إدارة الأعمال", nameEn: "Business Administration", hours: 132, jodFee: 20, intlFee: 65, intlUnit: "USD", faculty: "العلوم الإدارية" },
    { nameAr: "الصيدلة", nameEn: "Pharmacy", hours: 165, jodFee: 40, intlFee: 120, intlUnit: "USD", faculty: "الطب والصيدلة" },
    { nameAr: "التمريض", nameEn: "Nursing", hours: 132, jodFee: 20, intlFee: 70, intlUnit: "USD", faculty: "العلوم الطبية" },
    { nameAr: "الحقوق", nameEn: "Law", hours: 132, jodFee: 18, intlFee: 60, intlUnit: "USD", faculty: "الحقوق" },
  ].filter(m =>
    searchQuery === "" ||
    m.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 pb-20 relative">

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-brand-500/30 text-sm font-semibold">
            <Check size={18} className="text-brand-500" />
            <span>{isAr ? "تم نسخ رابط الجامعة بنجاح!" : "Link copied!"}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Banner */}
      <div className="relative h-56 md:h-72 w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
        <div className="absolute top-6 right-6 left-6 flex justify-between items-center z-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-brand-500/20 backdrop-blur-md text-xs font-bold text-brand-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {isAr ? "وكيل رسمي معتمد" : "Official Academic Partner"}
          </span>
          <button onClick={handleShare} className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700/50 text-slate-200 hover:text-brand-500 backdrop-blur-md transition">
            <Share2 size={18} />
          </button>
        </div>
        <div className="absolute bottom-6 right-4 left-4 md:right-6 md:left-6 z-10 flex flex-col gap-2 md:ltr:pl-52 md:rtl:pr-52">
          <span className="inline-block self-start px-3 py-1 bg-brand-500 text-slate-950 text-[10px] md:text-xs font-black rounded-full uppercase tracking-wider">
            {isGov ? (isAr ? "جامعة حكومية" : "Government") : (isAr ? "جامعة خاصة" : "Private")}
          </span>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow leading-tight">{name}</h1>
          <div className="flex flex-wrap items-center gap-2 text-slate-300 text-xs md:text-sm font-semibold">
            <div className="flex items-center gap-1"><MapPin size={14} className="text-brand-500" /><span>{uni.governorate || uni.location}</span></div>
            {uni.worldRanking && <span className="bg-white/10 px-2 py-0.5 rounded text-xs">World Rank: #{uni.worldRanking}</span>}
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="container relative z-20 -mt-12 md:-mt-20 mb-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => setIsLogoModalOpen(true)}
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-3xl bg-white p-2 border-4 border-brand-500 shadow-2xl flex items-center justify-center cursor-pointer group relative overflow-hidden shrink-0">
          {uni.logoUrl ? (
            <Image src={uni.logoUrl} alt={name} width={200} height={200} className="max-w-full max-h-full object-contain" />
          ) : (
            <GraduationCap size={56} className="text-brand-500" />
          )}
          <div className="absolute inset-0 border-2 border-brand-500 rounded-2xl opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
        </motion.button>
      </div>

      {/* Main Grid */}
      <div className="container grid lg:grid-cols-3 gap-6 md:gap-8 overflow-hidden">
        <div className="lg:col-span-2 space-y-6 min-w-0">

          {/* Degree Tabs + Search */}
          <div className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
            {/* Header */}
            <div className="px-5 pt-5 pb-0 border-b border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-100 p-2.5 rounded-xl text-brand-600"><DollarSign size={22} /></div>
                  <div>
                    <h2 className="text-xl font-black text-slate-950">{isAr ? "أسعار التخصصات والرسوم" : "Tuition Fees & Programs"}</h2>
                    <p className="text-xs text-slate-400 font-semibold mt-0.5">{isAr ? "الرسوم الدراسية للعام الأكاديمي 2025/2026" : "Academic Year 2025/2026"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 relative">
                  <div className="relative">
                    <input type="text" placeholder={isAr ? "ابحث عن تخصص..." : "Search major..."}
                      value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                      className="w-full sm:w-48 pl-4 pr-10 py-2.5 rounded-2xl bg-slate-100 border-0 text-sm font-semibold outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-500 transition" />
                    <Search size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
              </div>
              {isGov && (
                <div className="mb-4 bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-600 flex items-center gap-2">
                  <Info size={16} className="text-slate-400" />
                  الرسوم في الجامعات الحكومية ثابتة وموحدة ولا تخضع لنظام المنح بناءً على المعدل. يتم القبول ضمن برنامج التنافس أو الموازي.
                </div>
              )}
              {/* Degree Tabs */}
              <div className="flex gap-1 overflow-x-auto pb-0 no-scrollbar">
                {availableDegrees.map(tab => (
                  <button key={tab.key} onClick={() => setActiveDegreeTab(tab.key)}
                    className={`shrink-0 px-4 py-2.5 text-sm font-bold rounded-t-xl border-b-2 transition whitespace-nowrap ${activeDegreeTab === tab.key ? "border-brand-500 text-brand-600 bg-brand-50" : "border-transparent text-slate-400 hover:text-slate-600"}`}>
                    {isAr ? tab.label : tab.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Programs Table */}
            <div className="p-4 sm:p-5">
              {hasStructuredData ? (
                facultiesForTab.length > 0 ? (
                  <div className="space-y-4">
                    {facultiesForTab.map(faculty => {
                      const isExpanded = expandedFaculty === faculty.id || expandedFaculty === "all";
                      return (
                        <div key={faculty.id} className="border border-slate-100 rounded-2xl overflow-hidden">
                          {/* Faculty Header */}
                          <button onClick={() => setExpandedFaculty(isExpanded ? null : faculty.id)}
                            className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition text-right">
                            <div className="flex items-center gap-2">
                              <GraduationCap size={16} className="text-brand-500" />
                              <span className="font-black text-slate-800 text-sm">{isAr ? faculty.nameArabic : faculty.nameEnglish}</span>
                              <span className="text-xs text-slate-400 font-semibold">({faculty.programs.length} تخصص)</span>
                            </div>
                            {isExpanded ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
                          </button>
                          {/* Programs */}
                          {isExpanded && (
                            <div className="overflow-x-auto">
                              <table className="w-full min-w-[700px] text-sm border-collapse">
                                <thead className="border-b border-slate-100 bg-slate-50/50">
                                  <tr className="text-slate-600 font-bold text-xs">
                                    <th className="px-4 py-3 text-right border-x border-slate-100">التخصص</th>
                                    <th className="px-3 py-3 text-center border-r border-slate-100">الساعات</th>
                                    <th className="px-3 py-3 text-center border-r border-slate-100">السعر الأساسي<br/>(JOD/ساعة)</th>
                                    {!isGov && <th className="px-4 py-3 text-right border-r border-slate-100">الخصومات حسب المعدل</th>}
                                    {isGov && <th className="px-3 py-3 text-center border-r border-slate-100">الموازي<br/>(JOD/ساعة)</th>}
                                    <th className="px-3 py-3 text-center border-r border-slate-100">السعر الدولي<br/>(USD/ساعة)</th>
                                    <th className="px-4 py-3 text-center border-l border-slate-100">تسجيل</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                  {faculty.programs.map(prog => {
                                    const waText = encodeURIComponent(isAr
                                      ? `مرحباً شركة إبداع الخليج، أود التقديم في تخصص: ${prog.nameArabic} بجامعة: ${name}.`
                                      : `Hello Ibda3 Al-Khalij, I'd like to apply for: ${prog.nameEnglish} at ${name}.`);
                                      
                                    return (
                                      <tr key={prog.id} className="hover:bg-slate-50 transition border-b border-slate-100">
                                        <td className="px-4 py-4 border-x border-slate-100">
                                          <div className="font-bold text-slate-900 text-sm">{isAr ? prog.nameArabic : prog.nameEnglish}</div>
                                          <div className="text-[11px] text-slate-500 font-semibold mt-1">{isAr ? faculty.nameArabic : faculty.nameEnglish}</div>
                                        </td>
                                        <td className="px-3 py-4 text-center text-slate-500 font-semibold border-r border-slate-100">{prog.creditHours || "-"}</td>
                                        
                                        {/* Base Price (Jordanian) */}
                                        <td className="px-3 py-4 text-center font-extrabold text-slate-700 border-r border-slate-100">
                                          {prog.jordanianFeePerHour ? `${prog.jordanianFeePerHour}` : "-"}
                                        </td>
                                        
                                        {/* Discounts Column (Only for Private) */}
                                        {!isGov && (
                                          <td className="px-4 py-4 border-r border-slate-100 align-top">
                                            {prog.discounts && prog.discounts.length > 0 ? (
                                              <div className="flex flex-col gap-1.5">
                                                {prog.discounts.sort((a, b) => b.minGPA - a.minGPA).map(d => {
                                                  // Calculate the final price based on the percentage discount
                                                  const basePrice = d.appliesTo === "INTERNATIONAL" ? prog.internationalFeePerHour : prog.jordanianFeePerHour;
                                                  let finalPriceEl = null;
                                                  if (basePrice) {
                                                    const finalPrice = Math.max(0, basePrice - (basePrice * (d.discountAmount / 100)));
                                                    const currency = d.appliesTo === "INTERNATIONAL" ? prog.internationalFeeUnit : "JOD";
                                                    finalPriceEl = <span className="font-extrabold text-brand-600 whitespace-nowrap mr-1">➔ {Number(finalPrice.toFixed(2))} {currency}</span>;
                                                  }
                                                  
                                                  return (
                                                    <div key={d.id} className="text-xs flex items-center flex-wrap gap-x-1 border-b border-slate-100/50 pb-1 last:border-0 last:pb-0">
                                                      <span className="font-bold text-slate-700 min-w-[70px] whitespace-nowrap">
                                                        {d.maxGPA === 100 ? `من ${d.minGPA}% فأعلى` : `من ${d.minGPA}% لـ ${d.maxGPA}%`}
                                                      </span>
                                                      <span className="text-slate-500 whitespace-nowrap">
                                                        : خصم <span className="font-bold text-emerald-600">{d.discountAmount}%</span>
                                                      </span>
                                                      {finalPriceEl}
                                                      {d.appliesTo === "INTERNATIONAL" && <span className="text-[9px] bg-blue-100 text-blue-700 px-1 rounded-sm mr-1">للوافدين</span>}
                                                    </div>
                                                  );
                                                })}
                                              </div>
                                            ) : (
                                              <span className="text-xs text-slate-400 font-semibold italic">لا يوجد خصومات</span>
                                            )}
                                          </td>
                                        )}

                                        {/* Parallel Price (Only for Gov) */}
                                        {isGov && (
                                          <td className="px-3 py-4 text-center font-extrabold text-amber-600 border-r border-slate-100">
                                            {prog.parallelFeePerHour ? `${prog.parallelFeePerHour}` : "-"}
                                          </td>
                                        )}

                                        {/* International Price */}
                                        <td className="px-3 py-4 text-center border-r border-slate-100">
                                          {prog.internationalFeePerHour ? (
                                            <span className="text-blue-600 font-extrabold">{prog.internationalFeePerHour} <span className="text-xs font-semibold">{prog.internationalFeeUnit}</span></span>
                                          ) : "-"}
                                        </td>

                                        {/* Apply Button */}
                                        <td className="px-4 py-4 text-center border-l border-slate-100">
                                          <a href={`https://wa.me/962795944359?text=${waText}`} target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-brand-500 text-slate-950 text-xs font-black hover:bg-brand-600 transition hover:scale-105 active:scale-95 shadow-sm">
                                            <MessageCircle size={14} />
                                            <span>{isAr ? "سجل الآن" : "Apply"}</span>
                                          </a>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="py-10 text-center text-slate-400 font-semibold">
                    {searchQuery ? "لا توجد تخصصات مطابقة للبحث." : `لا توجد برامج ${isAr ? DEGREE_TABS.find(t => t.key === activeDegreeTab)?.label : ""} مضافة بعد.`}
                  </div>
                )
              ) : (
                /* Fallback table for universities without structured data */
                <div className="overflow-x-auto rounded-2xl border border-slate-100">
                  <table className="w-full min-w-[500px] text-sm border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr className="text-slate-600 font-bold">
                        <th className="py-3 px-4 text-right">التخصص</th>
                        <th className="py-3 px-4 text-center">الساعات</th>
                        <th className="py-3 px-4 text-center">أردني (JOD)</th>
                        <th className="py-3 px-4 text-center">دولي (USD)</th>
                        <th className="py-3 px-4 text-center">تسجيل</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                      {fallbackMajors.map((m, i) => {
                        const waText = encodeURIComponent(`مرحباً شركة إبداع الخليج، أود التقديم في تخصص: ${m.nameAr} بجامعة: ${name}.`);
                        return (
                          <tr key={i} className="hover:bg-slate-50/50 transition">
                            <td className="py-3 px-4">
                              <div className="font-bold text-slate-900">{m.nameAr}</div>
                              <div className="text-[11px] text-slate-400 font-semibold">{m.faculty}</div>
                            </td>
                            <td className="py-3 px-4 text-center text-slate-500">{m.hours}</td>
                            <td className="py-3 px-4 text-center text-emerald-600 font-extrabold">{m.jodFee}</td>
                            <td className="py-3 px-4 text-center text-blue-600 font-extrabold">{m.intlFee}</td>
                            <td className="py-3 px-4 text-center">
                              <a href={`https://wa.me/962795944359?text=${waText}`} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand-500 text-slate-950 text-xs font-black hover:bg-brand-600 transition">
                                <MessageCircle size={12} /><span>سجل</span>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Semester Fees Section */}
          {Object.keys(groupedFees).length > 0 && (
            <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-5 sm:p-6 overflow-hidden">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-600"><DollarSign size={20} /></div>
                <div>
                  <h2 className="text-lg font-black text-slate-950">{isAr ? "رسوم التسجيل والخدمات" : "Registration & Service Fees"}</h2>
                  <p className="text-xs text-slate-400 font-semibold">{isAr ? "الرسوم الثابتة لكل فصل دراسي" : "Fixed fees per semester"}</p>
                </div>
              </div>
              <div className="space-y-5">
                {Object.entries(groupedFees).map(([level, fees]) => (
                  <div key={level}>
                    <h3 className="text-sm font-black text-slate-700 mb-2 px-1">{isAr ? FEE_LEVEL_LABELS[level] || level : level}</h3>
                    <div className="overflow-x-auto rounded-2xl border border-slate-100">
                      <table className="w-full min-w-[420px] text-sm border-collapse">
                        <thead className="bg-slate-50 border-b border-slate-100">
                          <tr className="text-slate-500 font-bold text-xs">
                            <th className="px-4 py-2.5 text-right">البيان</th>
                            <th className="px-4 py-2.5 text-center">أردني (JOD)</th>
                            <th className="px-4 py-2.5 text-center">غير أردني</th>
                            <th className="px-4 py-2.5 text-center">ملاحظة</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          {fees.map(fee => (
                            <tr key={fee.id} className="hover:bg-slate-50/30">
                              <td className="px-4 py-3 font-semibold text-slate-800">{fee.labelArabic}</td>
                              <td className="px-4 py-3 text-center font-bold text-slate-700">{fee.jordanianAmount ?? "-"}</td>
                              <td className="px-4 py-3 text-center font-bold text-slate-700">{fee.internationalAmount ? `${fee.internationalAmount} ${fee.internationalUnit}` : "-"}</td>
                              <td className="px-4 py-3 text-center">
                                {fee.isRefundable && <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">مستردة</span>}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Admission & Registration Requirements Section */}
          <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-5 sm:p-6 overflow-hidden">
            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
              <div className="bg-brand-100 p-2.5 rounded-xl text-brand-600">
                <FileText size={22} />
              </div>
              <div>
                <h2 className="text-lg font-black text-slate-950">
                  {isAr ? "متطلبات وأوراق القبول والتسجيل" : "Admission & Registration Requirements"}
                </h2>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">
                  {isAr ? "الوثائق الرسمية المطلوبة لتقديم طلب القبول" : "Official documents required to complete your admission"}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Jordanian Students */}
              <div className="bg-slate-50/50 rounded-2xl p-4 sm:p-5 border border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <h3 className="text-sm font-black text-slate-800">
                    {isAr ? "الطلبة الأردنيين" : "Jordanian Students"}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {((uni.requiredDocumentsJordanian && uni.requiredDocumentsJordanian.length > 0)
                    ? uni.requiredDocumentsJordanian
                    : [
                        isAr ? "كشف علامات الثانوية العامة الأصلي أو المصدق (التوجيهي)" : "Original or certified copy of High School Transcript (Tawjihi)",
                        isAr ? "صورة مصدقة عن الهوية الوطنية" : "Certified copy of National ID card",
                        isAr ? "دفتر خدمة العلم (للذكور)" : "Military Service Status / Booklet (for males)",
                        isAr ? "أي متطلبات خاصة بالجامعة (مثل شهادة حسن سير وسلوك)" : "Any other university-specific requirements (e.g. Good Conduct Certificate)"
                      ]
                  ).map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-700 text-xs font-semibold leading-relaxed">
                      <span className="inline-flex w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-1.5"></span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* International Students */}
              <div className="bg-slate-50/50 rounded-2xl p-4 sm:p-5 border border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  <h3 className="text-sm font-black text-slate-800">
                    {isAr ? "الطلبة الدوليين / الوافدين" : "International Students"}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {((uni.requiredDocumentsInternational && uni.requiredDocumentsInternational.length > 0)
                    ? uni.requiredDocumentsInternational
                    : [
                        isAr ? "صورة مصدقة عن جواز السفر" : "Certified copy of valid Passport",
                        isAr ? "معادلة شهادة الثانوية العامة (صادرة عن وزارة التربية والتعليم الأردنية)" : "High School Certificate Equivalency (issued by the Jordanian Ministry of Education)",
                        isAr ? "كتاب عدم ممانعة (إذا كان مطلوباً من الملحقية الثقافية لبلدهم)" : "No-Objection letter (if required by cultural attaché)",
                        isAr ? "البطاقة الأمنية (لبعض الجنسيات، مثل الطلبة السوريين)" : "Security Card / Booklet (for specific nationalities, e.g. Syrian students)",
                        isAr ? "صور شخصية بقياس جواز السفر" : "Passport-sized personal photos"
                      ]
                  ).map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-700 text-xs font-semibold leading-relaxed">
                      <span className="inline-flex w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-1.5"></span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 w-full min-w-0">

          {/* Degrees Available */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-slate-100">
            <h3 className="text-base font-black text-slate-950 mb-4">{isAr ? "الدرجات العلمية المتاحة" : "Available Degrees"}</h3>
            <div className="flex flex-wrap gap-2">
              {(hasStructuredData
                ? availableDegrees.map(t => t.label)
                : uni.degrees.length > 0 ? uni.degrees : ["BACHELOR"]
              ).map((deg, i) => (
                <span key={i} className="px-3.5 py-2 bg-brand-50 border border-brand-200/50 text-brand-800 text-xs font-bold rounded-2xl flex items-center gap-1.5">
                  <GraduationCap size={13} className="text-brand-600" />
                  {typeof deg === "string" && (deg === "BACHELOR" ? "بكالوريوس" : deg === "MASTER" ? "ماجستير" : deg === "PHD" ? "دكتوراه" : deg)}
                </span>
              ))}
            </div>
          </div>



          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-5 sm:p-6 shadow-lg border border-slate-800 text-white text-center">
            <GraduationCap size={40} className="mx-auto text-brand-500 mb-3 animate-bounce" />
            <h4 className="text-base font-bold mb-2">{isAr ? "هل تبحث عن قبول فوري؟" : "Looking for Fast Admission?"}</h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-5">
              {isAr ? "نحن كوكيل معتمد وموثوق نتولى عنك كافة المعاملات من التسجيل المبدئي وحتى تخرجك."
                : "We handle your entire registration process from acceptance to graduation."}
            </p>
            <a href="https://wa.me/962795944359" target="_blank" rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 py-3 bg-brand-500 text-slate-950 font-black rounded-2xl hover:bg-brand-600 transition hover:scale-[1.02]">
              <MessageCircle size={17} />
              <span>{isAr ? "تواصل مع المستشار التعليمي" : "Contact Academic Advisor"}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Logo Modal */}
      <AnimatePresence>
        {isLogoModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl border border-slate-100 relative">
              <button onClick={() => setIsLogoModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition"><X size={18} /></button>
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-slate-50 border border-slate-100 p-4 flex items-center justify-center mb-5">
                  {uni.logoUrl ? <Image src={uni.logoUrl} alt={name} width={200} height={200} className="max-w-full max-h-full object-contain" /> : <GraduationCap size={56} className="text-brand-500" />}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">{name}</h3>
                <p className="text-sm font-semibold text-slate-400 mb-6">{isAr ? "شريك معتمد لدى إبداع الخليج" : "Accredited Educational Partner"}</p>
                <div className="w-full flex flex-col gap-3">
                  {uni.googleMapsUrl && (
                    <a href={uni.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 py-3 rounded-2xl bg-brand-50 hover:bg-brand-100 text-brand-900 font-bold transition text-sm">
                      <Compass size={16} /><span>{isAr ? "عرض الموقع على خرائط جوجل" : "View on Google Maps"}</span>
                    </a>
                  )}
                  <button onClick={() => { setIsLogoModalOpen(false); handleShare(); }}
                    className="flex items-center justify-center gap-2.5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition text-sm">
                    <Copy size={16} /><span>{isAr ? "مشاركة رابط صفحة الجامعة" : "Share University Link"}</span>
                  </button>
                  <a href={`https://wa.me/962795944359?text=${encodeURIComponent(isAr ? `مرحباً إبداع الخليج، أود التقديم لجامعة: ${name}` : `Hello Ibda3 Al-Khalij, I'd like to apply for: ${name}`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-black transition text-sm">
                    <MessageCircle size={16} /><span>{isAr ? "استشارة وتسجيل مباشر" : "Register and Consult Now"}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
