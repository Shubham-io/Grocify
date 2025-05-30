import React from "react";
import { assets, categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { navigate } = useAppContext();
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              style={{ backgroundColor: category.bgColor }}
              className="flex flex-col items-center justify-center bg-white rounded-2xl shadow py-4 px-3 gap-2 "
              onClick={() => {
                navigate(`/products/${category.path.toLowerCase()}`);
              }}
            >
              <div className="w-18 h-18 md:w-24 md:h-24 mb-2">
                <img
                  src={category.image}
                  alt={category.text}
                  className="w-full h-full object-contain transition-all  hover:scale-110  duration-100"
                />
              </div>
              <p className="text-sm    text-center">{category.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
