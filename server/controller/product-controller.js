import Product from "../model/productSchema.js";

export const getProducts = async function(req, res){
    try{
        const products = await Product.find({});
        res.status(201).json(products)
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getProductByID = async function(req, res){
    try{
        const id = req.params.id;
        //console.log("hey");
        //console.log(id);
        const product = await Product.findOne({'id': id});
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message});
    }
}