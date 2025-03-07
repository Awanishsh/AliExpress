import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  if (loading) {
    return <div className="flex justify-center py-6">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="flex justify-center py-6">
        <h1 className="font-bold text-3xl">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 object-cover"
        />
        <div className="md:ml-8 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-red-700 mt-4">${product.price}</p>
          <p className="text-md font-Oswald mt-4">{product.description}</p>
          <p>{product.rating?.rate}</p>
          <button
            className="bg-red-500 text-white px-4 py-2 mt-4 hover:bg-red-700 rounded-lg"
            onClick={handleAdd}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
