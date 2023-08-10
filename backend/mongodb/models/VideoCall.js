import mongoose from "mongoose";
const { Schema } = mongoose;

const videoCallSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model for the user
      required: true,
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model for the doctor
      required: true,
    },
    appointment: {
      type: Schema.Types.ObjectId,
      ref: "Appointment", // Reference to the Appointment model if applicable
    },
    startTime: {
      type: Date, // Start time of the video call
      required: true,
    },
    endTime: {
      type: Date, // End time of the video call
    },
    status: {
      type: String, // Status of the video call (e.g., "ongoing", "ended")
      default: "ongoing",
    },
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User", // Reference to the User model for participants
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export default mongoose.model("VideoCall", videoCallSchema);
