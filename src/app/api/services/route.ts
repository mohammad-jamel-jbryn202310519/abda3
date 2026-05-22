import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAuth } from "@/lib/auth";

export async function GET() {
  const services = await prisma.service.findMany({ orderBy: { sortOrder: "asc" } });
  return NextResponse.json(services);
}

export async function POST(request: Request) {
  const auth = await verifyAuth(request as any);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const service = await prisma.service.create({
    data: {
      titleArabic: body.titleArabic,
      titleEnglish: body.titleEnglish,
      descriptionArabic: body.descriptionArabic,
      descriptionEnglish: body.descriptionEnglish,
      icon: body.icon || "",
      sortOrder: body.sortOrder ?? 0,
      isActive: body.isActive ?? true
    }
  });

  return NextResponse.json(service, { status: 201 });
}

export async function PUT(request: Request) {
  const auth = await verifyAuth(request as any);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const updated = await prisma.service.update({
    where: { id: body.id },
    data: {
      titleArabic: body.titleArabic,
      titleEnglish: body.titleEnglish,
      descriptionArabic: body.descriptionArabic,
      descriptionEnglish: body.descriptionEnglish,
      icon: body.icon || "",
      sortOrder: body.sortOrder ?? 0,
      isActive: body.isActive ?? true
    }
  });

  return NextResponse.json(updated);
}

export async function DELETE(request: Request) {
  const auth = await verifyAuth(request as any);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await request.json();
  await prisma.service.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
