import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated); // 👈 get auth state

  return (
    <Routes>
      {/* 👇 Redirect to /home if already logged in */}
      <Route path="/" element={isAuth ? <Navigate to="/home" /> : <Login />} />
      
      {/* 👇 Only allow access if logged in */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* 👇 Catch all */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
