import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6 ">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <a href="/" className="flex items-center gap-2 text-purple-500">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 11.3 15.5 15.184 22.25 11.3M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585"
                  stroke="#6366f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-semibold">PrebuiltUI</span>
            </a>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Free and open-source Tailwind UI components. Over 300+ modern,
              customizable designs for developers.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-purple-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-purple-600 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-purple-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-purple-600 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-purple-600 transition"
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
                <a href="#" className="hover:text-purple-400 transition">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Careers{" "}
                  <span className="text-xs text-white bg-purple-600 rounded-md ml-2 px-2 py-0.5">
                    Hiring!
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="font-semibold text-white mb-5">Resources</h2>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Support
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
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-sm">
          © 2025 <span className="text-purple-400">PrebuiltUI</span>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
