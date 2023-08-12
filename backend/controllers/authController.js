import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import User from "../mongodb/models/User.js";


// User Signup
export const signup = async (req, res, next) => {
  try {
    const { username, password, email, role, phone } = req.body;

    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return next(createError(409, "Username or email already exists"));
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      role,
      phone,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

// User Login
export const signin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return next(createError(401, "Authentication failed"));
    }

    // Compare passwords
    const isCorrectPass = await bcrypt.compare(password, user.password);

    if (!isCorrectPass) {
      return next(createError(401, "Authentication failed"));
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, patientId: user.patientId, doctorId: user.doctorId },
      process.env.JWT_KEY
    );

    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      success: true,
      message: "Authentication successful",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
