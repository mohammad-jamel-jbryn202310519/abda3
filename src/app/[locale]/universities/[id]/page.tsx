import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import UniversityDetailClient from "@/components/UniversityDetailClient";

export default async function UniversityDetailsPage({ params }: { params: { locale: string, id: string } }) {
  const uni = await prisma.university.findUnique({
    where: { id: params.id },
    include: {
      faculties: {
        include: { programs: { orderBy: { sortOrder: "asc" } } },
        orderBy: { sortOrder: "asc" }
      },
      semesterFees: { orderBy: [{ degreeLevel: "asc" }, { sortOrder: "asc" }] }
    }
  });

  if (!uni) notFound();

  return (
    <>
      <Navbar locale={params.locale} />
      <UniversityDetailClient uni={uni as any} locale={params.locale} />
    </>
  );
}
