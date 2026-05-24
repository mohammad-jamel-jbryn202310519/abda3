import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PUT update a faculty
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const faculty = await prisma.faculty.update({
      where: { id: params.id },
      data: {
        nameArabic: body.nameArabic,
        nameEnglish: body.nameEnglish || body.nameArabic,
        sortOrder: body.sortOrder
      },
      include: { programs: true }
    });
    return NextResponse.json(faculty);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// DELETE a faculty (cascades to programs)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.faculty.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
