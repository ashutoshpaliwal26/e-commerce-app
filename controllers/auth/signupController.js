const userModel = require("../../models/usermodel")

async function signUpController(req,res){
    try{
        const {name , email, password, phone_no, age} = req.body;
        console.log(email);
        const userCheck = await userModel.findOne({email});
        console.log(userCheck);
        if(!userCheck){
            const newUser = new userModel({
                name , age ,phone_no , password , email
            })
            
            await newUser.save();
            res.json({message : "User Created Succesfully"});
        }else{
            res.json({messge : "User is Already Present"});
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = signUpController;