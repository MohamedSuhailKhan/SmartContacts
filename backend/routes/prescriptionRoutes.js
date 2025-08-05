const express = require('express');
const router = express.Router();
const { createPrescription } = require('../controllers/prescriptionController');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route('/').post(upload.single('prescriptionFile'), createPrescription);

module.exports = router;
