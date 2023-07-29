import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[36rem] w-full flex justify-between px-32 items-center">
      <div className="text-[#404750] font-extrabold text-6xl">
        <p>Your Health</p>
        <p>Virtually Cared for.</p>
        <button className="text-base font-medium text-white px-24 py-4 mt-8 rounded-lg bg-[#3a786b] border border-inherit hover:border hover:border-black active:bg-[#2e5f54]">
          Book an Appointment.
        </button>
      </div>
      <div className="h-[32rem] w-[32rem] relative">
        <Image src="/doc.png" fill="auto" className="object-contain" />
      </div>
    </div>
  );
};

export default HeroSection;
