import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#0f1117",   /* ← ini yang penting */
      color: "#e8e8e8",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Header />
        <main style={{
          flex: 1,
          overflowY: "auto",
          padding: "24px 28px",
          background: "#0f1117",   /* ← pastikan main juga dark */
        }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}