import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Shop = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  let componentMounted = true;
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        const fetchedData = await response.clone().json();
        setData(fetchedData);
        setFilter(fetchedData);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const filterProduct = (category) => {
    if (category === "all") {
      setFilter(data);
    } else {
      const updatedList = data.filter((item) => item.category === category);
      setFilter(updatedList);
    }
  };

  const addProductToCart = (product) => {
    setCart([...cart, product]);
    navigate("/cart"); // Navigate to the cart page
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const Loading = () => (
    <div className="text-center py-5">Loading...</div>
  );

  const ShowProducts = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filter.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden ">
          <img
            className="w-full h-fit object-cover p-8 mt-2"
            src={product.image}
            alt={product.title}
          />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">
              {product.title.substring(0, 12)}...
            </h5>
            <p className="text-gray-700 mb-4">
              {product.description.substring(0, 90)}...
            </p>
            <ul className="mb-4">
              <li className="text-lg font-bold">$ {product.price}</li>
            </ul>
            <div className="flex justify-center gap-4">
              <Link
                to={`/product/${product.id}`}
                className="bg-teal-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Details
              </Link>
              <button
                className="bg-teal-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => addProductToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto my-3 py-6">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold uppercase">Shop by Category</h2>
        <hr className="border-b-2 border-gray-300 mt-2 w-20 mx-auto" />
      </div>
      
      {/* Buttons for Category Selection */}
      <div className="flex justify-center py-5 flex-wrap gap-6 text-2xl">
        <button
          className="bg-gray-800 text-white hover:bg-gray-600 px-4 py-2 rounded m-2"
          onClick={() => filterProduct("all")}
        >
          All
        </button>
        <button
          className="bg-gray-800 text-white hover:bg-gray-600 px-4 py-2 rounded m-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men
        </button>
        <button
          className="bg-gray-800 text-white hover:bg-gray-600 px-4 py-2 rounded m-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women
        </button>
        <button
          className="bg-gray-800 text-white hover:bg-gray-600 px-4 py-2 rounded m-2"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelry
        </button>
        <button
          className="bg-gray-800 text-white hover:bg-gray-600 px-4 py-2 rounded m-2"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
      </div>
      
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold">Latest Products</h2>
        <hr className="border-b-2 border-gray-300 mt-2 w-20 mx-auto" />
      </div>

      {/* Product Grid */}
      <div className="flex justify-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Shop;
