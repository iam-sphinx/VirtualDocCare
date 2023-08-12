import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRouter } from "next/navigation";

const SideComponent = () => {
  const { currentUser } = useSelector((state) => state.user);
  const router = useRouter();

  const handleVidoCallClick = () => {
    router.push(`/vid-auth/${currentUser.data._id}`);
    console.log(currentUser.data._id);
  };
  return (
    <div className="w-60 h-80 bg-[#b6d3cd] rounded-[20px] overflow-hidden">
      <ul className="flex flex-col justify-between h-full text-lg text-slate-900  ">
        <li className="flex justify-start gap-2  items-center cursor-pointer  hover:text-white p-4 hover:bg-[#94af9d]">
          <UserIcon className="h-6 w-6" />
          <span>Profile</span>
        </li>

        <li className="flex justify-start gap-2  items-center cursor-pointer hover:text-white p-4 hover:bg-[#94af9d]">
          <CalendarIcon className="h-6 w-6" />
          <span>Calender</span>
        </li>

        <li
          className="flex justify-start gap-2  items-center cursor-pointer hover:text-white p-4 hover:bg-[#94af9d]"
          onClick={handleVidoCallClick}
        >
          <VideoCameraIcon className="h-6 w-6" />
          <span>Online Consultation</span>
        </li>

        <li className="flex justify-start gap-2  items-center cursor-pointer hover:text-white p-4 hover:bg-[#94af9d]">
          <ArrowRightOnRectangleIcon className="h-6 w-6" />
          <span>Log out</span>
        </li>
      </ul>
    </div>
  );
};

export default SideComponent;
