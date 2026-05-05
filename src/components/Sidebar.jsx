import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserInjured,
  FaCalendarAlt,
  FaHistory,
  FaBell,
  FaSignOutAlt,
  FaStar,
  FaRegCommentDots,
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
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      width: 220,
      minWidth: 220,
      background: "#161a26",
      borderRight: "1px solid rgba(255,255,255,0.06)",
      padding: "24px 0",
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* Brand */}
      <div style={{ padding: "0 20px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{
          width: 36, height: 36,
          background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
          borderRadius: 10,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 10,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"/>
            <path d="M8 12h8M12 8v8"/>
          </svg>
        </div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: "#fff", letterSpacing: "0.02em" }}>
          Permata
        </div>
        <div style={{ fontSize: 11, color: "#3d4f5e", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>
          Klinik Gigi Permata
        </div>
      </div>

      {/* Navigation */}
      <div style={{ padding: "20px 12px 8px", flex: 1 }}>
        <div style={{ fontSize: 10, color: "#3d4f5e", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0 8px", marginBottom: 10 }}>
          Menu Utama
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map(({ to, icon: Icon, label }) => (
            <li key={to} style={{ marginBottom: 2 }}>
              <NavLink
                to={to}
                end={to === "/"}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "9px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "#1FD4A0" : "#7a8a9a",
                  background: isActive ? "rgba(31,212,160,0.1)" : "transparent",
                  border: isActive ? "1px solid rgba(31,212,160,0.15)" : "1px solid transparent",
                  textDecoration: "none",
                  transition: "all 0.2s",
                })}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains("active")) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.color = "#c0d0e0";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains("active")) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#7a8a9a";
                  }
                }}
              >
                <Icon style={{ fontSize: 14, flexShrink: 0 }} />
                <span>{label}</span>
                {/* Active dot */}
                {to === "/" && (
                  <span style={{ marginLeft: "auto", display: "none" }} className="active-dot" />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div style={{ padding: "16px 12px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        {/* Doctor card */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "10px 12px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: 10,
          marginBottom: 12,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 600, color: "#0f1117", flexShrink: 0,
          }}>DS</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: "#c0d0e0" }}>Dr. Sarah</div>
            <div style={{ fontSize: 10, color: "#4a5a6a" }}>sarah@dentalclinic.com</div>
          </div>
        </div>

        {/* Logout */}
        <NavLink
          to="/login"
          style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "8px 12px", borderRadius: 8,
            fontSize: 12, color: "#4a5a6a",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#f57272";
            e.currentTarget.style.background = "rgba(245,57,57,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#4a5a6a";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <FaSignOutAlt style={{ fontSize: 13 }} />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
}