import React from "react";
import { useNavigate } from "react-router-dom";

const levels = [
  { id: 1, unlocked: true, top: "70%", left: "10%" },
  { id: 2, unlocked: true, top: "60%", left: "27%" },
  { id: 3, unlocked: false, top: "59%", left: "47%" },
  { id: 4, unlocked: false, top: "50%", left: "67.5%" },
  { id: 5, unlocked: false, top: "50%", left: "89%" },
];

const MapPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/forest map.png')",
        backgroundColor: "#09181f",
      }}
    >
      {levels.map((level) => (
        <div
          key={level.id}
          onClick={() => level.unlocked && navigate(`/level/${level.id}`)}
          className={`absolute w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg transition transform hover:scale-110 shadow-md border-4 ${
            level.unlocked
              ? "bg-transparent text-transparent cursor-pointer"
              : "text-black border-transparent cursor-not-allowed"
          }`}
          style={{
            top: level.top,
            left: level.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          {level.unlocked ? level.id : "🔒"}
        </div>
      ))}
    </div>
  );
};

export default MapPage;
