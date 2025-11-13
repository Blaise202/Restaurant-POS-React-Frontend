import React from "react";
import { popularDishes } from "../../constants/index.js";

const PopularDishes = () => {
  return (
    <div className="mt-2 mb-5 pr-6">
      <div className="bg-[#1a1a1a] w-100 rounded-lg">
        <div className="flex justify-between items-center px-3 py-3">
          <h2 className="text-[#f5f5f5] font-semibold tracking-wide">
            Popular Dishes
          </h2>
          <a
            href=""
            className="text-[#025cca] text-sm font-semibold"
          >
            View All
          </a>
        </div>
        <div className="overflow-y-scroll h-[590px] no-scrollbar">
          {popularDishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] py-2 px-4 m-2 mx-3"
              >
                <b className="text-[#f5f5f5] text-lg mr-2">
                  {dish.id < 10 ? `0${dish.id}` : `${dish.id}`}
                </b>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-11 w-11 rounded-full mr-3"
                />
                <div className="">
                  <h1 className="text-[#f5f5f5] font-semibold tracking-wide">
                    {dish.name}
                  </h1>
                  <p className="text-[#f5f5f5] text-sm">
                    <span className="text-[#ababab]">Orders: </span>
                    {dish.numberOfOrders}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
