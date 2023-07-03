import {useHistory, Link} from'react-router-dom'
import { useState } from 'react';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
function Login(){ 
  
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  // navigatio  between login to home page
  
  const history = useHistory();
  const goToHomePage=()=>{

    signInWithEmailAndPassword(auth, email ,password).then(()=>{
      alert("successfully logged in");
      history.push('/home')
      
    }).catch((error)=>{
     
    })
   
  };
  return(
    <div>
      <form>
        <h1>Login Page</h1>
        <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='Enter your email'></input><br></br>
        <input type='password' onChange={(event) => setPassword(event.target.value)} placeholder='Enter your password'></input><br></br>
        <button onClick={goToHomePage}>Login</button><br></br>
        <Link to='/signUp'>Don't have account : SignUp </Link>
      </form>
    </div>
  )
    
}
export default Login;