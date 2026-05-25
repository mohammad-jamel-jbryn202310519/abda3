import { prisma } from "./prisma";
import { unstable_cache } from "next/cache";

export const getCachedUniversities = unstable_cache(
  async () => {
    return prisma.university.findMany({
      orderBy: { sortOrder: "asc" }
    });
  },
  ["universities-list"],
  { revalidate: 0, tags: ["universities"] } // Bypass cache during development
);

export const getCachedUniversityDetails = unstable_cache(
  async (id: string) => {
    return prisma.university.findUnique({
      where: { id },
      include: {
        faculties: {
          include: { 
            programs: { 
              include: { discounts: { orderBy: { sortOrder: "asc" } } },
              orderBy: { sortOrder: "asc" } 
            } 
          },
          orderBy: { sortOrder: "asc" }
        },
        semesterFees: { orderBy: [{ degreeLevel: "asc" }, { sortOrder: "asc" }] }
      }
    });
  },
  ["university-details"],
  { revalidate: 0, tags: ["university-details"] } // Bypass cache during development
);
