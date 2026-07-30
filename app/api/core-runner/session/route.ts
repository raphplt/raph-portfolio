import { NextResponse } from "next/server";

import {
  CoreRunnerConfigurationError,
  issueGameToken,
} from "@/lib/core-runner-server";

export const runtime = "nodejs";

export async function POST() {
  try {
    return NextResponse.json(issueGameToken(), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    if (error instanceof CoreRunnerConfigurationError) {
      return NextResponse.json(
        { error: "Leaderboard service is not configured." },
        { status: 503 },
      );
    }
    throw error;
  }
}
