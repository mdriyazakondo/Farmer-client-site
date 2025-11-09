import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router";
import { FaHome } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { GiFarmer } from "react-icons/gi";
import { CgLogOut } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";
import { MdLibraryAdd } from "react-icons/md";
import { IoCropSharp } from "react-icons/io5";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, signOutUserFunc } = useContext(AuthContext);

  const links = [
    { to: "/", name: "Home", icon: <FaHome /> },
    { to: "/all-crop", name: "All Crops", icon: <IoCropSharp /> },
  ];

  const userLinks = [
    { to: "/addCrop", name: "AddCrop", icon: <MdLibraryAdd /> },
    { to: "/myPosts", name: "My Posts", icon: <MdLibraryAdd /> },
    { to: "/myInterests", name: "My Interests", icon: <MdLibraryAdd /> },
  ];

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
    <div className="py-4 border-b border-gray-200 bg-white shadow-sm z-50">
      <nav className="flex items-center justify-between max-w-[1500px] mx-auto relative px-6">
        {/* Logo */}
        <Link
          to={"/"}
          className="text-2xl font-bold text-purple-600 flex items-center"
        >
          <span className="px-2 py-1 bg-purple-500 text-white rounded-md">
            <GiFarmer className="h-6 w-6" />
          </span>
          KrishiLink-Farmer’s
        </Link>

        {/* Desktop Links (lg+) */}
        <div className="hidden lg:flex items-center gap-8 font-medium absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-2 transition ${isActive(
                link.to
              )}`}
            >
              {link.icon} {link.name}
            </Link>
          ))}

          {user &&
            userLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 transition ${isActive(
                  link.to
                )}`}
              >
                {link.icon} {link.name}
              </Link>
            ))}
        </div>

        {/* Desktop Auth (lg+) */}
        <div className="hidden lg:flex">
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
              to="/login"
              className="cursor-pointer px-4 py-2 bg-purple-500 hover:bg-purple-600 transition text-white rounded-md shadow-md flex items-center gap-2"
            >
              <BiLogIn className="text-2xl font-bold" /> Login
            </Link>
          )}
        </div>

        {/* Hamburger Button (sm/md) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden text-2xl text-purple-600"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu (sm/md) */}
        {open && (
          <div
            className={`${
              open ? "flex" : "hidden"
            } fixed top-[65px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-3 px-6 font-medium md:hidden transition-all z-50`}
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 transition ${isActive(
                  link.to
                )}`}
              >
                {link.icon} {link.name}
              </Link>
            ))}

            {user &&
              userLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 transition ${isActive(
                    link.to
                  )}`}
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
                className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg flex items-center justify-center gap-2 shadow-md"
              >
                <CgLogOut className="text-xl" /> Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg flex items-center justify-center gap-2 shadow-md"
              >
                <BiLogIn className="text-xl" /> Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
