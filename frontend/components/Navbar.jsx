"use client";

import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Switch,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import IosSwitch from "./IosSwitch";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: " ",
    mobile_no: " ",
    mail_id: " ",
    password: " ",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

          <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            className="w-full"
          />

          <TextField
            helperText="Please enter your email"
            id="demo-helper-text-aligned"
            label="Email"
            className="w-full"
          />

          <FormControl variant="outlined" className="w-full">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <TextField
            helperText="Repeat Password"
            id="demo-helper-text-aligned"
            label="Password"
            type="text"
            className="w-full"
          />
          <div className="flex items-center gap-3">
            <Button variant="contained" color="success" className="w-40">
              Sign up
            </Button>
            <h1 className="text-base font-medium text-[#30353a]">Already have an account ?</h1>
            <span className="text-lg font-medium cursor-pointer hover:underline text-[#30353a]">Login</span>
          </div>
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
