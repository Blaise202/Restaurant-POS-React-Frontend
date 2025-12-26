import React from "react";

export const Login = () => {
  return (
    <form
      action="#"
      method="post"
      className="p-3 w-[90%] my-2 rounded-lg justify-center text-xs"
    >
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
      <button className="w-full font-bold bg-yellow-500 p-2 rounded-lg mt-4 text-black">
        Login
      </button>
    </form>
  );
};

export default Login;
