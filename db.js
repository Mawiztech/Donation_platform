const mongoose = require("mongoose")


const ConnectToDataBase = async ()=> {
    await mongoose.connect(`${process.env.DB_URL}`)
    .then(()=>{
        console.log("Database connected")
    })
}

module.exports = ConnectToDataBase