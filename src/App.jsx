import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import UserPage from "./pages/UserPage";
import { Loading } from "./components";

/* ================= 🔒 FUNGSI PENJAGA AKSES (PROTECTED ROUTE) ================= */
function ProtectedRoute({ allowedRoles }) {
  // Mengambil session login dengan KEY "siti_session" sesuai form Login baru
  const session = localStorage.getItem("siti_session");
  const user = session ? JSON.parse(session) : null;

  // 1. Jika belum login, tendang ke /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Jika role tidak sesuai hak akses rute
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return user.role === "admin" 
      ? <Navigate to="/dashboard" replace /> 
      : <Navigate to="/portal" replace />;
  }

  // 3. Jika aman, loloskan ke halaman tujuan
  return <Outlet />;
}

/* ================= LAZY PAGES (ADMIN ONLY) ================= */
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Pasien = lazy(() => import("./pages/Pasien"));
const PasienDetail = lazy(() => import("./pages/PasienDetail"));
const Penjadwalan = lazy(() => import("./pages/Penjadwalan"));
const Riwayat = lazy(() => import("./pages/Riwayat"));
const Notifikasi = lazy(() => import("./pages/Notifikasi"));
const Pembayaran = lazy(() => import("./pages/Pembayaran"));
const Loyalitas = lazy(() => import("./pages/Loyalitas"));
const Keluhan = lazy(() => import("./pages/Keluhan"));

/* ================= LAZY PAGES (USER PORTAL) ================= */
const UserLayout = lazy(() => import("./pages/user/UserLayout"));
const UserDashboard = lazy(() => import("./pages/user/UserDashboard"));
const UserJadwal = lazy(() => import("./pages/user/UserJadwal"));
const UserRiwayat = lazy(() => import("./pages/user/UserRiwayat"));
const UserPembayaran = lazy(() => import("./pages/user/UserPembayaran"));
const UserNotifikasi = lazy(() => import("./pages/user/UserNotifikasi"));

/* ================= AUTH PAGES ================= */
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Forgot = lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        
        {/* ================= LANDING PAGE ================= */}
        <Route path="/" element={<LandingPage />} />

        {/* ================= AUTH ROUTES ================= */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* ================= 🔒 RUTE KHUSUS ADMIN ================= */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pasien" element={<Pasien />} />
            <Route path="/pasien/:id" element={<PasienDetail />} />
            <Route path="/penjadwalan" element={<Penjadwalan />} />
            <Route path="/riwayat" element={<Riwayat />} />
            <Route path="/notifikasi" element={<Notifikasi />} />
            <Route path="/pembayaran" element={<Pembayaran />} />
            <Route path="/loyalitas" element={<Loyalitas />} />
            <Route path="/keluhan" element={<Keluhan />} />
            <Route path="/users" element={<UserPage />} />
          </Route>
        </Route>

        {/* ================= 🔒 RUTE KHUSUS USER/PASIEN ================= */}
        <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
          <Route path="/portal" element={<UserLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="jadwal" element={<UserJadwal />} />
            <Route path="riwayat" element={<UserRiwayat />} />
            <Route path="pembayaran" element={<UserPembayaran />} />
            <Route path="notifikasi" element={<UserNotifikasi />} />
          </Route>
        </Route>

        {/* CATCH ALL: Jika URL tidak dikenali, paksa kembali ke login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
        
      </Routes>
    </Suspense>
  );
}

export default App;