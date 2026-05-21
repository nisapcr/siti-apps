import { Link } from "react-router-dom";
import { FiMail, FiArrowLeft } from "react-icons/fi";
import { ActionButton, SectionTitle } from "../../components";

export default function Forgot() {
  const mintColor = "#4FD1C5";

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <div style={{ marginBottom: 32, textAlign: "center" }}>
        <SectionTitle>Lupa Password?</SectionTitle>
        <p style={{ fontSize: 14, color: "#A0AEC0", marginTop: 8, lineHeight: "1.5" }}>
          Jangan khawatir! Masukkan email Anda dan kami akan mengirimkan instruksi pemulihan.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: 24 }}>
          <label style={{
            display: "block",
            fontSize: 13,
            fontWeight: 600,
            color: "#4A5568",
            marginBottom: 8,
          }}>
            Alamat Email
          </label>
          <div style={{ position: "relative" }}>
            <FiMail style={{ 
              position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", 
              color: "#A0AEC0", fontSize: 16 
            }} />
            <input
              type="email"
              placeholder="nama@email.com"
              style={{
                width: "100%",
                background: "#F8F9FA",
                border: "1px solid #E2E8F0",
                borderRadius: 12,
                padding: "12px 14px 12px 42px",
                color: "#2D3748",
                fontSize: 14,
                outline: "none",
                fontFamily: "'Inter', sans-serif",
                boxSizing: "border-box",
                transition: "all 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = mintColor;
                e.target.style.background = "#fff";
                e.target.style.boxShadow = `0 0 0 3px rgba(79, 209, 197, 0.1)`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#E2E8F0";
                e.target.style.background = "#F8F9FA";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
        </div>

        <ActionButton type="submit">
          Kirim Link Pemulihan
        </ActionButton>
      </form>

      <div style={{ marginTop: 32, textAlign: "center" }}>
        <Link 
          to="/login" 
          style={{ 
            color: "#718096", 
            textDecoration: "none", 
            fontSize: 14, 
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = mintColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#718096")}
        >
          <FiArrowLeft /> Kembali ke Login
        </Link>
      </div>
    </div>
  );
}