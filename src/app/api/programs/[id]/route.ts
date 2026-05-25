import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PUT update a program
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const program = await prisma.program.update({
      where: { id: params.id },
      data: {
        nameArabic: body.nameArabic,
        nameEnglish: body.nameEnglish || body.nameArabic,
        degree: body.degree,
        creditHours: body.creditHours ? parseInt(body.creditHours) : null,
        jordanianFeePerHour: body.jordanianFeePerHour ? parseFloat(body.jordanianFeePerHour) : null,
        parallelFeePerHour: body.parallelFeePerHour ? parseFloat(body.parallelFeePerHour) : null,
        internationalFeePerHour: body.internationalFeePerHour ? parseFloat(body.internationalFeePerHour) : null,
        internationalFeeUnit: body.internationalFeeUnit || "USD",
        sortOrder: body.sortOrder
      }
    });
    return NextResponse.json(program);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// DELETE a program
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.program.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
