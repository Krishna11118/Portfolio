import type { NextRequest } from "next/server";

export function applyCorsHeaders(req: NextRequest, res: unknown): Record<string, string> {
  const allowedOrigins = ["http://localhost:3000", "https://www.krishnastonetech.live"];
  const origin = req.headers.get("origin") || "";
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}