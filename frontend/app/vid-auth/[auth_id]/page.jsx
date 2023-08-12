"use client";
import { useSocket } from "@/context/SocketContext";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const VideoCallPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    room_id: "",
  });
  const socket = useSocket();

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("room-join", formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const pathname = usePathname();

  const handleJoinRoom = useCallback((data) => {
    const { email, room_id } = data;
    router.push(`/meet/${room_id}`);
  }, []);

  useEffect(() => {
    socket.on("room-join", (data) => {
      handleJoinRoom(data);
      return () => {
        socket.off("room-join", handleJoinRoom);
      };
    });
  }, [socket]);

  const router = useRouter();

  return (
    <div>
      Video Call ID: {pathname.split("/")[2]}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[24rem]">
        <input
          className="input input-accent"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          className="input input-accent"
          type="text"
          name="room_id"
          value={formData.room_id}
          onChange={handleChange}
        />

        <button className="btn btn-circle w-32 btn-primary" type="submit">
          JOIN
        </button>
      </form>
    </div>
  );
};

export default VideoCallPage;
