// components/ProgressBar.jsx
export default function ProgressBar({ percentage, showLabel = false, height = 8 }) {
  const validPercentage = Math.min(100, Math.max(0, percentage));
  
  return (
    <div>
      <div style={{
        background: "#EDF2F7",
        borderRadius: "10px",
        height: `${height}px`,
        overflow: "hidden",
        width: "100%",
      }}>
        <div style={{
          width: `${validPercentage}%`,
          background: validPercentage === 100 ? "#48BB78" : "#4FD1C5",
          height: "100%",
          borderRadius: "10px",
          transition: "width 0.3s ease",
        }} />
      </div>
      {showLabel && (
        <span style={{ fontSize: "12px", fontWeight: 600, color: "#4FD1C5", marginTop: "4px", display: "inline-block" }}>
          {validPercentage}%
        </span>
      )}
    </div>
  );
}