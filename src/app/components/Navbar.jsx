"use client";

import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <main key="1" lang="en">
      <div>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
        <title>Soy 7 Phone</title>
        <meta
          content="Free open source Tailwind CSS Store template"
          name="description"
        />
        <meta
          content="tailwind,tailwindcss,tailwind css,css,starter template,free template,store template, shop layout, minimal, monochrome, minimalistic, theme, nordic"
          name="keywords"
        />
        <link
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '      .work-sans {        font-family: "Work Sans", sans-serif;      }      #menu-toggle:checked + #menu {        display: block;      }      .hover:grow {        transition: all 0.3s;        transform: scale(1);      }      .hover:grow:hover {        transform: scale(1.02);      }      .carousel-open:checked + .carousel-item {        position: static;        opacity: 100;      }      .carousel-item {        -webkit-transition: opacity 0.6s ease-out;        transition: opacity 0.6s ease-out;      }      #carousel-1:checked ~ .control-1,      #carousel-2:checked ~ .control-2,      #carousel-3:checked ~ .control-3 {        display: block;      }      .carousel-indicators {        list-style: none;        margin: 0;        padding: 0;        position: absolute;        bottom : 2%;        left : 0;        right : 0;        text-align: center;        z-index: 10;      }      #carousel-1:checked        ~ .control-1        ~ .carousel-indicators        li:nth-child(1)        .carousel-bullet,      #carousel-2:checked        ~ .control-2        ~ .carousel-indicators        li:nth-child(2)        .carousel-bullet,      #carousel-3:checked        ~ .control-3        ~ .carousel-indicators        li:nth-child(3)        .carousel-bullet {        color: #000;        /*Set to match the Tailwind colour you want the active one to be */      }    ',
          }}
        />
      </div>
      <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <nav className="w-full z-30 top-0 py-1 shadow-lg" id="header">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
            <label
              className="cursor-pointer md:hidden block"
              htmlFor="menu-toggle"
            >
              <svg
                className="fill-current text-gray-900"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </label>
            <input className="hidden" id="menu-toggle" type="checkbox" />
            <div
              className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
              id="menu"
            >
              <nav>
                <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                      href="/products"
                    >
                      Product
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="order-1 md:order-2">
              <Link
                className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="/welcomes"
              >
                <svg
                  className="fill-current text-gray-800 mr-2"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H7V4h10v16z" />
                </svg>
                Soy 7 Phone
              </Link>
            </div>
            <div
              className="order-2 md:order-3 flex items-center"
              id="nav-content"
            >
              <Link
                className="pl-3 inline-block no-underline hover:text-black"
                href="/cart"
              >
                <svg
                  className="fill-current hover:text-black"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                  <circle cx="10.5" cy="18.5" r="1.5" />
                  <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}

export default Navbar;
