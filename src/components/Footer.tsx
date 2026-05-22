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
            <h2 className="text-lg font-semibold text-white">Ibda3 Al-Khalij</h2>
            <p className="mt-3 max-w-xs text-sm text-slate-300">A trusted student services partner for international students applying to Jordanian universities.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Email: info@ibda3alkhalij.com</li>
              <li>Phone: +962 7 1234 5678</li>
              <li>WhatsApp: +962 7 1234 5678</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li><Link href={`/${locale}/services`} className="hover:text-white">Services</Link></li>
              <li><Link href={`/${locale}/universities/private`} className="hover:text-white">Private Universities</Link></li>
              <li><Link href={`/${locale}/universities/government`} className="hover:text-white">Government Universities</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-white">Contact</Link></li>
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
