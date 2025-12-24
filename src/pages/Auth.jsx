import React from "react";
import bgImage from "../assets/images/rest.jpg";
import logo from "../assets/logo/a_z.png";

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
          <div className="absolute inset-0 bg-black opacity-80"></div>
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
          <h1 className="text-xl text-yellow-500 font-bold font-mono">
            Employee Registration
          </h1>
          <form
            action="#"
            method="post"
            className="p-3 w-[90%] my-2 rounded-lg justify-center text-xs"
          >
            <div className="text-[#f5f5f5] block">
              <label
                htmlFor="name"
                className="text-[#a5a5a5]"
              >
                Employee Name
              </label>
              <input
                type="text"
                className="w-full block bg-[#161616] p-3 mt-1 rounded-lg"
                id="name"
                name="name"
                placeholder="Enter employee name"
              />
            </div>
            <div className="text-[#f5f5f5] block mt-3">
              <label
                htmlFor="email"
                className="text-[#a5a5a5]"
              >
                Employee Email
              </label>
              <input
                type="email"
                className="w-full block mt-2 bg-[#161616] p-3 rounded-lg"
                id="email"
                name="email"
                placeholder="Enter employee email"
              />
            </div>
            <div className="text-[#f5f5f5] block mt-3">
              <label
                htmlFor="phone"
                className="text-[#a5a5a5]"
              >
                Employee Phone
              </label>
              <input
                type="tel"
                className="w-full block bg-[#161616] p-3 rounded-lg"
                id="phone"
                name="phone"
                placeholder="+233000000000"
              />
            </div>
            <div className="text-[#f5f5f5] block mt-3">
              <label
                htmlFor="password"
                className="text-[#a5a5a5]"
              >
                Employee Password
              </label>
              <input
                type="password"
                className="w-full block mt-2 bg-[#161616] p-3 rounded-lg"
                id="password"
                placeholder="••••••••••••"
                name="password"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor=""
                className="text-sm text-[#a5a5a5]"
              >
                Choose Role
              </label>
              <div className="flex flex-row gap-2">
                <button className="w-1/3 text-sm font-bold bg-[#161616] px-2 py-3 rounded-lg mt-2 text-[#a5a5a5]">
                  Waiter
                </button>
                <button className="w-1/3 text-sm font-bold bg-[#161616] px-2 py-3 rounded-lg mt-2 text-[#a5a5a5]">
                  Cashier
                </button>
                <button className="w-1/3 text-sm font-bold bg-[#161616] px-2 py-3 rounded-lg mt-2 text-[#a5a5a5]">
                  Admin
                </button>
              </div>
            </div>
            <button className="w-full font-bold bg-yellow-500 p-2 rounded-lg mt-4 text-black">
              Register
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm text-[#a5a5a5]">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-yellow-500 underline"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
