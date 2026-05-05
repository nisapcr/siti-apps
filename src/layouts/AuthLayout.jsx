import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0f1117",
      fontFamily: "'DM Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle bg glow */}
      <div style={{
        position: "absolute", top: "-20%", left: "50%",
        transform: "translateX(-50%)",
        width: 600, height: 400,
        background: "radial-gradient(ellipse, rgba(31,212,160,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Card */}
      <div style={{
        background: "#161a26",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 20,
        padding: "40px 36px",
        width: "100%",
        maxWidth: 420,
        position: "relative",
        boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
      }}>
        {/* Top accent */}
        <div style={{
          position: "absolute", top: 0, left: "20%", right: "20%", height: 1,
          background: "linear-gradient(90deg, transparent, rgba(31,212,160,0.4), transparent)",
        }} />

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 48, height: 48,
            background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
            borderRadius: 14,
            marginBottom: 12,
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f1117" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"/>
              <path d="M8 12h8M12 8v8"/>
            </svg>
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 600, color: "#fff" }}>
            DentiCare
          </div>
          <div style={{ fontSize: 11, color: "#3d4f5e", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>
            Clinic CRM System
          </div>
        </div>

        <Outlet />

        <p style={{ textAlign: "center", fontSize: 11, color: "#2a3a4a", marginTop: 28 }}>
          © 2025 DentiCare Clinic CRM. All rights reserved.
        </p>
      </div>
    </div>
  );
}