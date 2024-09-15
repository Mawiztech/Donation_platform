const express = require("express")
const Registration = require("../Controllers/Registercontrol")


const router = express.Router()

router.post("/register", Registration)


module.exports = router