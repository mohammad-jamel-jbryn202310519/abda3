import Image from "next/image";

interface UniversityCardProps {
  title: string;
  location: string;
  ranking: number;
  imageUrl: string;
  googleMapsUrl: string;
}

export default function UniversityCard({ title, location, ranking, imageUrl, googleMapsUrl }: UniversityCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-brand-600">Rank #{ranking}</p>
          <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-600 hover:text-brand-600">
            View map
          </a>
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500">{location}</p>
      </div>
    </article>
  );
}
