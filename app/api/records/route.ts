import { NextResponse } from "next/server";
import records from "@/data/sample-records.json";

export async function GET() {
  return NextResponse.json({
    records,
    count: records.length,
    source: "synthetic-local-data"
  });
}
