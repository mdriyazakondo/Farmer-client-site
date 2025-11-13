import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router";
import { FaEdit, FaTrash } from "react-icons/fa";
import LoadingSpinner from "../Loading/Loading";
import UpdateCrop from "../UpdateCrop/UpdateCrop";
import Swal from "sweetalert2";

const MyPosts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCropId, setSelectedCropId] = useState(null);
  const { user } = useContext(AuthContext);

  const fetchProducts = async () => {
    if (!user?.email) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://krishilink-server-three.vercel.app/my-posted?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [user?.email, user?.accessToken]);

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this post!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirmDelete.isConfirmed) return;

    try {
      const res = await fetch(
        `https://krishilink-server-three.vercel.app/products/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      const result = await res.json();
      if (result.deletedCount > 0) {
        Swal.fire("Deleted!", "Your post has been removed.", "success");
        setProducts(products.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="py-10 px-3 sm:px-6 lg:px-10 relative min-h-[56vh]">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center text-green-500">
        My All Post
      </h2>
      {products?.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border border-gray-200 text-sm sm:text-base">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-3  whitespace-nowrap text-center">
                  Crop Image
                </th>
                <th className="px-4 py-3  whitespace-nowrap text-center">
                  Crop Name
                </th>
                <th className="px-4 py-3  whitespace-nowrap text-center">
                  Owner Name
                </th>
                <th className="px-4 py-3  whitespace-nowrap text-center">
                  Location
                </th>
                <th className="px-4 py-3  whitespace-nowrap text-center">
                  Type
                </th>
                <th className="px-4 py-3  whitespace-nowrap text-center">
                  Price
                </th>
                <th className="px-4 py-3  whitespace-nowrap text-center">
                  Quantity
                </th>
                <th className="px-4 py-3  whitespace-nowrap text-center">
                  Date
                </th>
                <th className="px-4 py-3 text-center whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {products.map((crop) => (
                <tr
                  key={crop._id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">
                    <img className="rounded-full w-10 h-10" src={crop.image} alt="" />
                  </td>
                  <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">
                    {crop.name}
                  </td>
                  <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">
                    {crop.owner.ownerName}
                  </td>
                  <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">
                    {crop.location}
                  </td>
                  <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">
                    {crop.type}
                  </td>
                  <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">
                    ${crop.pricePerUnit}
                  </td>
                  <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">
                    {crop.quantity} {crop.unit}
                  </td>
                  <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap">
                    {new Date(crop.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap text-center">
                    <div className="flex flex-nowrap justify-center gap-2">
                      <button
                        onClick={() => setSelectedCropId(crop._id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1 whitespace-nowrap cursor-pointer"
                      >
                        <FaEdit /> Edit
                      </button>

                      <button
                        onClick={() => handleDelete(crop._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1 whitespace-nowrap cursor-pointer"
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center flex items-center justify-center min-h-[60vh] flex-col px-4">
          <p className="text-gray-700 text-2xl sm:text-3xl md:text-5xl font-bold whitespace-nowrap">
            You haven’t made any posts yet.
          </p>
          <Link
            to="/addCrop"
            className="border py-2 px-5 bg-green-500 hover:bg-green-600 text-white font-medium text-lg sm:text-xl mt-6 rounded-md flex items-center gap-2 transition duration-200 whitespace-nowrap"
          >
            <FaEdit /> Add Post
          </Link>
        </div>
      )}

      {selectedCropId && (
        <div className="fixed inset-0 bg-green-50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl relative">
            <button
              onClick={() => setSelectedCropId(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-2xl cursor-pointer"
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Edit Crop Details
            </h2>

            <UpdateCrop
              id={selectedCropId}
              products={products.find((p) => p._id === selectedCropId)}
              onClose={() => {
                setSelectedCropId(null);
                fetchProducts();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPosts;
