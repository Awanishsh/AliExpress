import React from "react";
import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";

function Infosection() {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600 " />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600 " />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600 " />,
      title: "100% Money Back",
      description: "Full refunt if you are not satisfied",
    },
    {
      icon: <FaTag className="text-3xl text-red-600 " />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
    {
      icon: <FaLock className="text-3xl text-red-600 " />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
  ];
  return (
    <div className=" pt-12 bd-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 boader rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {item.icon}
            <h3 className="mt-4 text-4 font-semibold ">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Infosection;
