const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const { protect, restrictTo } = require('../middlewares/authMiddleware');

router.get('/getallcompany', companyController.getAllCompanies);
router.post('/createcompany', companyController.createCompany);

module.exports = router;