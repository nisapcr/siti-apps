import React from "react";

export default function SectionTitle({
  children,
}) {
  return (
    <h3
      style={{
        margin: 0,
        fontSize: "18px",
        fontWeight: "700",
        color: "#2D3748",
      }}
    >
      {children}
    </h3>
  );
}