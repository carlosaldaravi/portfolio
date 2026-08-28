import { SURFR_URL } from "@/env/constants";
import { NextResponse } from "next/server";

/** Cache window for the all-time leaderboard: it barely moves, and this is a
 *  public unauthenticated endpoint proxying a third-party API. */
const REVALIDATE_SECONDS = 300;

const errorResponse = (status: number) =>
  NextResponse.json({ error: "Error connecting to Surfr. API" }, { status });

export async function GET() {
  try {
    const response = await fetch(SURFR_URL + process.env.SURFR_ACCESS_TOKEN, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    // Surfr. answers auth/quota problems with a 4xx and an `{ error }` body.
    // Forwarding that as a 200 made the client treat it as ranking data.
    if (!response.ok) return errorResponse(502);

    const data = await response.json();
    if (!Array.isArray(data)) return errorResponse(502);

    return NextResponse.json(data);
  } catch {
    return errorResponse(500);
  }
}
