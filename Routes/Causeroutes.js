const express = require("express")
const CauseOfDonation = require("../Controllers/Causecltr")



const router = express.Router()

router.post("/Causeroute", CauseOfDonation)

module.exports = router