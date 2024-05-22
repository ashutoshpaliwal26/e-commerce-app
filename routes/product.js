const express = require('express');
const router = express.Router();
const {productControllerForListing, productController} = require('../controllers/productController');
const path = require('path')
const filePath = path.join(__dirname, "../index.html");

router.post("/product", productController);

// router.post("/product", productControllerForListing);

module.exports = router;