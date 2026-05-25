"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, FileText, Info } from "lucide-react";

export default function AppHome({ locale }: { locale: string }) {
  const isAr = locale === "ar";

  const cards = [
    {
      href: `/${locale}/universities`,
      title: isAr ? "اختر الجامعة" : "Choose University",
      subtitle: isAr ? "تصفح الجامعات الحكومية والخاصة" : "Browse Gov & Private Universities",
      icon: <GraduationCap size={40} className="text-slate-900" />,
      color: "from-[#FFDF00] via-[#FFCC00] to-[#FFB700] shadow-amber-500/30",
      delay: 0.1
    },
    {
      href: `/${locale}/requirements`,
      title: isAr ? "الأوراق المطلوبة للتسجيل" : "Required Documents",
      subtitle: isAr ? "للطلبة من خارج الأردن" : "For international students",
      icon: <FileText size={40} className="text-slate-900" />,
      color: "from-[#FFDF00] via-[#FFCC00] to-[#FFB700] shadow-amber-500/30",
      delay: 0.2
    },
    {
      href: `/${locale}/about`,
      title: isAr ? "خدماتنا ومن نحن" : "Services & About Us",
      subtitle: isAr ? "نقدم استشارات ومعك من الصفر للتخرج" : "Consultations from 0 to graduation",
      icon: <Info size={40} className="text-slate-900" />,
      color: "from-[#FFDF00] via-[#FFCC00] to-[#FFB700] shadow-amber-500/30",
      delay: 0.3
    }
  ];

  // Smooth staggered animations for premium page entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 14
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center py-12 px-4 max-w-lg mx-auto w-full relative z-10">
      
      {/* Logo & Header Staggered Entrance */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="text-center mb-10 w-full flex flex-col items-center"
      >
        {/* Prominent Premium Logo Section */}
        <motion.div
          variants={itemVariants}
          className="mb-5 p-4 bg-white/90 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-200/60 backdrop-blur-md flex items-center justify-center"
        >
          <Image 
            src="/logo.png" 
            alt="Ibda3 Al-Khalij Logo"
            width={224}
            height={224} 
            className="w-40 h-40 md:w-56 md:h-56 object-contain" 
            priority
          />
        </motion.div>

        {/* Accreditation Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 border border-slate-200/80 backdrop-blur-sm shadow-sm mb-4"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-800">
            {isAr ? "وكيل معتمد رسمياً لدى جامعات الأردن" : "Officially Accredited Academic Agent"}
          </span>
        </motion.div>

        {/* Brand Name */}
        <motion.h1 
          variants={itemVariants}
          className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight"
        >
          {isAr ? "شركة إبداع الخليج" : "Ibda3 Al-Khalij"}
        </motion.h1>

        {/* New Tagline (Accredited Agent, Welcoming Students from outside Jordan) */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-600 text-sm md:text-base font-semibold leading-relaxed px-4 max-w-sm"
        >
          {isAr 
            ? "وكيل معتمد للجامعات الأردنية، ونرحب ونستقبل الطلبة من خارج الأردن."
            : "Authorized agent for Jordanian universities, welcoming students from outside Jordan."}
        </motion.p>
      </motion.div>

      {/* Vertical Cards with Staggered Entrance */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6 w-full"
      >
        {cards.map((card, index) => (
          <motion.div variants={itemVariants} key={index}>
            <Link href={card.href}>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.color} p-8 text-slate-950 shadow-xl flex items-center justify-between group`}
              >
                {/* Background Decoration */}
                <div className="absolute -right-4 -top-4 opacity-10 text-slate-900 group-hover:scale-110 transition-transform duration-500">
                  {card.icon}
                </div>
                
                <div className="flex flex-col gap-1 z-10">
                  <h2 className="text-2xl font-black text-slate-950">{card.title}</h2>
                  <p className="text-slate-900/80 font-bold text-sm mt-1">{card.subtitle}</p>
                </div>
                
                {/* Icon Wrapper styled in premium dark-slate backdrop with professional white icon */}
                <div className="bg-white p-4 rounded-2xl shrink-0 backdrop-blur-sm shadow-md group-hover:bg-slate-50 transition-colors duration-300">
                  {card.icon}
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
