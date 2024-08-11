import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import p1 from "../../assets/product/p1.png"
import p2 from '../../assets/product/p2.png';
import p3 from '../../assets/product/p3.png';
import p4 from '../../assets/product/p2.png';
import p5 from '../../assets/product/p3.png';
import p6 from '../../assets/product/p2.png';
import p7 from '../../assets/product/p3.png';
import p8 from '../../assets/product/p2.png';
import p9 from '../../assets/product/p3.png';

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
}

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);
  
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
              <p className="text-gray-700 mb-4">This is a short description of the product. It highlights the main features and benefits.</p>
              <p className="text-xl font-bold mb-4">{product.price}</p>
              <Link to={"/shop"}>
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
