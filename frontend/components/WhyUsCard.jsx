import Image from "next/image";
import React from "react";

const WhyUsCard = ({img_src, title, desc}) => {
  return (
    <div className="flex flex-col items-center w-72">
      <div className="relative h-36 w-36">
        <Image src={img_src} layout="fill" alt="not found" />
      </div>
      <h1 className="text-xl font-semibold text-center mt-3">{title}</h1>
      <p className="text-lg text-slate-800 font-medium text-center mt-2">
        {desc}
      </p>
    </div>
  );
};

export default WhyUsCard;
