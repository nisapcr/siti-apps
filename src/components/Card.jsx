export default function Card({ title, value, icon: Icon, change }) {
  const mintColor = "#4FD1C5";
  const isPositive = change && change.includes("+");

  return (
    <div style={{
      background: "#FFFFFF",
      borderRadius: "15px",
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
      fontFamily: "'Inter', sans-serif",
    }}>
      <div>
        <p style={{ fontSize: "12px", color: "#A0AEC0", fontWeight: "700", margin: "0 0 4px 0" }}>
          {title}
        </p>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#2D3748", margin: 0 }}>
            {value}
          </h4>
          {change && (
            <span style={{ 
              fontSize: "14px", 
              fontWeight: "700", 
              color: isPositive ? "#48BB78" : "#E53E3E" 
            }}>
              {change}
            </span>
          )}
        </div>
      </div>

      <div style={{
        width: "45px", height: "45px",
        background: mintColor,
        borderRadius: "12px",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon style={{ color: "#FFFFFF", fontSize: "20px" }} />
      </div>
    </div>
  );
}