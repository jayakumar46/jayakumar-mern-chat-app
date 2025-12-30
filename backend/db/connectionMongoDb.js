import mongoose from "mongoose";
const connectMongoDb = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/usersChatApp");
        console.log('connected to Mongodb');
    } catch (error) {
        console.log('error connecting to Mongodb',error.message);
    }
}

export default connectMongoDb;
