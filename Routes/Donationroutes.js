const express = require("express")
const donate = require("../Controllers/donationcltr")
const validateToken = require("../Controllers/Logincols")


const router = express.Router()

router.post("/donation",validateToken, donate)

module.exports = router