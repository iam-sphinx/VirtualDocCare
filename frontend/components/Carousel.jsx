"use client"
import  React,{useState,useEffect}  from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import DocCard from "./DocCard";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [direction, setDirection] = useState("");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
    setNextIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
    setNextIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex w-full items-center justify-between px-32">
      <motion.div
        className="h-10 w-10 rounded-[1.25rem] bg-[#417d71] flex justify-center items-center cursor-pointer border border-inherit hover:border-black active:bg-[#2e5f54]"
        onClick={handlePrevious}
      >
        <ChevronLeftIcon className="h-5 w-5 text-white" />
      </motion.div>
      <div className="flex gap-8">
 
  <AnimatePresence initial={ false } mode={ 'wait' }>
`
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            <DocCard imgSrc={images[currentIndex]} />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence initial={ false } mode={ 'wait' }>
          <motion.div
            key={nextIndex}
            initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            <DocCard imgSrc={images[nextIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.div
        className="h-10 w-10 rounded-[1.25rem] bg-[#417d71] flex justify-center items-center cursor-pointer border border-inherit hover:border-black active:bg-[#2e5f54]"
        onClick={handleNext}
      >
        <ChevronRightIcon className="h-5 w-5 text-white" />
      </motion.div>
    </div>
  );
};

export default Carousel;
