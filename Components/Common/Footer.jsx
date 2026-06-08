"use client";
import React from "react";
import Image from "next/image";
import "../../style/style.css";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin,FaInstagram,FaYoutube } from "react-icons/fa";
import { FaCommentDots} from "react-icons/fa";

const Footer = ()=>{

  return  (
    <>
     <div className="w-full bg-black backdrop-blur-md">
        <div className="container mx-auto">
            <div className=" w-full p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-10 items-center">
               <div className="w-full flex items-center gap-3 flex-col mt-7 items-center">
                  <div className="container mx-auto flex gap-3 items-center justify-center md:justify-start ">
                    <div className="w-[25px] h-[25px] rounded-full bg-cyan-800">
                        <img src="download.jpg" className="w-full h-full" />
                    </div>
                    <h1 className="text-white text-xl leading-tight">Study AI</h1>
                  </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        You all-in-one AI study assistant 
                        <br /> to learn practice and achieve more.
                    </p>
                    <ul className="flex w-full gap-3 text-white  p-3 items-center justify-center md:justify-start  md:mx-0">
                      <li className="w-[30px] justify-center flex items-center h-[30px] rounded-full bg-zinc-900 text-white backdrop-blur-md"><Link href="https://www.twitter.com"><FaXTwitter /></Link></li>
                      <li className="w-[30px] justify-center flex items-center h-[30px] rounded-full bg-zinc-900 text-white backdrop-blur-md"><Link href="https://www.linkedin.com"><FaLinkedin /></Link></li>
                      <li className="w-[30px] justify-center flex items-center h-[30px] rounded-full bg-zinc-900 text-white backdrop-blur-md "><Link href="https://www.instagram.com"><FaInstagram /></Link></li>
                      <li className="w-[30px] justify-center flex items-center h-[30px] rounded-full bg-zinc-900 text-white backgrop-blur-md"><Link href="https://www.youtube.com"><FaYoutube /></Link></li>
                    </ul>
                
               </div>
                <div className="w-full flex items-center gap-2 flex-col ">
                    <h1 className="text-center">Product</h1>
                    <ul className="flex flex-col items-center gap-3 text-white">
                        <li><Link href="#">Features</Link></li>
                        <li><Link href="#">How its Works</Link></li>
                        <li><Link href="#">Pricing</Link></li>
                        <li><Link href="#">Updates</Link></li>
                    </ul>
                </div>
                <div className="w-full flex items-center gap-2 flex-col">
                    <h1>Resources</h1>
                    <ul className="flex flex-col gap-3 items-center text-white">
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Help Center</Link></li>
                        <li><Link href="#">Guides</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                    </ul>
                    
                </div>
                <div className="w-full flex items-center flex-col gap-2">
                    <h1>Company</h1>
                    <ul className="flex flex-col gap-3 text-white items-center">
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Terms of Service</Link></li>
                    </ul>     
                </div>
                <div className="w-full flex p-3">
                    <div className="flex flex-col w-full gap-3 md:items-start items-center">
                        <h1 className="text-white">Newsletter</h1>
                       <p className="text-gray-300 text-sm">
                         Stay updates with our latest 
                         <br /> features and tips
                       </p>
                      
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  );

}

export default Footer;