"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center gap-48 py-6"
    >
      <div className="text-white">logo</div>
      <div className="flex justify-between items-center gap-12 text-white">
        <p>Home</p>
        <p>About Us</p>
        <p>Courses</p>
        <p>Contact</p>
      </div>
      <div className="flex justify-between items-center gap-4 ">
        <p className="text-white w-full">Log In</p>
        <Button className="rounded-full w-full">Create Account</Button>
      </div>
    </motion.div>
  );
}
