import React from "react";
import ManCategory from "../Image/men-pic.jpg";
import WomanCategory from "../Image/women-pic.jpg";
import KidsCategory from "../Image/child-pic.jpg";

function CategorySection() {
  const categories = [
    { title: "Men", imageUrl: ManCategory },
    { title: "Women", imageUrl: WomanCategory },
    { title: "Kids", imageUrl: KidsCategory },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-500 group-hover:bg-opacity-60">
              <p className="text-white text-2xl font-bold uppercase tracking-wide">
                {category.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
