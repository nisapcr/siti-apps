import {
  HeartPulse,
  Users,
  CreditCard,
  Bell,
} from "lucide-react";

export default function About() {
  const services = [
    {
      icon: <HeartPulse size={32} />,
      title: "Pelayanan Pasien",
      desc: "Kelola seluruh data pasien secara cepat, aman, dan terpusat.",
    },
    {
      icon: <Users size={32} />,
      title: "Loyalitas Pelanggan",
      desc: "Pantau member, poin, dan tingkat loyalitas pasien dengan mudah.",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Pembayaran",
      desc: "Catat transaksi pembayaran secara otomatis dan rapi.",
    },
    {
      icon: <Bell size={32} />,
      title: "Notifikasi",
      desc: "Kirim pengingat jadwal dan informasi penting kepada pasien.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            About SITI CRM
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-800">
            Sistem CRM Modern
            <br />
            untuk Klinik
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            SITI CRM merupakan aplikasi Customer Relationship Management
            yang membantu klinik dalam mengelola seluruh aktivitas
            pelayanan pasien mulai dari pendaftaran, penjadwalan,
            pembayaran, hingga loyalitas pelanggan dalam satu platform.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-5 text-blue-600">
                {item.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-800">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}