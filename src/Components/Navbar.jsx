import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between items-center  rounded-md bg-slate-700 p-2 font-bold">
        <img src="sholini.webp" className="w-[80px]" />
        <li className=" hover:text-red-300 cursor-pointer">
          {" "}
          <NavLink to="/">Home</NavLink>{" "}
        </li>

        <li className=" hover:text-red-300 cursor-pointer">Mens Wear</li>
        <li className=" hover:text-red-300 cursor-pointer">Kids wear</li>
        <li className=" hover:text-red-300 cursor-pointer">
          <NavLink to="/electronics"> Electronics</NavLink>{" "}
        </li>
        <li className=" hover:text-red-300 cursor-pointer">
          <NavLink to="/contact">Contact us</NavLink>
        </li>
        <NavLink to="/cart">
          {" "}
          <img
            src="shopping-cart.png"
            className="w-8 filter invert cursor-pointer "
            alt="cart-image"
          />
        </NavLink>
      </ul>
    </nav>
  );
}
