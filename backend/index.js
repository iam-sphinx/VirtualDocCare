import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import prescriptionRoutes from "./routes/prescriptionRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import videoCallRoutes from "./routes/videoCallRoutes.js";
import authRoutes from "./routes/auth.js";
import connectDB from "./mongodb/connnect.js";
import { createServer } from "http";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";

//middilewares
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//server creation
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: true });

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });
});

// Rest APIs
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/appointments", appointmentRoutes);
app.use("/api/v1/prescriptions", prescriptionRoutes);
app.use("/api/v1/profiles", profileRoutes);
app.use("/api/v1/video-calls", videoCallRoutes);
app.use("/api/v1/auth", authRoutes);

//error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Oops something went wrong!";
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});

app.get("/", async (req, res) => {
  res.send("Welcome To Virtual Doc Care ! Hi from Backend");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    httpServer.listen(7070, () => {
      console.log("Server has been started on port http://localhost:7070");
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
