import React from "react";
import { FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-[#1377f1] p-2 text-xl font-bold rounded-lg text-[#f5f5f5] "
    >
      <IoArrowBack />
    </button>
  );
};

export default BackButton;
