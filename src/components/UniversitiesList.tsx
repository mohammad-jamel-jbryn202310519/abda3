"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, MapPin, Trophy, BookOpen, ArrowLeft } from "lucide-react";

type University = {
  id: string;
  nameArabic: string;
  nameEnglish: string;
  type: "GOVERNMENT" | "PRIVATE";
  location: string;
  governorate?: string | null;
  worldRanking?: number | null;
  sortOrder?: number;
  imageUrl?: string | null;
  logoUrl?: string | null;
  degrees: string[];
};

const DEGREE_LABEL: Record<string, { ar: string; en: string }> = {
  BACHELOR: { ar: "بكالوريوس", en: "Bachelor" },
  MASTER:   { ar: "ماجستير",   en: "Master" },
  PHD:      { ar: "دكتوراه",   en: "PhD" },
  HIGH_DIPLOMA: { ar: "دبلوم عالي", en: "High Diploma" },
};

function UniversityCard({ uni, locale, rank }: { uni: University; locale: string; rank: number }) {
  const isAr = locale === "ar";
  const name = isAr ? uni.nameArabic : uni.nameEnglish;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
    >
      <Link href={`/${locale}/universities/${uni.id}`} className="block group h-full">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 overflow-hidden h-full flex flex-col">
          {/* Logo Area */}
          <div className="relative flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 h-44 p-6 overflow-hidden">
            {/* Rank Badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm text-brand-400 text-[11px] font-black px-2.5 py-1 rounded-full border border-brand-500/20">
              <Trophy size={11} />
              <span>#{rank}</span>
            </div>
            {/* Type Badge */}
            <div className={`absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded-full ${uni.type === "GOVERNMENT" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>
              {uni.type === "GOVERNMENT" ? (isAr ? "حكومية" : "Government") : (isAr ? "خاصة" : "Private")}
            </div>
            {/* Logo or Name */}
            {uni.logoUrl ? (
              <Image src={uni.logoUrl} alt={name} width={200} height={200} className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
            ) : (
              <GraduationCap size={52} className="text-slate-300 group-hover:text-brand-400 transition-colors duration-300" />
            )}
            {/* QS Ranking */}
            {uni.worldRanking && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                QS World #{uni.worldRanking}+
              </div>
            )}
          </div>

          {/* Info Area */}
          <div className="p-4 flex flex-col flex-1">
            <h3 className="font-black text-slate-900 text-base leading-snug mb-1 group-hover:text-brand-600 transition-colors">{name}</h3>
            <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold mb-3">
              <MapPin size={12} />
              <span>{uni.governorate || uni.location}</span>
            </div>
            {/* Degree Pills */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {(uni.degrees.length > 0 ? uni.degrees : ["BACHELOR"]).slice(0, 3).map((deg, i) => (
                <span key={i} className="px-2.5 py-1 bg-brand-50 text-brand-700 text-[10px] font-bold rounded-full border border-brand-100">
                  {DEGREE_LABEL[deg]?.[isAr ? "ar" : "en"] || deg}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between pt-3 border-t border-slate-50">
              <span className="text-xs font-bold text-slate-400">{isAr ? "عرض التخصصات والرسوم" : "View Programs & Fees"}</span>
              <div className="w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all">
                <ArrowLeft size={13} className={isAr ? "" : "rotate-180"} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function UniversitiesList({ universities, locale }: { universities: University[]; locale: string }) {
  const isAr = locale === "ar";
  const [tab, setTab] = useState<"GOVERNMENT" | "PRIVATE">("GOVERNMENT");
  const [search, setSearch] = useState("");

  const filtered = universities.filter(u => {
    if (u.type !== tab) return false;
    if (search) {
      const s = search.toLowerCase();
      return u.nameArabic.toLowerCase().includes(s) || u.nameEnglish.toLowerCase().includes(s);
    }
    return true;
  });

  const govCount = universities.filter(u => u.type === "GOVERNMENT").length;
  const privCount = universities.filter(u => u.type === "PRIVATE").length;

  return (
    <div className="w-full">
      {/* Header Stats */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-3 flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-xl"><BookOpen size={18} className="text-blue-600" /></div>
          <div>
            <div className="text-xl font-black text-blue-700">{govCount}</div>
            <div className="text-xs font-bold text-blue-500">{isAr ? "جامعة حكومية" : "Public Universities"}</div>
          </div>
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-2xl px-5 py-3 flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-xl"><BookOpen size={18} className="text-purple-600" /></div>
          <div>
            <div className="text-xl font-black text-purple-700">{privCount}</div>
            <div className="text-xs font-bold text-purple-500">{isAr ? "جامعة خاصة" : "Private Universities"}</div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-2xl px-5 py-3 flex items-center gap-3">
          <div className="bg-amber-100 p-2 rounded-xl"><Trophy size={18} className="text-amber-600" /></div>
          <div>
            <div className="text-[11px] font-black text-amber-700">{isAr ? "مرتبة حسب" : "Sorted by"}</div>
            <div className="text-xs font-bold text-amber-500">QS World Rankings 2026</div>
          </div>
        </div>
      </div>

      {/* Tabs + Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1 w-full sm:w-auto">
          <button onClick={() => setTab("GOVERNMENT")}
            className={`flex-1 sm:flex-none px-6 py-2.5 text-sm font-bold rounded-xl transition whitespace-nowrap ${tab === "GOVERNMENT" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}>
            {isAr ? "🏛️ حكومية" : "🏛️ Public"}
          </button>
          <button onClick={() => setTab("PRIVATE")}
            className={`flex-1 sm:flex-none px-6 py-2.5 text-sm font-bold rounded-xl transition whitespace-nowrap ${tab === "PRIVATE" ? "bg-white text-purple-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}>
            {isAr ? "🎓 خاصة" : "🎓 Private"}
          </button>
        </div>
        <input type="text" placeholder={isAr ? "🔍 ابحث عن جامعة..." : "🔍 Search university..."}
          value={search} onChange={e => setSearch(e.target.value)}
          className="px-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm font-semibold outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition w-full sm:w-64" />
      </div>

      {/* QS Note */}
      <div className="flex items-center gap-2 mb-6 px-4 py-3 bg-amber-50 border border-amber-100 rounded-2xl text-xs font-semibold text-amber-700">
        <Trophy size={14} className="text-amber-500 shrink-0" />
        <span>{isAr ? "الجامعات مرتبة تصاعدياً حسب تصنيف QS العالمي للجامعات 2026 (الأعلى تصنيفاً أولاً)" : "Universities sorted by QS World University Rankings 2026 (highest ranked first)"}</span>
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((uni, i) => (
            <UniversityCard key={uni.id} uni={uni} locale={locale} rank={i + 1} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-slate-400 font-semibold">
          {isAr ? "لا يوجد نتائج مطابقة للبحث." : "No matching universities found."}
        </div>
      )}
    </div>
  );
}
