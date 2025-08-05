import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, FilterIcon, EyeIcon, CalendarIcon, ClockIcon, BellIcon } from 'lucide-react';
import { clientData } from './mockData';
export const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  // Filter clients based on search term and status filter
  const filteredClients = clientData.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) || client.email.toLowerCase().includes(searchTerm.toLowerCase()) || client.phone.includes(searchTerm);
    if (statusFilter === 'all') return matchesSearch;
    return matchesSearch && client.status === statusFilter;
  });
  // Count new submissions (less than 24 hours old)
  const today = new Date();
  const newSubmissions = clientData.filter(client => {
    const uploadDate = new Date(client.uploadDate);
    const diffTime = Math.abs(today.getTime() - uploadDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 1;
  });
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Prescription Dashboard
            </h1>
            <p className="mt-2 text-gray-600">
              Manage and review client prescriptions
            </p>
          </div>
          {newSubmissions.length > 0 && <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 flex items-center">
              <BellIcon className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm text-yellow-700">
                <span className="font-medium">{newSubmissions.length} new</span>{' '}
                prescription{newSubmissions.length !== 1 ? 's' : ''} submitted
                today
              </span>
            </div>}
        </div>
      </div>
      {/* Filters and search */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Search clients..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className="flex items-center">
          <FilterIcon className="mr-2 h-5 w-5 text-gray-400" />
          <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="all">All Prescriptions</option>
            <option value="pending">Pending Review</option>
            <option value="verified">Verified</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
              <EyeIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Prescriptions
                </dt>
                <dd>
                  <div className="text-lg font-medium text-gray-900">
                    {clientData.length}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
              <ClockIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Pending Review
                </dt>
                <dd>
                  <div className="text-lg font-medium text-gray-900">
                    {clientData.filter(client => client.status === 'pending').length}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
              <CalendarIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Verified
                </dt>
                <dd>
                  <div className="text-lg font-medium text-gray-900">
                    {clientData.filter(client => client.status === 'verified').length}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-red-100 rounded-md p-3">
              <BellIcon className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  New Today
                </dt>
                <dd>
                  <div className="text-lg font-medium text-gray-900">
                    {newSubmissions.length}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* Client list */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {filteredClients.length > 0 ? filteredClients.map(client => {
          // Check if this is a new submission (less than 24 hours)
          const uploadDate = new Date(client.uploadDate);
          const diffTime = Math.abs(today.getTime() - uploadDate.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          const isNew = diffDays <= 1;
          return <li key={client.id}>
                  <Link to={`/admin/clients/${client.id}`} className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-600 font-medium">
                              {client.name.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center">
                              <p className="text-sm font-medium text-blue-600">
                                {client.name}
                              </p>
                              {isNew && <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  New
                                </span>}
                            </div>
                            <p className="text-sm text-gray-500">
                              {client.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${client.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : client.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {client.status === 'pending' ? 'Pending Review' : client.status === 'verified' ? 'Verified' : 'Rejected'}
                          </span>
                          <p className="ml-4 text-sm text-gray-500">
                            {client.uploadDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>;
        }) : <li className="px-4 py-6 text-center text-gray-500">
              No clients match your search criteria
            </li>}
        </ul>
      </div>
    </div>;
};