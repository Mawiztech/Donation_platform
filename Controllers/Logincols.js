

const User = require("../Models/Usermodel")
const bcryptjs = require("bcryptjs")
const jwt =  require("jsonwebtoken")



const Login = async (req, res)=> {

    try {

        const { FirstName, password } = req.body
    
        const user = await User.findOne({FirstName})
    
        if(!user){
            return res.status(404).json({message: "User account not found"})
        }
    
        const isMatched = bcryptjs.compare(password, user.password )
    
        if(!isMatched){
            return res.status(400).json({message: "Incorrect password or email!"})
        }
    
    
        const accessToken = jwt.sign({user}, `${process.env.ACCESSTOKE}`, {expiresIn: "5m"})

        return res.status(200).json({
            message: "Login Successful",
            accessToken,
            user
        })

    } catch (error) {
        res.status(401).json({message: error.message})
        
    }    
    
} 




module.exports  = Login


