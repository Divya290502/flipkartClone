import { products } from "../constants/data.js";
import Product from "../model/productSchema.js";

const DefaultData = async () => {
    try{
        await Product.insertMany(products);
        console.log('Data imported successfully');
    }catch(error){
        console.log("Roor while inserting default data", error.message);
    }
}

export default DefaultData;