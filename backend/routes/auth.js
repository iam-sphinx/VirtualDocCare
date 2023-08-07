import express from "express";
import { signin, signup } from "../controllers/authController.js";


const router = express.Router();

//CREATE USER
router.post("/signup", signup )
router.post("/signin", signin )

//SIGN IN
//GOOGLE AUTH

export default router;
