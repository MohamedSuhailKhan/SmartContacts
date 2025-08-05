import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminLogin } from '../components/admin/AdminLogin';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { AdminHeader } from '../components/admin/AdminHeader';
import { ClientDetails } from '../components/admin/ClientDetails';
export const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('adminToken'));

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };
  return <div className="min-h-screen bg-gray-100">
      {isAuthenticated && <AdminHeader onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <AdminLogin onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/dashboard" element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/admin" />} />
        <Route path="/clients/:id" element={isAuthenticated ? <ClientDetails /> : <Navigate to="/admin" />} />
      </Routes>
    </div>;
};