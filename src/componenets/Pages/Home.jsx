import React, { useEffect, useState } from "react";
import pic1 from "../../Image/pic1.jpg";
import pic11 from "../../Image/pic11.jpg";
import pic12 from "../../Image/pic12.jpg";
import Infosection from "../Infosection";
import Categorysection from "../Categorysection";
import Productcart from "../Productcart";

const Home = () => {
  const API = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);

  // Fetching product data from API
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  return (
    <div className="mt-16 px-2 md:px-8 lg:px-12">
      {/* Carousel Section */}
      <div className="container mx-auto py-4 flex flex-col">
        <div className="w-full relative">
          <div className="carousel w-full">
            {[pic1, pic11, pic12, pic1].map((image, index) => (
              <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
                <img src={image} className="w-full h-[300px] md:h-[500px] object-cover" alt={`Slide ${index + 1}`} />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href={`#slide${index === 0 ? 4 : index}`} className="btn btn-circle">❮</a>
                  <a href={`#slide${index === 3 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                </div>
              </div>
            ))}
          </div>
          {/* Text Overlay */}
          <div className="absolute top-12 left-20 bg-black bg-opacity-50 p-4 rounded-md">
            <h2 className="text-2xl md:text-3xl font-Oswald font-bold text-red-400">WELCOME TO ALIEXPRESS</h2>
            <p className="text-md md:text-xl mt-2.5 font-Oswald font-bold text-gray-200">MILLIONS OF PRODUCTS</p>
            <p className="text-sm md:text-lg mt-1 font-Oswald text-gray-300">Fast shipping, easy returns, and the best deals on top brands.</p>
            <p className="text-sm md:text-lg mt-1 font-Oswald text-gray-300">Shop with confidence and enjoy hassle-free shopping!</p>
          </div>
        </div>
      </div>

      <Categorysection />

      {/* Top Products Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((item) => (
            <Productcart
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="pb-10">
        <Infosection />
      </div>
    </div>
  );
};

export default Home;