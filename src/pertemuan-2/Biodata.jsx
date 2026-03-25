// Parent Component
export default function BioData() {
  return (
    <div>
      <h1>Pemrograman Framework Lanjutan</h1>
      <img src="img/slay.jpeg" alt="logo" width="100%" />
      
      <Greating />

      <UserCard
        nama="Siti Harnisa Nurhabiby"
        nim="2457301133"
        prodi="Sistem Informasi"
        kampus="Politeknik Caltex Riau"
        semester="4"
        kelas="2 SI C"
        email="harnisa24si@mahasiswa.pcr.ac.id"
        phone="+62 85263992821"
        alamat="Pekanbaru, Riau"
      />

      <QuoteText />
    </div>
  );
}

// Child Component Greating
function Greating() {
  return (
    <div>
      <p style={{ textAlign: 'center' }}>
        Selamat Belajar ReactJs
      </p>
    </div>
  );
}

// UserCard (Prop Component)
function UserCard(props) {
  return (
    <div>
      <hr />
      <p>Nama: {props.nama}</p>
      <p>NIM: {props.nim}</p>
      <p>Prodi: {props.prodi}</p>
      <p>Kampus: {props.kampus}</p>
      <p>Semester: {props.semester}</p>
      <p>Kelas: {props.kelas}</p>
      <p>Email: {props.email}</p>
      <p>No. Telepon: {props.phone}</p>
      <p>Alamat: {props.alamat}</p>
    </div>
  );
}

// Quote
function QuoteText() {
  const text =
    "Great developers are not born, they are built through practice and persistence.";
  const text2 = "- Keep learning, keep growing";

  return (
    <div>
      <hr />
      <p style={{ textAlign: 'center' }}>{text.toUpperCase()}</p>
      <p><small>{text2.toLowerCase()}</small></p>
    </div>
  );
}