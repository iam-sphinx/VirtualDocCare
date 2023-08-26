import mongoose from "mongoose";
const { Schema } = mongoose;

const doctorSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
      enum: ["male", "female", "others"],
    },
    location: {
      type: String,
      required: false,
    },
    marital_status: {
      type: String,
      required: false,
      enum: ["married", "single"],
    },
    instagram: {
      type: String,
      required: false,
    },
    facebook: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: true,
    },
    motivation: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
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
