const User = require("../Models/Usermodel")
const user_reg = require("../Models/Usermodel")




const Registration = async (req, res)=>{
    
    
    const {FirstName, LastName, email,password, role} = req.body

    const NewUser = new User({
        FirstName, LastName, email,password,role
    })
 await NewUser.save()
 return res.status(200).json({message: "Registration Successful", NewUser})
}

module.exports =  Registration