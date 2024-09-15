const express = require("express")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const cors = require("cors")
const Register_routes = require("./Routes/Register_routes")
const ConnectToDataBase = require("./db")

const app = express()


app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

ConnectToDataBase()

app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
})


app.use("/api", Register_routes)

