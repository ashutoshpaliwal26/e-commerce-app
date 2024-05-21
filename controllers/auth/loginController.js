
const userModel = require('../../models/usermodel');

async function loginController(req,res){
    try{
        const {email, password} = req.body;
        const data = await userModel.findOne({email, password});
        if(!data){
            res.status(404).json({message : "Invalid Credentials"});
        }else{
            res.status(200).json({
                message : "User Created Succesfully",
                data : data
            })
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = loginController;