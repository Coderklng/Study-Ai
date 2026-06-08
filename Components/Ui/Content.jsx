"use client";

import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdNoteAlt, MdQuiz, MdSupportAgent } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaBook, FaBookOpen } from "react-icons/fa";
import {
  FaComments,
  FaCommentDots,
  FaFacebookMessenger,
} from "react-icons/fa";

import "../../style/style.css";
import "../../style/global.css";

const Content = () => {
    return (
        <div className="w-full bg-white text-black  py-10  dark:bg-black dark:text-white">
            <div className="container mx-auto px-4">

                {/* Heading */}
                <h1 className="text-violet-500 text-3xl font-semibold text-center mb-10">
                    Our Impact
                </h1>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6">

                    {/* CARD 1 */}
                    <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800 hover:border-violet-700 hover:scale-[1.03] transition-all duration-300">

                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-violet-800 text-white">
                                <FaGraduationCap size={26} />
                            </div>

                            <div className="text-white">
                                <h2 className="text-2xl font-bold">100K+</h2>
                                <p className="text-sm text-gray-300">Students</p>
                                <p className="text-xs text-gray-500">Learning smarter everyday</p>
                            </div>
                        </div>

                    </div>

                    {/* CARD 2 */}
                    <div className="rounded-2xl p-6 bg-zinc-950 border border-zinc-800 hover:border-green-600 hover:scale-[1.03] transition-all duration-300">

                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-700 text-white">
                                <MdNoteAlt size={26} />
                            </div>

                            <div className="text-white">
                                <h2 className="text-2xl font-bold">5000+</h2>
                                <p className="text-sm text-gray-300">Notes Generated</p>
                                <p className="text-xs text-gray-500">High quality notes in seconds</p>
                            </div>
                        </div>

                    </div>

                    {/* CARD 3 */}
                    <div className="rounded-2xl p-6 bg-zinc-950 border border-zinc-800 hover:border-blue-600 hover:scale-[1.03] transition-all duration-300">

                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-700 text-white">
                                <MdQuiz size={26} />
                            </div>

                            <div className="text-white">
                                <h2 className="text-2xl font-bold">20K+</h2>
                                <p className="text-sm text-gray-300">Quizzes Created</p>
                                <p className="text-xs text-gray-500">Practice makes perfect</p>
                            </div>
                        </div>

                    </div>

                    {/* CARD 4 */}
                    <div className="rounded-2xl p-6 bg-zinc-950 border border-zinc-800 hover:border-pink-600 hover:scale-[1.03] transition-all duration-300">

                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-pink-700 text-white">
                                <MdSupportAgent size={26} />
                            </div>

                            <div className="text-white">
                                <h2 className="text-2xl font-bold">24/7</h2>
                                <p className="text-sm text-gray-300">AI Support</p>
                                <p className="text-xs text-gray-500">Always here to help you</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="py-5">
                    <div className="mt-3 w-full flex flex-col gap-3 items-center">
                        <h2 className="text-purple-800 text-xl uppercase ">Testimonial</h2>
                        <h1 className="text-2xl sm:text-3xl md:text-5xl bg-gradient-to-l from-pink-600 to-violet-800 text-transparent bg-clip-text">What Students Say</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2  mt-7 p-5  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3   gap-6  gap-y-10 w-full items-center ">
                        {/* card -1 
              */}
                        <div className="space-y-6">
                            <div className="hover:scale-105 transition-all duration-300 shadow-xl bg-zinc-950  rounded-3xl backdrop-blur-md w-full p-5 flex flex-col  justify-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full">
                                        <img className="hover:scale-105 transition-all duration-300 w-full h-full object-cover rounded-full" src="https://images.pexels.com/photos/15802846/pexels-photo-15802846.jpeg" />
                                    </div>
                                    <div>
                                         <p className="pt-2 max-w-md text-white text-xs md:text-sm leading-snug">
                                        "Study AI has commonly changed
                                        <br /> the way I study The notes and
                                        <br /> Quizzes are amazing "
                                    </p>
                                         <div className="py-0">
                                    <h1 className="text-white text-sm">Suraj Sharama</h1>
                                    <div className="mt-1 md:flex  gap-6 items-center flex-wrap">
                                        <h2 className="text-gray-400">B.Tech student</h2>
                                        <div className="flex text-yellow-400 mt-2 md:mt-0">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        {/* card -1 - end 
                 */}
                        <div className="space-y-6">
                            <div className="hover:scale-105 transition-all duration-300 shadow-xl bg-zinc-950  rounded-3xl backdrop-blur-md w-full p-5 flex flex-col  justify-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full">
                                        <img className="hover:scale-105 transition-all duration-300 w-full h-full object-cover rounded-full" src="https://images.pexels.com/photos/7828880/pexels-photo-7828880.jpeg" />
                                    </div>
                                    <div>
                                         <p className="max-w-md text-white text-xs md:text-sm">
                                        "The AI Chat feature is a lifesaver
                                        <br /> I get answers to all my doubts 
                                        <br /> instantly"
                                    </p>
                                         <div className="py-0">
                                    <h1 className="text-white text-sm">Rahul Verma</h1>
                                    <div className="mt-1 md:flex  gap-6 items-center flex-wrap">
                                        <h2 className="text-gray-400">NEET Aspirant</h2>
                                        <div className="flex text-yellow-400 mt-2 md:mt-0">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="shadow-xl bg-zinc-950  rounded-3xl backdrop-blur-md w-full p-5 flex flex-col  justify-center hover:scale-105 duration-300 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full">
                                        <img className="hover:scale-105 duration-300 transition-all  w-full h-full object-cover rounded-full" src="https://images.pexels.com/photos/9159634/pexels-photo-9159634.jpeg" />
                                    </div>
                                    <div>
                                         <p className="max-w-md text-white text-xs md:text-sm">
                                        "PDF Summarizer in magic it saves
                                        <br /> me hours of reading and helps me
                                        <br /> focus on important topics"
                                    </p>
                                         <div className="py-0">
                                    <h1 className="text-white text-sm">Priya Singh</h1>
                                    <div className="mt-0 md:flex  gap-6 items-center flex-wrap">
                                        <h2 className="text-gray-400">UPSC Aspirant</h2>
                                        <div className="flex text-yellow-400 mt-2 md:mt-0">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="bg-zinc-950 rounded-2xl backdrop-blur-md  w-full">
                    <div className="mx-auto container">
                      <div className="w-full flex-col  md:flex-row flex justify-between items-center p-3 image ">
                         {/* left - div 
                          */}
                         <div className="w-full px-3 p-3 py-10 px-5">
                            <h2 className="text-violet-800">READY TO GET STARTED</h2>
                            <h1 className="text-2xl md:text-5xl text-white ">Ready to Study Smarter?</h1>
                            <p className="text-gray-300 mt-3 text-sm">
                                Join thousands of students who are already 
                                <br /> boosting their productivity with study Ai
                            </p>
                            <button className=" hover:bg-violet-950 duration-300 transition-all bg-violet-800 text-white px-3 py-2 rounded-xl mt-6">Start For Free Now</button>
                         </div> 
{/*                          
                         right -div  */}
                         <div className="w-full relative flex ">
                          <div className="max-w-xl w-full flex justify-center md:justify-end"> 
                            <img className="w-full md:max-w-md" src="rocket-Picsart-BackgroundRemover.jpg" />
                          </div>
                           <div className="hidden md:flex bg-zinc-950 backdrop-blur-md text-white p-5 w-15 h-15 rounded-xl absolute top-[10%] left-[50%] ">
                              <FaBook  size={25} />
                           </div>
                           <div className="hidden md:flex bg-zinc-950 backdrop-blur-md text-white p-5 w-15 h-15 rounded-xl absolute left-[30%] top-[50%] ">
                              <FaComments  size={25} />
                           </div>
                           <div className="hidden md:flex bg-zinc-950 backdrop-blur-md text-white p-5 w-15 h-15 rounded-xl top-[40%] absolute left-[80%] ">
                              <FaFacebookMessenger  size={25} />
                           </div>
                         </div>

                      </div>   
                    </div>
                 </div> 
            </div>

        </div>

    );
};

export default Content;