"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Page() {
  const [fontSize, setFontSize] = useState('30px');

  useEffect(() => {
    // Set font size or perform client-only calculations here
    setFontSize('30px');
  }, []);

  return (
    <div>
      
    <div className="flex items-center justify-center h-screen">
      <span className="font-bold" style={{ fontSize }}>
        THANK YOU FOR SOY7 Phone!
      </span>
    </div>
    </div>
  );
}
