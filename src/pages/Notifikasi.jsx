import { FiBell, FiSend, FiClock } from "react-icons/fi";
import { notifikasiData, formatTanggal } from "../data/dummyData";

export default function Notifikasi() {
  const stats = [
    { label: "Total Notifikasi", value: notifikasiData.length,                                          color: "#8B5CF6", top: "#8B5CF6", iconBg: "rgba(139,92,246,0.1)" },
    { label: "Terjadwal",        value: notifikasiData.filter((n) => n.status === "Scheduled").length,  color: "#F5A623", top: "#F5A623", iconBg: "rgba(245,166,35,0.1)" },
    { label: "Belum Dikirim",    value: notifikasiData.filter((n) => !n.sudahDikirim).length,           color: "#4A9EF5", top: "#4A9EF5", iconBg: "rgba(74,158,245,0.1)" },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: "#fff", fontFamily: "'Playfair Display', serif" }}>Notifikasi Perawatan Lanjutan</h1>
        <p style={{ color: "#4a5a6a", fontSize: 13, marginTop: 4 }}>Pengingat otomatis untuk pasien</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 24 }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            background: "#161a26",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 14,
            padding: "18px 20px",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${s.top}, transparent)` }} />
            <div style={{ fontSize: 11, color: "#4a5a6a", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>{s.label}</div>
            <div style={{ fontSize: 28, fontWeight: 600, color: s.color, lineHeight: 1 }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Notification Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {notifikasiData.map((notif) => (
          <div
            key={notif.id}
            style={{
              background: "#161a26",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 14,
              padding: "18px 20px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              {/* Icon */}
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "rgba(139,92,246,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <FiBell style={{ color: "#8B5CF6", fontSize: 16 }} />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#d0dde8" }}>{notif.pasienNama}</div>
                <div style={{ fontSize: 12, color: "#6a7a8a", marginTop: 4, lineHeight: 1.5 }}>{notif.pesan}</div>
                <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#4a5a6a" }}>
                    <FiClock size={11} /> {notif.tipe}
                  </span>
                  <span style={{ fontSize: 11, color: "#4a5a6a" }}>Via: {notif.reminderMethod}</span>
                  <span style={{ fontSize: 11, color: "#4a5a6a" }}>Jadwal: {formatTanggal(notif.tanggalNotifikasi)}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
                  color: "#0f1117", fontSize: 12, fontWeight: 600,
                  padding: "8px 14px", borderRadius: 8,
                  cursor: "pointer", border: "none",
                  flexShrink: 0, alignSelf: "flex-start",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <FiSend size={13} /> Kirim
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}