import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router";
import { FaHome } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { GiFarmer } from "react-icons/gi";
import { CgLogOut } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";
import { MdLibraryAdd } from "react-icons/md";
import { IoCropSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, signOutUserFunc } = useContext(AuthContext);

  console.log(user);
  const isActive = (path) =>
    location.pathname === path
      ? "text-purple-600 font-semibold border-b-2 border-purple-600 pb-1"
      : "text-gray-700 hover:text-purple-600";

  const handleLogout = async () => {
    try {
      await signOutUserFunc();
      Swal.fire({
        title: "Logged Out ✅",
        text: "You have successfully logged out.",
        icon: "success",
        confirmButtonColor: "#6366F1",
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (error) {
      Swal.fire({
        title: "Logout Failed ❌",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  return (
    <div className="py-4 border-b border-gray-200 bg-white shadow-sm">
      <nav className="flex items-center justify-between max-w-[1500px] mx-auto  relative transition-all">
        <h3 className="text-2xl font-bold text-purple-600 flex items-center">
          <span className="px-2 py-1 bg-purple-500 text-white rounded-md">
            <GiFarmer className="h-6 w-6" />
          </span>
          KrishiLink-Farmer’s
        </h3>

        <div className="hidden md:flex items-center gap-8 font-medium absolute left-1/2 -translate-x-1/2">
          <Link
            to="/"
            className={`flex items-center gap-2 transition ${isActive("/")}`}
          >
            <FaHome className="text-lg" /> Home
          </Link>

          <Link
            to="/all-crop"
            className={`flex items-center gap-2 transition ${isActive(
              "/all-crop"
            )}`}
          >
            <IoCropSharp className="text-lg" /> All Crops
          </Link>
          {user && (
            <Link
              to="/addCrop"
              className={`flex items-center gap-2 transition ${isActive(
                "/addCrop"
              )}`}
            >
              <MdLibraryAdd className="text-lg" /> AddCrop
            </Link>
          )}
        </div>

        <div className="hidden md:flex">
          {user ? (
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full border-2 border-purple-500"
                src={user?.photoURL}
                alt={user?.displayName}
              />
              <button
                onClick={handleLogout}
                className="cursor-pointer px-4 py-2 bg-purple-500 hover:bg-purple-600 transition text-white rounded-lg shadow-md flex items-center"
              >
                <CgLogOut className="text-2xl font-bold" /> Logout
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="cursor-pointer px-4 py-2 bg-purple-500 hover:bg-purple-600 transition text-white rounded-md shadow-md flex items-center gap-2"
            >
              <BiLogIn className="text-2xl font-bold" /> Login
            </Link>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden text-2xl text-purple-600"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-3 px-6 font-medium md:hidden transition-all`}
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 transition ${isActive("/")}`}
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/all-crop"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 transition ${isActive(
              "/all-crop"
            )}`}
          >
            <IoCropSharp /> All Crops
          </Link>
          {user && (
            <Link
              to="/addCrop"
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 transition ${isActive(
                "/addCrop"
              )}`}
            >
              <MdLibraryAdd /> AddCrop
            </Link>
          )}

          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setOpen(false);
              }}
              className="cursor-pointer mt-2 w-full text-center px-6 py-2 bg-purple-500 hover:bg-purple-600 transition text-white rounded-full text-sm shadow-md"
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              onClick={() => setOpen(false)}
              className="cursor-pointer mt-2 w-full text-center px-6 py-2 bg-purple-500 hover:bg-purple-600 transition text-white rounded-full text-sm shadow-md"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
