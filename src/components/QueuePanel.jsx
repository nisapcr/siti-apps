// components/QueuePanel.jsx
import React from "react";
import { SectionTitle, SectionSubtitle, ActionButton } from "./index";
import { FiClock, FiUser, FiAlertCircle } from "react-icons/fi";

const priorityColors = {
  urgent: { bg: "#FFF5F5", color: "#E53E3E", label: "Urgent" },
  high: { bg: "#FFFAF0", color: "#DD6B20", label: "Tinggi" },
  normal: { bg: "#E6FFFA", color: "#38B2AC", label: "Normal" },
  low: { bg: "#F0FFF4", color: "#48BB78", label: "Rendah" },
};

export default function QueuePanel({ queueData, title = "Antrian", subtitle = "Pasien yang menunggu" }) {
  return (
    <div style={{
      background: "#FFFFFF",
      borderRadius: "20px",
      padding: "20px",
      boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
      height: "100%",
    }}>
      <SectionTitle>{title}</SectionTitle>
      <SectionSubtitle>{subtitle}</SectionSubtitle>
      
      <div style={{ marginTop: "20px" }}>
        {queueData.map((item) => {
          const priority = priorityColors[item.priority] || priorityColors.normal;
          
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 0",
                borderBottom: "1px solid #EDF2F7",
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: priority.color,
                    }}
                  />
                  <span style={{ fontWeight: 700, fontSize: "14px", color: "#2D3748" }}>
                    {item.task}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      padding: "2px 8px",
                      borderRadius: "12px",
                      background: priority.bg,
                      color: priority.color,
                      fontWeight: 600,
                    }}
                  >
                    {priority.label}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "#A0AEC0" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <FiUser size={12} /> {item.patient}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <FiClock size={12} /> {item.time}
                  </span>
                </div>
              </div>
              <ActionButton size="small">Proses</ActionButton>
            </div>
          );
        })}
        
        {queueData.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px", color: "#A0AEC0" }}>
            <FiAlertCircle size={32} />
            <p>Tidak ada antrian</p>
          </div>
        )}
      </div>
    </div>
  );
}