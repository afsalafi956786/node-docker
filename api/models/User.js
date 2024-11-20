import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        trim:true,
    },
    blogs:[{
        type:mongoose.Types.ObjectId,
        ref:'Blog',
        required:true,
    }]
})

 export default mongoose.model('User',userSchema)
