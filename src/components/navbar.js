"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "@/components/assets/full-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-center gap-48 py-6">
      <div className="text-white">
        <Image src={logo} alt="nclex-logo" className="w-64" />
      </div>
      <div className="flex justify-between items-center gap-12 text-white">
        <Link
          href={"#"}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Home
        </Link>
        <Link
          href={"#courses"}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("courses")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Courses
        </Link>
        <Link
          href={"#faqs"}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("faqs")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          FAQs
        </Link>
        <Link
          href={"#contact-us"}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact-us")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </Link>
      </div>
      <div className="flex justify-between items-center gap-4 ">
        <p className="text-white w-full">Log In</p>
        <Button className="rounded-full w-full">Create Account</Button>
      </div>
    </div>
  );
}
