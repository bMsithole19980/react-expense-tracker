import { Link } from "react-router-dom"
import {getAuth ,createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import { useState } from "react";
import {  useSelector,useDispatch} from "react-redux";
import { signUp } from "../authReducer/auth";


function SignUp(){
    const [email, setEmail]=useState('');
    const [password , setPassword]= useState('');
    
    const dispatch =useDispatch();
 
   return(
    <div>
        <h1>Sign up page</h1>
        
            <h5> Username:</h5>
            <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your username or email"></input>
            <h5>Password:</h5>
            <input type="password" onChange={(event)=>setPassword(event.target.value)} placeholder="Enter  password"></input>
            <br/>
            <button onClick={()=>dispatch(signUp(email, password))}>SignUp</button><br/>
            <Link to='/'>Already have account : Login </Link>

        
        
    </div>
   )

}
export default SignUp