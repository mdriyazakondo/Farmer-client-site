import React, { useState } from "react";
import { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";

const UpdateCrop = ({  onClose, products }) => {
  const [loading, setLoading] = useState(false);
  const { user } = use(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const updatedCrop = {
      name: form.name.value,
      type: form.type.value,
      pricePerUnit: form.pricePerUnit.value,
      unit: form.unit.value,
      quantity: form.quantity.value,
      description: form.description.value,
      location: form.location.value,
      image: form.image.value,
    };

    try {
      const res = await fetch(
        `https://krishilink-server-three.vercel.app/products/${products._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify(updatedCrop),
        }
      );
      const result = await res.json();

      if (result.modifiedCount > 0) {
        Swal.fire(
          "Updated!",
          "Your crop has been updated successfully.",
          "success"
        );
        onClose(); 
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Crop Name</label>
        <input
          type="text"
          name="name"
          defaultValue={products?.name}
          required
          className="input input-bordered w-full border-gray-300 rounded-lg p-2 border "
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Type</label>
        <select
          name="type"
          defaultValue={products?.type}
          required
          className="input input-bordered w-full border-gray-300 rounded-lg p-2 border "
        >
          <option value="">Select Type</option>
          <option value="Vegetable">Vegetable</option>
          <option value="Fruit">Fruit</option>
          <option value="Grain">Grain</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Price per Unit</label>
          <input
            type="number"
            name="pricePerUnit"
            defaultValue={products?.pricePerUnit}
            required
            className="input input-bordered w-full border-gray-300 rounded-lg p-2 border "
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Unit</label>
          <select
            name="unit"
            defaultValue={products?.unit}
            required
            className="input input-bordered w-full border-gray-300 rounded-lg p-2 border "
          >
            <option value="">Select Unit</option>
            <option value="kg">kg</option>
            <option value="ton">ton</option>
            <option value="bag">bag</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Estimated Quantity</label>
        <input
          type="number"
          name="quantity"
          defaultValue={products?.quantity}
          required
          className="input input-bordered w-full border-gray-300 rounded-lg p-2 border "
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          name="description"
          defaultValue={products?.description}
          required
          rows="3"
          className="input input-bordered w-full border-gray-300 rounded-lg p-2 border  resize-none"
        ></textarea>
      </div>

      <div>
        <label className="block font-medium mb-1">Location</label>
        <input
          type="text"
          name="location"
          defaultValue={products?.location}
          required
          className="input input-bordered w-full border-gray-300 rounded-lg p-2 border "
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Image URL</label>
        <input
          type="text"
          name="image"
          defaultValue={products?.image}
          required
          className="input input-bordered w-full border-gray-300 rounded-lg p-2 border "
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        {loading ? "Updating..." : "Update Crop"}
      </button>
    </form>
  );
};

export default UpdateCrop;
