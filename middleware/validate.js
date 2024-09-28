

const validateToken = async(req, res, next)=>{

    try {

        const tkn = req.header("Authorization")

        if(!tkn){
            return res.status(401).json({message: "Access Denied!"})
        }

        const tknn = tkn.split(" ")
    
        const token = tknn[1]
    
        const decoded = jwt.verify(token, process.env.ACCESSTOKEN)

        console.log({decoded})

        if(!decoded){
            return res.status(401).json({message: "Invalid Login details"})
        }

        const user = await User.findOne({email: decoded.user.email})

        if(!user){
            return res.status(404).json({message: "User account not found!"})
        }
    
        req.user = user

        next()

        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }



}

module.exports = validateToken
