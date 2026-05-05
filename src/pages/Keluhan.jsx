// src/pages/Keluhan.jsx
import { useState } from "react";
import { FiMessageSquare, FiAlertCircle, FiCheckCircle, FiClock, FiStar, FiSend } from "react-icons/fi";
import { keluhanData, surveyData, formatTanggal } from "../data/dummyData";

const priorityConfig = {
  High:   { bg: "rgba(239,68,68,0.1)",   color: "#F87171" },
  Medium: { bg: "rgba(245,166,35,0.1)",  color: "#F5A623" },
  Low:    { bg: "rgba(31,212,160,0.1)",  color: "#1FD4A0" },
};

const statusConfig = {
  Selesai:  { bg: "rgba(31,212,160,0.1)",  color: "#1FD4A0" },
  Diproses: { bg: "rgba(74,158,245,0.1)",  color: "#4A9EF5" },
  Baru:     { bg: "rgba(139,92,246,0.1)",  color: "#8B5CF6" },
};

export default function Keluhan() {
  const [activeTab, setActiveTab] = useState("keluhan");

  const keluhanAktif  = keluhanData.filter((k) => k.status !== "Selesai");
  const keluhanSelesai = keluhanData.filter((k) => k.status === "Selesai");
  const surveyMenunggu = surveyData.filter((s) => !s.sudahRespon);
  const ratedSurveys   = surveyData.filter((s) => s.rating);
  const avgRating      = ratedSurveys.length
    ? (ratedSurveys.reduce((a, b) => a + b.rating, 0) / ratedSurveys.length).toFixed(1)
    : "—";

  const stats = [
    { label: "Keluhan Aktif",    value: keluhanAktif.length,  color: "#F87171" },
    { label: "Keluhan Selesai",  value: keluhanSelesai.length, color: "#1FD4A0" },
    { label: "Survey Menunggu",  value: surveyMenunggu.length, color: "#F5A623" },
    { label: "Rating Rata-rata", value: avgRating,             color: "#8B5CF6" },
  ];

  const tabs = [
    { key: "keluhan", label: "Keluhan Pasien" },
    { key: "survey",  label: "Survey Kepuasan" },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: "#fff", fontFamily: "'Playfair Display', serif", margin: 0 }}>
          Keluhan &amp; Feedback
        </h1>
        <p style={{ color: "#4a5a6a", fontSize: 13, marginTop: 4 }}>Pantau keluhan pasien dan tingkat kepuasan</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}>
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
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
            <div style={{ fontSize: 11, color: "#4a5a6a", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>{s.label}</div>
            <div style={{ fontSize: 28, fontWeight: 600, color: s.color, lineHeight: 1 }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 0 }}>
        {tabs.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: "10px 18px",
                fontSize: 13,
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
                background: "none",
                border: "none",
                borderBottom: active ? "2px solid #1FD4A0" : "2px solid transparent",
                color: active ? "#1FD4A0" : "#4a5a6a",
                cursor: "pointer",
                transition: "color 0.2s",
                marginBottom: -1,
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Keluhan Tab */}
      {activeTab === "keluhan" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {keluhanData.map((keluhan) => {
            const pCfg = priorityConfig[keluhan.prioritas] || priorityConfig.Low;
            const sCfg = statusConfig[keluhan.status] || statusConfig.Baru;
            const isKeluhan = keluhan.tipe === "Keluhan";
            return (
              <div
                key={keluhan.id}
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
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: isKeluhan ? "rgba(248,113,113,0.1)" : "rgba(31,212,160,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {isKeluhan
                      ? <FiAlertCircle style={{ color: "#F87171", fontSize: 16 }} />
                      : <FiCheckCircle style={{ color: "#1FD4A0", fontSize: 16 }} />
                    }
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
                      <span style={{ fontSize: 14, fontWeight: 500, color: "#d0dde8" }}>{keluhan.pasienNama}</span>
                      <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: pCfg.bg, color: pCfg.color, fontWeight: 600 }}>
                        {keluhan.prioritas}
                      </span>
                      <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: sCfg.bg, color: sCfg.color, fontWeight: 600 }}>
                        {keluhan.status}
                      </span>
                    </div>

                    <p style={{ fontSize: 13, color: "#a0b0c0", lineHeight: 1.6, margin: 0 }}>{keluhan.pesan}</p>

                    <div style={{ display: "flex", gap: 12, marginTop: 8, fontSize: 11, color: "#4a5a6a" }}>
                      <span>{formatTanggal(keluhan.tanggal)}</span>
                      <span>•</span>
                      <span>{keluhan.kategori}</span>
                    </div>

                    {keluhan.responAdmin && (
                      <div style={{
                        marginTop: 12,
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 8,
                        padding: "10px 14px",
                      }}>
                        <div style={{ fontSize: 10, color: "#4a5a6a", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Respon Admin</div>
                        <p style={{ fontSize: 13, color: "#a0b0c0", margin: 0 }}>{keluhan.responAdmin}</p>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  {keluhan.status !== "Selesai" && (
                    <button
                      style={{
                        display: "flex", alignItems: "center", gap: 6,
                        background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
                        color: "#0f1117", fontSize: 12, fontWeight: 600,
                        padding: "8px 14px", borderRadius: 8,
                        cursor: "pointer", border: "none",
                        fontFamily: "'DM Sans', sans-serif",
                        flexShrink: 0, alignSelf: "flex-start",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      <FiSend size={13} /> Respon
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Survey Tab */}
      {activeTab === "survey" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {surveyData.map((survey) => (
            <div
              key={survey.id}
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
                  width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                  background: "rgba(245,166,35,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <FiStar style={{ color: "#F5A623", fontSize: 16 }} />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#d0dde8", marginBottom: 8 }}>{survey.pasienNama}</div>

                  {/* Star Rating */}
                  <div style={{ display: "flex", gap: 3, marginBottom: 8 }}>
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={14}
                        style={{
                          color: i < survey.rating ? "#F5A623" : "rgba(255,255,255,0.1)",
                          fill: i < survey.rating ? "#F5A623" : "none",
                        }}
                      />
                    ))}
                    <span style={{ fontSize: 12, color: "#F5A623", marginLeft: 4, fontWeight: 600 }}>
                      {survey.rating}/5
                    </span>
                  </div>

                  {survey.komentar && (
                    <p style={{ fontSize: 13, color: "#a0b0c0", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                      "{survey.komentar}"
                    </p>
                  )}

                  <div style={{ marginTop: 8, fontSize: 11, color: "#4a5a6a" }}>
                    {formatTanggal(survey.tanggalKirim)}
                  </div>
                </div>

                {/* CTA */}
                {!survey.sudahRespon && (
                  <button
                    style={{
                      display: "flex", alignItems: "center", gap: 6,
                      background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
                      color: "#0f1117", fontSize: 12, fontWeight: 600,
                      padding: "8px 14px", borderRadius: 8,
                      cursor: "pointer", border: "none",
                      fontFamily: "'DM Sans', sans-serif",
                      flexShrink: 0, alignSelf: "flex-start",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <FiSend size={13} /> Balas
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}