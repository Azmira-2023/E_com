import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import p1 from "../../assets/product/p1.png";
import p2 from '../../assets/product/p2.png';
import p3 from '../../assets/product/p3.png';
import p4 from '../../assets/product/p4.png';
import p5 from '../../assets/product/p5.png';
import p6 from '../../assets/product/p6.png';
import p7 from '../../assets/product/p7.png';
import p8 from '../../assets/product/p8.png';
import p9 from '../../assets/product/p9.png';

const imageMap = {
  'p1': p1,
  'p2': p2,
  'p3': p3,
  'p4': p4,
  'p5': p5,
  'p6': p6,
  'p7': p7,
  'p8': p8,
  'p9': p9,
};

const Product = () => {
  const [products] = useState([
    { _id: '1', name: 'Product 1', price: '$20', image: 'p1', description: 'This is a short description of product 1.' },
    { _id: '2', name: 'Product 2', price: '$30', image: 'p2', description: 'This is a short description of product 2.' },
    { _id: '3', name: 'Product 3', price: '$40', image: 'p3', description: 'This is a short description of product 3.' },
    { _id: '4', name: 'Product 4', price: '$50', image: 'p4', description: 'This is a short description of product 4.' },
    { _id: '5', name: 'Product 5', price: '$60', image: 'p5', description: 'This is a short description of product 5.' },
    { _id: '6', name: 'Product 6', price: '$70', image: 'p6', description: 'This is a short description of product 6.' },
    { _id: '7', name: 'Product 7', price: '$80', image: 'p7', description: 'This is a short description of product 7.' },
    { _id: '8', name: 'Product 8', price: '$90', image: 'p8', description: 'This is a short description of product 8.' },
    { _id: '9', name: 'Product 9', price: '$100', image: 'p9', description: 'This is a short description of product 9.' },
  ]);

  const addToCart = (product) => {
    // Logic to add product to cart
    console.log(`Added to cart: ${product.name}`);
    // You can add more code here to handle adding the product to the cart, like updating state or sending it to a backend
  };

  return (
    <div className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform hover:transition-transform">
      {products.map((product) => (
        <div key={product._id} className="container bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 flex justify-center">
              <img
                src={imageMap[product.image]} 
                alt={product.name}
                className="rounded-lg w-40 h-40 md:w-80 md:h-80"
              />
            </div>
            <div className="md:w-1/2 md:pl-6 mt-8">
              <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-xl font-bold mb-4">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Add to Cart
              </button>
              <Link to={"/cart"} className="block mt-4 text-blue-500">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
