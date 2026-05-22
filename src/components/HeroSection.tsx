"use client";

import { motion } from "framer-motion";

export default function HeroSection({ locale }: { locale: string }) {
  const isAr = locale === "ar";
  return (
    <section className="relative overflow-hidden bg-brand-600 text-white py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C30,50 70,150 100,0 L100,100 Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="container relative z-10 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-blue-200"
        >
          شركة إبداع الخليج للخدمات الطلابية
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
        >
          {isAr ? "دليلك الأفضل للدراسة في جامعات الأردن" : "Your Best Guide to Study in Jordan"}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-blue-50"
        >
          {isAr 
            ? "نرافقك خطوة بخطوة لتحقيق حلمك الدراسي، من قبول البكالوريوس إلى رسائل الماجستير والدكتوراة بمهنية واحترافية عالية." 
            : "We guide you step by step to achieve your educational dream, from Bachelor's admission to Master's and PhD thesis with high professionalism."}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#about" className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-700 transition hover:bg-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
            {isAr ? "تعرف علينا" : "About Us"}
          </a>
          <a href="#universities" className="rounded-full bg-brand-700 border border-brand-500 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-brand-800 shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
            {isAr ? "تصفح الجامعات" : "Browse Universities"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
