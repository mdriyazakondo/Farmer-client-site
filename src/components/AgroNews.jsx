import React from "react";

const AgroNews = () => {
  const blogs = [
    {
      id: 1,
      title: "Sustainable Farming Techniques in 2025",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIgYh5Reoj8vIKYSz-PT7Zce4dTaFU5Ztng&s",
      description:
        "Learn about the latest eco-friendly methods to boost productivity and protect soil health.",
      date: "Nov 05, 2025",
    },
    {
      id: 2,
      title: "Top 5 Crops to Grow This Winter",
      image:
        "https://agriplanting.com/wp-content/uploads/2022/11/Winter-Season-Vegetables-2.jpg",
      description:
        "Discover which crops are most profitable and easy to maintain during the winter season.",
      date: "Oct 28, 2025",
    },
    {
      id: 3,
      title: "Digital Agriculture: The Future of Bangladesh",
      image:
        "https://pressxpress.org/wp-content/uploads/2023/01/Development-of-E-agriculture-in-Bangladesh-2.jpg",
      description:
        "Explore how technology is transforming the agricultural landscape across rural areas.",
      date: "Nov 02, 2025",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          📰 Agro News & Blogs
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay updated with the latest agricultural trends, news, and expert
          advice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-green-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 text-left"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <button className="text-green-700 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgroNews;
