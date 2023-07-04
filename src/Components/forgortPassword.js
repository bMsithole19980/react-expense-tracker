import React from 'react';
import { useState } from 'react';
import {auth} from '../config/firebase';
import {sendPasswordResetEmail} from 'firebase/auth';


function ForgortPassword() {
  const [email, setEmail]=useState();

  const forgortPasswordReset=(()=>{
    sendPasswordResetEmail(auth,email).then(()=>{
       alert("check your email");
    }).catch((error)=>{

    })

  })
  
  return (
    <div>
        <h1>Reset Password</h1><br></br>
        <input type='text' onChange={(event)=>setEmail(event.target.value)} placeholder='enter email'></input><br></br>
        <button onClick={forgortPasswordReset} >Reset password</button>

    </div>
  )
}

export default ForgortPassword;