export default function RecentActivity() {
  const activities = [
    { id: 1, name: "Andi Wijaya",     action: "Scaling",            date: "22 Des 2024", time: "10:00" },
    { id: 2, name: "Siti Nurhaliza", action: "Cabut Gigi",          date: "22 Des 2024", time: "11:30" },
    { id: 3, name: "Budi Santoso",   action: "Konsultasi Behel",    date: "21 Des 2024", time: "14:15" },
  ];

  const initials = (name) => name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const avatarColors = ["rgba(31,212,160,0.15)", "rgba(74,158,245,0.15)", "rgba(139,92,246,0.15)"];
  const textColors   = ["#1FD4A0", "#4A9EF5", "#8B5CF6"];

  return (
    <div style={{
      background: "#161a26",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 14,
      padding: 20,
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 500, color: "#d0dde8", margin: 0 }}>
          Aktivitas Terbaru
        </h2>
        <span style={{ fontSize: 11, color: "#1FD4A0", cursor: "pointer" }}>Lihat semua →</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {activities.map((activity, idx) => (
          <div key={activity.id} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 0",
            borderBottom: idx < activities.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                background: avatarColors[idx % avatarColors.length],
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 600,
                color: textColors[idx % textColors.length],
                flexShrink: 0,
              }}>
                {initials(activity.name)}
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 500, color: "#d0dde8", margin: 0 }}>{activity.name}</p>
                <p style={{ fontSize: 11, color: "#4a5a6a", margin: "2px 0 0" }}>{activity.action}</p>
              </div>
            </div>
            <p style={{ fontSize: 11, color: "#3d4f5e", whiteSpace: "nowrap" }}>
              {activity.date} · {activity.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}