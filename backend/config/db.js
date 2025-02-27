import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://nanilingala07:12na34ni@cluster0.xzlmm.mongodb.net/fooddel').then(()=>console.log("DB connected"))
}