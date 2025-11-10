import React from "react";
import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";

export default function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-between gap-10">
        <div className="flex flex-col bg-neutral-300 w-80 h-80 animate-pulse rounded-xl p-4 gap-4">
          <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
          </div>
        </div>
        <div className=" flex-col bg-neutral-300 w-80 h-80 animate-pulse rounded-xl p-4 gap-4 hidden md:flex lg:flex">
          <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
          </div>
        </div>
        <div className=" flex-col bg-neutral-300 w-80 h-80 animate-pulse rounded-xl p-4 gap-4 hidden md:hidden lg:flex">
          <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
