import mongoose from "mongoose";
const { Schema } = mongoose;

const appointmentSchema = new Schema(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model for the patient
      required: true,
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model for the doctor
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "completed", "canceled"],
      default: "pending",
    },
    prescription: {
      type: Schema.Types.ObjectId,
      ref: "Prescription", // Reference to the Prescription model if applicable
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export default mongoose.model("Appointment", appointmentSchema);
