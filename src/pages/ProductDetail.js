


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ data }) => {
  const [productData, setProductData] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    if (data && id) {
      const foundProduct = data.find((item) => item._id === id);
      setProductData(foundProduct);
    }
  }, [data, id]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const addToCart = () => {
    if (!productData || !selectedSize || quantity <= 0) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(
      (item) => item.id === productData._id && item.size === selectedSize
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: productData._id,
        title: productData.name,
        price: productData.price,
        image: productData.image[0],
        size: selectedSize,
        quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Added to cart!");
    setQuantity(1); // Reset quantity after adding
  };

  if (!productData) {
    return <p className="mt-[140px] text-center">Loading...</p>;
  }

  return (
    <div className="pt-[100px] flex justify-center mt-[50px]">
      <div className="flex gap-12 flex-cols sm:gap-12 sm:flex-row">
        <img
          className="mr-[50px] rounded-[15px] ml-[30px]"
          src={productData.image[0]}
          alt={productData.name}
        />
        <div className="ml-[50px] mt-[50px] mr-[30px]">
          <h1 className="font-bold text-[30px]">{productData.name}</h1>

          <div className="mt-[50px]">
            <p className="mb-2"><b>Sizes:</b></p>
            <div className="flex gap-3">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`w-[40px] h-[40px] rounded border text-sm font-semibold ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize && (
              <p className="mt-2 text-green-600">Selected size: {selectedSize}</p>
            )}
          </div>

          <p className="mt-[30px] text-[20px]"><b>Price</b>: ${productData.price}</p>
          <p className="mt-[20px]">{productData.description}</p>

          {/* Quantity Input */}
          <div className="mt-[30px]">
            <label className="mr-2 font-semibold">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 px-2 py-1 border rounded"
            />
          </div>

          <button
            onClick={addToCart}
            disabled={!selectedSize}
            className="bg-red-600 mt-[30px] text-white w-[300px] h-[40px] rounded-[15px] font-bold hover:bg-red-700 disabled:opacity-50"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

