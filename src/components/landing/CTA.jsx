import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-24">

      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-3xl bg-white p-12 shadow-xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="mb-5 flex items-center gap-2 text-blue-600">

                <ShieldCheck size={24} />

                <span className="font-semibold">
                  SITI CRM
                </span>

              </div>

              <h2 className="text-4xl font-bold leading-tight text-slate-800">

                Tingkatkan Pelayanan Klinik
                <br />

                dengan Sistem CRM Modern

              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                Kelola pasien, jadwal pelayanan,
                pembayaran, loyalitas pelanggan,
                hingga laporan dalam satu dashboard
                yang cepat, aman, dan mudah digunakan.

              </p>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col items-center rounded-3xl bg-slate-50 p-10">

              <h3 className="text-2xl font-bold text-slate-800">
                Siap Menggunakan SITI CRM?
              </h3>

              <p className="mt-4 text-center text-slate-600">
                Masuk ke sistem sekarang dan mulai
                mengelola operasional klinik dengan
                lebih efisien.
              </p>

              <Link
                to="/login"
                className="mt-8 flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Login Sekarang

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}