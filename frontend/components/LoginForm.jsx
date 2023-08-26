import { loginFailure, loginStart, loginSuccess } from "@/redux/userSlice";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const LoginForm = ({ isLogin, setIsLogin, isSignup, setIsSignup }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginStart());
    try {
      const response = await axios.post(
        "http://localhost:7070/api/v1/auth/signin",
        formData
      );
      if (response.data.success) {
        dispatch(loginSuccess(response.data));
      } else {
        dispatch(loginFailure());
      }
      setIsLogin(false);
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIsSignup = () => {
    setIsLogin(false);
    setIsSignup(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 flex flex-col justify-start gap-8 mt-8"
    >
      <input
        name="username"
        type="text"
        value={formData.username}
        placeholder="enter your username"
        onChange={handleChange}
        className="input w-full text-black font-normal text-base bg-inherit border border-black placeholder:text-zinc-500 "
      />
      <input
        name="password"
        placeholder="enter your password"
        type="text"
        value={formData.password}
        onChange={handleChange}
        className="input w-full text-black font-normal text-base bg-inherit border border-black placeholder:text-zinc-500 "
      />
      <div className="flex items-center justify-between">
        <button className="btn btn-accent w-40" type="submit">
          Login
        </button>
        <h1 className="text-base font-medium text-[#30353a]">
          New to Virtual Doc Care ?
        </h1>
        <span
          className="text-lg font-medium cursor-pointer hover:underline text-[#30353a]"
          onClick={handleIsSignup}
        >
          Register
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
