import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    if (!body?.email || !body?.password) {
      throw new Error("Invalid request body");
    }

    delete body.password;
    const user = { id: 123456, ...body };

    return NextResponse.json(user, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error?.message || "Internal Server Error",
      },
      { status: error.code || 500 }
    );
  }
}
