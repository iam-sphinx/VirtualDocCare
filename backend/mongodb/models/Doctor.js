import mongoose from "mongoose";
const { Schema } = mongoose;

const doctorSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    availableDays: {
      type: [String], // Array of available days (e.g., ["Monday", "Wednesday"])
      required: true,
    },
    availableTimeSlots: {
      type: [String], // Array of available time slots (e.g., ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"])
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export default mongoose.model("Doctor", doctorSchema);
