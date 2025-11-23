import React from "react";
import BackButton from "../components/include/BackButton";
import Bottom from "../components/include/Bottom";
import { MdTableRestaurant } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";

const Menu = () => {
  return (
    <section className="bg-[#1f1f1f] flex h-[calc(100vh-6.5rem)] no-scrollbar">
      <div className="flex-[3]">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
              Menu
            </h1>
          </div>
          <div className="flex items-center gap-3 cursor-pointer ">
            <MdTableRestaurant className="text-[#f5f5f5] text-2xl" />
            <div className="flex flex-col items-start">
              <h2 className="text-md text-[#f5f5f5] font-semibold ">
                Customer Name
              </h2>
              <p className="text-xs text-[#ababab]">Table No: 2</p>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>
      <div className="flex-[1] bg-[#467458]"></div>
      <Bottom />
    </section>
  );
};

export default Menu;
