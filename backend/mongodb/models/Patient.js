import mongoose from "mongoose";
const { Schema } = mongoose;

const patientSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    // Additional patient-related fields if needed
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export default mongoose.model("Patient", patientSchema);
