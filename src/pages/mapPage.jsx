import React from "react";
import { useNavigate } from "react-router-dom";

const levels = [
  { id: 1, unlocked: true },
  { id: 2, unlocked: true },
  { id: 3, unlocked: false },
  { id: 4, unlocked: false },
  { id: 5, unlocked: false },
];

const MapPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/Mockup2.png')",
        backgroundColor: "#09181f",
      }}
    >
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M 10 5 Q 20 2, 30 5 Q 40 8, 50 5 Q 60 2, 70 5 Q 80 8, 90 5"
          stroke="#c5a46d"
          strokeWidth="0.4"
          fill="transparent"
        />
      </svg>

      <div className="flex justify-between w-full max-w-5xl relative z-10">
        {levels.map((level, index) => (
          <div
            key={level.id}
            onClick={() => level.unlocked && navigate(`/level/${level.id}`)}
            className={`cursor-pointer w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg transition transform hover:scale-110 shadow-md border-4 ${
              level.unlocked
                ? "bg-[#fcf7d1] text-[#102129] border-[#c5a46d]"
                : "bg-gray-500 text-gray-300 border-gray-600 cursor-not-allowed"
            }`}
          >
            {level.unlocked ? level.id : "🔒"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapPage;
