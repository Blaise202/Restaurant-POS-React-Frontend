import React from "react";
import bgImage from "../assets/images/rest.jpg";
import logo from "../assets/logo/a_z.png";
import Register from "../components/auth/Register.jsx";

const Auth = () => {
  return (
    <>
      <div className="flex min-h-screen w-full">
        {/* left section */}
        <div className="w-1/2 relative flex items-center justify-center bg-cover">
          {/* bgImage */}
          <img
            src={bgImage}
            alt=""
            className="w-screen h-screen"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
          {/* quote at bottom */}
          <blockquote className="absolute bottom-8 mx-4 text-white text-center">
            <p className="text-l italic font-serif">
              "If you don't sacrifice for what you want, what you want becomes
              the sacrifice."
            </p>
            <p className="mt-6 mb-1 text-yellow-400 font-mono">
              - Charles V. Gogh
            </p>
          </blockquote>
        </div>
        {/* right section */}
        <div className="w-1/2 flex flex-col items-center bg-[#101010]">
          <div className="mt-1 p-3">
            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 mx-auto rounded-full"
            />
            <span className="text-md text-[#f5f5f5] font-mono font-semibold">
              A_Z Restaurant POS
            </span>
          </div>
          <Register />
        </div>
      </div>
    </>
  );
};

export default Auth;
