import React, { useState } from 'react';
import './SignUp0.css'
function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

 

  return (
    <div className='login'>
      <div className='login-in'>
      <h1>Login</h1><hr/><br/><br/><br/>
      <form>
        <p>Username</p>
        
        <i class="fa-regular fa-user"></i><input type="text" placeholder='Nom' value={username} onChange={(e) => setUsername(e.target.value)} /><br /><hr/>
        <p>PassWord</p>
        
        <i class="fa-solid fa-lock"></i><input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br /><hr/>
        <p>Forgot password?</p>
        <hr/>
        <button type="submit">Login</button><br/><hr/>
        <div className='log-here'><p>Or Sign Up Using <i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-solid fa-g"></i></p></div>
        <hr/>
      </form>
      
      <div>{message}</div>
      </div>
      
      
    </div>
  );
}

export default SignUp;

