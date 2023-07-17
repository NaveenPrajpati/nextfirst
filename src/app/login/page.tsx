"use client";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {useState} from 'react'

function LoginPage() {
    const router=useRouter();
    const [user,setUser]=useState({
      
        email:'',
        password:''
    })

   async function onSubmit(){

    try {
        await axios.post('/api/users/login',user)
        .then(res=>{
          console.log(res.data)
          router.push('/profile')
        })
      } catch (error) {
          console.log('error occur ',error)
      }

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
            placeholder='Password' className='p-2 w-1/2 text-black'/><br />  

            <button className='my-5 p-1 text-white' onClick={onSubmit}>Login</button>

            <Link href={'/signup'} >goto signup</Link>
            </div>
            </div>

        </div>
    );
}

export default LoginPage;