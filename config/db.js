import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL,{dbName: "Walhouse-data"});
        console.log(`connected to MongoDB successfully`.magenta.bold);  
    } catch (error) {
        console.log(`error in mongodb ${error}`.bgRed.white);
    }

}

export default connectDB;