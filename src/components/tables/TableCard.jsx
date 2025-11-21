import React from "react";

export const TableCard = () => {
  return (
    <div className="w-[270px] rounded-lg bg-[#262626] p-3 cursor-pointer">
      <div className="flex items-center justify-between">
        <h1 className="text-[#f5f5f5]  tracking-wide font-semibold">Table 1</h1>
        <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-md">
          Vacant
        </p>
      </div>
      <div className="flex items-center justify-center mt-4 mb-4">
        <h1 className="bg-[#025cca] text-white text-lg font-semibold rounded-full p-3">
          AM
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
