import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { verifyAuth } from "@/lib/auth";

export const runtime = "nodejs";

function sanitizeFilename(filename: string) {
  return filename.replace(/[^a-zA-Z0-9.-_]/g, "-").toLowerCase();
}

export async function POST(request: Request) {
  const auth = await verifyAuth(request as any);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const uploadType = (formData.get("type") as string) || "uploads";

  if (!file || !file.name) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: "Unsupported file format." }, { status: 400 });
  }

  const size = file.size;
  if (size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "File size exceeds 5MB." }, { status: 400 });
  }

  const folder = uploadType === "logo" ? "logo" : "uploads";
  const storagePath = path.join(process.cwd(), "public", folder);
  await fs.mkdir(storagePath, { recursive: true });

  const fileName = `${Date.now()}-${sanitizeFilename(file.name)}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(storagePath, fileName), buffer);

  return NextResponse.json({ url: `/${folder}/${fileName}` });
}
