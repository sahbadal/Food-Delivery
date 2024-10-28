import mongoose from "mongoose";
import { MONGO_URI } from "./envConfig.js";

export const connectDB = async () =>{
    await mongoose.connect(MONGO_URI)
    .then(()=>console.log("DataBase connected"))
}