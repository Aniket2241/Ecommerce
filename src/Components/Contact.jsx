import React from "react";

export default function Contact() {
  return (
    <>
      <h1 className="text-[20px] font-bold   w-fit m-auto text-shadow-[1px 2px 4px 4px 5px] text-red-200">
        Explore more😍
      </h1>
      <div className=" border-2 rounded-md  flex gap-[1px] justify-center bg-gradient-to-r from-gray-800 to-gray-700 ">
        <img
          src="lappy.jpg"
          className="rounded-lg w-[150px] h-[300px] cursor-pointer  hover:w-[380px] border-2 border-violet-600 transition-all duration-500"
        />
        <img
          src="iphoneee.jpg"
          className="rounded-lg w-[150px] h-[300px] cursor-pointer  hover:w-[380px] border-2 border-violet-600 transition-all duration-500"
        />
        <img
          src="redbul.jpg"
          className="rounded-lg w-[150px] h-[300px] cursor-pointer  hover:w-[400px] border-2 border-violet-600 transition-all duration-500"
        />
        <img
          src="shoes.webp"
          className="rounded-lg w-[320px] h-[300px] cursor-pointer  hover:w-[350px] border-2 border-violet-600 transition-all duration-500"
        />
        <img
          src="football.jpg"
          className="rounded-lg w-[150px] h-[300px] cursor-pointer  hover:w-[380px] border-2 border-violet-600 transition-all duration-500"
        />{" "}
        <img
          src="checkedshirt.webp"
          className="rounded-lg w-[150px] h-[300px] cursor-pointer  hover:w-[400px] border-2 border-violet-600 transition-all duration-500"
        />
        <img
          src="studytable.png"
          className="rounded-lg w-[150px] h-[300px] cursor-pointer  hover:w-[400px] border-2 border-violet-600 transition-all duration-500"
        />
      </div>

      <div className="  p-3  h-[300px]   my-8  bg-gray-900 rounded-lg shadow-lg overflow-y-auto">
        <p className="text-green-300 ">
          Welcome to our E-commerce website! We offer a wide range of products
          including clothing, electronics, accessories, and more. Whether you're
          looking for the latest fashion trends or the newest gadgets, we've got
          you covered.
          <br />
          <br />
          Our website is designed to provide you with a seamless shopping
          experience. Browse through our extensive collection, read detailed
          product descriptions, and view high-quality images to make informed
          purchasing decisions.
          <br />
          <br />
          With secure payment options and fast shipping, shopping with us is
          convenient and reliable. Our customer service team is always available
          to assist you with any questions or concerns you may have.
          <br />
          <br /> Thank you for choosing us for all your online shopping needs.
          Happy shopping!
          <h1 className="text-blue-200 font-bold text-lg">
            Contact Us -sprateek507@gmail.com
          </h1>
        </p>
      </div>
    </>
  );
}
