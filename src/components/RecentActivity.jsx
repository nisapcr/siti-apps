import React from 'react';

export default function RecentActivity() {
  const activities = [
    { id: 1, name: "Andi Wijaya",    action: "Scaling",            date: "22 Des 2024", time: "10:00" },
    { id: 2, name: "Siti Nurhaliza", action: "Cabut Gigi",          date: "22 Des 2024", time: "11:30" },
    { id: 3, name: "Budi Santoso",   action: "Konsultasi Behel",    date: "21 Des 2024", time: "14:15" },
  ];

  const initials = (name) => name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  
  // Menggunakan palet warna yang lebih lembut untuk Light Mode
  const mintColor = "#4FD1C5";
  const avatarColors = ["rgba(79, 209, 197, 0.15)", "rgba(74, 158, 245, 0.15)", "rgba(139, 92, 246, 0.15)"];
  const textColors   = [mintColor, "#4A9EF5", "#8B5CF6"];

  return (
    <div style={{
      background: "#FFFFFF",
      border: "1px solid #E9ECEF",
      borderRadius: 16,
      padding: "24px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.02)",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Header Panel */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <h2 style={{ 
          fontSize: 16, 
          fontWeight: 700, 
          color: "#2D3748", 
          margin: 0 
        }}>
          Aktivitas Terbaru
        </h2>
        <span style={{ 
          fontSize: 12, 
          color: mintColor, 
          fontWeight: "600", 
          cursor: "pointer" 
        }}>
          Lihat semua →
        </span>
      </div>

      {/* List Aktivitas */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {activities.map((activity, idx) => (
          <div key={activity.id} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 0",
            borderBottom: idx < activities.length - 1 ? "1px solid #F7FAFC" : "none",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {/* Avatar dengan Initials */}
              <div style={{
                width: 38,
                height: 38,
                borderRadius: 10, // Sedikit kotak membulat agar modern
                background: avatarColors[idx % avatarColors.length],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 700,
                color: textColors[idx % textColors.length],
                flexShrink: 0,
              }}>
                {initials(activity.name)}
              </div>

              {/* Detail Info */}
              <div>
                <p style={{ 
                  fontSize: 14, 
                  fontWeight: 600, 
                  color: "#2D3748", 
                  margin: 0 
                }}>
                  {activity.name}
                </p>
                <p style={{ 
                  fontSize: 12, 
                  color: "#A0AEC0", 
                  margin: "2px 0 0" 
                }}>
                  {activity.action}
                </p>
              </div>
            </div>

            {/* Waktu/Tanggal */}
            <div style={{ textAlign: "right" }}>
              <p style={{ 
                fontSize: 12, 
                fontWeight: "600", 
                color: "#718096", 
                margin: 0 
              }}>
                {activity.time}
              </p>
              <p style={{ 
                fontSize: 11, 
                color: "#CBD5E0", 
                margin: 0 
              }}>
                {activity.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}