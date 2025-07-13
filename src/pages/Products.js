import React, { useState } from "react";
import ProductItem from "../pages/ProductItem";

const Products = ({ data }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const categories = ["Men", "Women", "Kids"];
  const subcategories = ["Topwear", "Bottomwear", "Winterwear"];

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSubcategoryChange = (subCategory) => {
    if (selectedSubcategories.includes(subCategory)) {
      setSelectedSubcategories(
        selectedSubcategories.filter((s) => s !== subCategory)
      );
    } else {
      setSelectedSubcategories([...selectedSubcategories, subCategory]);
    }
  };

  const filteredProducts = data.filter((item) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);

    const subcategoryMatch =
      selectedSubcategories.length === 0 ||
      selectedSubcategories.includes(item.subCategory);

    return categoryMatch && subcategoryMatch;
  });

  return (
    <div className="pt-[100px] flex gap-8 px-8 py-6 items-start">
      <div className="w-64 border p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">CATEGORIES</h2>
        {categories.map((category) => (
          <div key={category} className="mb-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <span>{category}</span>
            </label>
          </div>
        ))}

        <h2 className="text-lg font-bold mt-6 mb-4">TYPES</h2>
        {subcategories.map((subCategory) => (
          <div key={subCategory} className="mb-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={subCategory}
                checked={selectedSubcategories.includes(subCategory)}
                onChange={() => handleSubcategoryChange(subCategory)}
              />
              <span>{subCategory}</span>
            </label>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item._id}>
              <ProductItem
                id={item._id}
                title={item.name}
                price={item.price}
                image={item.image}
              />
            </div>
          ))
        ) : (
          <p>No products</p>
        )}
      </div>
    </div>
  );
};

export default Products;

