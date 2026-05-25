import { getCachedUniversityDetails } from "@/lib/cache";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import UniversityDetailClient from "@/components/UniversityDetailClient";

export default async function UniversityDetailsPage({ params }: { params: { locale: string, id: string } }) {
  const uni = await getCachedUniversityDetails(params.id);

  if (!uni) notFound();

  return (
    <>
      <Navbar locale={params.locale} />
      <UniversityDetailClient uni={uni as any} locale={params.locale} />
    </>
  );
}
