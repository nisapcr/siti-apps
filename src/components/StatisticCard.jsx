// components/StatisticCard.jsx
import React from "react";

export default function StatisticCard({ title, value, change, icon: Icon, color = "#4FD1C5" }) {
  const isPositive = change?.startsWith("+");
  
  return (
    <div style={{
      background: "#FFFFFF",
      borderRadius: "20px",
      padding: "20px",
      boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <div>
        <p style={{ fontSize: "12px", color: "#A0AEC0", fontWeight: 600, marginBottom: "8px" }}>{title}</p>
        <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#2D3748", margin: 0 }}>{value}</h3>
        {change && (
          <p style={{ fontSize: "12px", color: isPositive ? "#38A169" : "#E53E3E", marginTop: "8px" }}>
            {change} dari bulan lalu
          </p>
        )}
      </div>
      <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "15px",
        background: `${color}15`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Icon size={24} color={color} />
      </div>
    </div>
  );
}