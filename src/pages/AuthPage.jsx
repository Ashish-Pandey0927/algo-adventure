import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthPage = () => {
  const { login } = useAuth(); // Get the authentication status from context
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "", // Required for registration
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`
      : `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`;

    // If login, remove username before sending
    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const res = await axios.post(url, payload);
      login(res.data.token);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#09181f]">
      <div className="bg-[#102129] p-8 rounded-lg shadow-lg w-full max-w-md" style={{ padding: '2rem' }}>
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ marginBottom: '1.5rem', color: '#c5a46d' }}>
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded text-[#fcf7d1]"
                style={{ padding: '.5rem' }} // Add margin for spacing
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded text-[#fcf7d1]"
            style={{ padding: '.5rem' }} // Add margin for spacing
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded text-[#fcf7d1]"
            style={{ padding: '.5rem' }} // Add margin for spacing
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            style={{ padding: '.5rem', backgroundColor: '#1c3645', color: '#fcf7d1' }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600" style={{ marginTop: '1rem', color: '#fcf7d1' }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;