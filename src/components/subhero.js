import Image from "next/image";
import React from "react";

export const SubHero = ({ herotext, imageSrc }) => {
  return (
    <div className="relative w-full mb-5" style={{ height: "40vh" }}>
      <Image
        src={imageSrc}
        alt="banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute h-full w-full top-0 left-0 bg-[#010C24] opacity-80"></div>
      <div className="absolute flex justify-center items-center w-full top-0 bottom-0 text-4xl md:text-6xl font-bold text-lime-400">
        <div className="max-w-[1024px] px-4 md:px-10">{herotext}</div>
      </div>
    </div>
  );
};
