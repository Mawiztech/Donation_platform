const User = require("../Models/Usermodel")
const bcrpt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken")





const Registration = async (req, res)=>{
    
    
    const {FirstName, LastName, email,password, role} = req.body

    

    try {
        const exisitingUser = await User.findOne({ email });

    if (exisitingUser) {
      return res.status(400).json({ message: "User Account Already exist!" });
    }

    if(!FirstName){
        res.status(400).json({message: "please add your name"})
    }
    if(!LastName){
        res.status(400).json({message:"please add your last name"})
    }
    if(!email){
        res.status(400).json({message:"please add your email"})  
    }
    if(!password){
        res.status(400).json({message:"please add your password"}) 

    }
    const hashedpassword = await bcrpt.hash(password , 12)
    const NewUser = new User({
        FirstName, LastName, email, password: hashedpassword, role
    })
 await NewUser.save()
 return res.status(200).json({message: "Registration Successful", NewUser})
    } catch (error) {
        res.status(401).json({message: error.message})
        
    }
    
}

module.exports =  Registration