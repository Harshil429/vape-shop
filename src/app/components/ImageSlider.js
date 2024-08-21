"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import image1 from "../../../public/1.jpg";
import image2 from "../../../public/2.jpg";
import image3 from "../../../public/3.jpg";

const images = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEvent = () => setIsHovered(!isHovered);
  const prevSlide = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

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
    <div className="relative w-full mx-auto">
      <div
        className="my-32"
        onMouseOver={handleMouseEvent}
        onMouseLeave={handleMouseEvent}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-1000 ease-in-out px-10 pb-10 pt-3"
        />
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
    </div>
  );
};

export default ImageSlider;
