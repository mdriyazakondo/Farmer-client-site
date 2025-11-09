import React, { use, useState } from "react";
import Swal from "sweetalert2";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { fontgetPasswordUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        title: "Error ❌",
        text: "Please enter your email address",
        icon: "error",
      });
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        title: "Email Sent ✅",
        text: `Password reset link has been sent to ${email}. Check your inbox!`,
        icon: "success",
        confirmButtonColor: "#6366F1",
      });
      setEmail("");
      navigate("/login");
    } catch (error) {
      Swal.fire({
        title: "Failed ❌",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form
        onSubmit={handleReset}
        className="flex flex-col gap-4 w-80 sm:w-[352px] p-8 rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <h2 className="text-2xl font-medium text-center text-green-500">
          Reset Password
        </h2>

        <div className="w-full">
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded w-full p-2 outline-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-md transition"
        >
          {loading ? "Sending..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default Forget;
