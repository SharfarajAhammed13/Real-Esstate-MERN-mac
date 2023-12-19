import {Link } from "react-router-dom";
import React from 'react'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'> 
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username'></input>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='username'></input>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='username'></input>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'></button>
      </form>
      <div className=''>
        <p>Have an Account?</p>
        <Link to="{/sign-in}">
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  )
}
