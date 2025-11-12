import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import LoadingSpinner from "../Loading/Loading";

const MyInterests = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(
      `https://krishilink-server-three.vercel.app/my-interests?userEmail=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-3 sm:p-4 md:p-6 min-h-[50vh] my-6 sm:my-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
        My Interests
      </h2>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
            No interests found.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="w-full border border-gray-200 text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr className="whitespace-nowrap">
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left">
                  #
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left">
                  Crop Name
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left">
                  Quantity
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left">
                  Message
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left">
                  Status
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left">
                  Submitted On
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.cropId}
                  className="hover:bg-gray-50 transition whitespace-nowrap"
                >
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b">
                    {index + 1}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b font-medium">
                    {product.cropName}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b">
                    {product.interest.quantity}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b">
                    {product.interest.message || "-"}
                  </td>
                  <td
                    className={`py-2 sm:py-3 px-2 sm:px-4 border-b font-semibold ${
                      product.interest.status === "pending"
                        ? "text-yellow-500"
                        : product.interest.status === "accepted"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {product.interest.status}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b text-gray-500 text-xs sm:text-sm">
                    {new Date(product.interest.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyInterests;
