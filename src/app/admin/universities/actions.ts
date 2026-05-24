"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createUniversity(data: any) {
  try {
    const uni = await prisma.university.create({
      data: {
        nameArabic: data.nameArabic,
        nameEnglish: data.nameEnglish,
        type: data.type,
        location: data.location,
        governorate: data.governorate,
        googleMapsUrl: data.googleMapsUrl,
        worldRanking: data.worldRanking ? parseInt(data.worldRanking) : null,
        tuitionFees: data.tuitionFees,
        logoUrl: data.logoUrl,
        gallery: data.gallery || [],
        degrees: data.degrees || [],
        requiredDocuments: data.requiredDocuments || [],
        requiredDocumentsJordanian: data.requiredDocumentsJordanian || [],
        requiredDocumentsInternational: data.requiredDocumentsInternational || []
      }
    });
    revalidatePath("/admin/universities");
    revalidatePath("/");
    revalidatePath("/[locale]/universities", "page");
    return { success: true, university: uni };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateUniversity(id: string, data: any) {
  try {
    const uni = await prisma.university.update({
      where: { id },
      data: {
        nameArabic: data.nameArabic,
        nameEnglish: data.nameEnglish,
        type: data.type,
        location: data.location,
        governorate: data.governorate,
        googleMapsUrl: data.googleMapsUrl,
        worldRanking: data.worldRanking ? parseInt(data.worldRanking) : null,
        tuitionFees: data.tuitionFees,
        logoUrl: data.logoUrl,
        gallery: data.gallery || [],
        degrees: data.degrees || [],
        requiredDocuments: data.requiredDocuments || [],
        requiredDocumentsJordanian: data.requiredDocumentsJordanian || [],
        requiredDocumentsInternational: data.requiredDocumentsInternational || []
      }
    });
    revalidatePath("/admin/universities");
    revalidatePath("/");
    revalidatePath("/[locale]/universities", "page");
    revalidatePath(`/[locale]/universities/${id}`, "page");
    return { success: true, university: uni };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteUniversity(id: string) {
  try {
    await prisma.university.delete({ where: { id } });
    revalidatePath("/admin/universities");
    revalidatePath("/");
    revalidatePath("/[locale]/universities", "page");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
