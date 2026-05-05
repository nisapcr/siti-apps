import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 24px",
      background: "#12161f",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* Search Bar */}
      <div style={{ position: "relative", width: "100%", maxWidth: 360 }}>
        <FaSearch style={{
          position: "absolute", right: 13, top: "50%",
          transform: "translateY(-50%)",
          color: "#4a5a6a", fontSize: 13,
        }} />
        <input
          type="text"
          placeholder="Cari pasien..."
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 10,
            padding: "9px 38px 9px 14px",
            color: "#a0b0c0",
            fontSize: 13,
            outline: "none",
            fontFamily: "'DM Sans', sans-serif",
            boxSizing: "border-box",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(31,212,160,0.35)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
        />
      </div>

      {/* Right Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>

        {/* Bell */}
        <div style={{ position: "relative", cursor: "pointer" }}
          onMouseEnter={(e) => e.currentTarget.querySelector("svg").style.color = "#1FD4A0"}
          onMouseLeave={(e) => e.currentTarget.querySelector("svg").style.color = "#5a6a7a"}
        >
          <FaBell style={{ fontSize: 17, color: "#5a6a7a", transition: "color 0.2s" }} />
          <span style={{
            position: "absolute", top: -5, right: -7,
            background: "#1FD4A0",
            color: "#0f1117",
            fontSize: 9, fontWeight: 700,
            borderRadius: "50%",
            width: 16, height: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>3</span>
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.07)" }} />

        {/* User */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: "50%",
            background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 700, color: "#0f1117",
            cursor: "pointer", flexShrink: 0,
          }}>DS</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#d0dde8" }}>Dr. Sarah</div>
            <div style={{ fontSize: 11, color: "#4a5a6a" }}>Admin</div>
          </div>
        </div>

      </div>
    </div>
  );
}