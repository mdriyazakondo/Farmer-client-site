import { useState, useContext } from "react";
import Swal from "sweetalert2"; // npm install sweetalert2
import { AuthContext } from "../../context/AuthProvider";

const AddCrop = () => {
  const { user } = useContext(AuthContext); // logged in user info
  const [loading, setLoading] = useState(false);

  const handleAddCrop = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = e.target;
      const newCrop = {
        name: form.name.value,
        type: form.type.value,
        pricePerUnit: parseFloat(form.pricePerUnit.value),
        unit: form.unit.value,
        quantity: parseInt(form.quantity.value),
        description: form.description.value,
        location: form.location.value,
        image: form.image.value,
        owner: {
          ownerEmail: user.email,
          ownerName: user.displayName,
        },
        interests: [],
      };

      const res = await fetch(
        "https://krishilink-server-three.vercel.app/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify(newCrop),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Crop added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        form.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to add crop. Try again later.",
          icon: "error",
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
        Add New Crop
      </h2>

      <form onSubmit={handleAddCrop} className="space-y-4">
        {/* Crop Name */}
        <div>
          <label className="block font-medium mb-1">Crop Name</label>
          <input
            type="text"
            name="name"
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
          {loading ? "Adding..." : "Add Crop"}
        </button>
      </form>
    </div>
  );
};

export default AddCrop;
