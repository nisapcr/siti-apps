import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserInjured,
  FaCalendarAlt,
  FaHistory,
  FaBell,
  FaSignOutAlt,
  FaStar,
} from "react-icons/fa";
import { FiDollarSign, FiMessageSquare } from "react-icons/fi";

const navItems = [
  { to: "/", icon: FaHome, label: "Dashboard" },
  { to: "/pasien", icon: FaUserInjured, label: "Data Pasien" },
  { to: "/penjadwalan", icon: FaCalendarAlt, label: "Penjadwalan" },
  { to: "/pembayaran", icon: FiDollarSign, label: "Pembayaran" },
  { to: "/riwayat", icon: FaHistory, label: "Riwayat Perawatan" },
  { to: "/loyalitas", icon: FaStar, label: "Loyalitas" },
  { to: "/notifikasi", icon: FaBell, label: "Notifikasi" },
  { to: "/keluhan", icon: FiMessageSquare, label: "Keluhan & Feedback" },
];

export default function Sidebar() {
  const mintColor = "#4FD1C5";

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      width: 260, // Sedikit diperlebar agar teks tidak sesak
      minWidth: 260,
      background: "#FFFFFF",
      borderRight: "1px solid #E9ECEF",
      padding: "32px 0",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* Brand Section */}
      <div style={{ padding: "0 24px 32px", textAlign: "center" }}>
        <div style={{
          width: 45, height: 45,
          background: mintColor,
          borderRadius: 12,
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 12px",
          boxShadow: `0px 4px 10px rgba(79, 209, 197, 0.3)`,
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"/>
            <path d="M8 12h8M12 8v8"/>
          </svg>
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#2D3748", letterSpacing: "-0.5px" }}>
          PERMATA <span style={{ color: mintColor }}>DENTAL</span>
        </div>
        <div style={{ fontSize: 10, color: "#A0AEC0", letterSpacing: "1px", textTransform: "uppercase", marginTop: 4, fontWeight: 600 }}>
          Klinik Gigi Modern
        </div>
      </div>

      {/* Navigation */}
      <div style={{ padding: "0 16px", flex: 1 }}>
        <div style={{ 
          fontSize: 11, 
          color: "#A0AEC0", 
          letterSpacing: "0.8px", 
          textTransform: "uppercase", 
          padding: "0 16px", 
          marginBottom: 12,
          fontWeight: 700
        }}>
          Menu Utama
        </div>
        
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map(({ to, icon: Icon, label }) => (
            <li key={to} style={{ marginBottom: 4 }}>
              <NavLink
                to={to}
                end={to === "/"}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 16px",
                  borderRadius: "15px",
                  fontSize: "14px",
                  fontWeight: isActive ? "700" : "600",
                  color: isActive ? "#2D3748" : "#A0AEC0",
                  background: isActive ? "#FFFFFF" : "transparent",
                  boxShadow: isActive ? "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)" : "none",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                })}
              >
                {({ isActive }) => (
                  <>
                    <div style={{
                      width: 30, height: 30,
                      borderRadius: 8,
                      background: isActive ? mintColor : "#FFFFFF",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: isActive ? "#FFFFFF" : mintColor,
                      boxShadow: isActive ? "none" : "0px 2px 4px rgba(0,0,0,0.05)",
                      transition: "all 0.2s ease"
                    }}>
                      <Icon style={{ fontSize: 14 }} />
                    </div>
                    <span>{label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer / User Profile Area */}
      <div style={{ padding: "20px 16px", borderTop: "1px solid #F7FAFC" }}>
        <NavLink
          to="/login"
          style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "12px 16px", borderRadius: 12,
            fontSize: 14, fontWeight: 700, color: "#A0AEC0",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#E53E3E";
            e.currentTarget.style.background = "#FFF5F5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#A0AEC0";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <div style={{
            width: 30, height: 30, borderRadius: 8, background: "#F7FAFC",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <FaSignOutAlt style={{ fontSize: 14 }} />
          </div>
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
}