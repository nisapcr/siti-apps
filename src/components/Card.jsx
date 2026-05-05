export default function Card({ title, value, icon: Icon, color, change }) {
  const colorMap = {
    green:  { accent: "#1FD4A0", bg: "rgba(31,212,160,0.1)",  top: "#1FD4A0" },
    blue:   { accent: "#4A9EF5", bg: "rgba(74,158,245,0.1)",  top: "#4A9EF5" },
    orange: { accent: "#F5A623", bg: "rgba(245,166,35,0.1)",  top: "#F5A623" },
    purple: { accent: "#8B5CF6", bg: "rgba(139,92,246,0.1)", top: "#8B5CF6" },
  };

  const c = colorMap[color] || colorMap.green;
  const isPositive = change && change.includes("+");

  return (
    <div style={{
      background: "#161a26",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 14,
      padding: "18px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${c.top}, transparent)`,
      }} />

      <div>
        <p style={{ fontSize: 11, color: "#4a5a6a", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
          {title}
        </p>
        <p style={{ fontSize: 28, fontWeight: 600, color: c.accent, lineHeight: 1 }}>
          {value}
        </p>
        {change && (
          <p style={{
            fontSize: 11, marginTop: 10,
            padding: "3px 8px", borderRadius: 20, display: "inline-block",
            background: isPositive ? "rgba(31,212,160,0.1)" : "rgba(245,57,57,0.1)",
            color: isPositive ? "#1FD4A0" : "#f57272",
          }}>
            {change} dari minggu lalu
          </p>
        )}
      </div>

      <div style={{
        background: c.bg,
        borderRadius: 10,
        padding: 10,
        flexShrink: 0,
      }}>
        <Icon style={{ color: c.accent, fontSize: 20 }} />
      </div>
    </div>
  );
}