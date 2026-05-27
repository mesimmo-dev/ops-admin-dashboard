import records from "@/data/sample-records.json";
import type { OpsRecord, RecordStatus } from "@/types/record";

export const sampleRecords = records as OpsRecord[];

export function getRecordCount(): number {
  return sampleRecords.length;
}

export function getRecordsByStatus(status: RecordStatus): OpsRecord[] {
  return sampleRecords.filter((record) => record.status === status);
}

export function getStatusCount(status: RecordStatus): number {
  return getRecordsByStatus(status).length;
}
