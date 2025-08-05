const Prescription = require('../models/Prescription');
const User = require('../models/User');

// @desc    Create a new prescription
// @route   POST /api/prescriptions
// @access  Public
const createPrescription = async (req, res) => {
  const { name, email, phone, prescriptionDetails } = req.body;
  const prescriptionFile = req.file;

  if (!prescriptionFile) {
    return res.status(400).json({ message: 'Prescription file is required' });
  }

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, phone });
    }

    const prescription = await Prescription.create({
      user: user._id,
      prescriptionFile: prescriptionFile.path,
      prescriptionDetails: JSON.parse(prescriptionDetails),
    });

    res.status(201).json(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createPrescription,
};
