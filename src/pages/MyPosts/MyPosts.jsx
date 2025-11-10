import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import CropCard from "../../components/CropCard";
import { Link } from "react-router";
import { FaEdit } from "react-icons/fa";

const MyPosts = () => {
  const [products, setProducts] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(
      `https://krishilink-server-three.vercel.app/my-posted?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
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
        <div className="text-center col-span-full flex items-center justify-center min-h-[60vh]   flex-col">
          <p className="text-gray-600 text-4xl md:text-5xl font-bold">
            {" "}
            You have not make any post.
          </p>
          <Link
            to={"/addCrop"}
            className="border py-2 px-5 bg-green-500 text-white font-medium text-xl mt-6 rounded-md flex items-center gap-1"
          >
            <FaEdit /> Add Post
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyPosts;
