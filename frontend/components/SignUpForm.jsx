"use client";
import axios from "axios";
import React, { useState } from "react";

const SignUpForm = ({ isLogin, setIsLogin, isSignUp, setIsSignup }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    role: "patient",
  });

  //form data
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://virtual-doc-care-backend.onrender.com/api/v1/auth/signup",
        formData
      );

      if (response.data.success) {
        // User signup successful
        console.log("Signup successful:", response.data.message);
        // You can redirect or show a success message to the user
      } else {
        // Signup failed due to existing user
        console.log("Signup failed:", response.data.message);
        // Handle the case where the user already exists
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle other error cases here
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChecked = (event) => {
    setFormData({
      ...formData,
      role: isChecked === true ? "patient" : "doctor",
    });
    setIsChecked(!isChecked);
  };

  const handleIsLogin = () => {
    setIsLogin(true);
    setIsSignup(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 flex flex-col justify-between mt-4"
    >
      <div className="flex justify-center items-center font-semibold text-2xl text-[#30353a] ">
        <div className="flex justify-between items-center w-64">
          <h1>Patient</h1>
          <input
            type="checkbox"
            className="toggle toggle-lg toggle-success"
            checked={isChecked}
            onChange={handleChecked}
          />
          <h1>Doctor</h1>
        </div>
      </div>

      <input
        type="text"
        name="username"
        value={formData.username}
        placeholder="enter your name"
        onChange={handleChange}
        className="input text-black font-normal text-base bg-inherit border border-black placeholder:text-zinc-500 "
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="enter your email"
        onChange={handleChange}
        className="input text-black font-normal text-base bg-inherit border border-black placeholder:text-zinc-500 "
      />
      <input
        type="text"
        name="password"
        value={formData.password}
        placeholder="Password"
        onChange={handleChange}
        className="input text-black font-normal text-base bg-inherit border border-black placeholder:text-zinc-500 "
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        placeholder="enter your mobile no"
        onChange={handleChange}
        className="input text-black font-normal text-base bg-inherit border border-black placeholder:text-zinc-500 "
      />
      <div className="flex items-center gap-3">
        <button className="btn btn-accent w-40" type="submit">
          Signup
        </button>
        <h1 className="text-base font-medium text-[#30353a]">
          Already have an account ?
        </h1>
        <span
          className="text-lg font-medium cursor-pointer hover:underline text-[#30353a]"
          onClick={handleIsLogin}
        >
          Login
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;
