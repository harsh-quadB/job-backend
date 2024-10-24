const Job = require('../models/jobModel');

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create({
      ...req.body
    });

    res.status(201).json({
      status: 'success',
      data: job
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .populate('company')
      .populate('recruiter', 'fullName email');
    
    res.status(200).json({
      status: 'success',
      data: jobs
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.applyToJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // if (job.applicants.includes(req.user._id)) {
    //   return res.status(400).json({ message: 'Already applied to this job' });
    // }

    job.applicants.push(req.user._id);
    await job.save();

    res.status(200).json({
      status: 'success',
      message: 'Successfully applied to job'
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};