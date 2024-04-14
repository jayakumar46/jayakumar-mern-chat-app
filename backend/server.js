import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import MessageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectMongoDb from "./db/connectionMongoDb.js";

const app = express();

const PORT1 = process.env.PORT || 5000;



app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",MessageRoutes);
app.use("/api/users",userRoutes);

app.get("/",(req,res)=>{
    //root route http://localhost:5000/    
    res.send("hello world!!");
});



dotenv.config();
app.listen(PORT1,()=>{
    connectMongoDb();
    console.log(`server running on port ${PORT1}`);
});


