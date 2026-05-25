'use client';

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-4 font-sans">
      <h1 className="text-4xl font-bold text-slate-800">404</h1>
      <p className="text-slate-500 text-lg">الصفحة غير موجودة</p>
      <Link href="/" className="mt-4 px-6 py-2.5 rounded-2xl bg-brand-500 text-slate-900 font-bold hover:bg-brand-600 transition">
        العودة للرئيسية
      </Link>
    </div>
  );
}
