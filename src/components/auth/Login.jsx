import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { login } from "../../https";
import { enqueueSnackbar } from "notistack";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  const loginMutation = useMutation({
    mutationFn: (reqData) => login(reqData),
    onSuccess: (res) => {
      const { data } = res;
      console.log(data);
    },
    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response.data.message, { variant: "error" });
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
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
          required
          value={formData.email}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full block mt-2 bg-[#161616] p-3 rounded-lg"
          id="password"
          placeholder="••••••••••••"
          name="password"
        />
      </div>
      <button
        type="submit"
        className="w-full font-bold bg-yellow-500 p-2 rounded-lg mt-4 text-black"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
