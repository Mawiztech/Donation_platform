const express = require("express")
const CauseOfDonation = require("../Controllers/Causecltr")
const validateToken = require("../Controllers/Logincols")



const router = express.Router()

router.post("/Causeroute", validateToken,  CauseOfDonation)

module.exports = router