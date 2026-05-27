import records from "@/data/sample-records.json";

type RecordStatus = "pending" | "cleared" | "flagged" | "archived";

type OpsRecord = {
  id: string;
  label: string;
  category: string;
  status: RecordStatus;
  priority: "low" | "medium" | "high";
};

const typedRecords = records as OpsRecord[];

function countByStatus(status: RecordStatus) {
  return typedRecords.filter((record) => record.status === status).length;
}

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <section style={{ marginBottom: "32px" }}>
        <p style={{ fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Synthetic Operations
        </p>

        <h1 style={{ fontSize: "36px", margin: "0 0 12px" }}>
          Ops Admin Dashboard
        </h1>

        <p style={{ maxWidth: "680px", lineHeight: "1.6" }}>
          A lightweight full-stack dashboard scaffold for viewing synthetic operational
          records, status categories, and review queues.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "16px",
          marginBottom: "32px"
        }}
      >
        <div style={cardStyle}>
          <p style={labelStyle}>Total Records</p>
          <strong style={numberStyle}>{typedRecords.length}</strong>
        </div>

        <div style={cardStyle}>
          <p style={labelStyle}>Pending</p>
          <strong style={numberStyle}>{countByStatus("pending")}</strong>
        </div>

        <div style={cardStyle}>
          <p style={labelStyle}>Cleared</p>
          <strong style={numberStyle}>{countByStatus("cleared")}</strong>
        </div>

        <div style={cardStyle}>
          <p style={labelStyle}>Flagged</p>
          <strong style={numberStyle}>{countByStatus("flagged")}</strong>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
          Recent Records
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Label</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Priority</th>
              </tr>
            </thead>

            <tbody>
              {typedRecords.map((record) => (
                <tr key={record.id}>
                  <td style={tdStyle}>{record.id}</td>
                  <td style={tdStyle}>{record.label}</td>
                  <td style={tdStyle}>{record.category}</td>
                  <td style={tdStyle}>{record.status}</td>
                  <td style={tdStyle}>{record.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "20px",
  background: "#fafafa"
};

const labelStyle = {
  margin: "0 0 8px",
  fontSize: "13px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.06em",
  color: "#555"
};

const numberStyle = {
  fontSize: "32px"
};

const thStyle = {
  textAlign: "left" as const,
  borderBottom: "1px solid #ddd",
  padding: "12px",
  fontSize: "13px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.06em"
};

const tdStyle = {
  borderBottom: "1px solid #eee",
  padding: "12px"
};
