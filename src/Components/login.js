import {useHistory, Link} from'react-router-dom'

function Login(){  
  // navigatio  between login to home page
  const history = useHistory();
  const goToHomePage=()=>{
    history.push('/home')
  };
  return(
    <div>
    <h1>Login Page</h1>
    <button onClick={goToHomePage}>Go to home page</button><br></br>
    <Link to='signUp'>Don't have account : SignUp </Link>

  </div>
  )
    
}
export default Login