"use client";
import { useSocket } from "@/context/SocketContext";
import { usePathname } from "next/navigation";
import ReactPlayer from "react-player";
import peer from "@/service/peer";

import React, { useCallback, useEffect, useState } from "react";

const page = () => {
  const pathname = usePathname();
  console.log(pathname);

  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();

  const socket = useSocket();
  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email joined ${email} to room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    const offer = await peer.getOffer();
    socket.emit("call-user", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      const ans = await this.peer.getAnswer(offer);
      socket.emit("call-accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      if (!peer.peer.getSenders().some((sender) => sender.track === track)) {
        peer.peer.addTrack(track, myStream);
      }
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("call accepted");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer-negotiated", { offer, to: remoteSocketId });
  }, [socket]);

  const handleNegoNeedIncoming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer-nego-done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(
    async (ans) => {
      await peer.setLocalDescription(ans);
    },
    [socket]
  );

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      setRemoteSocketId(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user-joined", handleUserJoined);
    socket.on("incomming-call", handleIncommingCall);
    socket.on("call-accepted", handleCallAccepted);
    socket.on("peer-negotiated", handleNegoNeedIncoming);
    socket.on("peer-nego-done-final", handleNegoNeedFinal);

    return () => {
      socket.off("user-joined", handleUserJoined);
      socket.off("incomming-call", handleIncommingCall);
      socket.off("call-accepted", handleCallAccepted);
      socket.off("peer-negotiated", handleNegoNeedIncoming);
      socket.off("peer-nego-done-final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncoming,
    handleNegoNeedFinal,
  ]);

  return (
    <div>
      <h1> This is my Room Page</h1>
      <h3>{remoteSocketId ? "connected" : "No one is in the room"} </h3>
      {myStream && <button onClick={sendStreams}>Send Stream</button>}
      {remoteSocketId && <button onClick={handleCallUser}>Call</button>}
      {myStream && (
        <ReactPlayer
          url={myStream}
          height="250px"
          width="300px"
          playing
          muted
        />
      )}
      <h1>Remote Stream</h1>
      {remoteStream && (
        <ReactPlayer
          url={remoteStream}
          height="250px"
          width="300px"
          playing
          muted
        />
      )}
    </div>
  );
};

export default page;
