import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAuth } from "@/lib/auth";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const auth = await verifyAuth(request as any);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const programId = params.id;

    const discount = await prisma.discount.create({
      data: {
        programId: programId,
        minGPA: parseFloat(body.minGPA),
        maxGPA: parseFloat(body.maxGPA),
        discountAmount: parseFloat(body.discountAmount),
        discountType: body.discountType || "AMOUNT",
        labelArabic: body.labelArabic || "",
        appliesTo: body.appliesTo || "JORDANIAN",
      }
    });

    return NextResponse.json(discount, { status: 201 });
  } catch (error) {
    console.error("Error creating discount:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const auth = await verifyAuth(request as any);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const discountId = body.id; // Passing discount ID in body since route is /programs/[id]/discounts

    const updated = await prisma.discount.update({
      where: { id: discountId },
      data: {
        minGPA: parseFloat(body.minGPA),
        maxGPA: parseFloat(body.maxGPA),
        discountAmount: parseFloat(body.discountAmount),
        discountType: body.discountType || "AMOUNT",
        labelArabic: body.labelArabic || "",
        appliesTo: body.appliesTo || "JORDANIAN",
      }
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating discount:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const auth = await verifyAuth(request as any);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { discountId } = await request.json();
    await prisma.discount.delete({ where: { id: discountId } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting discount:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
