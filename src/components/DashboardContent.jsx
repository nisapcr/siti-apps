// components/DashboardContent.jsx
import React, { useState } from "react";
import {
  SectionTitle,
  SectionSubtitle,
  ProgressTable,
  QueuePanel,
  TreatmentPanel,
  Timeline,
} from "./index";

export default function DashboardContent({ treatmentData, queueData, timelineData }) {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleSelectTreatment = (treatment) => {
    setSelectedTreatment(treatment);
  };

  return (
    <div>
      {/* Bagian Progress Table - Pakai ProgressTable dan TableHeader di dalamnya */}
      <div style={{ marginBottom: "32px" }}>
        <SectionTitle>Progress Perawatan Pasien</SectionTitle>
        <SectionSubtitle>Status penyelesaian perawatan aktif</SectionSubtitle>
        <ProgressTable 
          data={treatmentData} 
          onSelectRow={handleSelectTreatment}
        />
      </div>

      {/* Treatment Panel - Menampilkan detail treatment yang dipilih */}
      {selectedTreatment && (
        <div style={{ marginBottom: "32px" }}>
          <TreatmentPanel treatment={selectedTreatment} />
        </div>
      )}

      {/* Grid untuk Queue dan Timeline */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", 
        gap: "24px",
        marginBottom: "32px"
      }}>
        {/* Queue Panel */}
        <QueuePanel queueData={queueData} title="Antrian Hari Ini" />
        
        {/* Timeline */}
        <Timeline items={timelineData} title="Jadwal Hari Ini" />
      </div>
    </div>
  );
}