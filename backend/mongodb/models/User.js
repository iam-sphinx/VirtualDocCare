import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          // Simple email format validation
          return /\S+@\S+\.\S+/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    phone: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["patient", "doctor"], // Add more roles if needed
    },
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export default mongoose.model("User", userSchema);
