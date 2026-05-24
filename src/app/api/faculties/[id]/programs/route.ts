import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST create a new program under a faculty
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const program = await prisma.program.create({
      data: {
        nameArabic: body.nameArabic,
        nameEnglish: body.nameEnglish || body.nameArabic,
        degree: body.degree,
        creditHours: body.creditHours ? parseInt(body.creditHours) : null,
        facultyId: params.id,
        jordanianFeePerHour: body.jordanianFeePerHour ? parseFloat(body.jordanianFeePerHour) : null,
        internationalFeePerHour: body.internationalFeePerHour ? parseFloat(body.internationalFeePerHour) : null,
        internationalFeeUnit: body.internationalFeeUnit || "USD",
        sortOrder: body.sortOrder || 0
      }
    });
    return NextResponse.json(program);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
