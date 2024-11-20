import mongoose from "mongoose";

const blogSchema=new  mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,

    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
},{
    timestamps:true,
})

export default mongoose.model('Blog',blogSchema)