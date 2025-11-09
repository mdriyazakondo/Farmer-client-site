import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import CropCard from "../../components/CropCard";

const MyPosts = () => {
  const [products, setProducts] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/my-posted?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <CropCard key={product._id} products={product} />
          ))}
        </div>
      ) : (
        <p className="text-center col-span-full flex items-center justify-center min-h-[60vh] text-4xl md:text-5xl font-bold text-green-600">
          No crops found
        </p>
      )}
    </div>
  );
};

export default MyPosts;
