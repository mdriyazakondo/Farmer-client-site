import React from "react";
import { Link } from "react-router";
import { FiAlertTriangle, FiHome, FiRefreshCcw } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ErrorPage({
  status = 404,
  title = "Page not found",
  description = "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
  onRetry,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
      >
        <div className="flex-shrink-0 bg-gradient-to-tr from-rose-100 to-rose-50 rounded-xl p-6 md:p-10 flex items-center justify-center">
          <div className="text-6xl md:text-7xl text-rose-600 w-28 h-28 flex items-center justify-center rounded-full bg-white/60 shadow-inner">
            <FiAlertTriangle />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex items-baseline justify-center md:justify-start gap-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
              {status}
            </h1>
            <div className="text-lg text-gray-500 mt-2">{title}</div>
          </div>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto md:mx-0">
            {description}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:justify-start items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold shadow-md transition"
            >
              <FiHome className="text-lg" />
              Go home
            </Link>

            <button
              onClick={() => (onRetry ? onRetry() : window.location.reload())}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium transition"
            >
              <FiRefreshCcw className="text-lg" />
              Retry
            </button>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            If the problem persists, contact support or try again later.
          </div>
        </div>
      </motion.div>

      {/* subtle background decoration */}
      <svg
        className="pointer-events-none absolute right-6 bottom-6 opacity-10 w-64 h-64"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FEE2E2" />
            <stop offset="100%" stopColor="#FFF1F2" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#g)" />
      </svg>
    </div>
  );
}
