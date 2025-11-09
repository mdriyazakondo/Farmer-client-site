import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUserFunc, signInGooleUserFunc } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUserFunc(email, password)
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
    <div className="flex items-center justify-center min-h-[80vh] ">
      <div className="flex flex-col justify-center w-full max-w-md rounded-2xl px-8 py-10 border border-slate-800 bg-slate-900 text-white shadow-xl">
        <h2 className="text-3xl font-semibold text-center">Sign In</h2>
        <p className="text-slate-400 mt-1 text-center">Login to your account</p>

        <form onSubmit={handleSubmit} className="mt-8">
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
            className="w-full p-3 mb-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />

          <div className="text-right mb-6">
            <Link
              to={"/forget"}
              className="text-sm font-medium text-purple-500 hover:text-purple-400"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 font-medium text-white bg-purple-600 rounded-lg cursor-pointer hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          >
            Sign In
          </button>
          <p className="my-3 text-right text-sm font-medium flex gap-2 items-end justify-end">
            please create user ?{" "}
            <Link to={"/register"} className="text-purple-500">
              Sign Up
            </Link>
          </p>
        </form>

        <button
          onClick={handleGoogle}
          className="full px-4 py-3 font-medium text-white bg-purple-600 rounded-lg cursor-pointer hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        >
          Goole Login
        </button>
      </div>
    </div>
  );
};

export default Login;
