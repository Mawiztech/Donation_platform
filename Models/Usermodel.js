const mongoose = require("mongoose")



const UserRegistration = new mongoose.Schema({

    "FirstName" : {type : String},
    "LastName" : {type : String},
    "eamil" : {type : String, require:true},
    "password" : {type : String, require:true},
    "role" : {type: String, Enumerator:['organizer', 'Donor'], default:"Donor"},
    "Date_of_reg": {type : Date, default: Date.now}
    
})

Date.now()


const User = mongoose.model("/User", UserRegistration)

module.exports = User