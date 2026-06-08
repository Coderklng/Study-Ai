import React from "react";
import { Button } from "@/components/ui/button";

import {
  FaBookOpen,
  FaClipboardList,
  FaRobot,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black  flex items-center justify-center overflow-hidden">
      
      <div className="container mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <div className="inline-block bg-violet-900/40 border border-violet-700 px-4 py-2 rounded-full">
              
              <p className="text-sm text-violet-500 font-medium">
                AI Powered Learning
              </p>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white leading-tight">
                Study Smarter
              </h1>

              <h1 className="text-4xl md:text-6xl font-bold text-violet-600 leading-tight">
                Not Harder
              </h1>
            </div>

            <p className="text-zinc-500 max-w-lg leading-relaxed text-base">
              Your all-in-one AI study assistant to generate notes,
              solve doubts, create quizzes and boost productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Button className="bg-violet-700 hover:bg-violet-800 text-white px-6 py-6 rounded-xl transition-all duration-300">
                Get Started Free
              </Button>

              <Button
                variant="outline"
                className="border-zinc-700 bg-black text-white hover:bg-white hover:text-black px-6 py-6 rounded-xl transition-all duration-300"
              >
                Explore Features
              </Button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative   flex justify-center items-center w-full">
            <div className="border-white p-6 hover:border-violet-700 transition-all duration-300 w-full">
            {/* IMAGE */}
             <div className="flex border-2 border-zinc-800 p-6 rounded-3xl hover:border-violet-600 transition-all duration-300   justify-center w-full h-[350px] md:h-[500px] bg-gradient-to-l shadow-xl from-black to-zinc-950 ">
                  <img
                  width={200}
                  height={300}
              src="https://images.pexels.com/photos/5935789/pexels-photo-5935789.jpeg"
              alt="hero"
              className="mx-auto w-full max-w-xl     object-contain rounded-full  hover:drop-shadow-xl drop-shadow-white duration-300 transition-all "
            />
             </div>
                </div>
            {/* CARD 1 */}
            <div className="hidden md:block absolute top-[40%] right-70">
              <div className="bg-white dark:bg-zinc-950/90 border border-zinc-800 backdrop-blur-md p-5 rounded-2xl text-black dark:text-white shadow-xl">

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-violet-700 text-white flex items-center justify-center">
                    <FaBookOpen size={20} />
                  </div>

                  <div>
                    <h1 className="font-semibold">AI Notes</h1>
                    <p className="text-xs text-zinc-400">
                      Smart study notes
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* CARD 2 */}
            <div className="hidden md:block absolute bottom-0 left-0">
              <div className="bg-white dark:bg-zinc-950/90 border border-zinc-800 backdrop-blur-md p-5 rounded-2xl text-black dark:text-white shadow-xl">

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 text-white rounded-xl bg-green-600 flex items-center justify-center">
                    <FaClipboardList size={20} />
                  </div>

                  <div>
                    <h1 className="font-semibold">Quiz Generator</h1>
                    <p className="text-xs text-zinc-400">
                      Generate quizzes instantly
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* CARD 3 */}
            <div className="hidden md:block absolute top-10 -left-0">
              <div className="bg-white dark:bg-zinc-950/90 border border-zinc-800 backdrop-blur-md p-5 rounded-2xl text-black dark:text-white shadow-xl">

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-700  text-white flex items-center justify-center">
                    <FaRobot size={20} />
                  </div>

                  <div>
                    <h1 className="font-semibold">AI Chat</h1>
                    <p className="text-xs text-zinc-400">
                      Instant AI answers
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;