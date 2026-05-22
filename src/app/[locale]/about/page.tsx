import Navbar from "@/components/Navbar";
import { CheckCircle2, MessageCircle, Ghost, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function AboutPage({ params }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Navbar locale={params.locale} />
      
      <div className="container py-10 max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 text-center">خدماتنا ومن نحن</h1>
        
        {/* Contact Links */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          <a 
            href="https://wa.me/962790000000" // Replace with actual WhatsApp link
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-green-500 rounded-3xl text-white shadow-lg shadow-green-500/30 hover:scale-105 transition-transform"
          >
            <MessageCircle size={32} className="mb-2" />
            <span className="font-bold">واتساب للتواصل</span>
          </a>
          
          <a 
            href="https://snapchat.com/add/ibda3" // Replace with actual Snapchat link
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-yellow-400 rounded-3xl text-slate-900 shadow-lg shadow-yellow-400/30 hover:scale-105 transition-transform"
          >
            <Ghost size={32} className="mb-2" />
            <span className="font-bold">حساب السناب شات</span>
          </a>
        </div>

        {/* About Info */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-2xl font-bold text-brand-900 mb-4">شركة إبداع الخليج للخدمات الطلابية</h2>
          <p className="text-slate-600 leading-relaxed mb-6 font-medium text-lg">
            نحن نقدم استشارات أكاديمية، ومعك من الصفر وحتى التخرج. نحن معتمدون رسمياً لدى جامعات الأردن، ونستقبل الطلبة من خارج الأردن لتسجيلهم بكل احترافية وموثوقية.
          </p>
          <div className="bg-brand-50 p-6 rounded-2xl">
            <h3 className="font-bold text-brand-800 mb-4">خدماتنا تشمل:</h3>
            <ul className="space-y-4">
              {[
                "إنهاء وحل جميع الواجبات الدراسية خلال هذا الترم مع أفضل الكوادر.",
                "عمل أبحاث ومشاريع مهما كانت لتخصصات مختلفة.",
                "تعديل كافة رسائل الماجستير والدكتوراة (إنجليزي / عربي).",
                "إنهاء جميع الإجراءات والخدمات داخل الجامعات عامة.",
                "إنهاء جميع تصديقات التقارير والوثائق الجامعية.",
                "رفع طلبات الدراسة على سفير 1 / سفير 2 ومباشرة الدراسة."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="text-brand-600 shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Owner Info - Small font at the bottom */}
        <div className="text-center mt-12">
          <p className="text-sm font-semibold text-slate-400">
            مالك الشركة: أ. المستشار التعليمي ثامر حمد البحيرات
          </p>
        </div>
      </div>
    </main>
  );
}
