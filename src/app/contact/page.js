import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock3,
  MessageSquare,
} from "lucide-react";

import Navbar from "../../../Components/Navbar/Navbar";

const ContactUi = () => {
  return (
    <>
    <div className="bg-black">
    <Navbar />
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black py-24">

      {/* Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="px-5 py-2 rounded-full border border-violet-500/30 text-violet-400 text-sm">
            CONTACT US
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-8 leading-tight">
            Let’s Talk About
            <span className="text-violet-500"> Your Learning</span>
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Have questions, suggestions, or feedback? Our team is here
            to help you anytime.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Info */}
          <div className="space-y-6">

            {/* Card 1 */}
            <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 flex items-start gap-5 hover:border-violet-500 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center">
                <Mail className="text-violet-500 text-2xl" />
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold">
                  Email Us
                </h2>

                <p className="text-zinc-400 mt-2">
                  support@studyai.com
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 flex items-start gap-5 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <Phone className="text-blue-500 text-2xl" />
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold">
                  Call Us
                </h2>

                <p className="text-zinc-400 mt-2">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 flex items-start gap-5 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                <MapPin className="text-cyan-500 text-2xl" />
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold">
                  Location
                </h2>

                <p className="text-zinc-400 mt-2">
                  Rajasthan, India
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 flex items-start gap-5 hover:border-pink-500 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center">
                <Clock3 className="text-pink-500 text-2xl" />
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold">
                  Working Hours
                </h2>

                <p className="text-zinc-400 mt-2">
                  Monday - Sunday / 24×7 Support
                </p>
              </div>
            </div>

          </div>

          {/* Right Form */}
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-8">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center">
                <MessageSquare className="text-violet-500 text-2xl" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  Send Message
                </h2>

                <p className="text-zinc-400 mt-1">
                  We’ll get back to you soon.
                </p>
              </div>

            </div>

            {/* Form */}
            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="text-zinc-300 text-sm mb-2 block">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-violet-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-zinc-300 text-sm mb-2 block">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-violet-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-zinc-300 text-sm mb-2 block">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-violet-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-zinc-300 text-sm mb-2 block">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-violet-500 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button className="w-full py-4 rounded-2xl bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white flex items-center justify-center gap-3">

                <Send className="text-xl" />

                Send Message

              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
    </div>
    </>
  );
};

export default ContactUi;