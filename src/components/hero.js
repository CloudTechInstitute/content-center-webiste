"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { PiSmileyFill, PiStar } from "react-icons/pi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import hero from "@/components/assets/hero-img.png";
import { motion } from "framer-motion";

export default function Hero() {
  const items = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex items-center justify-center p-5 w-full">
      <div className="">
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-6xl text-center font-bold mb-3"
        >
          Your #1 Choice for
          <span className="text-lime-400 ml-2">
            Next <br />
            Gen NCLEX-RN
          </span>{" "}
          Test Prep
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex justify-center items-center gap-12 p-5"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full p-3 w-48 bg-lime-400"
          >
            Get Started
          </motion.button>
          <p className="underline text-white">Contact Us</p>
        </motion.div>
        <div className="flex justify-between items-start text-white w-full">
          <motion.div
            initial={{ x: "-100vw" }} // Start off the screen to the left
            animate={{ x: 0 }} // Slide to its final position
            transition={{ type: "spring", stiffness: 70, damping: 10 }}
            className="w-[30%]"
          >
            <div className="flex justify-start items-center gap-2 mb-10">
              <div className="bg-[#21233b] p-2">
                <PiSmileyFill className="text-[#A6E729]" size={40} />
              </div>
              <div>
                <p className="text-2xl">Over 600 </p>
                <p className="">Happy students</p>
              </div>
            </div>
            <div className="mb-3">
              <p>
                "Master your NCLEX-RN prep with Global NCLEX practice tests and
                exams. Get ready with realistic NCLEX-RN practice questions and
                in-depth answer explanations."
              </p>
            </div>
            <div className="flex gap-2 items-center mb-10">
              <p className="underline uppercase ">Let's go</p>
              <HiArrowTrendingUp className="text-[#A6E729]" size={30} />
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 rounded-full bg-slate-800"></div>
              <div>
                <p className="text-xs">Global NCLEX</p>
                <p className="text-xs">Exam Center</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: "100vw" }} // Start off the screen to the left
            animate={{ y: 0 }} // Slide to its final position
            transition={{ type: "spring", stiffness: 30, damping: 10 }}
            className="w-[40%]"
          >
            <Image src={hero} alt="hero-picture" width={500} />
          </motion.div>
          <motion.div
            initial={{ x: "100vw" }} // Start off the screen to the left
            animate={{ x: 0 }} // Slide to its final position
            transition={{ type: "spring", stiffness: 40, damping: 10 }}
            className="w-[30%] text-right"
          >
            <p className="text-xl">5 star rating</p>
            <p className="text-sm">
              Average rating 4.8 makes us <br />
              one of the most competitive in the world
            </p>
            <div className="flex gap-2 justify-end items-center mb-20">
              {items.map((_, index) => (
                <div key={index}>
                  <PiStar className="text-[#A6E729]" size={20} />
                </div>
              ))}
            </div>
            <div className="text-3xl">50K+</div>
            <div className="text-sm mb-6">total active students</div>
            <div className="text-3xl">137</div>
            <div className="text-sm">total courses</div>
          </motion.div>
        </div>
        <div className="text-white text-2xl text-center mt-7">
          Pass the Next Generation{" "}
          <span className="text-lime-400">NCLEX-RN</span> the First Time
        </div>
      </div>
    </div>
  );
}
