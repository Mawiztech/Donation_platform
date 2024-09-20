const mongoose = require("mongoose")


const donationSchema = new mongoose.Schema({
    amount: Number,
    donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    cause: { type: mongoose.Schema.Types.ObjectId, ref: 'Cause' },
    paymentStatus: { type: String, enum: ['pending', 'completed'], default: 'pending' }
  });
  
  const Donation = mongoose.model('Donation', donationSchema);

  module.exports = Donation