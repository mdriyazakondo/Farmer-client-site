import React, { use, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import LoadingSpinner from "../Loading/Loading";

const MyProfile = () => {
  const { user, loading, setLoading } = use(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();
    setLoading(true);
    updateProfile(user, { displayName: name, photoURL: photo })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="flex items-center justify-center min-h-[56vh] flex-col ">
      <div className="flex items-center justify-center flex-col border space-y-3  py-10 px-16 rounded-sm border-green-300 bg-green-100">
        <img className="rounded-full w-32 h-32" src={user.photoURL} alt="" />
        <div className="text-center mt-2 text-green-600">
          <h4>{user.displayName}</h4>
          <p>{user.email}</p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`px-6 py-2 bg-green-600 text-white cursor-pointer ${
            isOpen ? "hidden" : "flex"
          }`}
        >
          Update
        </button>
        <form
          onSubmit={handleUpdate}
          className={`space-y-3 ${isOpen ? "block" : "hidden"}`}
        >
          <div className="w-[280px]">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              placeholder="Your Name"
              required
              className="border w-full rounded-md outline-none  py-2 px-4 border-green-500"
            />
          </div>
          <div className="w-[280px]">
            <label>Your Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={user.photoURL}
              required
              placeholder="Your Photo"
              className="border w-full rounded-md outline-none  py-2 px-4 border-green-500"
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 w-full bg-green-600 text-white rounded-md cursor-pointer"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
