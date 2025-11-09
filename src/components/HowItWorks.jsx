import React from "react";
import {
  FaUserPlus,
  FaSeedling,
  FaHandshake,
  FaMoneyBillWave,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-green-600 text-4xl" />,
      title: "1. Create an Account",
      description:
        "Sign up for free and set up your profile as a farmer or buyer.",
    },
    {
      icon: <FaSeedling className="text-green-600 text-4xl" />,
      title: "2. Post or Explore Crops",
      description:
        "Farmers can post crops for sale, and buyers can browse available products.",
    },
    {
      icon: <FaHandshake className="text-green-600 text-4xl" />,
      title: "3. Connect & Communicate",
      description:
        "Send interest requests and communicate directly through our platform.",
    },
    {
      icon: <FaMoneyBillWave className="text-green-600 text-4xl" />,
      title: "4. Trade & Grow",
      description:
        "Complete your deals, expand your network, and grow your business securely.",
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          🌱 How It Works
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          KrishiLink makes it easy for farmers and buyers to connect,
          communicate, and grow together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
