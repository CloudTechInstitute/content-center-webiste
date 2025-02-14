"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "@/components/assets/full-logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900 p-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-white">
          <Image src={logo} alt="nclex-logo" className="w-40 sm:w-64" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {["Home", "Courses", "FAQs", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item.toLowerCase())
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-lime-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <p className="text-white cursor-pointer hover:text-lime-400">
            Log In
          </p>
          <Button className="rounded-full">Create Account</Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {isOpen ? (
            <FaTimes onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-slate-900 text-white p-6 transition-all`}
      >
        {["Home", "Courses", "FAQs", "Contact"].map((item, index) => (
          <Link
            key={index}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              document
                .getElementById(item.toLowerCase())
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block py-2 text-center text-lg hover:text-lime-400"
          >
            {item}
          </Link>
        ))}
        <div className="mt-4 text-center">
          <p className="cursor-pointer hover:text-lime-400">Log In</p>
          <Button className="mt-2 w-full">Create Account</Button>
        </div>
      </div>
    </nav>
  );
}
