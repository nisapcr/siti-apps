import { useState } from "react";
import { 
  FiStar, FiGift, FiAward, FiZap, 
  FiChevronRight, FiUsers, FiTrendingUp 
} from "react-icons/fi";
import loyalitasData from "../data/loyalitas.json";

// Konfigurasi Level - Pastikan nama level di JSON (Bronze, Silver, dll) SAMA PERSIS case-sensitive nya
const levelConfig = {
  Bronze:   { accent: "#B45309", bg: "#FFFBEB", icon: <FiAward size={18} /> },
  Silver:   { accent: "#718096", bg: "#F7FAFC", icon: <FiStar size={18} /> },
  Gold:     { accent: "#D97706", bg: "#FFFAF0", icon: <FiZap size={18} /> },
  Platinum: { accent: "#06B6D4", bg: "#E0F2FE", icon: <FiAward size={18} /> },
};

const rewards = [
  { poin: 50, label: "Diskon Rp10.000" },
  { poin: 100, label: "Diskon Rp25.000" },
  { poin: 200, label: "Scaling Gratis" },
  { poin: 500, label: "Tambal Gigi Gratis" },
];

export default function Loyalitas() {
  // 1. Tambahkan pengecekan data untuk menghindari error .length atau .reduce
  const dataPasien = loyalitasData || [];

  const stats = [
    { 
      label: "Total Pasien", 
      value: dataPasien.length, 
      icon: FiUsers 
    },
    { 
      label: "Level Gold+", 
      value: dataPasien.filter((p) => p.level === "Gold" || p.level === "Platinum").length, 
      icon: FiTrendingUp 
    },
    { 
      label: "Total Poin", 
      value: dataPasien.reduce((sum, p) => sum + (p.totalPoin || 0), 0).toLocaleString(), 
      icon: FiStar 
    },
  ];

  return (
    <div style={{ padding: "24px", background: "#F8F9FA", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ color: "#2D3748", margin: 0, fontSize: "22px", fontWeight: "700" }}>Program Loyalitas</h2>
        <p style={{ color: "#A0AEC0", fontSize: "14px", margin: "4px 0 0 0" }}>Kelola poin dan reward pasien setia DentiCare</p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "30px" }}>
        {stats.map((s, i) => (
          <div key={i} style={cardStyle}>
            <div>
              <p style={statLabelStyle}>{s.label}</p>
              <h4 style={statValueStyle}>{s.value}</h4>
            </div>
            <div style={iconBoxStyle}><s.icon size={20} color="#fff" /></div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        
        {/* Peringkat Pasien */}
        <div style={{ ...cardStyleFull, flex: 2 }}>
          <h3 style={cardTitleStyle}>Peringkat Poin Pasien</h3>
          <div style={{ marginTop: "20px" }}>
            {dataPasien.map((pasien, idx) => {
              // Safety check jika level tidak ada di config
              const config = levelConfig[pasien.level] || levelConfig.Bronze;
              
              return (
                <div key={pasien.pasienId || idx} style={tableRowStyle}>
                  <div style={rankBadgeStyle(idx)}>{idx + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: "700", color: "#2D3748", fontSize: "14px" }}>{pasien.pasienNama}</div>
                    <span style={badgeStyle(config)}>{pasien.level}</span>
                  </div>
                  <div style={{ textAlign: "right", marginRight: "20px" }}>
                    <div style={{ fontSize: "12px", color: "#A0AEC0", fontWeight: "600" }}>{pasien.totalPoin} Poin</div>
                    <div style={{ fontSize: "11px", color: "#4FD1C5", fontWeight: "700" }}>
                      {pasien.poinKeNextLevel} lagi ke {pasien.nextLevel}
                    </div>
                  </div>
                  <button style={btnSmallStyle}>Tukar <FiChevronRight /></button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reward Section */}
        <div style={{ ...cardStyleFull, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
             <FiGift color="#4FD1C5" size={20} />
             <h3 style={cardTitleStyle}>Reward Tersedia</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {rewards.map((r, i) => (
              <div key={i} style={rewardItemStyle}>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#4FD1C5" }}>{r.poin}</div>
                <div style={{ fontSize: "11px", color: "#A0AEC0", textTransform: "uppercase", fontWeight: "bold" }}>Poin</div>
                <div style={{ fontSize: "13px", color: "#2D3748", fontWeight: "600", marginTop: "4px" }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// --- CSS-in-JS Styles ---
const cardStyle = {
  background: "#FFFFFF", borderRadius: "15px", padding: "16px 20px",
  display: "flex", alignItems: "center", justifyContent: "space-between",
  boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
};

const cardStyleFull = {
  background: "#FFFFFF", borderRadius: "15px", padding: "24px",
  boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
};

const iconBoxStyle = {
  width: "45px", height: "45px", background: "#4FD1C5",
  borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
};

const statLabelStyle = { fontSize: "12px", color: "#A0AEC0", fontWeight: "700", margin: 0, textTransform: "uppercase" };
const statValueStyle = { fontSize: "18px", fontWeight: "700", color: "#2D3748", margin: "4px 0 0 0" };
const cardTitleStyle = { margin: 0, color: "#2D3748", fontSize: "16px", fontWeight: "700" };

const tableRowStyle = {
  display: "flex", alignItems: "center", gap: "15px", padding: "12px 0",
  borderBottom: "1px solid #F0F0F0"
};

const rankBadgeStyle = (idx) => ({
  width: "30px", height: "30px", borderRadius: "8px",
  background: idx < 3 ? "#4FD1C515" : "#F7FAFC",
  color: idx < 3 ? "#4FD1C5" : "#A0AEC0",
  display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "13px", flexShrink: 0
});

const badgeStyle = (cfg) => ({
  fontSize: "10px", padding: "2px 8px", borderRadius: "6px",
  background: cfg.bg, color: cfg.accent, fontWeight: "bold", textTransform: "uppercase"
});

const rewardItemStyle = {
  padding: "15px", borderRadius: "12px", border: "1px solid #F0F0F0", textAlign: "center",
  background: "#FFF"
};

const btnSmallStyle = {
  background: "#4FD1C5", color: "#fff", border: "none", padding: "6px 12px",
  borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "11px", 
  display: "flex", alignItems: "center", gap: "4px", flexShrink: 0
};