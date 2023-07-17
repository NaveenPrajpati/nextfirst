import { dbconnect } from "@/config/dbConfig";
import { getData } from "@/helpers/getDataFromToken";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";

dbconnect();

export async function GET(request:NextRequest) {
    try {
       const userId= await getData(request);
      const user=await User.findOne({_id:userId}).select("-password");

      return NextResponse.json({
        success:true,
        message:'user found',
        data:user
      })
        
    } catch (error) {
        
    }
}