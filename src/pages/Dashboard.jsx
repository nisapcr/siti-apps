// src/pages/Dashboard.jsx
import { FiUsers, FiCalendar, FiDollarSign, FiActivity, FiCheckCircle } from "react-icons/fi";
import statistikData from "../data/statistik.json";
import aktivitasData from "../data/aktivitas.json";

const iconMap = { teal: "#1FD4A0", blue: "#4A9EF5", amber: "#F5A623", purple: "#8B5CF6" };

const colorMap = {
  teal:   { bg: "rgba(31,212,160,0.08)",  accent: "#1FD4A0", iconBg: "rgba(31,212,160,0.12)",  top: "#1FD4A0" },
  blue:   { bg: "rgba(74,158,245,0.08)",  accent: "#4A9EF5", iconBg: "rgba(74,158,245,0.12)",  top: "#4A9EF5" },
  amber:  { bg: "rgba(245,166,35,0.08)",  accent: "#F5A623", iconBg: "rgba(245,166,35,0.12)",  top: "#F5A623" },
  purple: { bg: "rgba(139,92,246,0.08)", accent: "#8B5CF6", iconBg: "rgba(139,92,246,0.12)", top: "#8B5CF6" },
};

const activityColors = { Jadwal: "blue", "Pasien Baru": "teal", Reminder: "amber", Selesai: "teal" };
const badgeBg = { teal: "rgba(31,212,160,0.1)", blue: "rgba(74,158,245,0.1)", amber: "rgba(245,166,35,0.1)" };

export default function Dashboard() {
  const stats = [
    { title: "Total Pasien", value: statistikData.totalPasien, icon: FiUsers, color: "teal", change: `+${statistikData.pasienBaruBulanIni} bulan ini` },
    { title: "Jadwal Hari Ini", value: statistikData.jadwalHariIni, icon: FiCalendar, color: "blue", change: `${statistikData.jadwalMingguIni} minggu ini` },
    { title: "Pendapatan", value: `Rp${(statistikData.pendapatanBulanIni / 1000000).toFixed(0)}jt`, icon: FiDollarSign, color: "amber", change: `+${statistikData.persentaseKenaikan}%` },
    { title: "Kepuasan", value: `${statistikData.tingkatKepuasan}%`, icon: FiActivity, color: "purple", change: "Dari survey" }
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: "#fff", fontFamily: "'Playfair Display', serif", margin: 0 }}>
          Dashboard
        </h1>
        <p style={{ color: "#4a5a6a", fontSize: 13, marginTop: 4 }}>
          Selamat datang kembali, Dr. Sarah
        </p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 28 }}>
        {stats.map((stat, idx) => {
          const c = colorMap[stat.color];
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              style={{
                background: "#161a26",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 14,
                padding: "18px 20px",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Top gradient bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${c.top}, transparent)`
                }}
              />
              
              {/* Title */}
              <div
                style={{
                  fontSize: 11,
                  color: "#4a5a6a",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 12
                }}
              >
                {stat.title}
              </div>
              
              {/* Value and Icon */}
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                <div style={{ fontSize: 28, fontWeight: 600, color: c.accent, lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ background: c.iconBg, borderRadius: 10, padding: 8 }}>
                  <Icon style={{ color: c.accent, fontSize: 16 }} />
                </div>
              </div>
              
              {/* Change badge */}
              <div style={{ marginTop: 12 }}>
                <span
                  style={{
                    fontSize: 11,
                    padding: "3px 8px",
                    borderRadius: 20,
                    background: "rgba(31,212,160,0.1)",
                    color: "#1FD4A0"
                  }}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Two Column Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16 }}>
        
        {/* Aktivitas Terbaru */}
        <div
          style={{
            background: "#161a26",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 14,
            padding: 20
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: "#d0dde8" }}>
                Aktivitas Terbaru
              </div>
              <div style={{ fontSize: 11, color: "#4a5a6a", marginTop: 2 }}>
                Semua aktivitas klinik
              </div>
            </div>
            <span style={{ fontSize: 11, color: "#1FD4A0", cursor: "pointer" }}>
              Lihat semua →
            </span>
          </div>

          {/* Activity List */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {aktivitasData.map((activity) => {
              const col = activityColors[activity.tipe] || "teal";
              return (
                <div
                  key={activity.id}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.04)"
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: badgeBg[col],
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <FiCheckCircle style={{ color: iconMap[col], fontSize: 14 }} />
                  </div>
                  
                  {/* Description */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: "#a0b0c0", lineHeight: 1.4 }}>
                      <strong style={{ color: "#d0dde8", fontWeight: 500 }}>
                        {activity.deskripsi}
                      </strong>
                    </div>
                    <div style={{ fontSize: 11, color: "#3d4f5e", marginTop: 3 }}>
                      {activity.waktu}
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <span
                    style={{
                      fontSize: 10,
                      padding: "2px 8px",
                      borderRadius: 20,
                      background: badgeBg[col],
                      color: iconMap[col],
                      whiteSpace: "nowrap"
                    }}
                  >
                    {activity.tipe}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Jadwal Ringkas */}
        <div
          style={{
            background: "#161a26",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 14,
            padding: 20
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: "#d0dde8" }}>
              Jadwal Hari Ini
            </div>
            <span style={{ fontSize: 11, color: "#1FD4A0", cursor: "pointer" }}>
              Semua →
            </span>
          </div>
          
          {/* Count */}
          <div style={{ fontSize: 11, color: "#4a5a6a", marginBottom: 14 }}>
            {statistikData.jadwalHariIni} janji temu
          </div>
          
          {/* Placeholder */}
          <div style={{ fontSize: 12, color: "#6a7a8a", textAlign: "center", padding: "20px 0" }}>
            Jadwal hari ini akan tampil di sini
          </div>
        </div>
      </div>
    </div>
  );
}