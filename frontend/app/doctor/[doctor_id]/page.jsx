"use client";
import React, { useState } from "react";
// import { FiEdit2 } from "react-icons/fi";
import SideComponent from "@/components/SideComponent";
import DocProfile from "@/components/DocProfile";
import { Modal } from "@mui/material";

const Page = () => {
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <Modal
        open={isEdit}
        onClose={handleEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center cursor-pointer"
      >
        <div className="h-[36rem] w-[64rem] bg-white rounded-[20px] p-6 overflow-hidden">
          <div className="w-full h-full">
            
          </div>
        </div>
      </Modal>
      <div className="lg:px-96 px-6 mt-6">
        <div className="flex justify-end">
          <button
            className="btn btn-outline btn-accent text-sm shadow-lg"
            onClick={handleEdit}
          >
            {/* <FiEdit2 /> */}
            Edit profile
          </button>
        </div>
        <div className="flex justify-start gap-24">
          <SideComponent />
          <DocProfile />
          
        </div>
      </div>
    </>
  );
};

export default Page;
