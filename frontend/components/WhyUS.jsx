import React from "react";
import { FaUserDoctor } from "@heroicons/react/24/outline";
import WhyUsCard from "./WhyUsCard";

const WhyUS = () => {
  const data = [
    {
      img_src: "/droplet.png",
      title: "Our Service is cost-free for patients",
      desc: "We work without any extra charges and commisions. You pay only clincs for your services.",
    },
    {
      img_src: "/doctor (1).png",
      title: "Our Call center has doctors",
      desc: "Our call center employs operators with medical knowledge, who can help you choose the best medicine.",
    },
    {
      img_src: "/shield.png",
      title: "Your data in a safe way",
      desc: "We guarantee you the confidentiality of your data. Your personal information is collected for the record only.",
    },
  ];
  return (
    <div className="w-full py-32 bg-[#d8efea] px-32">
      <h1 className="text-[#313741] font-bold text-4xl mb-12">Why our Medical Center?</h1>
      <div className="flex items-center justify-center gap-32">
        {data.map((item, index) => {
          return <WhyUsCard {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default WhyUS;
