// src/pages/Keluhan.jsx
import { useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiStar, FiSend, FiMessageCircle } from "react-icons/fi";
import data from "../data/keluhan.json";

const { keluhanData, surveyData } = data;

const formatTanggal = (tanggal) => {
  return new Date(tanggal).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// Konfigurasi Warna Purity UI
const priorityConfig = {
  High:   { bg: "#FFF5F5", color: "#E53E3E" },
  Medium: { bg: "#FFFAF0", color: "#DD6B20" },
  Low:    { bg: "#F0FFF4", color: "#38A169" },
};

const statusConfig = {
  Selesai:  { bg: "#E6FFFA", color: "#319795" },
  Diproses: { bg: "#EBF8FF", color: "#3182CE" },
  Baru:     { bg: "#FAF5FF", color: "#805AD5" },
};

export default function Keluhan() {
  const [activeTab, setActiveTab] = useState("keluhan");

  const keluhanAktif = keluhanData.filter((k) => k.status !== "Selesai");
  const avgRating = surveyData.length 
    ? (surveyData.reduce((a, b) => a + (b.rating || 0), 0) / surveyData.length).toFixed(1) 
    : "0";

  const stats = [
    { label: "Keluhan Aktif", value: keluhanAktif.length, icon: FiAlertCircle },
    { label: "Keluhan Selesai", value: keluhanData.length - keluhanAktif.length, icon: FiCheckCircle },
    { label: "Survey Masuk", value: surveyData.length, icon: FiMessageCircle },
    { label: "Rating Klinik", value: `${avgRating}/5`, icon: FiStar },
  ];

  return (
    <div style={{ padding: "24px", background: "#F8F9FA", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Header Identik Purity UI */}
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ color: "#2D3748", margin: 0, fontSize: "22px", fontWeight: "700" }}>Feedback & Layanan Pasien</h2>
        <p style={{ color: "#A0AEC0", fontSize: "14px", margin: "4px 0 0 0" }}>Manajemen keluhan dan evaluasi kepuasan pasien klinik</p>
      </div>

      {/* Grid Statistik - Menggunakan style Card yang sama dengan Dashboard */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "30px" }}>
        {stats.map((s, i) => (
          <div key={i} style={cardStyle}>
            <div>
              <p style={{ fontSize: "12px", color: "#A0AEC0", fontWeight: "700", margin: 0, textTransform: "uppercase" }}>{s.label}</p>
              <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#2D3748", margin: "4px 0 0 0" }}>{s.value}</h4>
            </div>
            <div style={iconBoxStyle}><s.icon size={20} color="#fff" /></div>
          </div>
        ))}
      </div>

      {/* Tabs Layout */}
      <div style={{ background: "#fff", borderRadius: "15px", padding: "20px", boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)" }}>
        <div style={{ display: "flex", gap: "20px", borderBottom: "1px solid #E2E8F0", marginBottom: "20px" }}>
          {["keluhan", "survey"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "12px 16px", background: "none", border: "none", cursor: "pointer",
                fontSize: "14px", fontWeight: "600",
                color: activeTab === tab ? "#4FD1C5" : "#A0AEC0",
                borderBottom: activeTab === tab ? "2px solid #4FD1C5" : "2px solid transparent",
                transition: "0.2s"
              }}
            >
              {tab === "keluhan" ? "Daftar Keluhan" : "Survey Kepuasan"}
            </button>
          ))}
        </div>

        {/* Content List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {(activeTab === "keluhan" ? keluhanData : surveyData).map((item) => (
            <div key={item.id} style={listItemStyle}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "700", color: "#2D3748", fontSize: "15px" }}>{item.pasienNama}</span>
                  {activeTab === "keluhan" && (
                    <>
                      <span style={{ ...badgeStyle, background: priorityConfig[item.prioritas]?.bg, color: priorityConfig[item.prioritas]?.color }}>
                        {item.prioritas}
                      </span>
                      <span style={{ ...badgeStyle, background: statusConfig[item.status]?.bg, color: statusConfig[item.status]?.color }}>
                        {item.status}
                      </span>
                    </>
                  )}
                </div>
                
                <p style={{ margin: 0, fontSize: "14px", color: "#718096", lineHeight: "1.5" }}>
                  {activeTab === "keluhan" ? item.pesan : `"${item.komentar}"`}
                </p>

                {activeTab === "survey" && (
                   <div style={{ display: "flex", gap: "4px", marginTop: "10px", alignItems: "center" }}>
                     {[...Array(5)].map((_, i) => (
                       <FiStar key={i} size={14} fill={i < item.rating ? "#F6E05E" : "none"} color={i < item.rating ? "#F6E05E" : "#E2E8F0"} />
                     ))}
                     <span style={{ fontSize: "12px", color: "#A0AEC0", marginLeft: "8px" }}>{item.rating}/5 Rating</span>
                   </div>
                )}

                <div style={{ marginTop: "12px", fontSize: "12px", color: "#A0AEC0", fontWeight: "600" }}>
                  {formatTanggal(item.tanggal || item.tanggalKirim)} • {item.kategori || "Umum"}
                </div>
              </div>

              <button style={btnActionStyle}>
                <FiSend size={14} /> Balas
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Styles (Identik Purity UI) ---
const cardStyle = {
  background: "#FFFFFF",
  borderRadius: "15px",
  padding: "16px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
};

const iconBoxStyle = {
  width: "45px", height: "45px",
  background: "#4FD1C5",
  borderRadius: "12px",
  display: "flex", alignItems: "center", justifyContent: "center",
};

const listItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #F0F0F0",
  background: "#fff",
};

const badgeStyle = {
  padding: "4px 10px",
  borderRadius: "8px",
  fontSize: "10px",
  fontWeight: "bold",
  textTransform: "uppercase"
};

const btnActionStyle = {
  display: "flex", alignItems: "center", gap: "8px",
  background: "#4FD1C5", color: "#fff", border: "none",
  padding: "8px 16px", borderRadius: "10px", fontWeight: "bold",
  fontSize: "13px", cursor: "pointer", alignSelf: "center"
};