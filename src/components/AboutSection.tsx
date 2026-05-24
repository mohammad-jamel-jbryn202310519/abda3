"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, FileText, BookOpen } from "lucide-react";

export default function AboutSection({ locale }: { locale: string }) {
  const isAr = locale === "ar";
  if (!isAr) return null; // Since the text is highly specific to Arabic context for now, we'll only render it fully in Arabic or provide a basic English translation if needed. Assuming user wants it in Arabic mainly.

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600 mb-2">من نحن</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">شركة إبداع الخليج للخدمات الطلابية</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            للدراسة في أفضل الجامعات (بكالوريوس - ماجستير - دكتوراه). نحن وكيل معتمد لكافة الأوراق الرسمية وتصديق المعاملات (وزارة الخارجية، السفارة المعنية، التعليم العالي، الشهادة الثانوية، جنسية الطالب).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Services & Support */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-50 rounded-3xl p-8 border border-brand-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-600 p-3 rounded-2xl text-white"><BookOpen size={24} /></div>
              <h3 className="text-2xl font-bold text-brand-900">خدماتنا الأكاديمية</h3>
            </div>
            <p className="text-slate-700 mb-6 leading-relaxed font-medium">
              إنهاء وحل جميع الواجبات الدراسية خلال هذا الترم مع أفضل الكوادر داخل شركة إبداع الخليج. قادرون على عمل أبحاث ومشاريع مهما كانت، وتعديل كافة رسائل الماجستير والدكتوراة مهما كانت اللغة.
            </p>
            <ul className="space-y-4">
              {[
                "رسائل دكتوراه (إنجليزي / عربي) جميع التخصصات",
                "رسائل ماجستير (إنجليزي / عربي) جميع التخصصات",
                "أبحاث جميع التخصصات والمساعدة في حل الواجبات",
                "إنهاء جميع الإجراءات والخدمات داخل الجامعات عامة",
                "استشارات عامة حول الجامعات وأي خدمات مهما كانت",
                "إنهاء جميع تصديقات تقارير / وثائق جامعية",
                "رفع طلبات الدراسة على سفير 1 / سفير 2 ومباشرة الدراسة"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="text-brand-600 shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Admission Requirements */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-slate-800 p-3 rounded-2xl text-white"><FileText size={24} /></div>
              <h3 className="text-2xl font-bold text-slate-900">متطلبات التسجيل والتقديم</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><GraduationCap size={18} className="text-brand-600"/> لمرحلة البكالوريوس (تجسير / ثانوية)</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>ملف لشهادة الثانوية</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>صورة الجواز</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>صورة الهوية الوطنية</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>صورة القبول الجامعي</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>صورة الجدول الدراسي</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>صورة من ختم الجواز</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>القدرات والتحصيلي</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>وثيقة الدبلوم وسجل أكاديمي (للتجسير)</li>
                </ul>
              </div>
              
              <div className="pt-6 border-t border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><GraduationCap size={18} className="text-brand-600"/> لمرحلة الماجستير</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>ملف لشهادة البكالوريوس</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>صورة جواز سفر</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>صورة الهوية الوطنية</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>صورة القبول الجامعي</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>صورة الجدول الدراسي</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>صورة من ختم الجواز</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>سجل أكاديمي</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>صورة ثانوية</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Links */}
        <div className="mt-12 mb-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">تواصل معنا</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="https://wa.me/962795944359" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center gap-3 bg-[#25D366] text-white p-6 rounded-3xl font-bold hover:bg-[#20bd5a] transition shadow-lg shadow-[#25D366]/20 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span className="text-lg">واتساب للتواصل</span>
            </a>
            <a 
              href="https://www.snapchat.com/add/tamer_hmideh?share_id=y6o0ys-_u70&locale=ar-JO" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center gap-3 bg-[#FFFC00] text-slate-900 p-6 rounded-3xl font-bold hover:bg-[#e6e300] transition shadow-lg shadow-[#FFFC00]/20 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="group-hover:scale-110 transition-transform"><path d="M12.08 2.05c-2.31 0-4.48.97-6 2.8-1.57 1.88-2.22 4.39-1.84 6.81.18 1.15.65 2.25 1.34 3.19.16.22.18.52.05.76-.56 1.01-1.39 1.84-2.4 2.41-.33.19-.53.56-.49.94.04.38.3.69.66.8.96.29 1.95.42 2.95.38.35-.01.69.13.93.38.74.78 1.82 1.22 2.95 1.19h.03c1.07.03 2.1-.4 2.83-1.16.23-.24.56-.37.9-.35 1.04.05 2.07-.09 3.05-.4.36-.12.62-.43.66-.82.04-.39-.16-.76-.49-.96-1.02-.57-1.86-1.4-2.42-2.43-.13-.24-.11-.53.05-.75.69-.94 1.16-2.03 1.34-3.18.38-2.42-.27-4.93-1.84-6.81-1.52-1.83-3.69-2.8-6-2.8z"/></svg>
              <span className="text-lg">حساب السناب شات</span>
            </a>
          </div>
        </div>

        {/* Owner Info - Small font at the bottom */}
        <div className="text-center">
          <p className="text-[11px] text-slate-400 font-bold">
            مالك الشركة: أ. المستشار التعليمي ثامر حمد البحيرات
          </p>
        </div>
      </div>
    </section>
  );
}
