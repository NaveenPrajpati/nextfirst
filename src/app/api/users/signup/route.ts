import {dbconnect} from '@/config/dbConfig'
import User from '@/models/userModal';
import { NextRequest,NextResponse } from 'next/server';
import bcrypt from 'bcrypt'

dbconnect()


 
export async function POST(request:NextRequest) {
try {
    const body=await request.json()
    const {name,email,password}=body

    console.log(body)

    //check user exist
   const user=await User.findOne({email})

   if(user){
    return NextResponse.json({
        error:'user already register'},
        {status:400}
    )
   }

   //hash password
   const hashpassword= await bcrypt.hash(password, 10) 

   const newUser=new User({
    name,email,password:hashpassword
   })

   const saveduser=await newUser.save()

   return NextResponse.json({
    success:true,
    message:'user created ',
    saveduser
   })

} catch (error) {
    console.log('error ouccur ',error)
}

}