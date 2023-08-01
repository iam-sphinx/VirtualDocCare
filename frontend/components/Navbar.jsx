"use client";

import { Modal } from "@mui/material";
import React, { useState } from "react";
import IosSwitch from "./IosSwitch";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleOpen = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      <Modal
        open={isLogin}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <div className="w-[30rem] h-[40rem] p-6 rounded-2xl bg-[#d8efea] outline-none flex flex-col justify-between">
          <div className="flex justify-center items-center font-semibold text-2xl text-[#30353a]">
            <div className="flex justify-between items-center w-64">
              <h1>Patient</h1>
              <IosSwitch />
              <h1>Doctor</h1>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center mt-6 text-[#2d3136]">
            Welcome to VirtualDoc Care
          </h1>
          <h1 className="text-xl font-medium text-center mt-4 text-[#2d3136]">
            Please enter your details
          </h1>
          <LoginForm />
        </div>
      </Modal>

      <div className="h-20 w-full flex justify-between items-center bg-[#3A786B] px-32">
        <h1 className="text-2xl text-white font-bold cursor-pointer">
          VirtualDocCare
        </h1>
        <div>
          <ul className="flex gap-10 text-white font-medium text-lg">
            <li className="cursor-pointer hover:text-[#B6D3CD]">About Us</li>
            <li className="cursor-pointer hover:text-[#B6D3CD]">Reviews</li>
            <li
              className="cursor-pointer hover:text-[#B6D3CD]"
              onClick={handleOpen}
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
