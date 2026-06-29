import { Link } from "react-router-dom";
import { Stethoscope } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <Stethoscope
            size={30}
            className="text-blue-600"
          />

          <span className="text-xl font-bold text-slate-800">
            SITI CRM
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">

          <a href="#about" className="hover:text-blue-600">
            About
          </a>

          <a href="#features" className="hover:text-blue-600">
            Features
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>

        </nav>

        <Link
          to="/login"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          Login
        </Link>

      </div>
    </header>
  );
}