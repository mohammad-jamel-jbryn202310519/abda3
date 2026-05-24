"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const currentPath = pathname?.startsWith(`/${locale}`) ? pathname : `/${locale}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 shrink-0 py-1">
          <img src="/logo.png" alt="Ibda3 Al-Khalij Logo" className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
          <span className="text-xl font-extrabold text-slate-800 tracking-wide hidden xs:block">إبداع الخليج</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden gap-6 lg:flex text-slate-700 items-center mx-4 font-bold">
          <Link href={`/${locale}`} className="transition hover:text-brand-600">
            {locale === "ar" ? "الرئيسية" : "Home"}
          </Link>
        </nav>

        {/* Right Section: Back/Forward, Search, Lang, Admin */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1 text-slate-400 mr-2">
            <button onClick={() => router.back()} className="p-1.5 rounded-full hover:bg-slate-100 transition" aria-label="Go Back">
              <ArrowLeft size={18} />
            </button>
            <button onClick={() => router.forward()} className="p-1.5 rounded-full hover:bg-slate-100 transition" aria-label="Go Forward">
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="relative hidden sm:block">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-32 md:w-48 lg:w-64 pl-9 pr-4 py-1.5 rounded-full bg-slate-100 text-sm outline-none focus:ring-2 focus:ring-brand-500 transition-all"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

          <LanguageSwitcher currentPath={currentPath} locale={locale} />
          <Link href="/admin/login" className="hidden sm:block rounded-full bg-brand-600 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-brand-700">
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
}
