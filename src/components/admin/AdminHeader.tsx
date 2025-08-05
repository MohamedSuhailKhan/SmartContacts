import React from 'react';
import { Link } from 'react-router-dom';
import { LogOutIcon, HomeIcon } from 'lucide-react';
interface AdminHeaderProps {
  onLogout: () => void;
}
export const AdminHeader: React.FC<AdminHeaderProps> = ({
  onLogout
}) => {
  return <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">Smart Contacts Admin</span>
            <nav className="ml-10 flex space-x-8">
              <Link to="/admin/dashboard" className="text-white hover:text-blue-200 font-medium">
                Dashboard
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white hover:text-blue-200 flex items-center" title="Go to website">
              <HomeIcon className="h-5 w-5" />
              <span className="ml-2">Website</span>
            </Link>
            <button onClick={onLogout} className="text-white hover:text-blue-200 flex items-center" title="Logout">
              <LogOutIcon className="h-5 w-5" />
              <span className="ml-2">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>;
};