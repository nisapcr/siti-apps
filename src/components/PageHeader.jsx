export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 24,
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          fontWeight: 600,
          color: "#fff",
          margin: 0,
        }}>{title}</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 5, fontSize: 12 }}>
          <span style={{ color: "#3d4f5e" }}>Dashboard</span>
          {breadcrumb && (
            <>
              <span style={{ color: "#2a3a4a" }}>/</span>
              <span style={{ color: "#1FD4A0" }}>{breadcrumb}</span>
            </>
          )}
        </div>
      </div>
      {children && <div>{children}</div>}
    </div>
  );
}