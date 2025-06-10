import React from "react";

const ProfilePage = () => {
  const user = {
    name: "Ashish",
    profileImage: "/714.jpg", // Replace with actual image URL
    totalSolved: 25,
    currentLevel: 4,
    xp: 70, // out of 100
    badges: ["Recursion Master", "Graph Guru", "Sorting Sage"],
  };

  const badgeIcons = {
    "Recursion Master": "🌀",
    "Graph Guru": "📈",
    "Sorting Sage": "🗂",
  };

  return (
    <div className="min-h-screen bg-[#09181f] flex items-center justify-center px-4" style={{ padding: '2rem' }}>
      <div className=" text-[#fcf7d1] rounded-lg w-[100vh] max-w-md p-6 flex flex-col gap-4" style={{ padding: '1.5rem' }}>
        <h1 className="text-2xl font-semibold text-center text-[#c5a46d]">
          PROFILE
        </h1>

        <div className="flex flex-col gap-2 items-center">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-30 h-30 rounded-full border-2 border-[#c5a46d]"
          />
          <p className="mt-2 text-lg font-medium" style={{ marginTop: '.5rem'}} >{user.name}</p>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <p className="text-sm">Total Problems Solved</p>
          <p className="text-xl font-bold">{user.totalSolved}</p>

          <p className="text-sm">Current Level</p>
          <p className="text-xl font-bold">Level {user.currentLevel}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm text-center">XP Progress</p>
          <div className="w-full h-3 bg-[#1e3744] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#c5a46d]"
              style={{ width: `${user.xp}%` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-center">
          <p className="text-sm">Badges Earned</p>
          <div className="flex justify-center flex-wrap gap-3">
            {user.badges.map((badge) => (
              <div
                key={badge}
                className="bg-[#1e3744] px-3 py-1 rounded-full text-sm flex items-center gap-2"
                style={{ padding: '.5rem 1rem', borderRadius: '9999px' }}
              >
                <span>{badgeIcons[badge]}</span>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;