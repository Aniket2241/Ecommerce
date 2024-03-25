import React, { useState, useEffect } from "react";
import Cart from "./Cart";

export default function Shop({ rate, mycart, setmycart }) {
  useEffect(() => {
    console.log(mycart);
  }, [mycart]);
  const [items, setItems] = useState([
    {
      name: "Shoes",
      price: rate,
      discount: "50% Off",
      image: "shoes.webp",
      addedToCart: false,
    },
    {
      name: "Iphone",
      price: 60000,
      discount: "30% Off",
      image: "iphone.avif",
      addedToCart: false,
    },
    {
      name: "Redbull",
      price: 100,
      discount: "20% Off",

      image: "redbul.jpg",
      addedToCart: false,
    },
    {
      name: "Study Table",
      price: 4000,
      image: "studytable.png",
      addedToCart: false,
    },
    {
      name: "Shopping Bag",
      price: 1100,
      image: "muscle.webp",
      addedToCart: false,
    },
    {
      name: "Modi jacket",
      price: 2000,
      image: "modi.webp",
      discount: "10% off",
      addedToCart: false,
    },
    {
      name: "Pink shirt",
      price: 400,
      image: "men.webp",
      discount: "5% off",
      addedToCart: false,
    },
    {
      name: "Checked Shirt",
      price: 600,
      image: "checkedshirt.webp",
      discount: "50% off",
      addedToCart: false,
    },
  ]);

  const handleAddToCart = (index) => {
    const updatedItems = [...items];
    updatedItems[index].addedToCart = true;
    const adder = updatedItems[index];
    setmycart([...mycart, adder]);

    setItems(updatedItems);
  };
  return (
    <div className="flex flex-wrap justify-evenly">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-2 border-blue-600 ring-1 shadow-md shadow-red-200 my-2 w-fit pb-3"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-[250px] rounded-sm"
          />
          <h1 className="text-center">{item.name}</h1>
          <h1 className="flex justify-between">
            <b className="text-[20px]">Rs.{item.price}</b>
            <b className="text-green-400 text-md">
              &nbsp;&nbsp;&nbsp;{item.discount}
            </b>
          </h1>
          <div className="flex justify-center">
            <button
              className="btn border-2 border-green-200 bg-blue-600 p-[5px] rounded-md pl-3 pr-3"
              onClick={() => handleAddToCart(index)}
              disabled={item.addedToCart}
            >
              {item.addedToCart ? "Added to Cart" : "Buy"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
