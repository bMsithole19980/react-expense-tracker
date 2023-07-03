import { Link } from "react-router-dom"
import {getAuth ,createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import { useState } from "react";

function SignUp(){

    const [email, setEmail]=useState('');
    const [password , setPassword]= useState('');
    
    
    const register=(()=>{
        createUserWithEmailAndPassword(auth,email, password).then(()=>{
            alert("Successfuly registered");

        }).catch((error)=>{
            console.log(error.message);

        })

    })

   return(
    <div>
        <h1>Sign up page</h1>
        <form>
            <h5> Username:</h5>
            <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your username or email"></input>
            <h5>Password:</h5>
            <input type="password" onChange={(event)=>setPassword(event.target.value)} placeholder="Enter  password"></input>
            <br/>
            <button onClick={register}>SignUp</button><br/>
            <Link to='./Login'>Already have account : Login </Link>
        </form>
        
        
    </div>
   )

}
export default SignUp