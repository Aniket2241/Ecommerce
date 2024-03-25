import React, { useEffect, useState } from "react";
export default function electronics({ lo }) {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(true);
  async function getData() {
    try {
      let fetchedProduct = [];
      let q = 10;
      for (q = 10; q < lo; q++) {
        const url = `https://fakestoreapi.com/products/${q}`;
        const response = await fetch(url);
        const data = await response.json();
        fetchedProduct.push(data);
      }
      setproduct(fetchedProduct);
    } catch {
      alert("Error fetching data");
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly gap-3">
      {loading ? (
        <div className="flex items-center justify-center h-64 text-lg ">
          <svg
            className="  relative top-[25vh] animate-spin h-12 w-12 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm16-1.336A7.965 7.965 0 0120 12h-4c0 3.691-2.51 6.794-6 7.701V16zm-2-8.535A7.963 7.963 0 0116 12h4c0-4.418-3.582-8-8-8v4z"
            ></path>
          </svg>

          <h1 className="text-[30px] text-lime-600 relative top-[25vh] font-medium">
            Loading...
          </h1>
        </div>
      ) : (
        product.map((product) => (
          <div
            key={product.id}
            className="border-2 border-blue-600 ring-1 bg-black shadow-md shadow-red-200 w-[200px] p-2"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[200px] object-cover rounded-sm"
            />
            <h1 className="text-center">{product.title}</h1>
            <h1 className="flex justify-between">
              <b className="text-[20px] text-green-500">Rs.{product.price}</b>
              <button className="btn border-2 border-green-200 bg-blue-600 p-[5px] rounded-md pl-3 pr-3">
                Buy
              </button>
            </h1>
          </div>
        ))
      )}
    </div>
  );
}
