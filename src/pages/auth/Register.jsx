import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  padding: "10px 14px 10px 40px",
  color: "#a0b0c0",
  fontSize: 13,
  outline: "none",
  fontFamily: "'DM Sans', sans-serif",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const labelStyle = {
  display: "block",
  fontSize: 12,
  fontWeight: 500,
  color: "#6a7a8a",
  marginBottom: 6,
  letterSpacing: "0.02em",
};

const iconStyle = {
  position: "absolute", left: 13, top: "50%",
  transform: "translateY(-50%)",
  color: "#4a5a6a", fontSize: 14,
};

export default function Register() {
  const focusIn  = (e) => (e.target.style.borderColor = "rgba(31,212,160,0.35)");
  const focusOut = (e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)");

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <h2 style={{ fontSize: 18, fontWeight: 500, color: "#d0dde8", marginBottom: 24, textAlign: "center" }}>
        Daftar Akun Baru
      </h2>

      <form>
        {/* Nama */}
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Nama Lengkap</label>
          <div style={{ position: "relative" }}>
            <FiUser style={iconStyle} />
            <input type="text" placeholder="Masukkan nama lengkap" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
          </div>
        </div>

        {/* Email */}
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Email</label>
          <div style={{ position: "relative" }}>
            <FiMail style={iconStyle} />
            <input type="email" placeholder="you@example.com" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
          </div>
        </div>

        {/* Password */}
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Password</label>
          <div style={{ position: "relative" }}>
            <FiLock style={iconStyle} />
            <input type="password" placeholder="••••••••" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
          </div>
        </div>

        {/* Konfirmasi */}
        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>Konfirmasi Password</label>
          <div style={{ position: "relative" }}>
            <FiLock style={iconStyle} />
            <input type="password" placeholder="••••••••" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
          </div>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
            color: "#0f1117",
            fontWeight: 700,
            fontSize: 14,
            padding: "11px",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.02em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Daftar
        </button>
      </form>

      <p style={{ textAlign: "center", fontSize: 13, color: "#4a5a6a", marginTop: 20 }}>
        Sudah punya akun?{" "}
        <Link to="/login" style={{ color: "#1FD4A0", textDecoration: "none" }}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >Masuk</Link>
      </p>
    </div>
  );
}