import React from "react";
import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";

export default function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-row gap-2">
        <div className="animate-pulse bg-gray-300 w-12 h-12 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <div className="animate-pulse bg-gray-300 w-28 h-5 rounded-full"></div>
          <div className="animate-pulse bg-gray-300 w-36 h-5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
