import Image from "next/image";
import React from "react";

const SpecialistCard = ({ img_src, title }) => {
  return (
    <div className="w-72 h-52 border border-[#6f7070] hover:border-2 rounded-2xl flex justify-center items-center cursor-pointer transition-all delay-[5ms] ease-in-out hover:scale-[1.1] hover:shadow-xl">
      <div className="flex flex-col items-center gap-6">
        <Image src={img_src} height={90} width={90} alt="not-found" />
        <h1 className="font-bold text-2xl text-black">{title}</h1>
      </div>
    </div>
  );
};

export default SpecialistCard;
