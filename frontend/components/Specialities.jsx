import React from "react";
import Image from "next/image";
import SpecialistCard from "./SpecialistCard";
const CardImage = [
  { img_src: "/specialists/brain.png", title: "Neurologist" },
  { img_src: "/specialists/cardio.png", title: "Cardiologist" },
  { img_src: "/specialists/dentist.png", title: "Dentist" },
  { img_src: "/specialists/dermatologist.png", title: "Dermatologist" },
  { img_src: "/specialists/eye.png", title: "Eye-Specialist" },
  { img_src: "/specialists/gynecology.png", title: "Gynocologist" },
  { img_src: "/specialists/pCare.png", title: "Primary Doctor" },
  { img_src: "/specialists/psychiatrist.png", title: "Psychiatrist" },
];

const Specialities = () => {
  return (
    <div className="w-full px-32">
      <h1 className="text-[#363c45] font-semibold text-2xl mt-32 mb-16">
        Most Searched Specialists: Your Trusted Guides to Expert Care!
      </h1>

      <div className="flex flex-wrap gap-8 mb-32">
        {CardImage.map((item, idx) => {
          return (
            <div key={idx}>
              <SpecialistCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Specialities;
