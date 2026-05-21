// components/TimelineItem.jsx
import React from "react";
import { FiCheckCircle, FiClock, FiCircle } from "react-icons/fi";

const statusConfig = {
  completed: { icon: FiCheckCircle, color: "#38B2AC", bg: "#E6FFFA" },
  ongoing: { icon: FiClock, color: "#DD6B20", bg: "#FFFAF0" },
  pending: { icon: FiCircle, color: "#A0AEC0", bg: "#F7FAFC" },
};

export default function TimelineItem({ item, isLast }) {
  const status = statusConfig[item.status] || statusConfig.pending;
  const Icon = status.icon;

  return (
    <div style={{ display: "flex", gap: "16px", marginBottom: isLast ? 0 : "20px", position: "relative" }}>
      {/* Icon lingkaran */}
      <div style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: status.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        zIndex: 2,
      }}>
        <Icon size={16} color={status.color} />
      </div>
      
      {/* Content */}
      <div style={{ flex: 1, paddingBottom: isLast ? 0 : "8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontWeight: 700, color: "#2D3748", fontSize: "14px" }}>{item.title}</span>
          <span style={{ fontSize: "12px", color: "#A0AEC0" }}>{item.time}</span>
        </div>
        <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#718096" }}>{item.description}</p>
        <span style={{ fontSize: "11px", color: "#A0AEC0", marginTop: "4px", display: "block" }}>{item.date}</span>
      </div>
    </div>
  );
}