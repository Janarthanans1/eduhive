
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    img:{type:String,default:""},
    name:{type:String,required:true},
    registerNo:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,required:true}
})

const User = mongoose.models.User || mongoose.model("User",userSchema)

export default User