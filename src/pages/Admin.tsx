import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminLogin } from '../components/admin/AdminLogin';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { AdminHeader } from '../components/admin/AdminHeader';
import { ClientDetails } from '../components/admin/ClientDetails';
export const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Simple authentication handler
  const handleLogin = (username: string, password: string) => {
    // In a real app, this would validate against a backend
    if (username === 'admin' && password === 'optometrist123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  // Logout handler
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return <div className="min-h-screen bg-gray-100">
      {isAuthenticated && <AdminHeader onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <AdminLogin onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/admin" />} />
        <Route path="/clients/:id" element={isAuthenticated ? <ClientDetails /> : <Navigate to="/admin" />} />
      </Routes>
    </div>;
};