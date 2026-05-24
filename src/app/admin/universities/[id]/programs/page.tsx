import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProgramsManagerClient from "./ProgramsManagerClient";

export default async function ProgramsAdminPage({ params }: { params: { id: string } }) {
  const university = await prisma.university.findUnique({
    where: { id: params.id },
    include: {
      faculties: {
        include: { programs: { orderBy: { sortOrder: "asc" } } },
        orderBy: { sortOrder: "asc" }
      },
      semesterFees: { orderBy: [{ degreeLevel: "asc" }, { sortOrder: "asc" }] }
    }
  });

  if (!university) return notFound();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6 flex items-center gap-3">
        <a
          href="/admin/universities"
          className="text-sm font-semibold text-slate-500 hover:text-brand-600 transition"
        >
          ← العودة للجامعات
        </a>
        <span className="text-slate-300">/</span>
        <h1 className="text-2xl font-black text-slate-900">{university.nameArabic}</h1>
      </div>
      <ProgramsManagerClient
        universityId={params.id}
        initialFaculties={university.faculties as any}
        initialSemesterFees={university.semesterFees as any}
        universityName={university.nameArabic}
      />
    </div>
  );
}
