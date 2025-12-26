import React, { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleRoleChange = (selected) => {
    setFormData({ ...formData, role: selected });
  };

  return (
    <form
      onSubmit={handleSubmit}
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
          value={formData.name}
          onChange={handleChange}
          className="w-full block bg-[#161616] p-3 mt-1 rounded-lg"
          id="name"
          name="name"
          required
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
          value={formData.email}
          onChange={handleChange}
          className="w-full block mt-2 bg-[#161616] p-3 rounded-lg"
          id="email"
          name="email"
          required
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
          required
          value={formData.phone}
          onChange={handleChange}
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
          required
          className="w-full block mt-2 bg-[#161616] p-3 rounded-lg"
          id="password"
          placeholder="••••••••••••"
          name="password"
          value={formData.password}
          onChange={handleChange}
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
          {["Waiter", "Cashier", "Admin"].map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => handleRoleChange(role)}
              className={`w-1/3 text-sm font-bold bg-[#161616] px-2 py-3 rounded-lg mt-2 text-[#a5a5a5] ${
                formData.role === role ? "bg-yellow-200 text-black" : ""
              } `}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      <button className="w-full font-bold bg-yellow-500 p-2 rounded-lg mt-4 text-black">
        Register
      </button>
    </form>
  );
};

export default Register;
