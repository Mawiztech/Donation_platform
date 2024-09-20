const Cause = require("../Models/Causesmodel")



const CauseOfDonation = async (req, res)=>{

    const {title, description, goal_amount, raised_amount, organizer } = req.body

    const NewDonation = new Cause({title, description, goal_amount, raised_amount, organizer:req.User.UserID})

    await NewDonation.save()

    return res.status(200).json({msg:"You have successfully created a donation cause",NewDonation})
}

module.exports = CauseOfDonation