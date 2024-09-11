"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentColor, setCurrentColor] = useState(null);
  const [showMessage, setShowMessage] = useState(false); // State for the confirmation message
  const searchRef = useRef(null);

  const handleSearch = async () => {
    if (query.trim() === "") {
      setResults([]);
      setNoResults(false);
      setIsOpen(false);
      return;
    }
    try {
      const response = await axios.get(`/api/products`);
      const products = response.data;

      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );

      if (filteredProducts.length === 0) {
        setNoResults(true);
        setResults([]);
      } else {
        setResults(filteredProducts);
        setNoResults(false);
      }
      setError(null);
      setIsOpen(true);
    } catch (err) {
      console.error("Error searching products:", err);
      setError("ไม่สามารถค้นหาสินค้าได้");
      setResults([]);
      setNoResults(false);
    }
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.trim() === "") {
      setResults([]);
      setNoResults(false);
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleColorSelect = (color) => {
    setCurrentColor(color);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentColor(product.colors[0]); // Set default color
  };

  const onAddToCart = (product, color) => {
    // Retrieve existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Create a new cart item with selected color
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrls: product.imageUrls,
      colors: product.colors,
      selectedColor: color.hexCode,
      quantity: 1 // Default quantity to 1
    };

    // Add the new item to the cart
    cartItems.push(newItem);

    // Save the updated cart items to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Show confirmation message
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide the message after 3 seconds
    setSelectedProduct(null); // Close the modal
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className="relative mb-4">
      <div className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className={`border rounded-lg p-2 flex-grow transition-transform duration-300 ${
            isOpen ? "ml-10" : "ml-0"
          }`}
        />
        <button
          onClick={handleSearch}
          className="text-gray-600 p-2 ml-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
        >
          <FaSearch size={20} />
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {noResults && !error && (
        <p className="absolute top-12 left-0 w-full text-center text-gray-600">
          ไม่มีสินค้าตรงตามคำค้นหา
        </p>
      )}
      {results.length > 0 && !noResults && (
        <div
          className={`absolute top-12 left-0 w-full bg-white shadow-lg z-10 rounded-lg transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="list-none p-4">
            {results.map((product) => (
              <li
                key={product.id}
                className="mb-4 flex items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors"
              >
                <button
                  onClick={() => handleProductClick(product)}
                  className="flex items-center w-full"
                >
                  <img
                    src={
                      product.selectedColor
                        ? product.selectedColor.imageUrl
                        : product.imageUrls[0]
                    }
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-md shadow-sm mr-4"
                  />
                  <div className="w-full">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Display the selected product in a modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-600 text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <div className="w-full flex flex-col items-center">
              <div className="relative w-full h-80 bg-transparent flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={
                    currentColor
                      ? currentColor.imageUrl
                      : selectedProduct.imageUrls[0]
                  }
                  alt={selectedProduct.name}
                />
              </div>
              <div className="flex justify-center mt-2 mb-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => handleColorSelect(color)}
                    style={{ backgroundColor: color.hexCode }}
                    className="w-6 h-6 rounded-full border-none cursor-pointer focus:outline-none mx-1 transition-transform transform hover:scale-125 hover:shadow-lg"
                  />
                ))}
              </div>
              <div className="pt-3 w-full">
                <div className="flex items-center justify-between">
                  <p className="text-gray-900 text-lg font-semibold">{selectedProduct.name}</p>
                  <button
                    onClick={() => onAddToCart(selectedProduct, currentColor)}
                    className="text-gray-500 hover:text-black cursor-pointer"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                      <circle cx="10.5" cy="18.5" r="1.5" />
                      <circle cx="17.5" cy="18.5" r="1.5" />
                    </svg>
                  </button>
                </div>
                <p className="pt-1 text-gray-900 text-lg">${selectedProduct.price}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Display the confirmation message */}
      {showMessage && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <p className="text-white text-xl bg-gray-900 p-4 rounded-lg">
            กดที่ตะกร้าสินค้าเพื่อดูสินค้าที่ท่านมี!
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
