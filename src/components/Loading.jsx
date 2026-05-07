export default function Loading() {
  const mintColor = "#4FD1C5";

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      {/* Spinner Container */}
      <div className="relative flex justify-center items-center">
        {/* Outer Ring (Static) */}
        <div 
          className="w-14 h-14 border-4 border-gray-200 rounded-full"
          style={{ position: 'absolute' }}
        ></div>
        
        {/* Inner Spinner (Animated) */}
        <div 
          className="w-14 h-14 border-4 border-t-transparent rounded-full animate-spin"
          style={{ 
            borderColor: `${mintColor} transparent transparent transparent`,
            borderTopColor: mintColor 
          }}
        ></div>
      </div>
      
      {/* Loading Text */}
      <p 
        className="mt-6 text-sm font-bold tracking-widest uppercase"
        style={{ color: "#2D3748" }}
      >
        Memuat Data...
      </p>
      
      {/* Subtitle */}
      <p className="text-gray-400 text-xs mt-1">
        Mohon tunggu sebentar
      </p>
    </div>
  );
}