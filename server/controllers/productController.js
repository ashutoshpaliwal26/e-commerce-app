const product = require('../models/productmodel');

const productController = async(req,res)=>{
    try{
        const dataApi = await product.find({});
        res.json(dataApi);
    }catch(err){
        console.log(err);
    }
}


const productControllerForListing = async (req, res) => {
    try {
        const { image,
            title,
            avg,
            figure,
            review,
            actualPrice,
            sellingPrice,
            brand,
            delivery,
            seller,
            description,
            modelName,
            modelNumber,
            modelColor
        } = req.body;
        const newProduct = new product({
            image,
            title,
            rating: {
                avg,
                figure
            },
            review,
            price: {
                actualPrice,
                sellingPrice
            },
            brand,
            delivery,
            seller,
            description,
            specification: {
                modelName,
                modelNumber,
                modelColor
            }
        })
        await newProduct.save();
        res.send("Product Created Succesfully");
    }catch(err){
        console.log(err);
    }

}

module.exports = {productControllerForListing,productController};