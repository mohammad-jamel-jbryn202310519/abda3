import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container">
        <div className="rounded-3xl bg-white p-10 shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900">Dashboard Overview</h1>
          <p className="mt-4 text-slate-600">Use the admin dashboard to manage services, universities, and site settings.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Link href="/admin/services" className="rounded-3xl border border-slate-200 bg-brand-50 p-6 text-center transition hover:border-brand-400 hover:bg-brand-100">
              Manage Services
            </Link>
            <Link href="/admin/universities" className="rounded-3xl border border-slate-200 bg-brand-50 p-6 text-center transition hover:border-brand-400 hover:bg-brand-100">
              Manage Universities
            </Link>
            <Link href="/admin/settings" className="rounded-3xl border border-slate-200 bg-brand-50 p-6 text-center transition hover:border-brand-400 hover:bg-brand-100">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
