import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAuth } from "@/lib/auth";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type");
  const filters: any = type ? { type: type === "private" ? "PRIVATE" : "GOVERNMENT" } : {};
  const universities = await prisma.university.findMany({ where: filters, orderBy: { worldRanking: "asc" } });
  return NextResponse.json(universities);
}

export async function POST(request: Request) {
  const auth = await verifyAuth(request as any);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const university = await prisma.university.create({
    data: {
      nameArabic: body.nameArabic,
      nameEnglish: body.nameEnglish,
      type: body.type,
      imageUrl: body.imageUrl,
      location: body.location,
      googleMapsUrl: body.googleMapsUrl,
      worldRanking: body.worldRanking || 0,
      tuitionFees: body.tuitionFees,
      feesLastUpdated: body.feesLastUpdated ? new Date(body.feesLastUpdated) : new Date()
    }
  });

  return NextResponse.json(university, { status: 201 });
}

export async function PUT(request: Request) {
  const auth = await verifyAuth(request as any);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const updated = await prisma.university.update({
    where: { id: body.id },
    data: {
      nameArabic: body.nameArabic,
      nameEnglish: body.nameEnglish,
      type: body.type,
      imageUrl: body.imageUrl,
      location: body.location,
      googleMapsUrl: body.googleMapsUrl,
      worldRanking: body.worldRanking || 0,
      tuitionFees: body.tuitionFees,
      feesLastUpdated: body.feesLastUpdated ? new Date(body.feesLastUpdated) : new Date()
    }
  });

  return NextResponse.json(updated);
}

export async function DELETE(request: Request) {
  const auth = await verifyAuth(request as any);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await request.json();
  await prisma.university.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
