import React from "react";
import { NavLink } from "react-router-dom";
export default function Register() {
  return (
    <div className="  flex-col bg-gray-700 shadow-[1px_0px_7px_4px_violet]  mt-5  border-2 p-[30px] m-auto border-red-200 pb-10 ">
      <h1 className="text-[20px] text-red-400 ">
        Register As a Shoolini supplier
      </h1>
      <h2>Sell your Products to crores of customer at 0% commission.</h2>
      <div className="flex justify-between">
        <div className="  w-fit  p-2 flex gap-20">
          <b className=" text-yellow-400 border-2 border-l-0 border-t-0 border-b-0 pr-8">
            Grow <br />
            Your <br />
            Business 10x &#x2705;
          </b>
          <b className=" text-yellow-400 border-2 border-l-0 border-t-0 border-b-0 pr-8">
            Enjoy <br />
            100% <br />
            Profit &#x2705;
          </b>
          <b className="text-yellow-400 border-2 border-l-0 border-t-0 border-b-0 pr-8">
            Sell <br />
            All over <br />
            India &#x2705;
          </b>{" "}
        </div>
        <button className="  bg-red-400  h-[50px] p-2 border-2 border-black hover:bg-green-600 hover:font-bold cursor-pointer rounded-lg font-semibold">
          <NavLink to="/kids"> Register Now</NavLink>
        </button>
      </div>
    </div>
  );
}
