import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Productcart = ({ id, title, price, description, image }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle adding the product to the cart
  const handleAdd = (e) => {
    e.stopPropagation();
    const product = {
      id,
      title,
      price,
      image,
      description,
      quantity: 1,
    };
    dispatch(addToCart(product));
  };

  // Navigate to the product details page when the product card is clicked
  const handleProductDetails = () => {
    navigate(`/ProductDetails/${id}`);
  };

  return (
    <div
      className="border shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 rounded-lg cursor-pointer"
      onClick={handleProductDetails}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-Oswald mt-2">{title}</h3>
      <p className="text-red-700 mt-1">${price}</p>
      <button
        className="bg-red-500 text-white px-4 py-2 mt-2  hover:bg-red-700 rounded-lg"
        onClick={handleAdd}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Productcart;
