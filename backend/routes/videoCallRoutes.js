import express from "express";
import {
  createVideoCall,
  endVideoCall,
  joinVideoCall,
} from "../controllers/videoCallController.js";

const router = express.Router();

//INITIATE A VIDEO CALL
router.post("/", createVideoCall);

//JOIN A VIDEO CALL
router.post("/:id/join", joinVideoCall);

//END VIDEO CALL
router.post("/:id/end", endVideoCall);
export default router;
