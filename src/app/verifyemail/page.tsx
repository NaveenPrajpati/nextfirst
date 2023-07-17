"use client"

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


function page() {
    const[token ,setToken]=useState('')
    const[verified,setVerified]=useState(false)
    const[error,setError]=useState(false)

    async function verifyUserEmail() {
        try {
            axios.post('/api/users/verifyemail',{token})
            setVerified(true)
        } catch (error:any) {
            setError(true)
            console.log(error.respons.data)
        }
    }

    useEffect(()=>{
        if(token?.length>0)
        verifyUserEmail()
    },[token])

    useEffect(()=>{
        const urlToken=window.location.search.split("=")[1];
        setToken(urlToken) 
    },[])

    return (
        <div>
            <h1>verify Email</h1>
            <h2>{token?`${token}`:'no token'}</h2>
            {verified && (
                <div>
                    <p>email verified</p>
                    <Link href={'/login'}>login</Link>
                </div>
            )}

{error && (
                <div>
                    <p>{error}</p>
                    <Link href={'/login'}>login</Link>
                </div>
            )}
        </div>
    );
}

export default page;