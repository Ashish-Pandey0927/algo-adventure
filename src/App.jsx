import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import AreaSelector from "./pages/AreaSelector";

import { AuthProvider } from "./context/AuthContext";
import MapPage from "./pages/mapPage";
import PlayArea from "./pages/PlayArea";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="bg-[#0d1b23] min-h-screen text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/level/:levelId" element={<PlayArea />} />
            <Route path="/area-selector" element={<AreaSelector />} />

            {/* Add more routes as needed */}
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
