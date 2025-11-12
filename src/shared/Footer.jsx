import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <Link
              to={"/"}
              className="text-2xl font-bold text-green-500 flex items-center gap-2"
            >
              <span className="px-2 py-1 bg-green-500 text-white rounded-md">
                <GiFarmer className="h-6 w-6" />
              </span>
              KrishiLink-Farmer’s
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Free and open-source Tailwind UI components. Over 300+ modern,
              customizable designs for developers.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-green-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-green-600 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-green-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-green-600 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-green-600 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="font-semibold text-white mb-5">Company</h2>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  All
                  <span className="text-xs text-white bg-green-600 rounded-md ml-2 px-2 py-0.5">
                    Crops
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  My Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  My Post
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="font-semibold text-white mb-5">Resources</h2>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Add Crop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  My Interests
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-semibold text-white mb-5">
              Subscribe to our newsletter
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              Get the latest news, articles, and resources delivered weekly.
            </p>
            <div className="flex items-center gap-2 bg-slate-800 p-2 rounded-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm bg-transparent text-white placeholder-slate-400 focus:outline-none"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-sm">
          © 2025 <span className="text-green-400">KrishiLink-Farmer’s</span>.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
