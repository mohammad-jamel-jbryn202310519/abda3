import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import removed

interface ContactPageProps {
  params: { locale: string };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const t = await getTranslations({ locale: params.locale });

  return (
    <main>
      <Navbar locale={params.locale} />
      <section className="container py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">{t("contact")}</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">{t("contact")}</h1>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{t("contact")}</h2>
            <p className="mt-4 text-slate-600">Reach out by WhatsApp, phone, or email for student support and university guidance.</p>
            <ul className="mt-8 space-y-4 text-slate-700">
              <li><strong>{t("whatsapp")}:</strong> +962 7 1234 5678</li>
              <li><strong>{t("phone")}:</strong> +962 6 7890 1234</li>
              <li><strong>{t("emailContact")}:</strong> info@ibda3alkhalij.com</li>
              <li><strong>{t("googleMaps")}:</strong> <a href="https://maps.google.com" className="text-brand-600 hover:underline">View on Google Maps</a></li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Send a message</h2>
            <form className="mt-8 grid gap-4">
              <input type="text" placeholder={t("emailContact")} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none focus:border-brand-500" />
              <textarea placeholder="Message" className="min-h-[180px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none focus:border-brand-500" />
              <button type="submit" className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">{t("submit")}</button>
            </form>
          </div>
        </div>
      </section>
      <Footer locale={params.locale} />
    </main>
  );
}
