"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";
import { FaSun, FaMoon } from "react-icons/fa";
const navLinkClass =
  "relative dark:text-white text-black hover:text-violet-500 transition-all duration-300 after:absolute after:left-0 after:-bottom-7 after:h-[2px] after:w-0 hover:after:w-full after:bg-violet-600 after:transition-all after:duration-300";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {theme,toggleTheme} = useTheme();
  return (
    <div className="bg-white sticky top-0 z-50 border-b border-zinc-800 text-black dark:bg-black/60 backdrop-blur-md  dark:text-white">
    <header className="">
      <div className="container mx-auto px-6 py-4">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/download.jpg"
              alt="logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Study <span className="text-violet-600">AI</span>
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8">
            <li className={navLinkClass}>
              <Link href="/">Home</Link>
            </li>
            <li className={navLinkClass}>
              <Link href="/about">About</Link>
            </li>
            <li className={navLinkClass}>
              <Link href="/features">Features</Link>
            </li>
            <li className={navLinkClass}>
              <Link href="/services">Service</Link>
            </li>
            <li className={navLinkClass}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={toggleTheme}
              
              className=" dark:bg-zinc-800  dark:text-white border-zinc-700 bg-white text-black hover:text-white"
            >
             {theme === "light" ? <FaSun size={18} />  : <FaMoon size={18} /> }
             
            </Button>

            <Link href="/auth/signup"  className="bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2 rounded-xl">Signup</Link>
             <Link href="/auth/login" className="bg-violet-700 hover:bg-violet-800 text-white px-5 py-2 rounded-xl">Login</Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute left-0 w-full bg-black border-t border-zinc-800 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-white">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/features">Features</Link></li>
          <li><Link href="/service">Service</Link></li>
          <li><Link href="/contact">Contact</Link></li>

          <div className="flex gap-4 pt-4">
               <Link  className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 text-white" href="/auth/signup">Signup</Link>
              <Link className="p-2 rounded-xl bg-violet-700 hover:bg-violet-800 text-white" href="/auth/login">Login</Link>
              
          </div>
        </ul>
      </div>
    </header>
    </div>
  );
};

export default Navbar;