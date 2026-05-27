export type RecordStatus = "pending" | "cleared" | "flagged" | "archived";

export type RecordPriority = "low" | "medium" | "high";

export type OpsRecord = {
  id: string;
  label: string;
  category: string;
  status: RecordStatus;
  priority: RecordPriority;
};
