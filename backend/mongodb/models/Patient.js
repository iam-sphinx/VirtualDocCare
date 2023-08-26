import mongoose from "mongoose";
const { Schema } = mongoose;

const patientSchema = new Schema(
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
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export default mongoose.model("Patient", patientSchema);
