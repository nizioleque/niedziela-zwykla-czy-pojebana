import handlowe from "@/assets/handlowe.json";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { date: string } }
) {
  const { date } = params;

  // Validate date parameter
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json(
      { error: "Invalid date format. Use YYYY-MM-DD" },
      { status: 400 }
    );
  }

  const isHandlowa = handlowe.includes(date);

  return NextResponse.json({
    jaka: isHandlowa ? "pojebana" : "zwykla",
  });
}
