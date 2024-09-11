"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(""); // สำหรับแสดงข้อความ

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Error fetching products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product, color) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // เพิ่มหรือลดจำนวนสินค้าในตะกร้า
    const itemIndex = cartItems.findIndex(item => item.id === product.id && item.selectedColor === color);

    if (itemIndex > -1) {
      // หากสินค้ากับสีนี้มีอยู่แล้วในตะกร้า
      cartItems[itemIndex].quantity = (cartItems[itemIndex].quantity || 1) + 1;
    } else {
      // เพิ่มสินค้าใหม่
      cartItems.push({ ...product, selectedColor: color, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setMessage("Item added to cart! Click on the Cart icon to view your items.");
    
    // ซ่อนข้อความหลังจาก 3 วินาที
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  if (loading) {
    return <p className="text-center">กำลังโหลด...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">เกิดข้อผิดพลาด: {error}</p>;
  }

  return (
    <div className="relative">
      {/* ข้อความเมื่อเพิ่มสินค้าลงในตะกร้า */}
      {message && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
          กดที่ตะกร้าสินค้าเพื่อดูสินค้าที่ท่านมี!
        </div>
      )}
      
      <div className="w-full flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  const [currentColor, setCurrentColor] = useState(null);

  const handleColorClick = (hexCode) => {
    setCurrentColor(hexCode);
  };

  const currentImageUrl = currentColor
    ? product.colors.find((color) => color.hexCode === currentColor)?.imageUrl
    : product.imageUrls[0]; // ใช้รูปแรกหากไม่มีสีที่เลือก

  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <a className="block">
        <div className="relative w-full h-64 bg-transparent flex items-center justify-center rounded-lg overflow-hidden group">
          <img
            className="max-h-full max-w-full object-contain transition-transform duration-500 ease-in-out transform"
            src={currentImageUrl}
            alt={product.name}
          />
        </div>
        <div className="flex justify-center mt-2 mb-2">
          {product.colors.map((color) => (
            <button
              key={color.id}
              onClick={() => handleColorClick(color.hexCode)}
              style={{ backgroundColor: color.hexCode }}
              className="w-4 h-4 rounded-full border-none cursor-pointer focus:outline-none mx-1 transition-transform transform hover:scale-125 hover:shadow-lg"
            />
          ))}
        </div>
        <div className="pt-3 flex items-center justify-between">
          <p className="text-gray-900">{product.name}</p>
          <button
            onClick={() => onAddToCart(product, currentColor)}
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
        <p className="pt-1 text-gray-900">${product.price}</p>
      </a>
    </div>
  );
};

export default ProductsPage;
