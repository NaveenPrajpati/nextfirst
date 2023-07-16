import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String,required:[true,'provide user name']},
    email:{type:String,required:[true,'provide user email'],unique:true},
    password:{type:String,required:[true,'provide user password']},
    isVerified:{type:Boolean,default:false},
    isAdmin:{type:Boolean,default:false},
    forgetPasswordToken:String,
    forgetPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
})

const User=mongoose.models.users || mongoose.model('users',userSchema)

export default User;