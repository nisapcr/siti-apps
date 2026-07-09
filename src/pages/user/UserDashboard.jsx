import React from "react";
import { FiAward, FiCalendar, FiActivity, FiDollarSign } from "react-icons/fi";

const mintColor = "#4FD1C5";

const cardStyle = {
  background: "#FFFFFF",
  border: "1px solid #E2E8F0",
  borderRadius: 16,
  padding: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
};

export default function UserDashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {/* Judul */}
      <div>
        <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#2D3748" }}>Ringkasan Kesehatan Anda</h2>
        <p style={{ margin: "4px 0 0 0", fontSize: 14, color: "#718096" }}>Pantau jadwal janji temu dan riwayat transaksi klinik Anda di sini.</p>
      </div>

      {/* Grid Statistik */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
        <div style={cardStyle}>
          <div>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: "#A0AEC0", textTransform: "uppercase" }}>Poin Loyalitas</p>
            <h3 style={{ margin: "6px 0 0 0", fontSize: 28, fontWeight: 700, color: "#2D3748" }}>450 <span style={{ fontSize: 14, color: mintColor, fontWeight: 500 }}>Pts</span></h3>
          </div>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(79, 209, 197, 0.1)", color: mintColor, display: "flex", alignItems: "center", justifyContent: "center" }}><FiAward size={22} /></div>
        </div>

        <div style={cardStyle}>
          <div>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: "#A0AEC0", textTransform: "uppercase" }}>Kunjungan Terdekat</p>
            <h3 style={{ margin: "6px 0 0 0", fontSize: 16, fontWeight: 700, color: "#2D3748" }}>15 Juli 2026</h3>
          </div>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(236, 201, 75, 0.1)", color: "#D69E2E", display: "flex", alignItems: "center", justifyContent: "center" }}><FiCalendar size={22} /></div>
        </div>

        <div style={cardStyle}>
          <div>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: "#A0AEC0", textTransform: "uppercase" }}>Total Perawatan</p>
            <h3 style={{ margin: "6px 0 0 0", fontSize: 28, fontWeight: 700, color: "#2D3748" }}>6 <span style={{ fontSize: 14, color: "#A0AEC0", fontWeight: 500 }}>Kali</span></h3>
          </div>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(79, 209, 197, 0.1)", color: mintColor, display: "flex", alignItems: "center", justifyContent: "center" }}><FiActivity size={22} /></div>
        </div>

        <div style={cardStyle}>
          <div>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: "#A0AEC0", textTransform: "uppercase" }}>Tagihan Aktif</p>
            <h3 style={{ margin: "6px 0 0 0", fontSize: 16, fontWeight: 700, color: "#E53E3E" }}>Rp 0 (Lunas)</h3>
          </div>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(229, 62, 62, 0.1)", color: "#E53E3E", display: "flex", alignItems: "center", justifyContent: "center" }}><FiDollarSign size={22} /></div>
        </div>
      </div>

      {/* Agenda & Info Medis Terakhir */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
        {/* Janji Temu */}
        <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: 24 }}>
          <h3 style={{ margin: "0 0 16px 0", fontSize: 16, fontWeight: 700, color: "#2D3748" }}>Kunjungan Mendatang</h3>
          <div style={{ borderLeft: `4px solid ${mintColor}`, background: "#F8F9FA", padding: 16, borderRadius: "0 12px 12px 0" }}>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#2D3748" }}>Pembersihan Karang Gigi (Scaling)</p>
            <p style={{ margin: "4px 0 0 0", fontSize: 12, color: "#718096" }}>Dokter: drg. Budi Darmawan</p>
            <p style={{ margin: "12px 0 0 0", fontSize: 13, fontWeight: 600, color: mintColor }}>Rabu, 15 Juli 2026 — 14:00 WIB</p>
          </div>
        </div>

        {/* Catatan Medis Terakhir */}
        <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: 24 }}>
          <h3 style={{ margin: "0 0 16px 0", fontSize: 16, fontWeight: 700, color: "#2D3748" }}>Diagnosa Terakhir</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #F1F5F9", paddingBottom: 8, fontSize: 13 }}>
              <span style={{ color: "#718096" }}>Tanggal Perawatan</span>
              <span style={{ fontWeight: 600, color: "#2D3748" }}>20 Juni 2026</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #F1F5F9", paddingBottom: 8, fontSize: 13 }}>
              <span style={{ color: "#718096" }}>Tindakan</span>
              <span style={{ fontWeight: 600, color: "#2D3748" }}>Penambalan Gigi Geraham</span>
            </div>
            <div style={{ fontSize: 13 }}>
              <span style={{ color: "#718096", display: "block", marginBottom: 4 }}>Catatan Dokter:</span>
              <span style={{ color: "#4A5568", italic: "true", lineHeight: "1.5" }}>"Hindari mengunyah makanan terlalu keras pada sisi kanan selama 3 hari kedepan."</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}