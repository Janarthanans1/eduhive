import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("database connected");
        
    } catch (error) {
        console.error(error)
    }
}

export default connectDb