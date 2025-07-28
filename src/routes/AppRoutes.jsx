import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated); 

  return (
    <Routes>
    
      <Route path="/" element={isAuth ? <Navigate to="/home" /> : <Login />} />
      
   
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

 
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
