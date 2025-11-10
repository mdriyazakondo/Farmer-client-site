import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const MyInterests = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://krishilink-server-three.vercel.app/my-interests?userEmail=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <div className="p-4 min-h-[50vh] my-8">
      <h2 className="text-2xl font-bold mb-4">My Interests</h2>
      {products.length === 0 ? (
        <div className="flex-col flex items-center justify-center min-h-[40vh]">
          <p className="text-4xl font-semibold">No interests found.</p>

        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.cropId}
              className="border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{product.cropName}</h3>
              <p>
                <strong>Quantity:</strong> {product.interest.quantity}
              </p>
              <p>
                <strong>Message:</strong> {product.interest.message}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    product.interest.status === "pending"
                      ? "text-yellow-500"
                      : product.interest.status === "accepted"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {product.interest.status}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Submitted on:{" "}
                {new Date(product.interest.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInterests;
