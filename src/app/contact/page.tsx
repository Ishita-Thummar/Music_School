"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
function Page() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative z-10 max-w-xl w-full bg-black bg-opacity-30 backdrop-blur-sm p-8 rounded-xl shadow-xl">
        <h1 className="text-4xl md:text-6xl text-center font-bold mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 mb-8">
          We are here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>
        <form className="space-y-6">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-4 rounded-md bg-[#1e293b] bg-opacity-90 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            placeholder="Your message"
            rows={5}
            className="w-full p-4 rounded-md bg-[#1e293b] bg-opacity-90 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-md transition duration-300 shadow-lg shadow-cyan-500/20"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default Page;
