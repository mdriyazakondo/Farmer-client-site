import React from "react";

const blogs = [
  {
    id: 1,
    title: "How Technology is Transforming Modern Farming",
    image: "https://i.ibb.co/pzC9xxz/farming-tech.jpg",
    author: "Agro Journal",
    date: "November 2025",
    desc: "From AI to IoT sensors, digital tools are helping farmers make data-driven decisions for better crop yields and sustainability.",
  },
  {
    id: 2,
    title: "Top 5 Organic Fertilizers for Better Soil Health",
    image: "https://i.ibb.co/tZPstN2/organic-fertilizer.jpg",
    author: "Green Farm Blog",
    date: "October 2025",
    desc: "Learn about natural fertilizers that enhance soil fertility and crop productivity without harming the environment.",
  },
  {
    id: 3,
    title: "Connecting Farmers to Markets – The Power of KrishiLink",
    image: "https://i.ibb.co/fCjYyqK/farmers-market.jpg",
    author: "KrishiLink Insights",
    date: "September 2025",
    desc: "KrishiLink bridges the gap between growers and buyers, making agriculture more social and transparent.",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Agro News & Blogs
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest trends, techniques, and innovations in
          the world of agriculture.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-green-50 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">{blog.desc}</p>
              <div className="text-sm text-gray-500">
                <span>By {blog.author}</span> • <span>{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
