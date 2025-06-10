import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => navigate("/map");
  const goToAuth = () => navigate("/auth");
  const goToProfile = () => navigate("/profile");

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Teaser Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        {/* Top Center Image */}
        <img
          className="h-1/4 absolute top-[4.5rem]"
          src="/Arcade Gamer/5.png"
          alt="Main character"
        />

        {/* Tagline */}
        <p className="mt-4 text-xl md:text-2xl font-medium drop-shadow-md">
          Travel through time to master DSA
        </p>

        {/* Start Game Button */}
        <button
          onClick={handleStart}
          title="Start Game"
          className="absolute bottom-10 right-10 z-20 transition-transform hover:scale-105"
        >
          <img
            className="h-[100px] pointer-events-none"
            src="/Arcade Gamer/1.png"
            alt="Start Game"
          />
        </button>

        {/* Profile Icon (Top Left) */}
        <img
          className="h-[100px] absolute top-10 left-10 cursor-pointer"
          src="/Arcade Gamer/3.png"
          alt="Profile"
          onClick={goToProfile}
        />

        {/* Auth Icon (Bottom Left) */}
        <img
          className="h-[100px] absolute bottom-10 left-10 cursor-pointer"
          src="/Arcade Gamer/2.png"
          alt="Auth"
          onClick={goToAuth}
        />
      </div>

      {/* Cloud Animation (Optional, add clouds if needed) */}
      {/* <div className="absolute bottom-0 left-0 w-full h-40 z-10 overflow-hidden">
        <div className="cloud w-40 h-12 left-[10%] bottom-10" />
        <div className="cloud w-56 h-14 left-[40%] bottom-12 delay-10" />
        <div className="cloud w-48 h-10 left-[70%] bottom-8 delay-20" />
      </div> */}

      {/* Custom CSS */}
      <style>{`
        .cloud {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 9999px;
          filter: blur(8px);
          animation: moveClouds 60s linear infinite;
        }
        .delay-10 {
          animation-delay: 10s;
        }
        .delay-20 {
          animation-delay: 20s;
        }
        @keyframes moveClouds {
          0% {
            transform: translateX(-200px);
          }
          100% {
            transform: translateX(120vw);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
