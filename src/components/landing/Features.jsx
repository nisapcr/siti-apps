import {
  LayoutDashboard,
  Users,
  CalendarDays,
  FileText,
  CreditCard,
  Award,
  MessageCircleWarning,
  BellRing,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <LayoutDashboard size={40} />,
      title: "Dashboard",
      description:
        "Monitoring aktivitas klinik secara real-time melalui dashboard interaktif.",
    },
    {
      icon: <Users size={40} />,
      title: "Data Pasien",
      description:
        "Mengelola data pasien secara lengkap, aman, dan mudah diakses.",
    },
    {
      icon: <CalendarDays size={40} />,
      title: "Penjadwalan",
      description:
        "Mengatur jadwal konsultasi pasien dengan dokter secara efisien.",
    },
    {
      icon: <FileText size={40} />,
      title: "Riwayat Perawatan",
      description:
        "Menyimpan seluruh riwayat pemeriksaan dan tindakan pasien.",
    },
    {
      icon: <CreditCard size={40} />,
      title: "Pembayaran",
      description:
        "Mencatat transaksi pembayaran pasien dengan cepat dan akurat.",
    },
    {
      icon: <Award size={40} />,
      title: "Loyalitas",
      description:
        "Mengelola poin member dan reward untuk meningkatkan loyalitas pasien.",
    },
    {
      icon: <MessageCircleWarning size={40} />,
      title: "Keluhan",
      description:
        "Mencatat dan menindaklanjuti keluhan pasien dengan lebih terstruktur.",
    },
    {
      icon: <BellRing size={40} />,
      title: "Notifikasi",
      description:
        "Mengirim pengingat jadwal, promo, dan informasi penting kepada pasien.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Fitur Utama
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-800">
            Semua Kebutuhan Klinik
            <br />
            Dalam Satu Platform
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            SITI CRM menyediakan berbagai fitur yang membantu
            pengelolaan operasional klinik menjadi lebih cepat,
            efisien, dan terintegrasi.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4 text-blue-600">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-800">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}