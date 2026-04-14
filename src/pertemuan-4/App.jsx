import { useState } from "react";
import GuestView from "./components/GuestView";
import AdminView from "./components/AdminView";

function App() {
  const [view, setView] = useState("guest");

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50 p-6">
      
      <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl w-full max-w-5xl">

        <h1 className="text-3xl font-bold text-center text-pink-500 mb-6">
          💖 Course App
        </h1>

        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setView("guest")}
            className={`px-4 py-2 rounded-xl font-semibold ${
              view === "guest"
                ? "bg-pink-500 text-white"
                : "bg-pink-100 text-pink-500"
            }`}
          >
            Guest
          </button>

          <button
            onClick={() => setView("admin")}
            className={`px-4 py-2 rounded-xl font-semibold ${
              view === "admin"
                ? "bg-pink-500 text-white"
                : "bg-pink-100 text-pink-500"
            }`}
          >
            Admin
          </button>
        </div>

        {view === "guest" ? <GuestView /> : <AdminView />}
      </div>
    </div>
  );
}

export default App;