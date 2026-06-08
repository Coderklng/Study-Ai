"use client";

import React from "react";
import { FaGraduationCap, FaStar, FaBook, FaComments, FaFacebookMessenger } from "react-icons/fa";
import { MdNoteAlt, MdQuiz, MdSupportAgent } from "react-icons/md";

import "../../style/style.css";
import "../../style/global.css";

const Content = () => {
    return (
        <div className="w-full bg-black text-white py-10">
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
                            <div>
                                <h2 className="text-2xl font-bold">100K+</h2>
                                <p className="text-sm text-gray-300">Students</p>
                            </div>
                        </div>
                    </div>
                    {/* CARD 2 */}
                    <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800 hover:border-green-600 hover:scale-[1.03] transition-all duration-300">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-700 text-white">
                                <MdNoteAlt size={26} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">5000+</h2>
                                <p className="text-sm text-gray-300">Notes Generated</p>
                            </div>
                        </div>
                    </div>
                    {/* CARD 3 */}
                    <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800 hover:border-blue-600 hover:scale-[1.03] transition-all duration-300">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-700 text-white">
                                <MdQuiz size={26} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">20K+</h2>
                                <p className="text-sm text-gray-300">Quizzes Created</p>
                            </div>
                        </div>
                    </div>
                    {/* CARD 4 */}
                    <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800 hover:border-pink-600 hover:scale-[1.03] transition-all duration-300">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-pink-700 text-white">
                                <MdSupportAgent size={26} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">24/7</h2>
                                <p className="text-sm text-gray-300">AI Support</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="py-10">
                    <div className="flex flex-col gap-3 items-center mb-10">
                        <h2 className="text-purple-800 text-xl uppercase">Testimonial</h2>
                        <h1 className="text-2xl md:text-5xl bg-gradient-to-l from-pink-600 to-violet-800 text-transparent bg-clip-text">What Students Say</h1>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-zinc-950 p-6  rounded-3xl shadow-xl hover:scale-105 transition-all">
                            <img src="https://images.pexels.com/photos/15802846/pexels-photo-15802846.jpeg" className="w-16 h-16 rounded-full mb-4" />
                            <p className="text-sm text-gray-300 mb-4">"Study AI has changed the way I study. The notes and quizzes are amazing."</p>
                            <h1 className="text-white font-bold">Suraj Sharma</h1>
                            <p className="text-gray-500 text-xs">B.Tech student</p>
                            <div className="flex text-yellow-400 mt-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-zinc-950 p-6 rounded-3xl shadow-xl hover:scale-105 transition-all">
                            <img src="https://images.pexels.com/photos/7828880/pexels-photo-7828880.jpeg" className="w-16 h-16 rounded-full mb-4" />
                            <p className="text-sm text-gray-300 mb-4">"The AI Chat feature is a lifesaver. I get answers to all my doubts instantly."</p>
                            <h1 className="text-white font-bold">Rahul Verma</h1>
                            <p className="text-gray-500 text-xs">NEET Aspirant</p>
                            <div className="flex text-yellow-400 mt-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-zinc-950 p-6 rounded-3xl shadow-xl hover:scale-105 transition-all">
                            <img src="https://images.pexels.com/photos/9159634/pexels-photo-9159634.jpeg" className="w-16 h-16 rounded-full mb-4" />
                            <p className="text-sm text-gray-300 mb-4">"PDF Summarizer is magic, it saves me hours of reading and helps me focus."</p>
                            <h1 className="text-white font-bold">Priya Singh</h1>
                            <p className="text-gray-500 text-xs">UPSC Aspirant</p>
                            <div className="flex text-yellow-400 mt-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
              <div className="bg-zinc-950 rounded-2xl p-8 mt-10 overflow-hidden">
                    <div className="mx-auto container flex flex-col md:flex-row justify-between items-center">
                        {/* Left Side Text */}
                        <div className="w-full md:w-1/2 p-5">
                            <h2 className="text-violet-800 uppercase font-semibold">Ready to get started</h2>
                            <h1 className="text-3xl md:text-5xl text-white mt-2">Ready to Study Smarter?</h1>
                            <p className="text-gray-300 mt-3 text-sm">Join thousands of students who are already boosting their productivity with study AI.</p>
                            <button className="bg-violet-800 hover:bg-violet-900 duration-300 transition-all text-white px-6 py-3 rounded-xl mt-6">Start For Free Now</button>
                        </div>

                        {/* Right Side Image (Rocket) */}
                        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end mt-10 md:mt-0">
                            <img className="w-full max-w-sm" src="rocket-Picsart-BackgroundRemover.jpg" alt="Rocket" />
                            
                            {/* Floating Icons */}
                            <div className="hidden md:flex bg-zinc-900 border border-zinc-700 backdrop-blur-md text-white p-4 rounded-xl absolute top-[10%] left-[20%]">
                                <FaBook size={25} />
                            </div>
                            <div className="hidden md:flex bg-zinc-900 border border-zinc-700 backdrop-blur-md text-white p-4 rounded-xl absolute left-[5%] top-[50%]">
                                <FaComments size={25} />
                            </div>
                            <div className="hidden md:flex bg-zinc-900 border border-zinc-700 backdrop-blur-md text-white p-4 rounded-xl absolute top-[40%] right-[10%]">
                                <FaFacebookMessenger size={25} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Content;