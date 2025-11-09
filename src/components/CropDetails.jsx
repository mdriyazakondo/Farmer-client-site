import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import LoadingSpinner from "../pages/Loading/Loading";

const CropDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ loading state
  const [error, setError] = useState(null); // ✅ error state

  useEffect(() => {
    if (!user?.accessToken) return;

    fetch(`http://localhost:3000/products/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product data");
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.name) {
          setProduct(data);
        } else {
          setProduct(null);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id, user]);

  // 🟣 Loading State
  if (loading) {
    return <LoadingSpinner />;
  }

  // 🔴 Error or Not Found State
  if (error || !product) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-3">
          Product Not Found 😢
        </h2>
        <p className="text-gray-600">
          Sorry, we couldn’t find the crop details you were looking for.
        </p>
      </div>
    );
  }

  // ✅ Product Found → Show Details
  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg flex  gap-6">
      <div className=" w-full md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full  object-cover rounded-lg mb-6"
        />
      </div>
      <div className="space-y-3 text-gray-700 w-full md:w-1/2 ">
        <h1 className="text-3xl font-bold text-purple-700 mb-4 ">
          {product.name}
        </h1>
        <p>
          <span className="font-medium text-purple-700">Type:</span>{" "}
          {product.type}
        </p>
        <p>
          <span className="font-medium text-purple-700">Price:</span>{" "}
          {product.pricePerUnit} / {product.unit}
        </p>
        <p>
          <span className="font-medium text-purple-700">Quantity:</span>{" "}
          {product.quantity}
        </p>
        <p>
          <span className="font-medium text-purple-700">Location:</span>{" "}
          {product.location}
        </p>
        <p>
          <span className="font-medium text-purple-700">Owner:</span>{" "}
          {product.owner?.ownerName} ({product.owner?.ownerEmail})
        </p>
        <p>
          <span className="font-medium text-purple-700">Description:</span>{" "}
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default CropDetails;
