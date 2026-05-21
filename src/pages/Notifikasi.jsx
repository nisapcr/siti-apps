import { FiBell, FiSend, FiClock, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { PageHeader, StatsGrid, SectionTitle, ActionButton } from "../components";
import notifikasiData from "../data/notifikasi.json";

export default function Notifikasi() {
  const formatTanggal = (tanggal) => {
    return new Date(tanggal).toLocaleDateString("id-ID", {
      day: "2-digit", month: "short", year: "numeric",
    });
  };

  const stats = [
    { label: "Total Notif", value: notifikasiData.length, icon: FiBell },
    { label: "Terjadwal", value: notifikasiData.filter(n => n.status === "Scheduled").length, icon: FiCalendar },
    { label: "Terkirim", value: notifikasiData.filter(n => n.sudahDikirim).length, icon: FiCheckCircle },
  ];

  return (
    <div style={{ padding: "24px", background: "#F8F9FA", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <PageHeader
        title="Notifikasi Perawatan"
        breadcrumb="Notifikasi"
      />
      <p style={{ color: "#A0AEC0", fontSize: "14px", margin: "-18px 0 24px 0" }}>Pengingat otomatis jadwal kontrol pasien</p>

      <StatsGrid
        stats={stats.map((s) => ({
          title: s.label,
          value: s.value,
          icon: s.icon,
        }))}
      />

      <SectionTitle>Antrian Pengiriman Notifikasi</SectionTitle>
      <div style={cardStyleFull}>
        <h3 style={cardTitleStyle}>Antrian Pengiriman Notifikasi</h3>
        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {notifikasiData.map((notif) => (
            <div key={notif.id} style={notifCardStyle}>
              <div style={notifIconStyle}><FiBell color="#4FD1C5" /></div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "700", color: "#2D3748" }}>{notif.pasienNama}</span>
                  <span style={{ fontSize: "12px", color: "#A0AEC0" }}>{formatTanggal(notif.tanggalNotifikasi)}</span>
                </div>
                <p style={{ margin: "4px 0", fontSize: "13px", color: "#718096" }}>{notif.pesan}</p>
                <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                  <span style={smallInfoStyle}><FiClock size={12}/> {notif.tipe}</span>
                  <span style={smallInfoStyle}>Via: {notif.reminderMethod}</span>
                </div>
              </div>
              <ActionButton>
                <FiSend /> Kirim
              </ActionButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Shared Styles (Purity UI Theme) ---
const cardStyle = {
  background: "#FFFFFF", borderRadius: "15px", padding: "16px 20px",
  display: "flex", alignItems: "center", justifyContent: "space-between",
  boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
};

const cardStyleFull = {
  background: "#FFFFFF", borderRadius: "15px", padding: "24px",
  boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
};

const iconBoxStyle = {
  width: "45px", height: "45px", background: "#4FD1C5",
  borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center"
};

const statLabelStyle = { fontSize: "12px", color: "#A0AEC0", fontWeight: "700", margin: 0, textTransform: "uppercase" };
const statValueStyle = { fontSize: "18px", fontWeight: "700", color: "#2D3748", margin: "4px 0 0 0" };
const cardTitleStyle = { margin: 0, color: "#2D3748", fontSize: "16px", fontWeight: "700" };

const tableRowStyle = {
  display: "flex", alignItems: "center", gap: "15px", padding: "12px 0",
  borderBottom: "1px solid #F0F0F0"
};

const rankBadgeStyle = (idx) => ({
  width: "30px", height: "30px", borderRadius: "8px",
  background: idx < 3 ? "#4FD1C515" : "#F7FAFC",
  color: idx < 3 ? "#4FD1C5" : "#A0AEC0",
  display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "13px"
});

const badgeStyle = (cfg) => ({
  fontSize: "10px", padding: "2px 8px", borderRadius: "6px",
  background: cfg.bg, color: cfg.accent, fontWeight: "bold", textTransform: "uppercase"
});

const rewardItemStyle = {
  padding: "15px", borderRadius: "12px", border: "1px solid #F0F0F0", textAlign: "center"
};

const notifCardStyle = {
  display: "flex", gap: "15px", padding: "15px", borderRadius: "12px", border: "1px solid #F0F0F0"
};

const notifIconStyle = {
  width: "35px", height: "35px", borderRadius: "10px", background: "#E6FFFA",
  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
};

const smallInfoStyle = { display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "#A0AEC0", fontWeight: "600" };

const btnSmallStyle = {
  background: "#4FD1C5", color: "#fff", border: "none", padding: "6px 12px",
  borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "11px", display: "flex", alignItems: "center", gap: "4px"
};

const btnActionStyle = {
  ...btnSmallStyle, padding: "8px 16px", fontSize: "13px", alignSelf: "center"
};