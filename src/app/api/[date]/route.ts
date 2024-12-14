import handlowe from "@/assets/handlowe.json";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { date: string } }) {
  const { date } = params;

  // Validate date parameter
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json(
      { error: "Invalid date format. Use YYYY-MM-DD" },
      { status: 400 }
    );
  }

  // Extract year and validate
  const year = parseInt(date.substring(0, 4));
  if (year !== 2024 && year !== 2025) {
    return NextResponse.json(
      { error: "Year not supported. Use 2024 or 2025" },
      { status: 400 }
    );
  }

  const isHandlowa = handlowe.includes(date);

  return NextResponse.json({
    jaka: isHandlowa ? "pojebana" : "zwykla",
  });
}