import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiAlertCircle, FiLoader } from "react-icons/fi";
import axios from "axios";

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
      setError(err.response?.data?.message || "Login gagal. Periksa username dan password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <h2 style={{ fontSize: 18, fontWeight: 500, color: "#d0dde8", marginBottom: 24, textAlign: "center", letterSpacing: "0.01em" }}>
        Selamat Datang Kembali
      </h2>

      {/* Error */}
      {error && (
        <div style={{
          background: "rgba(245,57,57,0.08)",
          border: "1px solid rgba(245,57,57,0.2)",
          color: "#f57272",
          padding: "10px 14px",
          borderRadius: 10,
          marginBottom: 16,
          display: "flex", alignItems: "center", gap: 8,
          fontSize: 13,
        }}>
          <FiAlertCircle size={14} /> {error}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div style={{
          background: "rgba(31,212,160,0.06)",
          border: "1px solid rgba(31,212,160,0.15)",
          color: "#1FD4A0",
          padding: "10px 14px",
          borderRadius: 10,
          marginBottom: 16,
          display: "flex", alignItems: "center", gap: 8,
          fontSize: 13,
        }}>
          <FiLoader size={14} style={{ animation: "spin 1s linear infinite" }} />
          Memproses...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>Username</label>
          <div style={{ position: "relative" }}>
            <FiMail style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#4a5a6a", fontSize: 14 }} />
            <input
              type="text"
              name="username"
              value={dataForm.username}
              onChange={handleChange}
              placeholder="emilys"
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "rgba(31,212,160,0.35)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
          </div>
        </div>

        {/* Password */}
        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>Password</label>
          <div style={{ position: "relative" }}>
            <FiLock style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#4a5a6a", fontSize: 14 }} />
            <input
              type="password"
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "rgba(31,212,160,0.35)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            background: loading ? "rgba(31,212,160,0.4)" : "linear-gradient(135deg, #1FD4A0, #0FA877)",
            color: "#0f1117",
            fontWeight: 700,
            fontSize: 14,
            padding: "11px",
            borderRadius: 10,
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.02em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => { if (!loading) e.currentTarget.style.opacity = "0.88"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          {loading ? "Loading..." : "Masuk"}
        </button>
      </form>

      {/* Links */}
      <div style={{ marginTop: 18, textAlign: "center", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
        <Link to="/forgot" style={{ color: "#1FD4A0", textDecoration: "none" }}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >Lupa password?</Link>
        <span style={{ color: "#2a3a4a" }}>|</span>
        <Link to="/register" style={{ color: "#1FD4A0", textDecoration: "none" }}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >Daftar baru</Link>
      </div>

      {/* Demo credentials */}
      <div style={{
        marginTop: 20,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 10,
        padding: "10px 14px",
        textAlign: "center",
        fontSize: 11,
        color: "#3d4f5e",
        lineHeight: 1.7,
      }}>
        <p style={{ color: "#4a5a6a", marginBottom: 2 }}>Demo Login</p>
        <p>Username: <span style={{ color: "#1FD4A0" }}>emilys</span> · Password: <span style={{ color: "#1FD4A0" }}>emilyspass</span></p>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}