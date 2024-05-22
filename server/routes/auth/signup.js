const express = require('express');
const router = express.Router();
const path = require('path');
const signUpController = require('../../controllers/auth/signupController');
const filePath = path.join(__dirname, '../../index.html');

router.get('/signup', (req,res)=>{
    res.sendFile(filePath);

})

router.post('/signup', signUpController);



module.exports = router;