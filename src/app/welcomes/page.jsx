"use client";

import React from "react";
import Navbar from "../components/Navbar";


const VideoPage = () => {
  return (
    <div>
      
      <div className="relative w-screen h-screen overflow-hidden">
        <img
          src="/images/iphone-15-pro-max.png" // เปลี่ยนเป็นเส้นทางของรูปภาพที่คุณต้องการ
          alt="Description of the image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default VideoPage;
