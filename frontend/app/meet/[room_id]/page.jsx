"use client";
import { useSocket } from "@/context/SocketContext";
import { usePathname } from "next/navigation";
import ReactPlayer from "react-player";
import peer from "@/service/peer";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import { PhoneXMarkIcon } from "@heroicons/react/24/outline";
import React, { useCallback, useEffect, useState } from "react";

const Page = () => {
  const pathname = usePathname();
  console.log(pathname);

  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
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
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  return (
    <div className="flex-1 bg-[#B6D3CD]  flex-col justify-center items-center">
      <div className="bg-white  mt-2 h-[50rem] w-[104rem] mb-2 ml-2  overflow-hidden ">
        {remoteStream && (
          <ReactPlayer
            url={remoteStream}
            height="200px"
            width="300px"
            playing
            muted
          />
        )}

        <div className="bg-black ml-2  h-[15rem] w-[22rem] mx-4 my-6 rounded">
          {myStream && (
            <ReactPlayer
              url={myStream}
              height="240px"
              width="358px"
              playing
              muted
            />
          )}
        </div>
      </div>
      <div className="bg-white ml-2  w-[104rem] h-[4.5rem] mt-0 rounded-2xl flex justify-center items-center  gap-16  border border-black">
        {remoteSocketId && (
          <button
            onClick={handleCallUser}
            className="bg-[#3A786B] text-lg  rounded-xl  h-14 w-40 text-white"
          >
            Connect Call
          </button>
        )}
        {myStream && (
          <button
            onClick={sendStreams}
            className="bg-green-500 rounded-full h-16 w-16 "
          >
            <PhoneArrowUpRightIcon className=" text-white flex item-cente h-6 w-6" />
          </button>
        )}
        <button className="bg-red-500 text-white rounded-full h-16 w-16 ">
          <PhoneXMarkIcon className=" flex item-cente h-8 w-8" />
        </button>
      </div>
    </div>

    
  );
};

export default Page;
