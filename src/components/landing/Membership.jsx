import {
  FaMedal,
  FaStar,
  FaCrown,
  FaGem,
} from "react-icons/fa";

const levels = [
  {
    icon: <FaMedal />,
    color: "#CD7F32",
    bg: "#FFF7ED",
    title: "Bronze",
    point: "0 - 499 Poin",
    benefit: [
      "Member baru",
      "Riwayat transaksi",
      "Reminder kontrol",
    ],
  },
  {
    icon: <FaStar />,
    color: "#94A3B8",
    bg: "#F8FAFC",
    title: "Silver",
    point: "500 - 999 Poin",
    benefit: [
      "Diskon 5%",
      "Reminder prioritas",
      "Promo bulanan",
    ],
  },
  {
    icon: <FaCrown />,
    color: "#EAB308",
    bg: "#FEFCE8",
    title: "Gold",
    point: "1000 - 1999 Poin",
    benefit: [
      "Diskon 10%",
      "Antrian prioritas",
      "Voucher perawatan",
    ],
  },
  {
    icon: <FaGem />,
    color: "#8B5CF6",
    bg: "#F5F3FF",
    title: "Platinum",
    point: "2000+ Poin",
    benefit: [
      "Diskon 15%",
      "Free konsultasi",
      "Promo eksklusif",
    ],
  },
];

export default function Membership() {
  return (
    <section
      id="membership"
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
        {/* Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: 70,
          }}
        >
          <span
            style={{
              color: "#38B2AC",
              fontWeight: 700,
            }}
          >
            PROGRAM LOYALITAS
          </span>

          <h2
            style={{
              fontSize: 42,
              color: "#2D3748",
              marginTop: 15,
            }}
          >
            Membership Pasien
          </h2>

          <p
            style={{
              color: "#718096",
              maxWidth: 700,
              margin: "20px auto",
              lineHeight: 1.8,
            }}
          >
            Semakin sering pasien melakukan
            perawatan, semakin banyak poin yang
            diperoleh dan semakin tinggi level
            membership yang dimiliki.
          </p>
        </div>

        {/* CARD */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: 25,
          }}
        >
          {levels.map((item, index) => (
            <div
              key={index}
              style={{
                background: item.bg,
                borderRadius: 24,
                padding: 35,
                transition: ".3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 18,
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: item.color,
                  fontSize: 28,
                  marginBottom: 25,
                }}
              >
                {item.icon}
              </div>

              <h2
                style={{
                  color: item.color,
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h2>

              <strong>{item.point}</strong>

              <ul
                style={{
                  marginTop: 20,
                  paddingLeft: 20,
                  color: "#718096",
                  lineHeight: 2,
                }}
              >
                {item.benefit.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}