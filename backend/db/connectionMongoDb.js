import mongoose from "mongoose";
const connectMongoDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('connected to Mongodb');
    } catch (error) {
        console.log('error connecting to Mongodb',error.message);
    }
}

export default connectMongoDb;