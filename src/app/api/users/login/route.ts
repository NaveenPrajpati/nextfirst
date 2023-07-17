import {dbconnect} from '@/config/dbConfig'
import User from '@/models/userModal';
import { NextRequest,NextResponse } from 'next/server';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

dbconnect()


 
export async function POST(request:NextRequest) {
try {
    const body=await request.json()
    const {email,password}=body

    console.log(body)

    //check user exist
   const user=await User.findOne({email})

   if(!user){
    return NextResponse.json({
        error:'user not register'},
        {status:400}
    )
   }

   const tokenData={
    id:user._id,
    name:user.name,
    email:user.email
   }

   //create token
   const token= jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })

   const response =NextResponse.json({
    success:true,
    message:'login successfully'
   })

   response.cookies.set("token",token,{httpOnly:true})

   return response;
} catch (error) {
    console.log('error ouccur ',error)
}

}