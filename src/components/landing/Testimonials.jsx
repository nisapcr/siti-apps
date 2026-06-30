import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Andi Herlambang",
    role: "Pasien Orthodonti",
    comment:
      "Pelayanan menjadi jauh lebih teratur. Saya selalu mendapatkan pengingat jadwal kontrol sehingga tidak pernah terlambat datang ke klinik.",
  },
  {
    name: "Siti Aminah",
    role: "Member Gold",
    comment:
      "Program poin dan diskon sangat membantu. Semua riwayat perawatan juga tersimpan dengan rapi sehingga konsultasi berikutnya menjadi lebih mudah.",
  },
  {
    name: "Drg. Shinta",
    role: "Dokter Gigi",
    comment:
      "Dashboard CRM membantu saya melihat riwayat pasien, jadwal, hingga progres perawatan dalam satu sistem yang mudah digunakan.",
  },
];

export default function Testimonials() {
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
            marginBottom: 60,
          }}
        >
          <span
            style={{
              color: "#38B2AC",
              fontWeight: 700,
            }}
          >
            TESTIMONI
          </span>

          <h2
            style={{
              fontSize: 42,
              marginTop: 15,
              color: "#2D3748",
            }}
          >
            Apa Kata Pengguna
          </h2>

          <p
            style={{
              color: "#718096",
              maxWidth: 700,
              margin: "20px auto",
              lineHeight: 1.8,
            }}
          >
            Pengalaman pengguna setelah menggunakan
            sistem Customer Relationship Management
            pada Klinik Permata Dental.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: 30,
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#F8FAFC",
                borderRadius: 24,
                padding: 35,
                transition: ".3s",
                border: "1px solid #EDF2F7",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(79,209,197,.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "none";
              }}
            >
              <FaQuoteLeft
                size={32}
                color="#4FD1C5"
              />

              <p
                style={{
                  color: "#4A5568",
                  lineHeight: 1.9,
                  marginTop: 20,
                  marginBottom: 25,
                }}
              >
                "{item.comment}"
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 15,
                }}
              >
                {[1,2,3,4,5].map((star)=>(
                  <FaStar
                    key={star}
                    color="#F6AD55"
                  />
                ))}
              </div>

              <h3
                style={{
                  margin: 0,
                  color: "#2D3748",
                }}
              >
                {item.name}
              </h3>

              <small
                style={{
                  color: "#718096",
                }}
              >
                {item.role}
              </small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}