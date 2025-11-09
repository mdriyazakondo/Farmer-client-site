import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUserFunc, signInGooleUserFunc } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!name || !photo || !email || !password) {
      Swal.fire({
        title: "Missing Fields ⚠️",
        text: "Please fill in all fields.",
        icon: "warning",
        confirmButtonColor: "#F59E0B",
      });
      return;
    }

    createUserFunc(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, { displayName: name, photoURL: photo })
          .then(() => {
            Swal.fire({
              title: "Account Created 🎉",
              text: `Welcome, ${name}!`,
              icon: "success",
              confirmButtonColor: "#6366F1",
            });
            navigate(location.state?.from?.pathname || "/");
          })
          .catch((error) => {
            Swal.fire({
              title: "Profile Update Failed 😢",
              text: error.message,
              icon: "error",
              confirmButtonColor: "#EF4444",
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "Sign Up Failed 😢",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#EF4444",
        });
      });
  };

  const handleGoogle = () => {
    signInGooleUserFunc()
      .then((result) => {
        Swal.fire({
          title: "Login Successful 🎉",
          text: `Welcome, ${result.user.displayName || "User"}!`,
          icon: "success",
          confirmButtonColor: "#6366F1",
        });
        navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed 😢",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#EF4444",
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] ">
      <div className="flex flex-col justify-center w-full max-w-md rounded-2xl px-8 py-10 border border-slate-800 bg-slate-900 text-white shadow-xl">
        <h2 className="text-3xl font-semibold text-center">Create Account</h2>
        <p className="text-slate-400 mt-1 text-center">
          Register to get started
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          {/* Name */}
          <label
            htmlFor="name"
            className="block mb-1 font-medium text-slate-300"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 mb-4 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />

          {/* Photo URL */}
          <label
            htmlFor="photo"
            className="block mb-1 font-medium text-slate-300"
          >
            Photo URL
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            placeholder="Enter your photo URL"
            className="w-full p-3 mb-4 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />

          {/* Email */}
          <label
            htmlFor="email"
            className="block mb-1 font-medium text-slate-300"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-4 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />

          {/* Password */}
          <label
            htmlFor="password"
            className="block mb-1 font-medium text-slate-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-3 mb-6 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-4 py-3 font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          >
            Sign Up
          </button>

          {/* Footer */}
          <p className="text-right text-slate-400 text-sm mt-6">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-purple-500 hover:text-purple-400 font-medium"
            >
              Sign In
            </Link>
          </p>
        </form>
        <button
          onClick={handleGoogle}
          className="full px-4 py-3 font-medium text-white bg-purple-600 rounded-lg cursor-pointer hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition mt-4"
        >
          Goole Login
        </button>
      </div>
    </div>
  );
};

export default Register;
