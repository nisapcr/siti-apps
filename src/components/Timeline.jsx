// components/Timeline.jsx
import React from "react";
import { SectionTitle, SectionSubtitle, TimelineItem } from "./index";

export default function Timeline({ items, title = "Timeline", subtitle = "Aktivitas hari ini" }) {
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
      
      <div style={{ marginTop: "20px", position: "relative" }}>
        {/* Garis vertikal timeline */}
        <div style={{
          position: "absolute",
          left: "16px",
          top: "20px",
          bottom: "20px",
          width: "2px",
          background: "#E2E8F0",
        }} />
        
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === items.length - 1}
          />
        ))}
        
        {items.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px", color: "#A0AEC0" }}>
            <p>Tidak ada jadwal hari ini</p>
          </div>
        )}
      </div>
    </div>
  );
}