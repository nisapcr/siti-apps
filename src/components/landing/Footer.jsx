import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1A202C",
        color: "#fff",
        padding: "70px 20px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        <div>
          <h2
            style={{
              color: "#4FD1C5",
            }}
          >
            PERMATADENTAL
          </h2>

          <p
            style={{
              color: "#CBD5E0",
              lineHeight: 1.8,
            }}
          >
            Customer Relationship Management
            untuk Klinik Permata Dental yang
            membantu meningkatkan kualitas
            pelayanan pasien melalui sistem
            digital yang modern.
          </p>
        </div>

        <div>
          <h3>Menu</h3>

          <p><a href="#home" style={{ color: "#CBD5E0", textDecoration: "none" }}>Home</a></p>
          <p><a href="#tentang" style={{ color: "#CBD5E0", textDecoration: "none" }}>Tentang</a></p>
          <p><a href="#fitur" style={{ color: "#CBD5E0", textDecoration: "none" }}>Fitur</a></p>
          <p><a href="#membership" style={{ color: "#CBD5E0", textDecoration: "none" }}>Membership</a></p>
        </div>

        <div>
          <h3>Kontak</h3>

          <p>Email</p>
          <small>admin@permatadental.com</small>

          <br /><br />

          <p>Telepon</p>
          <small>+62 852 6399 2821</small>

          <br /><br />

          <p>Alamat</p>
          <small>
            Klinik Permata Dental
            Pekanbaru, Riau, Indonesia
          </small>
        </div>

        <div>
          <h3>Follow Us</h3>

          <div
            style={{
              display: "flex",
              gap: 15,
              marginTop: 15,
              fontSize: 25,
            }}
          >
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>
      </div>

      <hr
        style={{
          margin: "40px 0",
          borderColor: "#2D3748",
        }}
      />

      <div
        style={{
          textAlign: "center",
          color: "#A0AEC0",
        }}
      >
        © 2026 PERMATADENTAL • Klinik PERMATADENTAL
      </div>
    </footer>
  );
}