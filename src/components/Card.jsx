import React from "react";

export default function Card({ title, value, icon: Icon, change }) {
  const mintColor = "#4FD1C5";
  const isPositive = change?.includes("+");

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "15px",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
        fontFamily: "'Inter', sans-serif",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* LEFT */}
      <div>
        <p
          style={{
            fontSize: "12px",
            color: "#A0AEC0",
            fontWeight: "700",
            margin: "0 0 4px 0",
          }}
        >
          {title}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "6px",
          }}
        >
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#2D3748",
              margin: 0,
            }}
          >
            {value}
          </h4>

          {change ? (
            <span
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: isPositive ? "#48BB78" : "#E53E3E",
              }}
            >
              {change}
            </span>
          ) : null}
        </div>
      </div>

      {/* RIGHT ICON */}
      <div
        style={{
          width: "38px",
          height: "38px",
          backgroundColor: mintColor,
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {Icon && (
          <Icon
            size={16}
            color="#FFFFFF"
          />
        )}
      </div>
    </div>
  );
}
