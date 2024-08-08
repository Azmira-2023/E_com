import React from 'react';
import p1 from '../../assets/product/p1.png';
import p2 from '../../assets/product/p2.png';
import p3 from '../../assets/product/p3.png';
import p4 from '../../assets/product/p4.png';
import p5 from '../../assets/product/p5.png';
import p6 from '../../assets/product/p6.png';
import p7 from '../../assets/product/p7.png';
import p8 from '../../assets/product/p8.png';
import p9 from '../../assets/product/p9.png';
import { Link } from 'react-router-dom';


const products = [
  { id: 1, image: p1, name: 'Skincare Product', price: '$100' },
  { id: 2, image: p2, name: 'Perfium', price: '$120' },
  { id: 3, image: p3, name: 'Perfium', price: '$150' },
  { id: 4, image: p4, name: 'Tonner', price: '$180' },
  { id: 5, image: p5, name: 'Watch', price: '$200' },
  { id: 6, image: p6, name: 'Shoes', price: '$20' },
  { id: 7, image: p7, name: 'Watch', price: '$250' },
  { id: 8, image: p8, name: 'ladies Bag', price: '$130' },
  { id: 9, image: p9, name: 'Cosmetics', price: '$140' },
];

const Product = () => {
  return (
    <div className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform hover:transition-transform">
      {products.map((product) => (
        <div key={product.id} className="container bg-white p-6 rounded-lg shadow-lg ">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 flex justify-center ">
              <img
                src={product.image}
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
