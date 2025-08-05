import React, { useState } from 'react';
import { UploadIcon, CheckCircleIcon, PlusIcon } from 'lucide-react';
import { Button } from './Button';
export const PrescriptionUploadSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [formStep, setFormStep] = useState(1);
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rightEyeSphere, setRightEyeSphere] = useState('');
  const [rightEyeCylinder, setRightEyeCylinder] = useState('');
  const [rightEyeAxis, setRightEyeAxis] = useState('');
  const [leftEyeSphere, setLeftEyeSphere] = useState('');
  const [leftEyeCylinder, setLeftEyeCylinder] = useState('');
  const [leftEyeAxis, setLeftEyeAxis] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(2);
  };
  const handlePrevStep = () => {
    setFormStep(1);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    const prescriptionDetails = {
      rightEye: {
        sphere: rightEyeSphere,
        cylinder: rightEyeCylinder,
        axis: rightEyeAxis,
      },
      leftEye: {
        sphere: leftEyeSphere,
        cylinder: leftEyeCylinder,
        axis: leftEyeAxis,
      },
      additionalInfo,
    };

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('prescriptionDetails', JSON.stringify(prescriptionDetails));
    if (file) {
      formData.append('prescriptionFile', file);
    }

    try {
      const response = await fetch('http://localhost:3001/api/prescriptions', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsUploaded(true);
      } else {
        console.error('Error uploading prescription');
        // Handle error state here
      }
    } catch (error) {
      console.error('Error uploading prescription:', error);
      // Handle error state here
    } finally {
      setIsUploading(false);
    }
  };
  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setRightEyeSphere('');
    setRightEyeCylinder('');
    setRightEyeAxis('');
    setLeftEyeSphere('');
    setLeftEyeCylinder('');
    setLeftEyeAxis('');
    setAdditionalInfo('');
    setFile(null);
    setIsUploaded(false);
    setFormStep(1);
  };
  return <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Upload Your Prescription
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Simply upload your eye prescription and we'll help you find the
              perfect contacts for your needs. Our optometrists will review your
              prescription.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {!isUploaded ? <>
                  {formStep === 1 && <form onSubmit={handleNextStep}>
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            Personal Details
                          </h3>
                          <div className="flex items-center">
                            <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                              1
                            </span>
                            <span className="text-sm text-gray-500">
                              Step 1 of 2
                            </span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name
                            </label>
                            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address
                            </label>
                            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number
                            </label>
                            <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Button type="submit" fullWidth>
                          Continue to Prescription Details
                        </Button>
                      </div>
                    </form>}
                  {formStep === 2 && <form onSubmit={handleSubmit}>
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            Prescription Details
                          </h3>
                          <div className="flex items-center">
                            <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                              2
                            </span>
                            <span className="text-sm text-gray-500">
                              Step 2 of 2
                            </span>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-700 mb-3">
                            Right Eye (OD)
                          </h4>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <label htmlFor="rightSphere" className="block text-xs font-medium text-gray-500 mb-1">
                                Sphere
                              </label>
                              <input type="text" id="rightSphere" value={rightEyeSphere} onChange={e => setRightEyeSphere(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="-2.25" />
                            </div>
                            <div>
                              <label htmlFor="rightCylinder" className="block text-xs font-medium text-gray-500 mb-1">
                                Cylinder
                              </label>
                              <input type="text" id="rightCylinder" value={rightEyeCylinder} onChange={e => setRightEyeCylinder(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="-0.75" />
                            </div>
                            <div>
                              <label htmlFor="rightAxis" className="block text-xs font-medium text-gray-500 mb-1">
                                Axis
                              </label>
                              <input type="text" id="rightAxis" value={rightEyeAxis} onChange={e => setRightEyeAxis(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="180" />
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-700 mb-3">
                            Left Eye (OS)
                          </h4>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <label htmlFor="leftSphere" className="block text-xs font-medium text-gray-500 mb-1">
                                Sphere
                              </label>
                              <input type="text" id="leftSphere" value={leftEyeSphere} onChange={e => setLeftEyeSphere(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="-2.50" />
                            </div>
                            <div>
                              <label htmlFor="leftCylinder" className="block text-xs font-medium text-gray-500 mb-1">
                                Cylinder
                              </label>
                              <input type="text" id="leftCylinder" value={leftEyeCylinder} onChange={e => setLeftEyeCylinder(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="-0.50" />
                            </div>
                            <div>
                              <label htmlFor="leftAxis" className="block text-xs font-medium text-gray-500 mb-1">
                                Axis
                              </label>
                              <input type="text" id="leftAxis" value={leftEyeAxis} onChange={e => setLeftEyeAxis(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="175" />
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Information
                          </label>
                          <textarea id="additionalInfo" rows={3} value={additionalInfo} onChange={e => setAdditionalInfo(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Previous brands, preferences, etc." />
                        </div>
                        <div className="mb-6">
                          <label htmlFor="prescription" className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Prescription Document (Optional)
                          </label>
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                              <div className="flex text-sm text-gray-600">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                                  <span>Upload a file</span>
                                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, PDF up to 10MB
                              </p>
                            </div>
                          </div>
                          {file && <p className="mt-2 text-sm text-gray-600">
                              Selected file: {file.name}
                            </p>}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="outline" onClick={handlePrevStep} type="button">
                          Back
                        </Button>
                        <Button type="submit" disabled={isUploading} fullWidth>
                          {isUploading ? 'Uploading...' : 'Submit Prescription'}
                        </Button>
                      </div>
                    </form>}
                </> : <div className="text-center py-8">
                  <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Prescription Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you, {name}. Our optometrist will review your
                    prescription shortly. You'll receive a confirmation email at{' '}
                    {email} once your prescription has been verified.
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Prescription status:{' '}
                    <span className="text-yellow-600 font-medium">
                      Pending Review
                    </span>
                  </p>
                  <Button onClick={resetForm}>
                    Submit Another Prescription
                  </Button>
                </div>}
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How It Works
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold">
                    1
                  </span>
                  <span className="text-gray-600">
                    Fill in your details and prescription information
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold">
                    2
                  </span>
                  <span className="text-gray-600">
                    Our opticians verify your prescription details
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold">
                    3
                  </span>
                  <span className="text-gray-600">
                    Receive a confirmation email once verified
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold">
                    4
                  </span>
                  <span className="text-gray-600">
                    Choose your preferred contact lenses and complete your order
                  </span>
                </li>
              </ol>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Need Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Our team of expert opticians is here to assist you with your
                prescription needs.
              </p>
              <Button variant="outline">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};