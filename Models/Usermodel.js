const mongoose = require("mongoose")
const { STRING } = require("mysql/lib/protocol/constants/types")


const UserRegistration = mongoose.Schema({

    "FirstName" : {type : String},
    "LastName" : {type : String},
    "eamil" : {type : String, require:true}
})


const user_reg = mongoose.model("/user_reg", UserRegistration)

module.exports = user_reg