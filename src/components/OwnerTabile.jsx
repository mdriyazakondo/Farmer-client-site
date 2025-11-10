import React, { useEffect, useState } from "react";

const OwnerTabile = ({ interests }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow-md rounded-xl overflow-hidden mb-8">
      <h2 className="text-2xl font-semibold text-green-700 p-5 border-b">
        Interest Requests
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
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
                <td className="py-3 px-4">{item.buyerName}</td>
                <td className="py-3 px-4">{item.buyerEmail}</td>
                <td className="py-3 px-4">{item.message}</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "Accepted"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 mr-2"
                    onClick={() => alert(`Accepted ${item.buyerName}`)}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                    onClick={() => alert(`Rejected ${item.buyerName}`)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnerTabile;
