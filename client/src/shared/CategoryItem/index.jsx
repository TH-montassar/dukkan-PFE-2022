import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <div className="flex flex-col items-center transition  ease-in-out duration-500 hover:rounded-lg hover:scale-110 bg-white w-1/5 h-max">
      <img
        className="object-contain"
        src={category.image}
        alt={category.slug}
      />
      <p className="h-1/2"> {category.title}</p>
    </div>
  );
};

export default CategoryItem;
