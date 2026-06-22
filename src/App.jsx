import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import UserPage from "./pages/UserPage";
import { Loading } from "./components";

/* ================= LAZY PAGES ================= */

const Dashboard = lazy(() =>
  import("./pages/Dashboard")
);

const Pasien = lazy(() =>
  import("./pages/Pasien")
);

const PasienDetail = lazy(() =>
  import("./pages/PasienDetail")
);

const Penjadwalan = lazy(() =>
  import("./pages/Penjadwalan")
);

const Riwayat = lazy(() =>
  import("./pages/Riwayat")
);

const Notifikasi = lazy(() =>
  import("./pages/Notifikasi")
);

const Pembayaran = lazy(() =>
  import("./pages/Pembayaran")
);

const Loyalitas = lazy(() =>
  import("./pages/Loyalitas")
);

const Keluhan = lazy(() =>
  import("./pages/Keluhan")
);

/* ================= AUTH ================= */

const Login = lazy(() =>
  import("./pages/auth/Login")
);

const Register = lazy(() =>
  import("./pages/auth/Register")
);

const Forgot = lazy(() =>
  import("./pages/auth/Forgot")
);

function App() {
  return (
    <Suspense fallback={<Loading />}>

      <Routes>

        {/* ================= AUTH ROUTES ================= */}
        <Route element={<AuthLayout />}>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forgot"
            element={<Forgot />}
          />

        </Route>

        {/* ================= MAIN ROUTES ================= */}
        <Route element={<MainLayout />}>

          {/* DASHBOARD */}
          <Route
            path="/"
            element={<Dashboard />}
          />

          {/* PASIEN */}
          <Route
            path="/pasien"
            element={<Pasien />}
          />

          {/* DYNAMIC ROUTE DETAIL PASIEN */}
          <Route
            path="/pasien/:id"
            element={<PasienDetail />}
          />

          {/* MENU LAIN */}
          <Route
            path="/penjadwalan"
            element={<Penjadwalan />}
          />

          <Route
            path="/riwayat"
            element={<Riwayat />}
          />

          <Route
            path="/notifikasi"
            element={<Notifikasi />}
          />

          <Route
            path="/pembayaran"
            element={<Pembayaran />}
          />

          <Route
            path="/loyalitas"
            element={<Loyalitas />}
          />

          <Route
            path="/keluhan"
            element={<Keluhan />}
          />
          <Route path="/users" element={<UserPage />} />
        </Route>

      </Routes>

    </Suspense>
  );
}

export default App;