const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const { protect, restrictTo } = require('../middlewares/authMiddleware');

router.get('/getalljob', jobController.getAllJobs);
router.post('/createjob', jobController.createJob);
router.post('/:jobId/apply', jobController.applyToJob);

module.exports = router;