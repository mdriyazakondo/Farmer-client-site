import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { FaHome, FaUserCheck } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { GiFarmer } from "react-icons/gi";
import { CgLogOut } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";
import { MdInterests, MdLibraryAdd } from "react-icons/md";
import { BsPostcardFill } from "react-icons/bs";
import { IoCropSharp } from "react-icons/io5";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, signOutUserFunc, loading } = useContext(AuthContext);
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const links = [
    { to: "/", name: "Home", icon: <FaHome /> },
    { to: "/all-crop", name: "All Crops", icon: <IoCropSharp /> },
  ];

  const userLinks = [
    { to: "/addCrop", name: "Add Crop", icon: <MdLibraryAdd /> },
    { to: "/myPosts", name: "My Posts", icon: <BsPostcardFill /> },
    { to: "/myInterests", name: "My Interests", icon: <MdInterests /> },
    { to: "/myProfile", name: "My Profile", icon: <FaUserCheck /> },
  ];

  const isActive = (path) =>
    location.pathname === path
      ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1"
      : "text-gray-700 hover:text-green-600";

  const handleLogout = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out from your account.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#22c55e",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out!",
      });

      if (result.isConfirmed) {
        await signOutUserFunc();
        Swal.fire({
          title: "Logged Out ✅",
          text: "You have successfully logged out.",
          icon: "success",
          confirmButtonColor: "#22c55e",
          timer: 2000,
          timerProgressBar: true,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Logout Failed ❌",
        text: error.message || "Something went wrong during logout.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <nav className="flex items-center justify-between max-w-[1500px] mx-auto px-4 md:px-0 py-3 lg:py-4">
        <Link
          to="/"
          className="text-xl lg:text-2xl font-bold text-green-600 flex items-center gap-2"
        >
          <span className="px-2 py-1 bg-green-500 text-white rounded-md">
            <GiFarmer className="h-6 w-6" />
          </span>
          <span className="hidden sm:block">KrishiLink-Farmer’s</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-medium">
          {[...links, ...(user ? userLinks : [])].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-2 ${isActive(link.to)}`}
            >
              {link.icon} {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {loading ? (
            <div className="w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full border-2 border-green-500 object-cover"
                src={user?.photoURL}
                alt={user?.displayName || "User"}
              />
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center gap-2 shadow-md transition"
              >
                <CgLogOut className="text-xl" /> Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center gap-2 shadow-md"
            >
              <BiLogIn className="text-xl" /> Login
            </Link>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl text-green-600"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div
        ref={menuRef}
        className={`absolute top-[55px] left-0 w-full bg-white shadow-md flex-col items-start gap-3 px-6 py-5 font-medium transition-all duration-300 lg:hidden ${
          open
            ? "opacity-100 translate-y-0 flex"
            : "opacity-0 -translate-y-5 hidden"
        }`}
      >
        {[...links, ...(user ? userLinks : [])].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 text-base ${isActive(link.to)}`}
          >
            {link.icon} {link.name}
          </Link>
        ))}

        {user ? (
          <button
            onClick={async () => {
              await handleLogout();
              setOpen(false);
            }}
            className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center gap-2 shadow-md text-base"
          >
            <CgLogOut className="text-xl" /> Logout
          </button>
        ) : (
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center gap-2 shadow-md text-base"
          >
            <BiLogIn className="text-xl" /> Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
