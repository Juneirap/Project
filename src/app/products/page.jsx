"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import Search from "../components/Search";
import Producttype from "../producttype/page";
import Navbar from "../components/Navbar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      
      <div
        className="carousel relative container mx-auto"
        style={{
          maxWidth: "1600px",
        }}
      >
        <div className="carousel-inner relative overflow-hidden w-full">
          <input
            aria-hidden="true"
            className="carousel-open"
            defaultChecked
            hidden
            id="carousel-1"
            name="carousel"
            type="radio"
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{
              height: "50vh",
            }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
              style={{
                backgroundImage:
                  "url('https://img5.pic.in.th/file/secure-sv1/Screenshot-2024-09-05-150538ecfc574b67a6e435.jpg')",
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <div className="text-black font-bold text-[60px] text-white my-4">
                    iPhone 15 Pro MAX
                  </div>
                  <div className="text-[25px] text-white inline-block no-underline border-gray-600 leading-relaxed">
                    สรรค์สร้างจากไทเทเนียม
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label
            className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            htmlFor="carousel-3"
          >
            ‹
          </label>
          <label
            className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            htmlFor="carousel-2"
          >
            ›
          </label>
          <input
            aria-hidden="true"
            className="carousel-open"
            hidden
            id="carousel-2"
            name="carousel"
            type="radio"
          />
          <div
            className="carousel-item absolute opacity-0 bg-cover bg-right"
            style={{
              height: "50vh",
            }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
              style={{
                backgroundImage:
                  "url('https://img2.pic.in.th/pic/iphon-14.jpg')",
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <div className="text-black font-bold text-[80px] text-white my-4">
                    iPhone 14 Plus
                  </div>
                  <div className="text-[25px] text-white inline-block no-underline border-gray-600 leading-relaxed">
                    ดีไซน์ด้านหน้าแบบ Ceramic Shield
                  </div>
                  <div className="text-[25px] text-white inline-block no-underline border-gray-600 leading-relaxed">
                    ด้านหลังแบบกระจก และอะลูมิเนียม
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label
            className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            htmlFor="carousel-1"
          >
            ‹
          </label>
          <label
            className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            htmlFor="carousel-3"
          >
            ›
          </label>
          <input
            aria-hidden="true"
            className="carousel-open"
            hidden
            id="carousel-3"
            name="carousel"
            type="radio"
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{
              height: "50vh",
            }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom"
              style={{
                backgroundImage: "url('https://img2.pic.in.th/pic/ip15.jpg')",
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <div className="text-black font-bold text-[80px] text-white my-4">
                    iPhone 15
                  </div>

                  <div className="text-[25px] text-white inline-block no-underline border-gray-600 leading-relaxed">
                    ชิป A16 Bionic ขุมพลังที่มือโปร
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label
            className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            htmlFor="carousel-2"
          >
            ‹
          </label>
          <label
            className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            htmlFor="carousel-1"
          >
            ›
          </label>
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                htmlFor="carousel-1"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                htmlFor="carousel-2"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                htmlFor="carousel-3"
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav className="w-full z-30 top-0 px-6 py-1" id="store">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                Product
              </div>
              <Search />
              <div>
                <Producttype />
              </div>
            </div>
          </nav>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container py-8 px-6 mx-auto">
          <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
            About
          </div>
          <div className="mt-8 mb-8">
            MongoDB
            <div />
            <div
              className="text-gray-800 underline hover:text-gray-900"
              href="http://savoy.nordicmade.com/"
              target="_blank"
            ></div>
            Noed.js,jsx,js,html
          </div>
          <div className="mb-8">
            SOY7 Team พวกเราเป็นเด็กอายุ20-21ปีที่มีความฝันว่าอยากเป็น "WedDev"
            ไม่ว่าจะเป็น Back-end หรือ Font-end
            เราก็จะศึกษาหาความรู้อย่างไม่หยุดโปรดอาจารย์ช่วยชี้แนะแนวทางด้วย
            พวกเราสร้างเว็บไซต์นี้สุดความสามารถที่เรามีที่อาจารย์สอนบ้างศึกษาเองบ้างจาก
            Youtube , Chat GPT ,Template ขอขอบคุณทุกอย่างที่มอบให้ครับ ขอขอบคุณ
            ผู้ช่วยศาสตราจารย์ดรัสวิน วงศ์ปรเมษฐ์
            ในการอบรมสั่งสอนครับขอบพระคุณเป็นอย่างสูง
          </div>
        </div>
      </section>
      <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-gray-900">เกี่ยวกับพวกเรา</h3>
                <div className="py-4">
                  Back-end : นาย อัศวิน ทรัพย์เพ็ญพบ 092,นาย นพดล บุญสง่า
                  056,นาย อภิสิทธิ์ สุขคำชา 071 Font-end : นาย อัศวิน
                  ทรัพย์เพ็ญพบ 092,นาย นพดล บุญสง่า 056,นาย อภิสิทธิ์ สุขคำชา
                  071
                </div>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right mt-6 md:mt-0">
              <div className="px-3 md:px-0">
                <h3 className="text-left font-bold text-gray-900">Social</h3>
                <div className="w-full flex items-center py-4 mt-0">
                  <Link
                    className="flex flex-col items-center mx-2"
                    href="https://www.instagram.com/pp_peesam29/"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                    <div className="text-[15px]">sammy</div>
                  </Link>

                  <Link
                    className="flex flex-col items-center mx-2"
                    href="https://www.instagram.com/_w7.dz/"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                    <div className="text-[15px]">Winny</div>
                  </Link>
                  <Link
                    className="flex flex-col items-center mx-2"
                    href="https://www.instagram.com/apisit_sukkamcha/"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                    <div className="text-[15px]">junior</div>
                  </Link>
                  <Link
                    className="flex flex-col items-center mx-2"
                    href="https://www.instagram.com/soy.jedd/"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                    <div className="text-[15px]">Soy 7</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
