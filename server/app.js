require('dotenv').config();
const express = require('express');
const app = express();
const dbConnection = require('./config/dbConnection');
const cors = require('cors');
const bodyParser = require('body-parser');

const path = require('path');



app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

const loginPost = require('./routes/auth/login');
const signUpPost = require('./routes/auth/signup');
const productRoute = require('./routes/product');

dbConnection();

app.use('/', loginPost);
app.use('/', signUpPost);
app.use('/', productRoute)

const port = process.env.PORT ;

app.get('/', (req,res)=>{
    res.send("Hello world");
})

app.listen(port, ()=>{
    console.log(`Sever is Running on port : ${port}`);
})