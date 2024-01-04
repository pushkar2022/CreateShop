import React, { useState } from 'react'
import './css/stylelogin.css'
import { useNavigate } from "react-router-dom";
import { handleLoginRequest, handleRegisterRequest } from '../Api';

function LoginSignup() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [login,setLogin]=useState(false)
  const navigate = useNavigate();



  const handleSubmit=()=>{
    if(login) {
      console.log('Submit register',name,email,password)
     navigate('/curd')
      handleRegisterRequest({userName:email,password:password})
      

    }else{
      handleLoginRequest({userName:email,password:password})
      navigate('/curd')
      console.log('Submit login',name,email,password)

    }
  }
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>

      <h1>{login?'Sign Up':'Sing In'}</h1>
        <div className='loginsignup-fields'>
       {login&& <input type='text' placeholder='your Name' value={name} onChange={(e)=>setName(e.target.value)}/>}
        <input type='email' placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>



        </div>
        <button onClick={()=>handleSubmit()}>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span onClick={()=>{setLogin((pre)=>!pre)}}>{login?'Login here':'register'}</span></p>
        {login&&<div className='loginsignup-agree'>

             <input type='checkbox' name=''id=''/>
             <p>By continuing, I agree to the terms of use & privacy policy</p>

          </div>}


      </div>

    </div>

  )
}

export default LoginSignup