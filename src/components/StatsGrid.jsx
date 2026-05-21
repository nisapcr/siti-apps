import React from "react";
import StatisticCard from "./StatisticCard";

export default function StatsGrid({ stats }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "24px",
        marginBottom: "24px",
      }}
    >
      {stats.map((item, index) => (
        <StatisticCard
          key={index}
          title={item.title}
          value={item.value}
          change={item.change}
          icon={item.icon}
        />
      ))}
    </div>
  );
}