import React from "react";
import Image from "next/image";
import { FaRegStickyNote } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaFingerprint } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaBookOpen, FaMagic } from "react-icons/fa";
const Card = ()=>{
   return (
    <>
      <div className="w-full dark:bg-black bg-white">
        <div className="container mx-auto">
           <div className="flex flex-col justify-center ">
              <div className="py-5 flex justify-center items-center flex-col gap-2 ">
                 <h2 className="text-2xl text-purple-800 mx-auto">Features</h2>
                  <h1 className="bg-gradient-to-l from-violet-800  to-blue-700  bg-clip-text text-transparent text-sm sm:text-2xl  md:text-4xl  leading-tight">Everything You Need to Study Better</h1>    
              </div>
              <div>
                 <div className="w-full  items-center grid-cols-1 grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-6 gap-y-10 p-7 ">
                    <div className="space-y-3">
                       <div className="hover:scale-105 transition-all duration-300 w-full border border-zinc-800 hover:border-violet-700 rounded-2xl md:min-h-[100px] bg-black  shadow-lg p-6 flex flex-col gap-2 justify-center ">
                         <div className="hover:scale-105 transition-all duration-300 w-16 text-white h-16 bg-violet-900 flex justify-center items-center rounded-2xl">
                            <FaBookOpen  size={30} />
                         </div> 
                         <h1 className="text-white font-bold">AI Notes</h1>
                         <p className="text-gray-300  leading-snug text-md ">
                            Generate concise 
                            well-structured notes in 
                            seconds.
                         </p>
                       </div>     
                    </div>
                         <div className="space-y-3">
                       <div className="border border-zinc-800 hover:border-green-800 hover:scale-105 transition-all duration-300  w-full  rounded-2xl md:min-h-[100px] bg-black shadow-lg p-6 flex flex-col gap-2 justify-center ">
                         <div className="hover:scale-105 transition-all duration-300   w-16 text-white h-16 bg-green-500 flex justify-center items-center rounded-2xl">
                            <FaClipboardList size={27} />
                         </div> 
                         <h1 className="text-white font-bold">Quiz Generator</h1>
                         <p className="text-gray-300 leading-snug text-md">
                            Create quizzes automation from any topic or pdf.
                         </p>
                       </div>     
                    </div>
                       <div className="space-y-3">
                       <div className="border border-zinc-800 hover:border-blue-800 hover:scale-105 transition-all duration-300 w-full rounded-2xl md:min-h-[100px] bg-black shadow-lg p-6 flex flex-col gap-2 justify-center ">
                         <div className="hover:scale-105 transition-all duration-300  w-16 text-white h-16 bg-blue-900 flex justify-center items-center rounded-2xl">
                            <FaRobot  size={27} />
                         </div> 
                         <h1 className="text-white font-bold">AI Chat</h1>
                         <p className="text-gray-300 leading-snug text-md">
                            Get instant answers to your doubts anytime.
                         </p>
                       </div>     
                    </div>
                       <div className="space-y-3">
                       <div className="border border-zinc-800 hover:border-yellow-800 hover:scale-105 transition-all duration-300 w-full rounded-2xl md:min-h-[100px] bg-black  shadow-lg  p-6 flex flex-col gap-2 justify-center ">
                         <div className="hover:scale-105 transition-all duration-300   w-16 text-white h-16 bg-yellow-900 flex justify-center items-center rounded-2xl">
                                <FaFingerprint  size={27} />
                         </div> 
                         <h1 className="text-white font-bold">Smart Recognition</h1>
                         <p className="text-gray-300 leading-snug text-md">
                            AI helps smartly and remember 
                            better.
                         </p>
                       </div>     
                    </div>
                       <div className="space-y-3">
                       <div className="border border-zinc-800 hover:border-pink-800 hover:scale-105 transition-all duration-300 w-full  rounded-2xl md:min-h-[100px] bg-black  shadow-lg p-6 flex flex-col gap-2 justify-center ">
                         <div className="hover:scale-105 transition-all duration-300   w-16 text-white h-16 bg-pink-900 flex justify-center items-center rounded-2xl">
                            <FaFilePdf size={27} />
                         </div> 
                         <h1 className="text-white font-bold">PDF Summary</h1>
                         <p className="text-gray-300 leading-snug text-md">
                            Summarizing long pDFs instantly and save valuable time.
                         </p>
                       </div>     
                    </div>
                 </div>
              </div>
           </div> 
        </div>
      </div>  
      
    </>
   );
}

export default Card;