import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const mintColor = "#4FD1C5";

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#F7FAFC", // Background light yang bersih
      fontFamily: "'Inter', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background Decorative Circles (Ciri khas Purity UI) */}
      <div style={{
        position: "absolute", 
        top: "-10%", 
        right: "-5%",
        width: 400, 
        height: 400,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(79,209,197,0.1) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute", 
        bottom: "-10%", 
        left: "-5%",
        width: 400, 
        height: 400,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(79,209,197,0.1) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Card Container */}
      <div style={{
        background: "#FFFFFF",
        border: "1px solid #E9ECEF",
        borderRadius: 24,
        padding: "48px 40px",
        width: "100%",
        maxWidth: 450,
        position: "relative",
        boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
        zIndex: 1,
      }}>
        
        {/* Logo Section */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 56, height: 56,
            background: mintColor,
            borderRadius: 16,
            marginBottom: 16,
            boxShadow: `0px 10px 20px rgba(79, 209, 197, 0.3)`,
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"/>
              <path d="M8 12h8M12 8v8"/>
            </svg>
          </div>
          
          <h2 style={{ 
            fontSize: 28, 
            fontWeight: 800, 
            color: "#2D3748", 
            margin: 0,
            letterSpacing: "-1px" 
          }}>
           PERMATA<span style={{ color: mintColor }}>DENTAL</span>
          </h2>
          <p style={{ 
            fontSize: 13, 
            color: "#A0AEC0", 
            fontWeight: 500, 
            marginTop: 8,
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}>
            Klinik Gigi Modern
          </p>
        </div>

        {/* Form Content (Login/Register) */}
        <div style={{ minHeight: 200 }}>
           <Outlet />
        </div>

        {/* Footer */}
        <p style={{ 
          textAlign: "center", 
          fontSize: 12, 
          color: "#CBD5E0", 
          marginTop: 40,
          fontWeight: 500 
        }}>
          © 2026 Permata Clinic. <br/> Built for professional healthcare.
        </p>
      </div>
    </div>
  );
}