import React from "react";
import { useNavigate } from "react-router"; // ✅ for navigation

const CropCard = ({ products }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/crops/${products._id}`);
  };

  return (
    <div className="border border-green-300 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5  my-6">
      {/* Image */}
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={products.image}
          alt={products.name}
          className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Name */}
      <div className="flex items-center gap-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-1">
          {products.name}
        </h2>
        <p className="text-green-600 bg-green-100 rounded-full px-5 py-1 italic ">
          {products.type}
        </p>
      </div>

      {/* Details */}
      <div className="space-y-2 text-gray-700">
        <div>
          <span className="font-medium text-green-700">Price per Unit:</span>{" "}
          {products.pricePerUnit} / {products.unit}
        </div>

        <div>
          <span className="font-medium text-green-700">Quantity:</span>{" "}
          {products.quantity}
        </div>

        <div>
          <span className="font-medium text-green-700">Location:</span>{" "}
          {products.location}
        </div>

        <div>
          <span className="font-medium text-green-700">Owner:</span>{" "}
          {products.owner?.ownerName}
        </div>

        <div>
          <span className="font-medium text-green-700">Description:</span>{" "}
          <span className="text-gray-600">
            {products.description.slice(0, 90)}...
          </span>
        </div>
      </div>

      {/* View Details Button */}
      <div className="mt-6 text-center w-full">
        <button
          onClick={handleViewDetails}
          className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full font-medium shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 w-full cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CropCard;
