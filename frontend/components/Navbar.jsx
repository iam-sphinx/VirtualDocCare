import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 w-full flex justify-between items-center bg-[#3A786B] px-32">
      <h1 className="text-2xl text-white font-bold cursor-pointer">VirtualDocCare</h1>
      <div>
        <ul className="flex gap-10 text-white font-medium text-lg">
          <li className="cursor-pointer hover:text-[#B6D3CD]">About Us</li>
          <li className="cursor-pointer hover:text-[#B6D3CD]">Reviews</li>
          <li className="cursor-pointer hover:text-[#B6D3CD]">Log in / Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
