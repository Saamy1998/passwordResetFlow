import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the App</h1>
        <p className="text-gray-600 mb-6">You are successfully logged in!</p>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;