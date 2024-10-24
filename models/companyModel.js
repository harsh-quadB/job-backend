const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Company description is required']
  },
  location: {
    type: String,
    required: [true, 'Company location is required']
  },
  recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Company', companySchema);