import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/map');
  };

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

      {/* Overlay Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
          AlgoAdventure
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-medium drop-shadow-md" style={{ marginTop: '1rem' }}>
          Travel through time to master DSA
        </p>
        <button
          onClick={handleStart}
          className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-lg transition duration-300"
          style={{ marginTop: '2rem', padding: '0.75rem 1.5rem' }}
        >
          Start Your Adventure
        </button>
      </div>

      {/* Cloud Animation */}
      <div className="absolute bottom-0 left-0 w-full h-40 z-10 overflow-hidden">
        <div className="cloud w-40 h-12 left-[10%] bottom-10" />
        <div className="cloud w-56 h-14 left-[40%] bottom-12 delay-10" />
        <div className="cloud w-48 h-10 left-[70%] bottom-8 delay-20" />
      </div>

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
