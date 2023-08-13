"use client";
import { useSocket } from "@/context/SocketContext";
import { usePathname } from "next/navigation";
import ReactPlayer from "react-player";
import peer from "@/service/peer";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import { PhoneXMarkIcon } from "@heroicons/react/24/outline";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import img_src from "@/public/no-user.png";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Page = () => {
  const { currentUser } = useSelector((state) => state.user);

  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const router = useRouter();

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

  const handleEndCall = () => {
    router.push(`/vid-auth/${currentUser.data._id}`);
  };

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
    <div className="flex-1 flex flex-col bg-[#B6D3CD] p-6 gap-6 ">
      <div className="bg-white flex flex-1 flex-nowrap relative rounded-xl overflow-hidden ">
        <div className="absolute top-6 left-6 h-40 w-60 bg-slate-500 rounded-md overflow-hidden">
          {myStream && (
            <ReactPlayer url={myStream} playing width="100%" height="100%" />
          )}
        </div>

        <div className="flex-1 max-h-[33.5rem] ">
          {remoteStream ? (
            <ReactPlayer
              url={remoteStream}
              width="100%"
              height="100%"
              playing
              muted
            />
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <Image src={img_src} alt="no user" height={250} width={250} />
            </div>
          )}
        </div>
      </div>

      <div className="bg-white h-14 rounded-xl flex justify-center items-center  gap-16  border border-black ">
        {remoteSocketId && (
          <button
            onClick={handleCallUser}
            className="btn btn-info w-40 text-white"
          >
            Connect Call
          </button>
        )}
        {myStream && (
          <button onClick={sendStreams} className="btn btn-accent w-32 ">
            <PhoneArrowUpRightIcon className=" text-white flex item-center h-6 w-6" />
          </button>
        )}
        <button
          className="btn btn-error text-white w-32 "
          onClick={handleEndCall}
        >
          <PhoneXMarkIcon className=" flex item-center h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default Page;
