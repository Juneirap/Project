"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter(); // ใช้ useRouter สำหรับการนำทาง

  useEffect(() => {
    // ดึงข้อมูลสินค้าทั้งหมดจาก localStorage
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const handleChangeQuantity = (index, delta) => {
    const updatedCartItems = [...cartItems];
    const item = updatedCartItems[index];
    item.quantity = Math.max((item.quantity || 1) + delta, 1); // ควบคุมไม่ให้จำนวนเป็นลบ

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    // นำทางไปที่หน้าชำระเงิน
    router.push("/checkout");
  };

  if (cartItems.length === 0) {
    return <p className="text-center">ไม่มีสินค้าในตะกร้า</p>;
  }

  return (
    <div>
      
      <div className="w-full h-screen flex flex-col items-center p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Shopping cart</h1>
        <div className="w-full max-w-screen-md p-6 border rounded-lg shadow-md bg-white overflow-auto">
          {cartItems.map((item, index) => (
            <div key={index} className="mb-4 flex items-center">
              <img
                className="w-24 h-24 object-contain mr-4"
                src={
                  item.selectedColor
                    ? item.colors.find(
                        (color) => color.hexCode === item.selectedColor
                      )?.imageUrl
                    : item.imageUrls[0]
                }
                alt={item.name}
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-lg text-gray-700">${item.price}</p>
                <p className="mt-2" style={{ color: item.selectedColor }}>
                  {
                    item.colors.find(
                      (color) => color.hexCode === item.selectedColor
                    )?.name
                  }
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleChangeQuantity(index, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleChangeQuantity(index, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleCheckout}
          className="relative px-6 py-3 bg-gray-300 text-black rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mt-6"
        >
          Make payment
        </button>
      </div>
    </div>
  );
};

export default CartPage;
