import React from "react";
import { GiFarmTractor } from "react-icons/gi";
import { FaPeopleCarry, FaSeedling } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          About <span className="text-green-600">KrishiLink</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          KrishiLink is a modern digital platform built to empower farmers,
          traders, and consumers by connecting them in one social agro network.
          It helps everyone in the agriculture community to share, grow, and
          trade in a transparent and collaborative way.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <GiFarmTractor className="text-5xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-800">
            Empowering Farmers
          </h3>
          <p className="text-gray-600">
            Farmers can share their crops, find buyers directly, and grow their
            business with digital visibility and trust.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaPeopleCarry className="text-5xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-800">
            Connecting Communities
          </h3>
          <p className="text-gray-600">
            KrishiLink builds a strong community where farmers, traders, and
            consumers collaborate directly — cutting out the middlemen.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaSeedling className="text-5xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-800">
            Sustainable Growth
          </h3>
          <p className="text-gray-600">
            Promoting fair trade, transparency, and innovation for a greener
            agricultural future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
