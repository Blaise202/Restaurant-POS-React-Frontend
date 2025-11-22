import React from "react";
import { getRandomBG } from "../../utils";

export const TableCard = ({ label, status, abbr, id }) => {
  function setColor(status) {
    switch (status) {
      case "vacant":
        return "text-green-600 bg-[#2e4a40]";
      case "booked":
        return "text-yellow-600 bg-[#4a422e]";
      case "occupied":
        return "text-red-600 bg-[#4a2e2e]";
      default:
        return "text-gray-600 bg-[#2e2e2e]";
    }
  }
  return (
    <>
      <div
        key={id}
        className="w-[230px] h-fit rounded-lg bg-[#2b2b2b] hover:bg-[#383838] p-3 cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-[#f5f5f5]  tracking-wide font-semibold">
            {label}
          </h1>
          <span className={`${setColor(status)} px-2 py-1 rounded-md`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        <div className="flex items-center justify-center mt-3 mb-3">
          <h1
            className={`${getRandomBG()} text-white font-semibold rounded-full p-2`}
          >
            {abbr}
          </h1>
        </div>
      </div>
    </>
  );
};

export default TableCard;
