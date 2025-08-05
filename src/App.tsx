import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
export function App() {
  return <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<>
                <Header />
                <Home />
              </>} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>;
}