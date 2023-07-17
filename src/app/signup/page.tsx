"use client";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {useState} from 'react'

function SignupPage() {
    const [user,setUser]=useState({
        name:'',
        email:'',
        password:''
    })
const router=useRouter();

   async function onSubmit(){
        try {
          await axios.post('/api/users/signup',user)
          .then(res=>{
            console.log(res.data)
            router.push('/login')
          })
        } catch (error) {
            console.log('error occur ',error)
        }
    }

    return (
        <div className=" bg-slate-400">
            <div className=' container mx-auto'>

            <p>Signup page</p>
            <div className='flex flex-col items-center gap-2 mt-10'>

         
          <input
             type="text" id='name' name='name' onChange={(e)=>setUser({...user,name:e.target.value})}
            placeholder='username' className='p-2 w-1/2 '/>
            <input
             type="text" id='email' name='email' onChange={(e)=>setUser({...user,email:e.target.value})}
            placeholder='Email' className='p-2 w-1/2 '/>

            <input
             type="password" id='password' name='password' onChange={(e)=>setUser({...user,password:e.target.value})}
            placeholder='Password' className='text-black p-2 w-1/2 '/><br />  

            <button className='my-5 p-1 text-white' onClick={onSubmit}>Signup</button>

            <Link href={'/login'} >goto login</Link>
            </div>
            </div>

        </div>
    );
}

export default SignupPage;