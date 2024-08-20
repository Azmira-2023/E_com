import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query")?.toLowerCase();

    // Fetch all products from the API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setResults(data);

        // Filter products based on the search query
        if (query) {
          const filtered = data.filter(product =>
            product.title.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
          );
          setFilteredResults(filtered);
        } else {
          setFilteredResults(data);
        }
      })
      .catch((error) => console.error("Error fetching search results:", error));
  }, [location.search]);

  return (
    <div className="p-12 max-w-5xl mx-auto mt-4">
      <h1 className="bg-gray-100 text-center text-4xl">Search Product</h1>
      <div>
        {filteredResults.length > 0 ? (
          filteredResults.map((product) => (
            <div key={product.id} className="border p-4 mb-4">
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-semibold">${product.price}</p>
              <img src={product.image} alt={product.title} className="w-32 h-32 object-cover mt-2" />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
