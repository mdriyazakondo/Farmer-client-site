import React, { useEffect, useState } from "react";
import CropCard from "../../components/CropCard";
import LoadingSpinner from "../Loading/Loading";
import { FaSearch } from "react-icons/fa";

const CropAllProducts = () => {
  const [allProduct, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; 

  useEffect(() => {
    fetch("https://krishilink-server-three.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleOnsubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value.trim();
    if (!search) return;

    setLoading(true);
    fetch(`https://krishilink-server-three.vercel.app/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setCurrentPage(1); 
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  if (loading) return <LoadingSpinner />;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(allProduct.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="px-5 md:px-0 py-8">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-6">
        KrishiLink Farmer’s All Crops
      </h3>


      <form
        onSubmit={handleOnsubmit}
        className="flex items-center gap-2 relative justify-center mx-auto w-full md:w-1/2 lg:w-1/3 mb-10"
      >
        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="search"
          name="search"
          placeholder="Search crops..."
          className="w-full py-2 px-12 rounded-full border border-green-600 outline-none focus:ring-2 focus:ring-green-400 transition"
        />
        <button
          type="submit"
          className="absolute right-0 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-r-full transition cursor-pointer"
        >
          Search
        </button>
      </form>

      {currentProducts?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <CropCard key={product._id} products={product} />
            ))}
          </div>
          <div className="flex justify-center mt-10 gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-md border transition ${
                  currentPage === i + 1
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white border-gray-300 hover:bg-green-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center col-span-full flex items-center justify-center min-h-[60vh] text-4xl md:text-5xl font-bold text-green-600">
          No crops found
        </p>
      )}
    </div>
  );
};

export default CropAllProducts;
