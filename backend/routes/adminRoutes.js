const express = require('express');
const router = express.Router();
const {
  authAdmin,
  getPrescriptions,
  updatePrescriptionStatus,
} = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

router.post('/login', authAdmin);
router.route('/prescriptions').get(protect, getPrescriptions);
router.route('/prescriptions/:id').put(protect, updatePrescriptionStatus);

module.exports = router;
