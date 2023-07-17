
import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

export const getData=(request:NextRequest)=>{
    try {
        const token=request.cookies.get('token')?.value || '';
        const decoded:any=jwt.verify(token,process.env.TOKEN_SECRET!);

        return decoded.id;
    } catch (error) {
        
    }
}