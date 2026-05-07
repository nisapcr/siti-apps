import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiAlertCircle, FiLoader } from "react-icons/fi";
import axios from "axios";

// Definisi Warna Mint
const mintColor = "#4FD1C5";

const inputStyle = {
  width: "100%",
  background: "#F8F9FA", // Light background untuk input
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

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({ username: "", password: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: dataForm.username,
        password: dataForm.password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login gagal. Periksa kembali akun Anda.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <div style={{ marginBottom: 32, textAlign: "center" }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: "#2D3748", margin: 0 }}>
          Selamat Datang Kembali
        </h3>
        <p style={{ fontSize: 14, color: "#A0AEC0", marginTop: 4 }}>
          Masuk untuk mengelola data klinik Anda
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <div style={{
          background: "#FFF5F5",
          border: "1px solid #FED7D7",
          color: "#E53E3E",
          padding: "12px 16px",
          borderRadius: 12,
          marginBottom: 20,
          display: "flex", alignItems: "center", gap: 10,
          fontSize: 13,
          fontWeight: 500
        }}>
          <FiAlertCircle size={16} /> {error}
        </div>
      )}

      {/* Loading Indicator */}
      {loading && (
        <div style={{
          background: "rgba(79, 209, 197, 0.1)",
          border: `1px solid rgba(79, 209, 197, 0.2)`,
          color: mintColor,
          padding: "12px 16px",
          borderRadius: 12,
          marginBottom: 20,
          display: "flex", alignItems: "center", gap: 10,
          fontSize: 13,
          fontWeight: 600
        }}>
          <FiLoader size={16} style={{ animation: "spin 1s linear infinite" }} />
          Sedang memverifikasi...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Username</label>
          <div style={{ position: "relative" }}>
            <FiMail style={{ 
                position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", 
                color: "#A0AEC0", fontSize: 16 
            }} />
            <input
              type="text"
              name="username"
              value={dataForm.username}
              onChange={handleChange}
              placeholder="Masukkan username"
              required
              style={inputStyle}
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

        {/* Password */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>Password</label>
          <div style={{ position: "relative" }}>
            <FiLock style={{ 
                position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", 
                color: "#A0AEC0", fontSize: 16 
            }} />
            <input
              type="password"
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              style={inputStyle}
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            background: loading ? "#CBD5E0" : mintColor,
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: 15,
            padding: "13px",
            borderRadius: 14,
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            fontFamily: "'Inter', sans-serif",
            transition: "all 0.2s ease",
            boxShadow: loading ? "none" : `0px 4px 12px rgba(79, 209, 197, 0.3)`,
          }}
          onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
        >
          {loading ? "Menghubungkan..." : "Masuk ke Dashboard"}
        </button>
      </form>

      {/* Footer Links */}
      <div style={{ marginTop: 24, textAlign: "center", fontSize: 14, color: "#718096" }}>
        <Link to="/forgot" style={{ color: mintColor, textDecoration: "none", fontWeight: 600 }}>Lupa password?</Link>
        <span style={{ margin: "0 10px", color: "#E2E8F0" }}>|</span>
        <Link to="/register" style={{ color: mintColor, textDecoration: "none", fontWeight: 600 }}>Daftar akun</Link>
      </div>

      {/* Demo Box */}
      <div style={{
        marginTop: 32,
        background: "#F7FAFC",
        borderRadius: 12,
        padding: "12px",
        textAlign: "center",
        fontSize: 12,
        color: "#718096",
        border: "1px dashed #E2E8F0"
      }}>
        <p style={{ fontWeight: 700, color: "#A0AEC0", marginBottom: 4, textTransform: "uppercase" }}>Akses Demo</p>
        <p>User: <span style={{ color: mintColor, fontWeight: 700 }}>emilys</span> · Pass: <span style={{ color: mintColor, fontWeight: 700 }}>emilyspass</span></p>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}