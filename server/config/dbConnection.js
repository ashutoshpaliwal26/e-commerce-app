const mongoose = require('mongoose');

const dbConnection = async() =>{
    try{
        await mongoose.connect(process.env.URLSTR)
        console.log("Succesfull Connected To DataBase");
    }catch(err){
        console.log("==-------Connection Error------", err);
    }

}

module.exports = dbConnection;