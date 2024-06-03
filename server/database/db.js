import mongoose from 'mongoose';

export const Connection = async(url) => {
    try{
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected successfully");
    }catch(error){
        console.log('Error while connecting with database', error.message);
    }
}
export default Connection;