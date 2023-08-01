import Image from "next/image";
import React from "react";
import {StarIcon} from "@heroicons/react/24/outline"

const DocCard = ({imgSrc}) => {
  return (
    <div className="w-96 h-[26rem] rounded-2xl p-3 border border-stone-800 flex flex-col justify-between shadow-lg shadow-slate-500">
      <div className="w-full h-52 rounded-2xl overflow-hidden shadow-md shadow-slate-600">
        <img src={imgSrc}  className="object-cover h-full w-full" alt="not-found" />
      </div>
      <h1 className="font-medium text-base mt-2">Douglas Bailyn , MD</h1>
      <div className="font-normal text-sm italic">
        <p>Primary Care Doctor</p>
        <p>New York, NY</p>
      </div>
      <p className=" h-[3.75rem] overflow-hidden text-ellipsis font-light text-sm text-[#5c636a] ">
      &ldquo;Wonderful two experiences so far -quick wait times (meanings no wait
        times). Go my vacations blood work done quickly...&ldquo;
      </p>
      <div className="w-40 h-8 rounded-lg bg-[#d8efea] flex items-center px-2 text-[#656e73] gap-1">
        <StarIcon className="h-5 w-5 "/>
        <h1 className="text-xs font-medium">4.83 (5350 reviews)</h1>
      </div>
    </div>
  );
};

export default DocCard;
