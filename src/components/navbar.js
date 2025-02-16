"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/full-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Define menu items with paths
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/#courses" },
    { name: "FAQs", path: "/#faqs" },
    { name: "Contact", path: "/#contact" },
    { name: "Other Services", path: "/services" },
  ];

  return (
    <nav className="w-full bg-slate-900 p-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <div
          className="text-white cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src={logo} alt="nclex-logo" className="w-40 sm:w-64" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {menuItems.map(({ name, path }, index) => (
            <Link
              key={index}
              href={path}
              className="hover:text-lime-400 transition"
            >
              {name}
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
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900 text-white p-6 transition-all z-50">
          {menuItems.map(({ name, path }, index) => (
            <Link
              key={index}
              href={path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-center text-lg hover:text-lime-400"
            >
              {name}
            </Link>
          ))}
          <div className="mt-4 text-center">
            <p className="cursor-pointer hover:text-lime-400">Log In</p>
            <Button className="mt-2 w-full">Create Account</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
