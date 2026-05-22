"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import UniversityCard from "./UniversityCard";

type University = {
  id: string;
  nameArabic: string;
  nameEnglish: string;
  type: "GOVERNMENT" | "PRIVATE";
  location: string;
  governorate?: string | null;
  worldRanking?: number | null;
  imageUrl?: string | null;
  logoUrl?: string | null;
  googleMapsUrl?: string | null;
  degrees: string[];
  requiredDocuments: string[];
};

export default function UniversitiesList({ universities, locale }: { universities: University[], locale: string }) {
  const [tab, setTab] = useState<"GOVERNMENT" | "PRIVATE">("GOVERNMENT");
  const [degreeFilter, setDegreeFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = universities.filter(u => {
    if (u.type !== tab) return false;
    if (degreeFilter !== "all" && !u.degrees.includes(degreeFilter)) return false;
    if (search) {
      const searchLower = search.toLowerCase();
      if (!u.nameArabic.toLowerCase().includes(searchLower) && !u.nameEnglish.toLowerCase().includes(searchLower)) return false;
    }
    return true;
  });

  return (
    <div className="w-full">
      {/* Filters and Tabs */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        <div className="flex bg-slate-100 p-1 rounded-full w-full md:w-auto overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setTab("GOVERNMENT")}
            className={`flex-1 md:flex-none px-6 py-2.5 text-sm font-semibold rounded-full transition whitespace-nowrap ${tab === "GOVERNMENT" ? "bg-white text-brand-600 shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
          >
            {locale === "ar" ? "جامعات حكومية" : "Government Universities"}
          </button>
          <button 
            onClick={() => setTab("PRIVATE")}
            className={`flex-1 md:flex-none px-6 py-2.5 text-sm font-semibold rounded-full transition whitespace-nowrap ${tab === "PRIVATE" ? "bg-white text-brand-600 shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
          >
            {locale === "ar" ? "جامعات خاصة" : "Private Universities"}
          </button>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <select 
            value={degreeFilter}
            onChange={(e) => setDegreeFilter(e.target.value)}
            className="px-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm outline-none focus:border-brand-500 w-full md:w-auto"
          >
            <option value="all">{locale === "ar" ? "كل الدرجات" : "All Degrees"}</option>
            <option value="بكالوريوس">{locale === "ar" ? "بكالوريوس" : "Bachelor"}</option>
            <option value="ماجستير">{locale === "ar" ? "ماجستير" : "Master"}</option>
            <option value="دكتوراة">{locale === "ar" ? "دكتوراة" : "PhD"}</option>
          </select>
          <input 
            type="text" 
            placeholder={locale === "ar" ? "ابحث عن جامعة..." : "Search university..."}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm outline-none focus:border-brand-500 w-full md:w-auto"
          />
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filtered.map(uni => (
            <Link href={`/${locale}/universities/${uni.id}`} key={uni.id} className="block group">
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="transition-transform group-hover:scale-105"
              >
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-4 flex items-center justify-center h-40">
                  {uni.logoUrl ? (
                    <img src={uni.logoUrl} alt={locale === "ar" ? uni.nameArabic : uni.nameEnglish} className="max-h-full max-w-full object-contain" />
                  ) : (
                    <span className="text-xl font-bold text-slate-300">{locale === "ar" ? uni.nameArabic : uni.nameEnglish}</span>
                  )}
                </div>
                <h3 className="text-center font-bold text-slate-800 text-lg">
                  {locale === "ar" ? uni.nameArabic : uni.nameEnglish}
                </h3>
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filtered.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          {locale === "ar" ? "لا يوجد نتائج مطابقة للبحث." : "No matching universities found."}
        </div>
      )}
    </div>
  );
}
