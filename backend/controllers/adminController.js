const Admin = require('../models/Admin');
const Prescription = require('../models/Prescription');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
const authAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (admin && (await bcrypt.compare(password, admin.password))) {
      res.json({
        _id: admin._id,
        username: admin.username,
        token: jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
          expiresIn: '30d',
        }),
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all prescriptions
// @route   GET /api/admin/prescriptions
// @access  Private/Admin
const getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({}).populate('user', 'name email');
    res.json(prescriptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update prescription status
// @route   PUT /api/admin/prescriptions/:id
// @access  Private/Admin
const updatePrescriptionStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const prescription = await Prescription.findById(req.params.id);

    if (prescription) {
      prescription.status = status;
      const updatedPrescription = await prescription.save();
      res.json(updatedPrescription);
    } else {
      res.status(404).json({ message: 'Prescription not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  authAdmin,
  getPrescriptions,
  updatePrescriptionStatus,
};
