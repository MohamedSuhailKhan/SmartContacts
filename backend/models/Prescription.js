const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending',
  },
  prescriptionFile: {
    type: String, // This will store the path to the uploaded file
    required: true,
  },
  prescriptionDetails: {
    rightEye: {
      sphere: String,
      cylinder: String,
      axis: String,
    },
    leftEye: {
      sphere: String,
      cylinder: String,
      axis: String,
    },
    additionalInfo: String,
  },
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
