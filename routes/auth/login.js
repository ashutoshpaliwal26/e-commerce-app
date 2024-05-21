const loginController = require('../../controllers/auth/loginController');
const express = require('express');
const router = express.Router();
const path = require('path');
const filePath = path.join(__dirname, "../../index.html");
   
router.get('/login', (req,res)=>{
    res.sendFile(filePath)
})
router.post('/login', loginController);

module.exports = router;