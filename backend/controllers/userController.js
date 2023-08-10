// userController.js

import { createError } from "../error.js";
import User from "../mongodb/models/User.js";

export const getUser = async (req, res, next) => {
  try {
    // Retrieve user by ID and send response
    const user = await User.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "User has been found!",
      data: user,
    });
  } catch (error) {
    // Handle error and send error response
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    // Update user by ID and send response
    if (req.params.id === req.user.id) {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json({
          success: true,
          message: "User has been updated successfully",
          data: updatedUser,
        });
      } catch (error) {
        next(error);
      }
    } else {
      throw createError(403, "You can update only your account!");
    }
  } catch (error) {
    // Handle error and send error response
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    // Update user by ID and send response
    if (req.params.id === req.user.id) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
          success: true,
          message: "User has been delete successfully",
        });
      } catch (error) {
        next(error);
      }
    } else {
      throw createError(403, "You can delete only your account!");
    }
  } catch (error) {
    // Handle error and send error response
    next(error);
  }
};
