import Navbar from "@/components/Navbar";
import { GraduationCap, FileText } from "lucide-react";

export default function RequirementsPage({ params }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Navbar locale={params.locale} />
      
      <div className="container py-10 max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">الأوراق المطلوبة للتسجيل</h1>
        <p className="text-slate-600 mb-10 leading-relaxed">
          هذه هي الأوراق المطلوبة لتسجيل الطلبة الذين خارج الأردن في الجامعات الأردنية عبر شركة إبداع الخليج.
        </p>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600"><GraduationCap size={24} /></div>
            <h2 className="text-2xl font-bold text-slate-900">لمرحلة البكالوريوس (تجسير / ثانوية)</h2>
          </div>
          
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> ملف لشهادة الثانوية</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> صورة الجواز</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> صورة الهوية الوطنية</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> صورة القبول الجامعي</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> صورة الجدول الدراسي</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> صورة من ختم الجواز</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> القدرات والتحصيلي</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> وثيقة الدبلوم وسجل أكاديمي (لطلبة التجسير فقط)</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-2xl text-blue-600"><FileText size={24} /></div>
            <h2 className="text-2xl font-bold text-slate-900">لمرحلة الماجستير</h2>
          </div>
          
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500"></div> ملف لشهادة البكالوريوس</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500"></div> صورة جواز السفر</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500"></div> صورة الهوية الوطنية</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500"></div> صورة القبول الجامعي</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500"></div> صورة الجدول الدراسي</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500"></div> صورة من ختم الجواز</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500"></div> السجل الأكاديمي</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500"></div> صورة عن شهادة الثانوية العامة</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
