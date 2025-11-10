import React, { useState } from "react";
import Swal from "sweetalert2";

const OwnerTable = ({ interests: initialInterests, cropId, user }) => {
  const [interests, setInterests] = useState(initialInterests || []);

  const updateInterestStatus = async (interestId, status) => {
    try {
      const res = await fetch(
        `https://krishilink-server-three.vercel.app/products/${cropId}/interests/${interestId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user?.accessToken}`,
          },
          body: JSON.stringify({ status: status.toLowerCase() }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: `Interest ${status}`,
          showConfirmButton: false,
          timer: 1500,
        });

        setInterests((prev) =>
          prev.map((i) =>
            i._id === interestId ? { ...i, status: status.toLowerCase() } : i
          )
        );
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message || "Something went wrong",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Server error. Try again later.",
      });
      console.error(err);
    }
  };

  if (!interests || interests.length === 0) {
    return (
      <div className="max-w-5xl mx-auto mt-10 bg-white shadow-md rounded-xl overflow-hidden mb-8">
        <h2 className="text-2xl font-semibold text-green-700 p-5 border-b">
          Interest Requests
        </h2>
        <p className="p-4 text-center text-gray-500">No interests yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow-md rounded-xl overflow-hidden mb-8">
      <h2 className="text-2xl font-semibold text-green-700 p-5 border-b">
        Interest Requests
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse table-auto">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Buyer Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Message</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {interests.map((item) => (
              <tr
                key={item._id}
                className="border-b hover:bg-green-50 transition"
              >
                <td className="py-3 px-4 whitespace-nowrap">{item.userName}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {item.userEmail}
                </td>
                <td className="py-3 px-4">{item.message}</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "accepted"
                        ? "bg-green-100 text-green-700"
                        : item.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-4 text-center flex justify-center gap-2 flex-wrap">
                  {item.status === "pending" ? (
                    <>
                      <button
                        className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                        onClick={() =>
                          updateInterestStatus(item._id, "Accepted")
                        }
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                        onClick={() =>
                          updateInterestStatus(item._id, "Rejected")
                        }
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-500">Action done</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnerTable;
