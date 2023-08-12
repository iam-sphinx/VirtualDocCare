import React from "react";

const DocProfile = () => {
  return (
    <div>
      <div className="w-44 h-60 rounded-t-[5.5rem] bg-[#b6d3cd]">
        {/* TO ADD IMAGE WHEN CLOUDINARY WILL INTEGRATED */}
      </div>

      <div>
        <h1 className="mt-5 font-bold text-2xl text-[#a6a6a6]">Maria Vasivana</h1>

        <div className="mt-6 text-slate-800 font-medium text-lg flex flex-col gap-1">
          <h1>Doctor - Therapist</h1>
          <h1>Experience - 20 Years</h1>
          <h1>Contact No - 111-111-111</h1>
        </div>

        <div className="mt-5 text-gray-600 font-normal text-base w-72">
          <p>
            She was educated in AIIMS Delhi. 1994-1999 in 2002, she took part in
            advanced training in nagaland. she has been working in clinic since
            2003
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocProfile;
