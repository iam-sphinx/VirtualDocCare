import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Carousel from "./Carousel";
const images = [
  "/doc-1.jpg",
  "/doc-2.jpg",
  "/doc-3.jpg",
  "/doc-4.jpg",
  "/doc-5.jpg",
  "/doc-6.jpg",
  "/doc-7.jpg",
  "/doc-8.jpg",
];

const DocCarousel = () => {
  return (
    <div className="w-full px-32 mt-16">
      <h1 className="text-[#363c45] font-semibold text-2xl">
        Discover Top-notch Care: Meet the Best Doctors on Our Platform!
      </h1>
      <p className="text-[#394049] font-bold text-base mt-2 mb-12">
        Trusted by Many, Our Top-Rated Doctors Deliver the Best Health
        Solutions!
      </p>

      <div className="w-full flex items-center justify-between">
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default DocCarousel;
