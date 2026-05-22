"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, FileText, Info } from "lucide-react";

export default function AppHome({ locale }: { locale: string }) {
  const isAr = locale === "ar";

  const cards = [
    {
      href: `/${locale}/universities`,
      title: isAr ? "اختر الجامعة" : "Choose University",
      subtitle: isAr ? "تصفح الجامعات الحكومية والخاصة" : "Browse Gov & Private Universities",
      icon: <GraduationCap size={40} />,
      color: "from-blue-600 to-blue-800",
      delay: 0.1
    },
    {
      href: `/${locale}/requirements`,
      title: isAr ? "الأوراق المطلوبة للتسجيل" : "Required Documents",
      subtitle: isAr ? "للطلبة من خارج الأردن" : "For international students",
      icon: <FileText size={40} />,
      color: "from-emerald-500 to-emerald-700",
      delay: 0.2
    },
    {
      href: `/${locale}/about`,
      title: isAr ? "خدماتنا ومن نحن" : "Services & About Us",
      subtitle: isAr ? "نقدم استشارات ومعك من الصفر للتخرج" : "Consultations from 0 to graduation",
      icon: <Info size={40} />,
      color: "from-purple-600 to-purple-800",
      delay: 0.3
    }
  ];

  return (
    <div className="flex-1 flex flex-col justify-center items-center py-10 px-4 max-w-lg mx-auto w-full">
      {/* Header Info */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          {isAr ? "شركة إبداع الخليج" : "Ibda3 Al-Khalij"}
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed px-4">
          {isAr 
            ? "وهي شركة تستقبل الطلبة من خارج الأردن وتسجلهم في جامعات الأردن وتقدم استشارات. معتمدون رسمياً."
            : "A company that receives students from outside Jordan, registers them, and provides consultations. Officially accredited."}
        </p>
      </motion.div>

      {/* Vertical Cards */}
      <div className="flex flex-col gap-6 w-full">
        {cards.map((card, index) => (
          <Link href={card.href} key={index}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, delay: card.delay }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.color} p-8 text-white shadow-xl flex items-center justify-between group`}
            >
              {/* Background Decoration */}
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>
              
              <div className="flex flex-col gap-1 z-10">
                <h2 className="text-2xl font-bold">{card.title}</h2>
                <p className="text-white/80 text-sm mt-1">{card.subtitle}</p>
              </div>
              
              <div className="bg-white/20 p-4 rounded-2xl shrink-0 backdrop-blur-sm">
                {card.icon}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
