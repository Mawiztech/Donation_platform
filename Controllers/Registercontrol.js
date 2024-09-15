const user_reg = require("../Models/Usermodel")




const Registration = async (req, res)=>{
    
    
    const {FirstName, LastName, email} = req.body

    const NewUser = new user_reg({
        FirstName, LastName, email
    })
 await NewUser.save()
 return res.status(200).json({message: "Registration Successful", NewUser})
}

module.exports =  Registration