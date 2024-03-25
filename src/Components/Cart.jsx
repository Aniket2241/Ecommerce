import React from "react";

export default function Cart({ store }) {
  let totalPrice = 0;
  for (let i = 0; i < store.length; i++) {
    totalPrice += store[i].price;
  }
  return (
    <>
      <div className="flex gap-2 flex-wrap">
        {store.map((cartss, index) => (
          <div className="parent" key={index}>
            <div className="border-2 border-blue-600 ring-1 shadow-md shadow-red-200 my-2 w-fit pb-3">
              <img
                src={cartss.image}
                alt={cartss.name}
                className="w-[250px] rounded-sm"
              />
              <h1 className="text-center">{cartss.name}</h1>
              <h1 className="flex justify-between">
                <b className="text-[20px]">{cartss.price}</b>
                <b className="text-green-400 text-md">
                  &nbsp;&nbsp;&nbsp;{cartss.discount}
                </b>
              </h1>
            </div>
          </div>
        ))}{" "}
      </div>
      <h1 className=" text-[30px] font-bold m-auto border-[2px] border-lime-300 w-fit p-1 bg-violet-400  rounded-md">
        Total Amount ={totalPrice}
      </h1>
    </>
  );
}
