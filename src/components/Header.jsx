import React, { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";

export default function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const mintColor = "#4FD1C5";

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 24px",
      background: "#FFFFFF",
      borderBottom: "1px solid #E9ECEF",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* Breadcrumb / Page Title */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p style={{ margin: 0, fontSize: 12, color: "#A0AEC0" }}>
          Pages / <span style={{ color: "#2D3748" }}>Dashboard</span>
        </p>
        <h4 style={{ margin: 0, fontSize: 14, fontWeight: "bold", color: "#2D3748" }}>
          Main Dashboard
        </h4>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        
        {/* Search Bar */}
        <div style={{ position: "relative", width: 240 }}>
          <FaSearch style={{
            position: "absolute", 
            left: 12, 
            top: "50%",
            transform: "translateY(-50%)",
            color: isFocused ? mintColor : "#A0AEC0", 
            fontSize: 13,
            transition: "color 0.2s"
          }} />
          <input
            type="text"
            placeholder="Type here..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
              width: "100%",
              background: "#FFFFFF",
              border: `1px solid ${isFocused ? mintColor : "#E2E8F0"}`,
              borderRadius: 12,
              padding: "8px 12px 8px 35px",
              color: "#2D3748",
              fontSize: 13,
              outline: "none",
              transition: "all 0.2s",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Action Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          
          {/* Notifications */}
          <div style={{ position: "relative", cursor: "pointer" }}>
            <FaBell style={{ fontSize: 16, color: "#718096" }} />
            <span style={{
              position: "absolute", top: -4, right: -4,
              background: "#E53E3E", // Warna merah untuk alert
              color: "white",
              fontSize: 9, fontWeight: 700,
              borderRadius: "50%",
              width: 14, height: 14,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "2px solid #FFFFFF"
            }}>3</span>
          </div>

          {/* User Profile */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
            <div style={{
              width: 32, height: 32, borderRadius: 10,
              background: mintColor,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 700, color: "#FFFFFF",
              flexShrink: 0,
            }}>DS</div>
            <div style={{ display: "none", md: "block" }}> {/* Desktop Only text */}
              <div style={{ fontSize: 13, fontWeight: 600, color: "#2D3748" }}>Dr. Sarah</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}