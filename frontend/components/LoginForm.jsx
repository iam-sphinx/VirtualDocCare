"use client";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: " ",
    phone: " ",
    email: " ",
    password: " ",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //form data
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hey here is your form Data");
    console.log("Form Data :", formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 flex flex-col justify-between"
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="w-full"
      />

      <TextField
        helperText="Please enter your email"
        id="demo-helper-text-aligned"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full"
      />

      <TextField
        helperText="Please enter your Phone no"
        id="demo-helper-text-aligned"
        label="Phone"
        name="phone"
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        value={formData.phone}
        onChange={handleChange}
        className="w-full"
      />

      <FormControl variant="outlined" className="w-full">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          value={formData.password}
          onChange={handleChange}
          name="password"
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

      <div className="flex items-center gap-3">
        <Button
          type="submit"
          variant="contained"
          color="success"
          className="w-40"
        >
          Sign up
        </Button>
        <h1 className="text-base font-medium text-[#30353a]">
          Already have an account ?
        </h1>
        <span className="text-lg font-medium cursor-pointer hover:underline text-[#30353a]">
          Login
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
