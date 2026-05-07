import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

// Definisi Warna Mint Konsisten
const mintColor = "#4FD1C5";

const inputStyle = {
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
};

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#4A5568",
  marginBottom: 8,
};

const iconStyle = {
  position: "absolute", 
  left: 14, 
  top: "50%",
  transform: "translateY(-50%)",
  color: "#A0AEC0", 
  fontSize: 16,
};

export default function Register() {
  const focusIn = (e) => {
    e.target.style.borderColor = mintColor;
    e.target.style.background = "#fff";
    e.target.style.boxShadow = `0 0 0 3px rgba(79, 209, 197, 0.1)`;
  };

  const focusOut = (e) => {
    e.target.style.borderColor = "#E2E8F0";
    e.target.style.background = "#F8F9FA";
    e.target.style.boxShadow = "none";
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <div style={{ marginBottom: 32, textAlign: "center" }}>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: "#2D3748", margin: 0 }}>
          Daftar Akun Baru
        </h3>
        <p style={{ fontSize: 14, color: "#A0AEC0", marginTop: 8 }}>
          Bergabunglah untuk mulai mengelola klinik Anda
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Nama */}
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Nama Lengkap</label>
          <div style={{ position: "relative" }}>
            <FiUser style={iconStyle} />
            <input 
              type="text" 
              placeholder="Masukkan nama lengkap" 
              style={inputStyle} 
              onFocus={focusIn} 
              onBlur={focusOut} 
            />
          </div>
        </div>

        {/* Email */}
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Email</label>
          <div style={{ position: "relative" }}>
            <FiMail style={iconStyle} />
            <input 
              type="email" 
              placeholder="you@example.com" 
              style={inputStyle} 
              onFocus={focusIn} 
              onBlur={focusOut} 
            />
          </div>
        </div>

        {/* Password */}
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Password</label>
          <div style={{ position: "relative" }}>
            <FiLock style={iconStyle} />
            <input 
              type="password" 
              placeholder="••••••••" 
              style={inputStyle} 
              onFocus={focusIn} 
              onBlur={focusOut} 
            />
          </div>
        </div>

        {/* Konfirmasi */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>Konfirmasi Password</label>
          <div style={{ position: "relative" }}>
            <FiLock style={iconStyle} />
            <input 
              type="password" 
              placeholder="••••••••" 
              style={inputStyle} 
              onFocus={focusIn} 
              onBlur={focusOut} 
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            background: mintColor,
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: 15,
            padding: "13px",
            borderRadius: 14,
            border: "none",
            cursor: "pointer",
            fontFamily: "'Inter', sans-serif",
            transition: "all 0.2s ease",
            boxShadow: `0px 4px 12px rgba(79, 209, 197, 0.3)`,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Daftar Sekarang
        </button>
      </form>

      <p style={{ textAlign: "center", fontSize: 14, color: "#718096", marginTop: 24 }}>
        Sudah punya akun?{" "}
        <Link to="/login" style={{ color: mintColor, textDecoration: "none", fontWeight: 600 }}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >
          Masuk di sini
        </Link>
      </p>
    </div>
  );
}