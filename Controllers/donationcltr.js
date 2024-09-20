const Donation = require("../Models/Donationmodel");


// Handle Donations
const donate = async (req, res) => {
  const { amount, causeId } = req.body;
  // Integrate with payment gateway (e.g. Stripe, PayPal)
  const donation = new Donation({
    amount,
    donor: req.user.userId,
    cause: causeId
  });
  await donation.save();
  // Update the cause's raised amount
  const cause = await Cause.findById(causeId);
  cause.raised_amount += amount;
  await cause.save();

  res.status(200).json({ message: 'Donation successful' });
};

module.exports = donate