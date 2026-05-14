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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        width: 250,
        minWidth: 250,
        background: "#FFFFFF",
        borderRight: "1px solid #E2E8F0",
        padding: "16px 0",

        // FIX: KUNCI SIDEBAR AGAR TIDAK GERAK
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,

        // FIX: HILANGKAN SCROLL DI SIDEBAR
        overflow: "hidden",
        boxSizing: "border-box",

        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* TOP SECTION */}
      <div>
        <div style={{ padding: "0 20px 20px", textAlign: "center" }}>
          <div style={{
            width: 44, height: 44, background: mintColor, borderRadius: 14,
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 10px", boxShadow: "0 6px 18px rgba(79,209,197,0.25)",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
              <path d="M8 12h8M12 8v8" />
            </svg>
          </div>
          <div style={{ fontSize: 17, fontWeight: 800, color: "#2D3748" }}>
            PERMATA <span style={{ color: mintColor }}>DENTAL</span>
          </div>
          <div style={{ fontSize: 9, color: "#A0AEC0", marginTop: 4, textTransform: "uppercase", letterSpacing: 1, fontWeight: 700 }}>
            Klinik Gigi Modern Sejahtera
          </div>
        </div>

        <div style={{ padding: "0 14px" }}>
          <div style={{ fontSize: 10, color: "#A0AEC0", padding: "0 12px", marginBottom: 10, textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.8px" }}>
            Menu Utama
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {navItems.map(({ to, icon: Icon, label }) => (
              <li key={to} style={{ marginBottom: 4 }}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  style={({ isActive }) => ({
                    display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", borderRadius: 12,
                    textDecoration: "none", fontSize: 12, fontWeight: isActive ? 700 : 600,
                    background: isActive ? "rgba(79,209,197,0.12)" : "transparent",
                    color: isActive ? "#2D3748" : "#718096",
                    transition: "0.2s ease",
                  })}
                >
                  {({ isActive }) => (
                    <>
                      <div style={{
                        width: 28, height: 28, borderRadius: 8,
                        background: isActive ? mintColor : "#F7FAFC",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: isActive ? "#FFFFFF" : mintColor, flexShrink: 0,
                      }}>
                        <Icon style={{ fontSize: 13 }} />
                      </div>
                      <span>{label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ padding: "14px", borderTop: "1px solid #EDF2F7" }}>
        <NavLink to="/login" style={{
          display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", borderRadius: 12,
          textDecoration: "none", color: "#718096", fontSize: 12, fontWeight: 700, transition: "0.2s",
        }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#FFF5F5";
            e.currentTarget.style.color = "#E53E3E";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#718096";
          }}
        >
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "#F7FAFC", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FaSignOutAlt style={{ fontSize: 13 }} />
          </div>
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
}