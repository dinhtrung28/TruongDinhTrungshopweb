



import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ data }) => {
  const bestsellers = data.filter(product => product.bestseller === true);

  const grouped = data.reduce((acc, product) => {
    const category = product.category || 'Uncategorized';
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  return (
    
    <div className="min-h-screen flex flex-col pt-[100px]">
    
      <div className="bg-blue-600 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="mt-2">Find the best deals on top products</p>
        <Link to="/products">
          <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">
            Shop Now
          </button>
        </Link>
      </div>

  
      {bestsellers.length > 0 && (
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-red-600"> Bestsellers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bestsellers.map(product => (
              <Link
                to={`/products/${product._id}`}
                key={product._id}
                className="border p-2 rounded hover:shadow-md mb-[40px]"
              >
                <img
                  src={product.image?.[0] || ""}
                  alt={product.name}
                  className="w-full h-full object-cover rounded"
                />
                <h3 className="mt-2 font-medium">{product.name}</h3>
                <p>${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

     
      {Object.entries(grouped).map(([category, products]) => (
        <div key={category} className="p-6">
          <h2 className="text-xl font-semibold mb-2 capitalize">{category} Collection</h2>
          {products.length === 0 ? (
            <p className="text-gray-500 italic">No products in this category yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map(product => (
                <Link
                  to={`/products/${product._id}`}
                  key={product._id}
                  className="border p-2 rounded hover:shadow-md mb-[40px]"
                >
                  <img
                    src={product.image?.[0] || ""}
                    alt={product.name}
                    className="w-full h-full object-cover rounded"
                  />
                  <h3 className="mt-2 font-medium">{product.name}</h3>
                  <p>${product.price}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        <p>&copy; THANK YOU FOR VISITING OUR APP</p>
      </footer>
    </div>
  );
};

export default Home;







