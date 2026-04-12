import { SURFR_URL } from "@/env/constants";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url = SURFR_URL + process.env.SURFR_ACCESS_TOKEN;
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Error connecting to Surfr. API" }, { status: 500 });
  }
}
