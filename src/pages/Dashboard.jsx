import React from "react";
import { FiUsers, FiActivity, FiCalendar, FiClock, FiPlusCircle } from "react-icons/fi";
import CardStats from "../components/Card.jsx";

export default function DentalDashboard() {
  // 1. Pastikan isi stats ada 4 objek untuk 4 card di atas
  const stats = [
    { title: "Pasien Hari Ini", value: "42", change: "+12%", icon: FiUsers },
    { title: "Dokter Aktif", value: "8", change: "+2", icon: FiActivity },
    { title: "Total Janji Temu", value: "156", change: "+5%", icon: FiCalendar },
    { title: "Waktu Tunggu", value: "14m", change: "-3m", icon: FiClock },
  ];

  return (
    <div style={{ padding: "24px", background: "#F8F9FA", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      
      {/* SECTION ATAS: 4 Card Statistik (Gunakan Grid 4 Kolom) */}
      <div style={gridStatsStyle}>
        {stats.map((item, idx) => (
          <CardStats key={idx} {...item} />
        ))}
      </div>

      {/* SECTION UTAMA: Tabel & Antrian */}
      <div style={mainContentGrid}>
        
        {/* PANEL KIRI: Tabel Perawatan */}
        <div style={cardStyle}>
          <div style={headerSection}>
            <div>
              <h3 style={cardTitle}>Progres Perawatan Pasien</h3>
              <p style={cardSubTitle}><span style={{ color: "#4FD1C5", fontWeight: "bold" }}>12 tindakan</span> selesai hari ini</p>
            </div>
            <button style={actionBtn}><FiPlusCircle /> Pasien Baru</button>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>PASIEN & TINDAKAN</th>
                  <th style={thStyle}>DOKTER GIGI</th>
                  <th style={thStyle}>BIAYA</th>
                  <th style={thStyle}>PROGRES</th>
                </tr>
              </thead>
              <tbody>
                {treatmentData.map((proj, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #E9ECEF" }}>
                    <td style={tdStyle}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontWeight: "bold", color: "#2D3748" }}>{proj.patient}</span>
                        <span style={{ fontSize: "12px", color: "#A0AEC0" }}>{proj.type}</span>
                      </div>
                    </td>
                    <td style={tdStyle}>{proj.doctor}</td>
                    <td style={tdStyle}>{proj.budget}</td>
                    <td style={tdStyle}>
                      <div style={{ width: "100px" }}>
                        <span style={progressLabel}>{proj.completion}%</span>
                        <div style={progressContainer}>
                          <div style={{ ...progressFill, width: `${proj.completion}%` }} />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PANEL KANAN: Antrian */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Antrian Terkini</h3>
          <p style={cardSubTitle}><span style={{ color: "#4FD1C5", fontWeight: "bold" }}>+30%</span> dari kemarin</p>
          
          <div style={{ marginTop: "24px" }}>
            {queueData.map((q, idx) => (
              <div key={idx} style={timelineItem}>
                <div style={timelineIconContainer}>
                   {/* Garis Vertikal */}
                  <div style={{ ...timelineLine, visibility: idx === queueData.length - 1 ? 'hidden' : 'visible' }} />
                  {/* Titik Timeline */}
                  <div style={{ ...timelineDot, borderColor: q.color }} />
                </div>
                <div style={{ paddingBottom: "24px" }}>
                  <p style={timelineText}>{q.task}</p>
                  <p style={timelineTime}>{q.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- DATA DUMMY ---
const treatmentData = [
  { patient: "Andi Herlambang", type: "Pemasangan Behel", doctor: "drg. Shinta", budget: "Rp 8.500.000", completion: 60 },
  { patient: "Siti Aminah", type: "Implan Gigi", doctor: "drg. Budi", budget: "Rp 12.000.000", completion: 10 },
  { patient: "Rudi Tabuti", type: "Scaling & Cleaning", doctor: "drg. Denny", budget: "Rp 500.000", completion: 100 },
  { patient: "Clara Shinta", type: "Veneer Gigi", doctor: "drg. Shinta", budget: "Rp 25.000.000", completion: 40 },
];

const queueData = [
  { task: "Pencabutan Gigi Geraham - Pasien #421", time: "22 DEC 7:20 PM", color: "#4FD1C5" },
  { task: "Konsultasi Dokter Baru - Pasien #422", time: "21 DEC 11:21 PM", color: "#E53E3E" },
  { task: "Pembayaran Laboratorium - Ortho", time: "21 DEC 9:28 PM", color: "#4299E1" },
  { task: "Pendaftaran Pasien Member Baru", time: "20 DEC 3:52 PM", color: "#ECC94B" },
];

// --- CSS IN JS (Purity UI Style) ---
const gridStatsStyle = { 
  display: "grid", 
  gridTemplateColumns: "repeat(4, 1fr)", // PAKSA 4 KOLOM
  gap: "24px", 
  marginBottom: "24px" 
};

// Gunakan media query (cek lebar layar) untuk responsivitas jika perlu
if (window.innerWidth < 1200) {
    gridStatsStyle.gridTemplateColumns = "repeat(2, 1fr)";
}
if (window.innerWidth < 600) {
    gridStatsStyle.gridTemplateColumns = "1fr";
}

const mainContentGrid = { 
  display: "grid", 
  gridTemplateColumns: "2fr 1fr", 
  gap: "24px" 
};

const cardStyle = { 
  background: "#fff", 
  borderRadius: "15px", 
  padding: "22px", 
  boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
  height: "fit-content"
};

const headerSection = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" };
const cardTitle = { margin: 0, fontSize: "18px", fontWeight: "bold", color: "#2D3748" };
const cardSubTitle = { margin: "4px 0 0 0", fontSize: "14px", color: "#A0AEC0" };
const actionBtn = { background: "#4FD1C5", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "8px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" };
const tableStyle = { width: "100%", borderCollapse: "collapse" };
const thStyle = { textAlign: "left", fontSize: "10px", color: "#A0AEC0", padding: "12px 0", borderBottom: "1px solid #E9ECEF" };
const tdStyle = { padding: "16px 0", fontSize: "14px", color: "#718096" };
const progressContainer = { width: "100%", height: "4px", background: "#E9ECEF", borderRadius: "10px", marginTop: "4px" };
const progressFill = { height: "100%", background: "#4FD1C5", borderRadius: "10px" };
const progressLabel = { fontSize: "12px", fontWeight: "bold", color: "#4FD1C5" };

const timelineItem = { display: "flex", gap: "20px", position: "relative" };
const timelineIconContainer = { display: "flex", flexDirection: "column", alignItems: "center", width: "20px" };
const timelineDot = { width: "12px", height: "12px", borderRadius: "50%", border: "2px solid", background: "#fff", zIndex: 2 };
const timelineLine = { width: "2px", height: "100%", background: "#E9ECEF", position: "absolute", top: "12px", zIndex: 1 };
const timelineText = { margin: 0, fontSize: "14px", fontWeight: "bold", color: "#2D3748" };
const timelineTime = { margin: "4px 0 0 0", fontSize: "12px", color: "#A0AEC0" };