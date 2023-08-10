"use client";

import { Modal } from "@mui/material";
import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const handleClose = () => {
    setIsSignup(false);
    setIsLogin(false);
  };

  const handleSignup = () => {
    setIsSignup(true);
  };

  return (
    <>
      <Modal
        open={isSignup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center cursor-pointer"
      >
        <div className="w-[30rem] h-[40rem] p-6 rounded-2xl bg-[#d8efea] outline-none flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-center mt-6 text-[#2d3136]">
            Welcome to VirtualDoc Care
          </h1>
          <h1 className="text-xl font-medium text-center mt-4 text-[#2d3136]">
            Please enter your details
          </h1>
          <SignUpForm
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            isSignup={isSignup}
            setIsSignup={setIsSignup}
          />
        </div>
      </Modal>
      <Modal
        open={isLogin}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center cursor-pointer"
      >
        <div className="w-[30rem] h-[rem] p-6 rounded-2xl bg-[#d8efea] outline-none flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-center mt-6 text-[#2d3136]">
            Welcome to VirtualDoc Care
          </h1>
          <h1 className="text-xl font-medium text-center mt-4 text-[#2d3136]">
            Please enter your details
          </h1>
          <LoginForm
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            isSignup={isSignup}
            setIsSignup={setIsSignup}
          />
        </div>
      </Modal>

      <div className="h-20 w-full flex justify-between items-center bg-[#3A786B] px-32">
        <h1 className="text-2xl text-white font-bold cursor-pointer">
          VirtualDoc Care
        </h1>
        <div>
          <ul className="flex gap-10 text-white font-medium text-lg">
            <li className="cursor-pointer hover:text-[#B6D3CD]">About Us</li>
            <li className="cursor-pointer hover:text-[#B6D3CD]">Reviews</li>
            <li
              className="cursor-pointer hover:text-[#B6D3CD]"
              onClick={handleSignup}
            >
              Log in / Sign up
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
