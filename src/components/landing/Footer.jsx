import { Link } from "react-router-dom";

import {
  Stethoscope,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* LOGO */}

          <div>

            <div className="flex items-center gap-3">

              <Stethoscope
                size={32}
                className="text-blue-400"
              />

              <h2 className="text-2xl font-bold">
                SITI CRM
              </h2>

            </div>

            <p className="mt-5 leading-7 text-slate-300">
              Customer Relationship Management
              untuk membantu klinik mengelola
              pasien, pembayaran, loyalitas,
              jadwal, dan pelayanan secara
              lebih modern.
            </p>

          </div>

          {/* MENU */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Menu
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <Link to="/login" className="hover:text-white">
                  Login
                </Link>
              </li>

            </ul>

          </div>

          {/* KONTAK */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-slate-300">

              <div className="flex gap-3">

                <Mail size={18} />

                <span>
                  admin@siticrm.com
                </span>

              </div>

              <div className="flex gap-3">

                <Phone size={18} />

                <span>
                  +62 812-3456-7890
                </span>

              </div>

              <div className="flex gap-3">

                <MapPin size={18} />

                <span>
                  Palembang, Indonesia
                </span>

              </div>

            </div>

          </div>

          {/* SOSMED */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 hover:bg-blue-600"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 hover:bg-pink-600"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 hover:bg-blue-500"
              >
                <FaLinkedinIn size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="mt-14 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">

          © {new Date().getFullYear()} SITI CRM.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}