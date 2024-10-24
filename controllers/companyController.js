const Company = require('../models/companyModel');

exports.createCompany = async (req, res) => {
  try {
    const company = await Company.create({
      ...req.body
    });

    res.status(201).json({
      status: 'success',
      data: company
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate('recruiter', 'fullName email');
    
    res.status(200).json({
      status: 'success',
      data: companies
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};