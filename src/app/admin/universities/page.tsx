import { prisma } from "@/lib/prisma";
import UniversitiesAdminClient from "./UniversitiesAdminClient";

export const dynamic = "force-dynamic";

export default async function AdminUniversitiesPage() {
  const universities = await prisma.university.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container">
        <div className="rounded-3xl bg-white p-10 shadow-sm border border-slate-200">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">إدارة الجامعات</h1>
            <p className="mt-2 text-slate-600">يمكنك هنا إضافة، تعديل، أو حذف الجامعات وصورها ورسومها.</p>
          </div>
          
          <UniversitiesAdminClient initialData={universities} />
        </div>
      </div>
    </main>
  );
}
