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

        {/* Owner Info - Small font at the bottom */}
        <div className="text-center mt-10">
          <p className="text-[11px] text-slate-400">
            مالك الشركة: أ. المستشار التعليمي ثامر حمد البحيرات
          </p>
        </div>
      </div>
    </section>
  );
}
