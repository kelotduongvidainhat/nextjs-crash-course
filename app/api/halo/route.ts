import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Hello from API" });
}

export async function POST(request: Request) {
    const body = await request.json();
    const { name } = body;
    return NextResponse.json({ message: `Hello ${name}, this is API POST` });
}