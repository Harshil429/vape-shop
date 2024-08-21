"use client";

import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import { reviews } from "../../../public/reviews";

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEvent = () => setIsHovered(!isHovered);
  const prevSlide = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  return (
    <>
      <div className="flex flex-col items-center mx-auto text-center my-12">
        <h1 className="mb-5 uppercase">Reviews</h1>
        <button className="uppercase bg-black text-white p-3 text-xs">
          Leave a review!
        </button>
      </div>
      <div className="relative w-full mx-auto">
        <div
          className="my-32 flex flex-col justify-center items-center bg-black text-white h-72"
          onMouseOver={handleMouseEvent}
          onMouseLeave={handleMouseEvent}
        >
          <h1>Star: {reviews[currentIndex].rating}</h1>
          <p>{reviews[currentIndex].review}</p>
        </div>
        <button
          className="absolute left-0 top-1/2 transform h-[459px] rounded-xl mx-1 -mt-[10px] -translate-y-1/2 text-white  group"
          onClick={prevSlide}
        >
          <MdKeyboardArrowLeft size={32} />
        </button>
        <button
          className="absolute right-0 top-1/2 transform h-[459px] rounded-xl mx-1 -mt-[10px] -translate-y-1/2 text-white  group"
          onClick={nextSlide}
        >
          <MdKeyboardArrowRight size={32} />
        </button>
        <div className="flex justify-center mt-4">
          {reviews.map((_, index) => (
            <div
              className={`h-1 w-10 mx-1 ${
                index === currentIndex
                  ? "bg-[#beff46] rounded-xl"
                  : "bg-gray-300 rounded-xl"
              } transition-all duration-500 ease-in-out`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
