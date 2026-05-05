import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";

// Lazy load pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Pasien = lazy(() => import("./pages/Pasien"));
const Penjadwalan = lazy(() => import("./pages/Penjadwalan"));
const Riwayat = lazy(() => import("./pages/Riwayat"));
const Notifikasi = lazy(() => import("./pages/Notifikasi"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Forgot = lazy(() => import("./pages/auth/Forgot"));
const Pembayaran = lazy(() => import("./pages/Pembayaran"));
const Loyalitas = lazy(() => import("./pages/Loyalitas"));
const Keluhan = lazy(() => import("./pages/Keluhan"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Auth Routes - halaman login/register tanpa sidebar */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Main Routes - halaman utama dengan sidebar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pasien" element={<Pasien />} />
          <Route path="/penjadwalan" element={<Penjadwalan />} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/notifikasi" element={<Notifikasi />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/loyalitas" element={<Loyalitas />} />
          <Route path="/keluhan" element={<Keluhan />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;