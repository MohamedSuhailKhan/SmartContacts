import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, FileIcon, DownloadIcon, CheckIcon, XIcon, UserIcon, PhoneIcon, MailIcon, CalendarIcon, SendIcon } from 'lucide-react';
import { clientData } from './mockData';
import { Button } from '../Button';
export const ClientDetails = () => {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);
  // Find client by ID
  const client = clientData.find(c => c.id === id);
  // Handle status change
  const handleStatusChange = (newStatus: string) => {
    // In a real app, this would make an API call to update the status
    alert(`Prescription status updated to: ${newStatus}`);
    // Navigate back to dashboard
    navigate('/admin/dashboard');
  };
  // Handle email notification
  const handleSendNotification = () => {
    // In a real app, this would send an email to the client
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };
  if (!client) {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Client not found</h2>
        <Link to="/admin/dashboard" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500">
          <ArrowLeftIcon className="mr-2 h-5 w-5" />
          Back to Dashboard
        </Link>
      </div>;
  }
  // Check if this is a new submission (less than 24 hours)
  const today = new Date();
  const uploadDate = new Date(client.uploadDate);
  const diffTime = Math.abs(today.getTime() - uploadDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const isNew = diffDays <= 1;
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to="/admin/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-500">
          <ArrowLeftIcon className="mr-2 h-5 w-5" />
          Back to Dashboard
        </Link>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Client Prescription Details
              </h3>
              {isNew && <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  New
                </span>}
            </div>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details and prescription information.
            </p>
          </div>
          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
              ${client.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : client.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {client.status === 'pending' ? 'Pending Review' : client.status === 'verified' ? 'Verified' : 'Rejected'}
          </span>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <UserIcon className="mr-2 h-5 w-5 text-gray-400" />
                Full name
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {client.name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <MailIcon className="mr-2 h-5 w-5 text-gray-400" />
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center">
                {client.email}
                <button onClick={handleSendNotification} className="ml-3 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <SendIcon className="mr-1 h-3 w-3" />
                  {emailSent ? 'Email Sent!' : 'Send Notification'}
                </button>
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <PhoneIcon className="mr-2 h-5 w-5 text-gray-400" />
                Phone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {client.phone}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" />
                Uploaded on
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {client.uploadDate}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Prescription details
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div className="border border-gray-200 rounded-md p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Right Eye (OD)</p>
                      <p className="font-medium">
                        Sphere: {client.prescription.rightEye.sphere}
                      </p>
                      <p className="font-medium">
                        Cylinder: {client.prescription.rightEye.cylinder}
                      </p>
                      <p className="font-medium">
                        Axis: {client.prescription.rightEye.axis}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Left Eye (OS)</p>
                      <p className="font-medium">
                        Sphere: {client.prescription.leftEye.sphere}
                      </p>
                      <p className="font-medium">
                        Cylinder: {client.prescription.leftEye.cylinder}
                      </p>
                      <p className="font-medium">
                        Axis: {client.prescription.leftEye.axis}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-gray-500">
                      Additional Information
                    </p>
                    <p>
                      {client.prescription.additionalInfo || 'None provided'}
                    </p>
                  </div>
                </div>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Attached prescription
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {client.prescriptionFile ? <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <FileIcon className="flex-shrink-0 h-5 w-5 text-gray-400" />
                        <span className="ml-2 flex-1 w-0 truncate">
                          {client.prescriptionFile}
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button className="font-medium text-blue-600 hover:text-blue-500 flex items-center">
                          <DownloadIcon className="mr-1 h-4 w-4" />
                          Download
                        </button>
                      </div>
                    </li>
                  </ul> : <p className="text-gray-500 italic">No file attached</p>}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3">
        {client.status === 'pending' && <>
            <Button variant="outline" onClick={() => handleStatusChange('rejected')} className="flex items-center justify-center">
              <XIcon className="mr-2 h-4 w-4" />
              Reject Prescription
            </Button>
            <Button onClick={() => handleStatusChange('verified')} className="flex items-center justify-center">
              <CheckIcon className="mr-2 h-4 w-4" />
              Verify Prescription
            </Button>
          </>}
        {client.status === 'verified' && <Button variant="outline" onClick={() => handleStatusChange('pending')} className="flex items-center justify-center">
            <XIcon className="mr-2 h-4 w-4" />
            Mark as Pending
          </Button>}
        {client.status === 'rejected' && <Button onClick={() => handleStatusChange('pending')} className="flex items-center justify-center">
            <CheckIcon className="mr-2 h-4 w-4" />
            Reconsider Prescription
          </Button>}
      </div>
    </div>;
};