import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET semester fees for a university
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const fees = await prisma.semesterFee.findMany({
      where: { universityId: params.id },
      orderBy: [{ degreeLevel: "asc" }, { sortOrder: "asc" }]
    });
    return NextResponse.json(fees);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// POST create a semester fee
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const fee = await prisma.semesterFee.create({
      data: {
        universityId: params.id,
        degreeLevel: body.degreeLevel,
        feeType: body.feeType,
        labelArabic: body.labelArabic,
        labelEnglish: body.labelEnglish || body.labelArabic,
        jordanianAmount: body.jordanianAmount ? parseFloat(body.jordanianAmount) : null,
        internationalAmount: body.internationalAmount ? parseFloat(body.internationalAmount) : null,
        internationalUnit: body.internationalUnit || "USD",
        isRefundable: body.isRefundable || false,
        sortOrder: body.sortOrder || 0
      }
    });
    return NextResponse.json(fee);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// PUT update a semester fee
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const fee = await prisma.semesterFee.update({
      where: { id: body.feeId },
      data: {
        degreeLevel: body.degreeLevel,
        feeType: body.feeType,
        labelArabic: body.labelArabic,
        labelEnglish: body.labelEnglish || body.labelArabic,
        jordanianAmount: body.jordanianAmount ? parseFloat(body.jordanianAmount) : null,
        internationalAmount: body.internationalAmount ? parseFloat(body.internationalAmount) : null,
        internationalUnit: body.internationalUnit || "USD",
        isRefundable: body.isRefundable || false,
        sortOrder: body.sortOrder
      }
    });
    return NextResponse.json(fee);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// DELETE a semester fee
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    await prisma.semesterFee.delete({ where: { id: body.feeId } });
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
