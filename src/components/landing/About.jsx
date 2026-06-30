import {
  FaUserShield,
  FaCalendarCheck,
  FaGift,
  FaChartLine,
} from "react-icons/fa";

const items = [
  {
    icon: <FaUserShield />,
    title: "Data Pasien Terintegrasi",
    desc: "Semua informasi pasien tersimpan secara terpusat sehingga mudah diakses oleh dokter maupun admin klinik.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Penjadwalan Otomatis",
    desc: "Kelola jadwal konsultasi, kontrol ulang, dan reminder pasien agar pelayanan menjadi lebih teratur.",
  },
  {
    icon: <FaGift />,
    title: "Program Loyalitas",
    desc: "Setiap transaksi pasien menghasilkan poin yang dapat meningkatkan level membership dan memperoleh berbagai keuntungan.",
  },
  {
    icon: <FaChartLine />,
    title: "Monitoring Real-Time",
    desc: "Pantau statistik pasien, aktivitas klinik, serta performa pelayanan melalui dashboard interaktif.",
  },
];

export default function About() {
  return (
    <section
      id="tentang"
      style={{
        background: "#F8FAFC",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(450px,1fr))",
          gap: "70px",
          alignItems: "center",
        }}
      >
        {/* LEFT */}

        <div>
          <span
            style={{
              color: "#38B2AC",
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            TENTANG PERMATADENTAL
          </span>

          <h2
            style={{
              fontSize: "42px",
              color: "#2D3748",
              marginTop: "18px",
              marginBottom: "24px",
              lineHeight: 1.3,
            }}
          >
            Solusi Digital Customer Relationship
            Management untuk Klinik Gigi
          </h2>

          <p
            style={{
              color: "#718096",
              lineHeight: 1.9,
              fontSize: "17px",
            }}
          >
            PERMATADENTAL merupakan sistem Customer
            Relationship Management yang dirancang
            khusus untuk membantu Klinik Permata
            Dental dalam mengelola hubungan dengan
            pasien secara lebih efektif.
          </p>

          <p
            style={{
              color: "#718096",
              lineHeight: 1.9,
              fontSize: "17px",
              marginTop: "20px",
            }}
          >
            Melalui dashboard interaktif, pengelolaan
            data pasien, jadwal pemeriksaan,
            pembayaran, program loyalitas, hingga
            monitoring pelayanan dapat dilakukan
            secara cepat, aman, dan terintegrasi.
          </p>
        </div>

        {/* RIGHT */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "22px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#FFFFFF",
                padding: "28px",
                borderRadius: "20px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.05)",
                transition: ".3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 18,
                  background: "#E6FFFA",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#38B2AC",
                  fontSize: 24,
                  marginBottom: 20,
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  color: "#2D3748",
                  marginBottom: 12,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#718096",
                  lineHeight: 1.7,
                  margin: 0,
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