import {
  FaShieldAlt,
  FaHeartbeat,
  FaBell,
  FaChartPie,
} from "react-icons/fa";

const data = [
  {
    icon: <FaShieldAlt />,
    title: "Keamanan Data",
    text: "Data pasien tersimpan dengan aman dan hanya dapat diakses oleh pengguna yang memiliki hak akses.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Pelayanan Pasien",
    text: "Membantu meningkatkan kualitas pelayanan melalui pencatatan riwayat dan monitoring pasien.",
  },
  {
    icon: <FaBell />,
    title: "Reminder Otomatis",
    text: "Pengingat jadwal kontrol dan pemeriksaan membantu pasien tetap rutin melakukan perawatan.",
  },
  {
    icon: <FaChartPie />,
    title: "Dashboard Interaktif",
    text: "Visualisasi statistik klinik secara real-time untuk mendukung pengambilan keputusan.",
  },
];

export default function WhyUs() {
  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <span
            style={{
              color: "#38B2AC",
              fontWeight: "700",
            }}
          >
            MENGAPA MEMILIH PERMATADENTAL
          </span>

          <h2
            style={{
              fontSize: "40px",
              color: "#2D3748",
              marginTop: "15px",
            }}
          >
            Solusi CRM yang Dirancang
            <br />
            Khusus untuk Klinik Gigi
          </h2>

          <p
            style={{
              color: "#718096",
              maxWidth: "760px",
              margin: "20px auto 0",
              lineHeight: "1.8",
              fontSize: "17px",
            }}
          >
            Web ini membantu Klinik Permata Dental
            meningkatkan kualitas pelayanan,
            mempertahankan loyalitas pasien,
            serta mempermudah pengelolaan operasional
            melalui sistem yang modern dan terintegrasi.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "28px",
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#F8FAFC",
                padding: "35px",
                borderRadius: "22px",
                border: "1px solid #EDF2F7",
                transition: ".3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 45px rgba(79,209,197,.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
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
                  color: "#38B2AC",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "28px",
                  marginBottom: "22px",
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
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}