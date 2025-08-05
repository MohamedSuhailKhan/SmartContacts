import React from 'react';
// Mock data for the admin dashboard
export const clientData = [{
  id: '1',
  name: 'Thabo Nkosi',
  email: 'thabo.nkosi@example.com',
  phone: '071 234 5678',
  uploadDate: '2023-07-15',
  status: 'verified',
  prescriptionFile: 'nkosi_prescription.pdf',
  prescription: {
    rightEye: {
      sphere: '-2.25',
      cylinder: '-0.75',
      axis: '180'
    },
    leftEye: {
      sphere: '-2.50',
      cylinder: '-0.50',
      axis: '175'
    },
    additionalInfo: 'Patient prefers monthly lenses. Previous brand: Acuvue.'
  }
}, {
  id: '2',
  name: 'Sarah Johnson',
  email: 'sarah.j@example.com',
  phone: '082 345 6789',
  uploadDate: new Date().toISOString().split('T')[0],
  status: 'pending',
  prescriptionFile: 'johnson_prescription.jpg',
  prescription: {
    rightEye: {
      sphere: '-1.75',
      cylinder: '-1.25',
      axis: '90'
    },
    leftEye: {
      sphere: '-2.00',
      cylinder: '-1.00',
      axis: '85'
    },
    additionalInfo: 'First-time contact lens user. Interested in daily disposables.'
  }
}, {
  id: '3',
  name: 'Lesego Moloi',
  email: 'lesego.m@example.com',
  phone: '083 456 7890',
  uploadDate: '2023-07-12',
  status: 'rejected',
  prescriptionFile: 'moloi_prescription.pdf',
  prescription: {
    rightEye: {
      sphere: '+1.50',
      cylinder: '-0.50',
      axis: '170'
    },
    leftEye: {
      sphere: '+1.75',
      cylinder: '-0.75',
      axis: '10'
    },
    additionalInfo: 'Prescription expired. Please visit for new eye exam.'
  }
}, {
  id: '4',
  name: 'Michael van der Merwe',
  email: 'michael.vdm@example.com',
  phone: '084 567 8901',
  uploadDate: new Date().toISOString().split('T')[0],
  status: 'pending',
  prescriptionFile: 'vandermerwe_prescription.jpg',
  prescription: {
    rightEye: {
      sphere: '-3.50',
      cylinder: '-0.25',
      axis: '180'
    },
    leftEye: {
      sphere: '-3.75',
      cylinder: '0',
      axis: '0'
    },
    additionalInfo: 'Interested in colored contacts for occasional use.'
  }
}, {
  id: '5',
  name: 'Nomsa Dlamini',
  email: 'nomsa.d@example.com',
  phone: '072 678 9012',
  uploadDate: '2023-07-14',
  status: 'verified',
  prescriptionFile: 'dlamini_prescription.pdf',
  prescription: {
    rightEye: {
      sphere: '-4.25',
      cylinder: '-1.00',
      axis: '95'
    },
    leftEye: {
      sphere: '-4.00',
      cylinder: '-1.25',
      axis: '85'
    },
    additionalInfo: 'Patient has astigmatism. Previously wore Biofinity Toric.'
  }
}, {
  id: '6',
  name: 'David Smith',
  email: 'david.s@example.com',
  phone: '076 789 0123',
  uploadDate: new Date().toISOString().split('T')[0],
  status: 'pending',
  prescriptionFile: null,
  prescription: {
    rightEye: {
      sphere: '-2.00',
      cylinder: '0',
      axis: '0'
    },
    leftEye: {
      sphere: '-1.75',
      cylinder: '0',
      axis: '0'
    },
    additionalInfo: 'Needs UV protection. Works outdoors.'
  }
}, {
  id: '7',
  name: 'Precious Mkhize',
  email: 'precious.m@example.com',
  phone: '073 890 1234',
  uploadDate: '2023-07-16',
  status: 'verified',
  prescriptionFile: 'mkhize_prescription.pdf',
  prescription: {
    rightEye: {
      sphere: '+2.25',
      cylinder: '-0.50',
      axis: '10'
    },
    leftEye: {
      sphere: '+2.50',
      cylinder: '-0.75',
      axis: '15'
    },
    additionalInfo: 'Prefers extended wear lenses. Sleeps with contacts occasionally.'
  }
}];