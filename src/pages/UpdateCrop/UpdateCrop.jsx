import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const UpdateCrop = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [crop, setCrop] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Load existing crop data
  useEffect(() => {
    const fetchCrop = async () => {
      try {
        const res = await fetch(
          `https://krishilink-server-three.vercel.app/products/${id}`
        );
        const data = await res.json();
        setCrop(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCrop();
  }, [id]);

  // ✅ Handle Update
  const handleUpdateCrop = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const updatedCrop = {
      name: form.name.value,
      type: form.type.value,
      pricePerUnit: parseFloat(form.pricePerUnit.value),
      unit: form.unit.value,
      quantity: parseInt(form.quantity.value),
      description: form.description.value,
      location: form.location.value,
      image: form.image.value,
    };

    try {
      const res = await fetch(
        `https://krishilink-server-three.vercel.app/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify(updatedCrop),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Crop updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(`/crops/${id}`);
      } else {
        Swal.fire({
          title: "No Changes!",
          text: "No changes were made to the crop.",
          icon: "info",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl my-10">
      <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">
        Update Crop
      </h2>

      {/* Show loading if data not loaded */}
      {!crop?.name ? (
        <p className="text-center text-gray-500">Loading crop details...</p>
      ) : (
        <form onSubmit={handleUpdateCrop} className="space-y-4">
          {/* Crop Name */}
          <div>
            <label className="block font-medium mb-1">Crop Name</label>
            <input
              type="text"
              name="name"
              defaultValue={crop.name}
              required
              placeholder="e.g. Tomato"
              className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block font-medium mb-1">Type</label>
            <select
              name="type"
              defaultValue={crop.type}
              required
              className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
            >
              <option value="">Select Type</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Fruit">Fruit</option>
              <option value="Grain">Grain</option>
            </select>
          </div>

          {/* Price & Unit */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Price per Unit</label>
              <input
                type="number"
                name="pricePerUnit"
                defaultValue={crop.pricePerUnit}
                required
                min="1"
                placeholder="e.g. 55"
                className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Unit</label>
              <select
                name="unit"
                defaultValue={crop.unit}
                required
                className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
              >
                <option value="">Select Unit</option>
                <option value="kg">kg</option>
                <option value="ton">ton</option>
                <option value="bag">bag</option>
              </select>
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-medium mb-1">Estimated Quantity</label>
            <input
              type="number"
              name="quantity"
              defaultValue={crop.quantity}
              required
              min="1"
              placeholder="e.g. 400"
              className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              defaultValue={crop.description}
              required
              rows="3"
              placeholder="Short details about the crop"
              className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border resize-none"
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={crop.location}
              required
              placeholder="e.g. Bogura"
              className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={crop.image}
              required
              placeholder="https://example.com/tomato.jpg"
              className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            {loading ? "Updating..." : "Update Crop"}
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateCrop;
