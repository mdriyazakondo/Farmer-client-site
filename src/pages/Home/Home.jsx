import React from "react";
import Banner from "../../components/Banner";
import { Link, useLoaderData } from "react-router";
import CropCard from "../../components/CropCard";
import AboutSection from "../../components/AboutSection";
import BlogSection from "../../components/BlogSection ";
import HowItWorks from "../../components/HowItWorks";
import AgroNews from "../../components/AgroNews";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  const products = useLoaderData();
  return (
    <div className="w-full">
      <Banner />
      <h4 className="my-6 text-center text-4xl font-semibold text-gray-700">
        Latest Crops Products
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <CropCard key={product._id} products={product} />
        ))}
      </div>
      <div className="text-center my-8">
        <Link
          to={"/all-crop"}
          className="bg-green-600 text-white py-2.5 px-5 rounded-md"
        >
          Show All Products
        </Link>
      </div>
      <HowItWorks />
      <AgroNews />
      <AboutSection />
      <Testimonials />
    </div>
  );
};

export default Home;
