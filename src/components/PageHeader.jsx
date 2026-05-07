export default function PageHeader({ title, breadcrumb, children }) {
  const mintColor = "#4FD1C5";

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 30,
      fontFamily: "'Inter', sans-serif", // Font standar CRM modern
    }}>
      <div>
        {/* Title dengan warna Navy Tua */}
        <h1 style={{
          fontSize: 24,
          fontWeight: 700,
          color: "#2D3748",
          margin: 0,
        }}>{title}</h1>
        
        {/* Breadcrumb Section */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 6, 
          marginTop: 6, 
          fontSize: 13 
        }}>
          <span style={{ color: "#A0AEC0", fontWeight: "500" }}>Pages</span>
          
          <span style={{ color: "#CBD5E0" }}>/</span>
          
          <span style={{ color: "#A0AEC0", fontWeight: "500" }}>Dashboard</span>
          
          {breadcrumb && (
            <>
              <span style={{ color: "#CBD5E0" }}>/</span>
              <span style={{ 
                color: mintColor, 
                fontWeight: "600" 
              }}>
                {breadcrumb}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Area untuk Button atau Action tambahan */}
      {children && (
        <div style={{ display: "flex", gap: 12 }}>
          {children}
        </div>
      )}
    </div>
  );
}