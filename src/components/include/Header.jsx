import React from "react";
import Logo from "../../assets/logo/a_z.png";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export function Header() {
  return (
    <div className="flex justify-between items-center py-2 px-8 bg-[#1a1a1a]">
      {/* logo */}
      <div className="flex items-center gap-2">
        <img
          src={Logo}
          alt="logo"
          className="h-7 w-7 rounded-full"
        />
        <h2 className="text-lg font-semibold text-[#f5f5f5]">A_Z Restaurant</h2>
      </div>
      {/* search */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] px-5 w-[500px] py-2 rounded-[15px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="search"
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5] "
        />
      </div>
      {/* logged user */}
      <div className="flex items-center gap-2">
        <div className="bg-[#1f1f1f] rounded-[#15] p-2 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer ">
          <FaUserCircle className="text-[#f5f5f5] text-2xl" />
          <div className="flex flex-col items-start">
            <h2 className="text-md text-[#f5f5f5] font-semibold ">Blaise</h2>
            <p className="text-xs text-[#ababab]">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
