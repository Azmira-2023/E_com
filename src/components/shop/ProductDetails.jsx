import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getProduct = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await response.json();
          setProduct(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching product:", error);
          setLoading(false);
        }
      };
  
      getProduct();
    }, [id]);
  
    if (loading) {
      return <div className="text-center py-5">Loading...</div>;
    }
  
    if (!product) {
      return <div className="text-center py-5">Product not found</div>;
    }
  
    return (
      <div className="container mx-auto py-6 p-12 bg-gray-100 mt-4">
        <div className="flex flex-col md:flex-row">
          <img
            className="w-full md:w-1/2 h-fit object-cover"
            src={product.image}
            alt={product.title}
          />
          <div className="md:w-1/2 justify-center items-center mt-16 gap-4 p-16">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-semibold mb-4">Price: ${product.price}</p>
            <button
              className="bg-teal-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-2xl"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
  )
}

export default ProductDetails