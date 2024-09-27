const express = require("express")
const Login = require("../Controllers/Logincols")


const router = express.Router()

router.post("/login", Login)


module.exports = router