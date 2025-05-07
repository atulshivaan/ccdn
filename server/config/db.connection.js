import mongoose from "mongoose";

const ConnectDB=async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected : ${conn.connection.host}`);
        

    } catch (error) {
        console.error(`MongoDB connection failed :${error.message}`);
        process.error(1);
         
    }
}

export default  ConnectDB