import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, title, price, image }) => {
  return (
    <div className="p-4 flex flex-col items-center justify-start w-[230px] h-auto rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <img
        className="w-[200px] h-[200px] object-contain"
        src={image[0]}
        alt={title}
      />
      <h1 className="text-lg font-semibold text-center h-[50px] flex items-center justify-center mt-2">
        {title}
      </h1>
      <p className="text-center font-bold">${price}</p>

      <Link
        to={`/products/${id}`}
        className="mt-3 px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 text-center font-bold"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductItem;





