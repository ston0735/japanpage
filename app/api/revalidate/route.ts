import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected) {
    return NextResponse.json({ error: "Server not configured" }, { status: 503 });
  }

  try {
    const { secret, path } = await req.json();

    if (secret !== expected) {
      return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }

    const target = path || "/blog";
    revalidatePath(target);

    return NextResponse.json({ revalidated: true, path: target });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, hint: "POST { secret, path? }" });
}
