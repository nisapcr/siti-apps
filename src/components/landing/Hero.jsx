import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Users, CalendarDays } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 lg:flex-row">

        {/* LEFT */}

        <div className="flex-1">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Customer Relationship Management
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-800">
            Kelola Klinik
            <span className="text-blue-600">
              {" "}Lebih Cepat
            </span>
            <br />
            dengan SITI CRM
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            SITI CRM membantu klinik mengelola data pasien,
            penjadwalan, pembayaran, loyalitas pelanggan,
            serta riwayat pelayanan dalam satu dashboard
            yang modern dan mudah digunakan.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              to="/login"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Login
              <ArrowRight size={18} />
            </Link>

            <a
              href="#features"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100"
            >
              Pelajari Fitur
            </a>

          </div>

          {/* Statistik */}

          <div className="mt-14 flex flex-wrap gap-10">

            <div className="flex items-center gap-3">

              <Users className="text-blue-600" />

              <div>
                <h2 className="text-xl font-bold">1000+</h2>
                <p className="text-sm text-slate-500">
                  Data Pasien
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3">

              <CalendarDays className="text-blue-600" />

              <div>
                <h2 className="text-xl font-bold">24/7</h2>
                <p className="text-sm text-slate-500">
                  Monitoring
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3">

              <ShieldCheck className="text-blue-600" />

              <div>
                <h2 className="text-xl font-bold">100%</h2>
                <p className="text-sm text-slate-500">
                  Data Aman
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="mt-16 flex-1 lg:mt-0">

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">

            <div className="mb-5 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>

            <div className="space-y-4">

              <div className="rounded-xl bg-slate-100 p-5">

                <h3 className="font-bold text-slate-700">
                  Dashboard CRM
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Monitoring pasien, transaksi,
                  loyalitas pelanggan dan aktivitas
                  klinik secara real-time.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-blue-100 p-5">
                  <h4 className="font-bold text-blue-700">
                    250
                  </h4>

                  <p className="text-sm text-blue-600">
                    Pasien Aktif
                  </p>
                </div>

                <div className="rounded-xl bg-green-100 p-5">
                  <h4 className="font-bold text-green-700">
                    98%
                  </h4>

                  <p className="text-sm text-green-600">
                    Kepuasan
                  </p>
                </div>

                <div className="rounded-xl bg-orange-100 p-5">
                  <h4 className="font-bold text-orange-700">
                    15
                  </h4>

                  <p className="text-sm text-orange-600">
                    Dokter
                  </p>
                </div>

                <div className="rounded-xl bg-purple-100 p-5">
                  <h4 className="font-bold text-purple-700">
                    580
                  </h4>

                  <p className="text-sm text-purple-600">
                    Transaksi
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}