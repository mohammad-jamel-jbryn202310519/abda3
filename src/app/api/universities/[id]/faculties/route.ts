import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all faculties (with programs) for a university
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const faculties = await prisma.faculty.findMany({
      where: { universityId: params.id },
      include: { programs: { orderBy: { sortOrder: "asc" } } },
      orderBy: { sortOrder: "asc" }
    });
    return NextResponse.json(faculties);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// POST create a new faculty
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const faculty = await prisma.faculty.create({
      data: {
        nameArabic: body.nameArabic,
        nameEnglish: body.nameEnglish || body.nameArabic,
        universityId: params.id,
        sortOrder: body.sortOrder || 0
      },
      include: { programs: true }
    });
    return NextResponse.json(faculty);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
