import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import Register from './components/Register.jsx';
import LandingPage from './components/LandingPage.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Router>
        <Routes>
          {/* Route for Login */}
          <Route path="/" element={<Login />} />

          {/* Route for Forgot Password */}
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Route for Reset Password */}
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Route for Registration */}
          <Route path="/register" element={<Register />} />

          {/* Route for Landing Page */}
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;