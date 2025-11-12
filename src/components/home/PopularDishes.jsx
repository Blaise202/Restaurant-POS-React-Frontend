import React from "react";
import { popularDishes } from "../../constants/index.js";

const PopularDishes = () => {
  return (
    <div className="mt-6 pr-6">
      <div className="bg-[#1a1a1a] w-100 rounded-lg">
        <div className="flex justify-between items-center px-3 py-3">
          <h1 className="text-[#f5f5f5] font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a
            href=""
            className="text-[#025cca] text-sm font-semibold"
          >
            View All
          </a>
        </div>
        <div className="overflow-y-scroll h-[470px] no-scrollbar">
          {popularDishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] py-2 px-4 m-2 mx-3"
              >
                <h1 className="text-[#f5f5f5] font-bold text-xl mr-3">
                  {dish.id < 10 ? `0${dish.id}` : `${dish.id}`}
                </h1>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-[50px] w-[50px] rounded-full"
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
