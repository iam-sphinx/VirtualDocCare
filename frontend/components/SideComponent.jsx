import React from "react";
// import { BiUser } from "react-icons/bi";
// import { AiTwotoneCalendar } from "react-icons/ai";
// import { BsCameraVideo } from "react-icons/bs";
// import { FiLogOut } from "react-icons/fi";

const SideComponent = () => {
  return (
    <div className="w-60 h-80 bg-[#b6d3cd] rounded-[20px] overflow-hidden">
      <ul className="flex flex-col justify-between h-full text-lg text-slate-900  ">
        <li className="flex justify-start gap-2  items-center cursor-pointer  hover:text-white p-4 hover:bg-[#94af9d]">
          {/* <BiUser size={24} /> */}
          <span>Profile</span>
        </li>

        <li className="flex justify-start gap-2  items-center cursor-pointer hover:text-white p-4 hover:bg-[#94af9d]">
          {/* <AiTwotoneCalendar size={24} /> */}
          <span>Calender</span>
        </li>

        <li className="flex justify-start gap-2  items-center cursor-pointer hover:text-white p-4 hover:bg-[#94af9d]">
          {/* <BsCameraVideo size={24} /> */}
          <span>Online Consultation</span>
        </li>

        <li className="flex justify-start gap-2  items-center cursor-pointer hover:text-white p-4 hover:bg-[#94af9d]">
          {/* <FiLogOut size={24} /> */}
          <span>Log out</span>
        </li>
      </ul>
    </div>
  );
};

export default SideComponent;
