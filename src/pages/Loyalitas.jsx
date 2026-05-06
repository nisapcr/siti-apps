import { useState } from "react";
import { FiStar, FiGift, FiAward, FiZap, FiChevronRight } from "react-icons/fi";
import loyalitasData from "../data/loyalitas.json";

const levelConfig = {
  Bronze: {
    gradient: "linear-gradient(135deg, #92400e, #b45309)",
    accent: "#F59E0B",
    badge: { bg: "rgba(245,158,11,0.12)", color: "#F59E0B" },
    range: "0–99 poin",
    icon: <FiAward size={22} />,
  },
  Silver: {
    gradient: "linear-gradient(135deg, #374151, #6B7280)",
    accent: "#9CA3AF",
    badge: { bg: "rgba(156,163,175,0.12)", color: "#9CA3AF" },
    range: "100–299 poin",
    icon: <FiStar size={22} />,
  },
  Gold: {
    gradient: "linear-gradient(135deg, #92400e, #d97706)",
    accent: "#FCD34D",
    badge: { bg: "rgba(252,211,77,0.12)", color: "#FCD34D" },
    range: "300–699 poin",
    icon: <FiZap size={22} />,
  },
  Platinum: {
    gradient: "linear-gradient(135deg, #0e7490, #06b6d4)",
    accent: "#22D3EE",
    badge: { bg: "rgba(34,211,238,0.12)", color: "#22D3EE" },
    range: "700+ poin",
    icon: <FiAward size={22} />,
  },
};

const rewards = [
  { poin: 50, label: "Diskon Rp10.000" },
  { poin: 100, label: "Diskon Rp25.000" },
  { poin: 200, label: "Scaling Gratis" },
  { poin: 500, label: "Tambal Gigi Gratis" },
];

const rankColors = ["#1FD4A0", "#4A9EF5", "#F5A623", "#8B5CF6"];

export default function Loyalitas() {
  const stats = [
    { label: "Total Pasien", value: loyalitasData.length, color: "#1FD4A0" },
    { label: "Level Gold+", value: loyalitasData.filter((p) => p.level === "Gold" || p.level === "Platinum").length, color: "#FCD34D" },
    { label: "Total Poin", value: loyalitasData.reduce((sum, p) => sum + p.totalPoin, 0), color: "#4A9EF5" },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: "#fff", fontFamily: "'Playfair Display', serif", margin: 0 }}>
          Program Loyalitas
        </h1>
        <p style={{ color: "#4a5a6a", fontSize: 13, marginTop: 4 }}>Kelola poin dan reward pasien setia</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 24 }}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              background: "#161a26",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 14,
              padding: "18px 20px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: 2,
                background: `linear-gradient(90deg, ${s.color}, transparent)`,
              }}
            />
            <div style={{ fontSize: 11, color: "#4a5a6a", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
              {s.label}
            </div>
            <div style={{ fontSize: 28, fontWeight: 600, color: s.color, lineHeight: 1 }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Level Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
        {Object.entries(levelConfig).map(([level, cfg]) => (
          <div
            key={level}
            style={{
              background: "#161a26",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 14,
              padding: "16px 18px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: 2,
                background: `linear-gradient(90deg, ${cfg.accent}, transparent)`,
              }}
            />
            <div
              style={{
                width: 38, height: 38, borderRadius: 10,
                background: cfg.badge.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: cfg.accent, marginBottom: 12,
              }}
            >
              {cfg.icon}
            </div>
            <div style={{ fontWeight: 600, color: "#d0dde8", fontSize: 15 }}>{level}</div>
            <div style={{ fontSize: 11, color: "#4a5a6a", marginTop: 4 }}>{cfg.range}</div>
          </div>
        ))}
      </div>

      {/* Peringkat Pasien */}
      <div
        style={{
          background: "#161a26",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 14,
          overflow: "hidden",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            padding: "14px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            fontSize: 13,
            fontWeight: 600,
            color: "#d0dde8",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          Peringkat Poin Pasien
        </div>

        {loyalitasData.map((pasien, idx) => {
          const cfg = levelConfig[pasien.level];
          return (
            <div
              key={pasien.pasienId}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 20px",
                borderBottom: idx < loyalitasData.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {/* Rank badge */}
              <div
                style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: idx < 3 ? `${rankColors[idx]}18` : "rgba(255,255,255,0.05)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 13,
                  color: idx < 3 ? rankColors[idx] : "#4a5a6a",
                }}
              >
                {idx + 1}
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#d0dde8" }}>{pasien.pasienNama}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                  <span
                    style={{
                      fontSize: 11, padding: "2px 8px", borderRadius: 20,
                      background: cfg.badge.bg, color: cfg.badge.color, fontWeight: 600,
                    }}
                  >
                    {pasien.level}
                  </span>
                  <span style={{ fontSize: 11, color: "#4a5a6a" }}>{pasien.totalPoin} poin</span>
                </div>
              </div>

              {/* Progress ke next level */}
              <div style={{ textAlign: "right", marginRight: 8 }}>
                <div style={{ fontSize: 11, color: "#4a5a6a" }}>Ke {pasien.nextLevel}</div>
                <div style={{ fontSize: 12, color: cfg.accent, fontWeight: 600 }}>{pasien.poinKeNextLevel} lagi</div>
              </div>

              {/* CTA */}
              <button
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
                  color: "#0f1117", fontSize: 12, fontWeight: 600,
                  padding: "7px 14px", borderRadius: 8,
                  cursor: "pointer", border: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "opacity 0.2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Tukar Poin <FiChevronRight size={13} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Reward Tersedia */}
      <div
        style={{
          background: "#161a26",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 14,
          padding: "18px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #1FD4A0, transparent)" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div
            style={{
              width: 34, height: 34, borderRadius: 8,
              background: "rgba(31,212,160,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <FiGift style={{ color: "#1FD4A0", fontSize: 16 }} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#d0dde8", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Reward Tersedia
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {rewards.map((r, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 10,
                padding: "14px 12px",
                textAlign: "center",
                transition: "border-color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(31,212,160,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
            >
              <div style={{ fontSize: 16, fontWeight: 700, color: "#1FD4A0", marginBottom: 4 }}>
                {r.poin} <span style={{ fontSize: 11, fontWeight: 400 }}>poin</span>
              </div>
              <div style={{ fontSize: 11, color: "#6a7a8a" }}>{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}