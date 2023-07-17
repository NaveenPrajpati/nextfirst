"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Toaster from 'react-hot-toast'

function page() {
const[data,setData]=useState()
    const router=useRouter()
   async function  logout(){

        try {
            await axios.get('/api/users/logout')
            .then(res=>{
              console.log(res.data)
              toast.success('logout success')
              router.push('/login')
            })
          } catch (error) {
              console.log('error occur ',error)
          }
    }

    async function getUserDetail() {
        const res=await axios.get('/api/users/me')
        console.log(res.data.data)
        setData(res.data.data)
    }

    return (
        <div className="flex flex-col items-center">
            
           <p>profile page</p>
           <p>{data?data.name :'no data'}</p>
           <Link href={`/profile/${data?._id}`}>go to {data?.name} profile</Link>
           <hr />
           <button onClick={logout}>Logout</button> <br />
           <button className="" onClick={getUserDetail}>Fetch user detail</button>
        </div>
    );
}

export default page;