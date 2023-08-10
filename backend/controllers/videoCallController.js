import VideoCall from "../mongodb/models/VideoCall.js";
import { createError } from "../error.js";

// Create a new video call
export const createVideoCall = async (req, res, next) => {
  try {
    const { user, doctor, appointment, startTime } = req.body;

    // Create a new video call
    const newVideoCall = new VideoCall({
      user,
      doctor,
      appointment,
      startTime,
    });

    await newVideoCall.save();

    res.status(201).json({
      success: true,
      message: "Video call initiated successfully",
      data: newVideoCall,
    });
  } catch (error) {
    next(error);
  }
};

// User joins an existing video call
export const joinVideoCall = async (req, res, next) => {
  try {
    const videoCallId = req.params.id;

    // Find the video call by ID
    const videoCall = await VideoCall.findById(videoCallId);

    if (!videoCall) {
      throw createError(404, "Video call not found");
    }

    // Handle user joining the video call (e.g., update participants, status, etc.)

    res.status(200).json({
      success: true,
      message: "User joined the video call",
      data: videoCall,
    });
  } catch (error) {
    next(error);
  }
};

// End an ongoing video call
export const endVideoCall = async (req, res, next) => {
  try {
    const videoCallId = req.params.id;

    // Find and update the video call's status and end time
    const endedVideoCall = await VideoCall.findByIdAndUpdate(
      videoCallId,
      {
        status: "ended",
        endTime: new Date(),
      },
      { new: true } // Return the updated video call
    );

    if (!endedVideoCall) {
      throw createError(404, "Video call not found");
    }

    res.status(200).json({
      success: true,
      message: "Video call ended successfully",
      data: endedVideoCall,
    });
  } catch (error) {
    next(error);
  }
};
