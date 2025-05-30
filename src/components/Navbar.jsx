import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // import the auth context

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth(); // get user and logout function

  return (
    <nav className="flex items-center justify-between p-8 shadow-md bg-[#102129]" style={{ padding: '1rem' }}>
      {/* Logo on the left */}
      <div className="text-xl font-bold text-[#c5a46d] cursor-pointer" onClick={() => navigate('/')}>
        MyLogo
      </div>

      {/* Right-side buttons */}
      <div className="gap-4 flex">
        {isLoggedIn ? (
          <>
            <button
              className="px-4 py-2 border rounded text-[#fcf7d1] hover:bg-[#1c3645]"
              style={{ borderColor: '#c5a46d', color: '#fcf7d1', padding: '0.5rem 1rem' }}
              onClick={() => navigate('/profile')}
            >
              Profile
            </button>
            <button
              className="px-4 py-2 border rounded text-[#fcf7d1] hover:bg-[#1c3645]"
              style={{ borderColor: '#c5a46d', color: '#fcf7d1', padding: '0.5rem 1rem' }}
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="px-4 py-2 border rounded text-[#fcf7d1] hover:bg-[#1c3645]"
            style={{ borderColor: '#c5a46d', color: '#fcf7d1', padding: '0.5rem 1rem' }}
            onClick={() => navigate('/auth')}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;