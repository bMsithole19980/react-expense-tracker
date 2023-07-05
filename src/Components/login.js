import {useHistory, Link} from'react-router-dom'
import { useState } from 'react';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { signIn } from '../authReducer/auth';


function Login(){ 
  
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  const dispatch = useDispatch();
 
  const history = useHistory();
  
  return(
    <div>
      
        <h1>Login Page</h1>
        <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='Enter your email'></input><br></br>
        <input type='password' onChange={(event) => setPassword(event.target.value)} placeholder='Enter your password'></input><br></br>
        <button onClick={()=>dispatch(signIn(email ,password))}>Login</button><br></br>
        <Link to='/forgotPassword'>forgort Password </Link><br></br>
        <Link to='/signUp'>Don't have account : SignUp </Link>
      
    </div>
  )
    
}
export default Login;