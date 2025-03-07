import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

function FilterData() {
  const { searchTerm } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.product);

  // Fetch products from the Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle Add to Cart
  const handleAdd = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // If product exists, increase the quantity
      dispatch(
        addToCart({ ...product, quantity: existingProduct.quantity + 1 })
      );
    } else {
      // Add new product to the cart with quantity 1
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm && products.length > 0) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filteredProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Search Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 rounded-lg"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                <p className="text-red-700 mt-1 text-lg font-semibold">
                  ${product.price}
                </p>
                <div className="flex flex-col space-y-4 mt-4">
                  <button
                    className="bg-red-500 text-white px-4 py-2 hover:bg-red-700 rounded-lg"
                    onClick={() => handleAdd(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 hover:bg-gray-700 rounded-lg"
                    onClick={handleBack}
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center py-6">
          <h1 className="font-bold text-3xl">No Products Found</h1>
        </div>
      )}
    </div>
  );
}

export default FilterData;
