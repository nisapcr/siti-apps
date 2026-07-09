import React from "react";
import { Outlet, useNavigate, useLocation, NavLink } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaHistory,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";
import { FiDollarSign, FiUser } from "react-icons/fi";

const mintColor = "#4FD1C5";

// Susunan menu minimalis khusus untuk Portal Pasien
const userNavItems = [
  { to: "/portal", icon: FaHome, label: "Dashboard", end: true },
  { to: "/portal/jadwal", icon: FaCalendarAlt, label: "Jadwal Kunjungan", end: false },
  { to: "/portal/riwayat", icon: FaHistory, label: "Riwayat Perawatan", end: false },
  { to: "/portal/pembayaran", icon: FiDollarSign, label: "Pembayaran & Kwitansi", end: false },
  { to: "/portal/notifikasi", icon: FaBell, label: "Notifikasi", end: false },
];

export default function UserLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil data user aktif dari session
  const session = localStorage.getItem("siti_session");
  const user = session ? JSON.parse(session) : { name: "Pasien", email: "pasien@gmail.com" };

  const handleLogout = () => {
    localStorage.removeItem("siti_session");
    navigate("/login", { replace: true });
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8F9FA", fontFamily: "'Inter', sans-serif" }}>
      
      {/* ================= 🗂️ SIDEBAR PASIEN (PERMATA DENTAL) ================= */}
      <aside
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
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* SEKSI ATAS: LOGO KLINIK DAN MENU */}
        <div>
          {/* Header Identitas Klinik */}
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

          {/* Area Navigasi List */}
          <div style={{ padding: "0 14px" }}>
            <div style={{ fontSize: 10, color: "#A0AEC0", padding: "0 12px", marginBottom: 10, textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.8px" }}>
              Portal Pasien
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {userNavItems.map(({ to, icon: Icon, label, end }) => (
                <li key={to} style={{ marginBottom: 4 }}>
                  <NavLink
                    to={to}
                    end={end}
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

        {/* SEKSI BAWAH: INFORMASI PROFIL & LOGOUT */}
        <div style={{ padding: "0 14px" }}>
          {/* Box Ringkas Info Pasien Terintegrasi */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 10, 
            padding: "10px 12px", 
            background: "#F8F9FA", 
            borderRadius: 12, 
            marginBottom: 8,
            border: "1px solid #EDF2F7"
          }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(79, 209, 197, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: mintColor }}>
              <FiUser size={14} />
            </div>
            <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: "#2D3748" }}>{user.name || "Pasien"}</p>
              <p style={{ margin: 0, fontSize: 10, color: "#A0AEC0" }}>Akses Pasien</p>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            style={{
              display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", borderRadius: 12,
              textDecoration: "none", color: "#718096", fontSize: 12, fontWeight: 700, transition: "0.2s",
              background: "transparent", border: "none", width: "100%", textAlign: "left", cursor: "pointer"
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
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "#F7FAFC", display: "flex", alignItems: "center", justifyContent: "center", color: "inherit" }}>
              <FaSignOutAlt style={{ fontSize: 13 }} />
            </div>
            <span>Keluar Portal</span>
          </button>
        </div>
      </aside>

      {/* ================= 🖥️ WRAPPER KONTEN UTAMA ================= */}
      <div style={{ flex: 1, marginLeft: 250, display: "flex", flexDirection: "column" }}>
        
        {/* Topbar Minimalis */}
        <header style={{ 
          height: 65, 
          background: "#FFFFFF", 
          borderBottom: "1px solid #E2E8F0", 
          padding: "0 32px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          position: "sticky", 
          top: 0, 
          zIndex: 90 
        }}>
          <h1 style={{ fontSize: 14, fontWeight: 700, color: "#4A5568", margin: 0 }}>
            Selamat Datang Kembali, <span style={{ color: mintColor }}>{user.name || "Pasien"}</span>! 👋
          </h1>
          <span style={{ fontSize: 12, color: "#A0AEC0", fontWeight: 600 }}>{user.email}</span>
        </header>

        {/* Halaman Konten Dinamis */}
        <main style={{ padding: 32, maxWidth: 1200, width: "100%", boxSizing: "border-box" }}>
          <Outlet />
        </main>
      </div>

    </div>
  );
}