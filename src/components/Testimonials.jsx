import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Abdul Rahman",
      location: "Bogura",
      image: "https://i.ibb.co/hVL3Wh2/farmer1.jpg",
      feedback:
        "KrishiLink helped me connect with reliable buyers. I sold all my tomato crops faster and got better prices than ever before!",
    },
    {
      id: 2,
      name: "Mitu Begum",
      location: "Rajshahi",
      image: "https://i.ibb.co/vZxMK9g/farmer2.jpg",
      feedback:
        "Before KrishiLink, I had to rely on middlemen. Now, I directly connect with customers and get fair deals for my mangoes.",
    },
    {
      id: 3,
      name: "Kamal Uddin",
      location: "Mymensingh",
      image: "https://i.ibb.co/3WbshW5/farmer3.jpg",
      feedback:
        "Thanks to KrishiLink, I expanded my dairy business. I can now deliver my products to city markets without hassle!",
    },
  ];

  return (
    <section className="py-16 bg-green-50 my-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          🌿 What Our Farmers Say
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Farmers and buyers across Bangladesh trust KrishiLink to grow their
          agricultural businesses and connect with genuine partners.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 text-left transition-all duration-300 relative"
            >
              <FaQuoteLeft className="text-green-200 text-4xl absolute top-4 right-6" />
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 object-cover rounded-full border-2 border-green-600"
                />
                <div>
                  <h3 className="text-lg font-semibold text-green-700">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{review.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
