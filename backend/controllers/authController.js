import mongoose from "mongoose";
import User from "../mongodb/models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "User not found!"));
    }
    const isCorrectPass = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isCorrectPass) {
      return next(createError(401, "Wrong Credentials"));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
    res.cookie("access_token", token, { httpOnly: true });
    res.status(200).json({
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signup = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    console.log(newUser);

    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User has been successfully registered!",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};
