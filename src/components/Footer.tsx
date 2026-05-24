import Link from "next/link";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container space-y-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo.png" alt="Ibda3 Al-Khalij Logo" className="h-12 w-auto object-contain brightness-0 invert" />
              <h2 className="text-xl font-bold text-white">إبداع الخليج</h2>
            </div>
            <p className="max-w-xs text-sm text-slate-400">شريككم الموثوق للخدمات الطلابية وتسهيل القبول في جامعات الأردن للطلاب الدوليين.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Contact & Social</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a href="https://wa.me/962795944359" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2">
                  <span className="text-emerald-500">WhatsApp:</span> <span dir="ltr">+962 7 9594 4359</span>
                </a>
              </li>
              <li>
                <a href="https://www.snapchat.com/add/tamer_hmideh?share_id=y6o0ys-_u70&locale=ar-JO" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2">
                  <span className="text-yellow-400">Snapchat:</span> حساب السناب شات
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li><Link href={`/${locale}`} className="hover:text-white">Home</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Ibda3 Al-Khalij Student Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
