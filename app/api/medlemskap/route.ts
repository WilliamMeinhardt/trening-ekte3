import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    return NextResponse.json({ message: message });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET(request: Request, response: Response) {
    try {

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 400})
    }
}