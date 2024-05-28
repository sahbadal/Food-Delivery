import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://badalsah8541:8541928870@cluster0.hpbptt6.mongodb.net/spicy')
    .then(()=>console.log("DataBase connected"))
}