const express = require("express")
const donate = require("../Controllers/donationcltr")


const router = express.Router()

router.post("/donation", donate)

module.exports = router