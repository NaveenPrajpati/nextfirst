import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response =NextResponse.json({
            success:true,
            message:'logout successfull'
        })
        response.cookies.set('token','',{httpOnly:true,expires:new Date(0)});
        return response;
        
    } catch (error:any) {
        return NextResponse.json(
            {status:500},
            { error:error.message}
        )
    }

}
    
