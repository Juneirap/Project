"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // นำเข้า useRouter จาก next/navigation
import Navbar from "../components/Navbar";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter(); // ใช้ useRouter เพื่อเข้าถึงฟังก์ชันการเปลี่ยนเส้นทาง

  useEffect(() => {
    // ดึงข้อมูลสินค้าจาก localStorage
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * (item.quantity || 1);
    }, 0);
  };

  const handleCheckout = () => {
    // เปลี่ยนเส้นทางไปยังหน้าใหม่ (เช่น /order-confirmation)
    router.push("/thx");
  };

  if (cartItems.length === 0) {
    return <p className="text-center">ไม่มีสินค้าในตะกร้า</p>;
  }

  return (
    <div>
      
      <div className="w-full h-screen flex flex-col items-center p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Payment</h1>
        <div className="w-full max-w-4xl p-6 border rounded-lg shadow-md bg-white overflow-auto">
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
                <p className="mt-2">จำนวน: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="mt-4 border-t pt-4">
            <p className="text-lg font-semibold">
              รวม: ${calculateTotalPrice().toFixed(2)}
            </p>
          </div>
        </div>
        <button
          onClick={handleCheckout} // เรียกใช้ฟังก์ชัน handleCheckout เมื่อคลิก
          className="relative px-6 py-3 bg-gray-300 text-black rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mt-6"
        >
          Order confirmation
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
