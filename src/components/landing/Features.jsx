import {
  FaChartLine,
  FaUsers,
  FaCalendarAlt,
  FaHistory,
  FaMoneyBillWave,
  FaGift,
  FaBell,
  FaComments,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine />,
    title: "Dashboard Interaktif",
    desc: "Monitoring aktivitas klinik melalui statistik pasien, dokter, jadwal, dan laporan secara real-time.",
  },
  {
    icon: <FaUsers />,
    title: "Manajemen Pasien",
    desc: "Kelola data pasien dengan mudah mulai dari registrasi hingga riwayat kunjungan.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Penjadwalan",
    desc: "Atur jadwal konsultasi dan kontrol pasien secara lebih terstruktur dan efisien.",
  },
  {
    icon: <FaHistory />,
    title: "Riwayat Perawatan",
    desc: "Seluruh tindakan medis tersimpan sehingga memudahkan dokter melihat histori pasien.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Pembayaran",
    desc: "Mencatat transaksi pembayaran pasien dengan lebih cepat dan akurat.",
  },
  {
    icon: <FaGift />,
    title: "Loyalitas Member",
    desc: "Program poin dan membership untuk meningkatkan loyalitas pasien terhadap klinik.",
  },
  {
    icon: <FaBell />,
    title: "Notifikasi",
    desc: "Reminder jadwal kontrol, pembayaran, hingga promo klinik dikirim secara otomatis.",
  },
  {
    icon: <FaComments />,
    title: "Keluhan & Feedback",
    desc: "Mencatat keluhan pasien sebagai bahan evaluasi kualitas pelayanan klinik.",
  },
];

export default function Features() {
  return (
    <section
      id="fitur"
      style={{
        background: "#F8FAFC",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <span
            style={{
              color: "#38B2AC",
              fontWeight: 700,
            }}
          >
            FITUR CRM
          </span>

          <h2
            style={{
              fontSize: "42px",
              color: "#2D3748",
              marginTop: "18px",
            }}
          >
            Semua Yang Dibutuhkan Klinik
            <br />
            Dalam Satu Dashboard
          </h2>

          <p
            style={{
              color: "#718096",
              maxWidth: "760px",
              margin: "25px auto 0",
              lineHeight: 1.8,
              fontSize: "17px",
            }}
          >
            PERMATADENTAL menyediakan berbagai fitur untuk
            membantu Klinik Permata Dental meningkatkan
            pelayanan, efisiensi operasional, dan
            hubungan jangka panjang dengan pasien.
          </p>
        </div>

        {/* Grid */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: "28px",
          }}
        >
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#FFFFFF",
                borderRadius: "22px",
                padding: "35px",
                transition: ".3s",
                border: "1px solid #EDF2F7",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 45px rgba(79,209,197,.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "none";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "20px",
                  background: "#E6FFFA",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#38B2AC",
                  fontSize: "28px",
                  marginBottom: "25px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  color: "#2D3748",
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#718096",
                  lineHeight: "1.8",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}