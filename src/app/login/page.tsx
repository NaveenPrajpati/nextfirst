"use client";
import Link from 'next/link';
import {useState} from 'react'

function LoginPage() {
    const [user,setUser]=useState({
      
        email:'',
        password:''
    })

    function onSubmit(){

    }

    return (
        <div className=" bg-slate-400">
            <div className=' container mx-auto'>

            <p>Login page</p>
            <div className='flex flex-col items-center gap-2 mt-10'>

      
            <input
             type="text" id='email' name='email' onChange={(e)=>setUser({...user,email:e.target.value})}
            placeholder='Email' className='p-2 w-1/2 '/>

            <input
             type="password" id='password' name='password' onChange={(e)=>setUser({...user,password:e.target.value})}
            placeholder='Password' className='p-2 w-1/2 '/><br />  

            <button className='my-5 p-1 text-white'>Login</button>

            <Link href={'/signup'} >goto signup</Link>
            </div>
            </div>

        </div>
    );
}

export default LoginPage;