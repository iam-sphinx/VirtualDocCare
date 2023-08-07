import mongoose from "mongoose";
const { Schema } = mongoose;

const prescriptionSchema = new Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model for the doctor
      required: true,
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model for the patient
      required: true,
    },
    appointment: {
      type: Schema.Types.ObjectId,
      ref: "Appointment", // Reference to the Appointment model if applicable
    },
    medications: {
      type: [String], // Array of prescribed medications
      required: true,
    },
    diagnosis: {
      type: String, // Diagnosis or medical condition
      required: true,
    },
    instructions: {
      type: String, // Instructions for the patient
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export default mongoose.model("Prescription", prescriptionSchema);
