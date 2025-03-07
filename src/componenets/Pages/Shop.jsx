import React, { useEffect, useState } from "react";
import { addToCart } from "../../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const Shop = () => {
  const dispatch = useDispatch();

  const [shopcard, setShopcard] = useState([]);

  const API = "https://fakestoreapi.com/products";

  // Fetch data from the API
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setShopcard(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  // Fetch cart items from Redux to check if the item is already in the cart
  const cartItems = useSelector((state) => state.cart.product);

  // Handle adding product to the cart
  const handleAdd = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    

    if (existingProduct) {
      dispatch(
        addToCart({ ...product, quantity: existingProduct.quantity + 1 })
      );
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  // Navigate to product details

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shopcard.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
              <p className="text-red-500 mb-4">${item.price}</p>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                onClick={() => handleAdd(item)}
              >
                Add to Cart
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
