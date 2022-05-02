import React from 'react';
// import '../styles/Login.css';

function Login() {
  return (
    <div className="login" 
  
    // style={{
    //   backgroundColor: 'blue',
    
    // }}
    >
      <h1>Welcome back! Please Login</h1>
    
      <form className="login__form">

      <div>
      <label for="email">
          <input
            type="email"
            placeholder="Enter email address"
            className="input"
          />
        </label>
      
</div>
        <div>
        <label for="password">
          <input
            type="password"
            placeholder="Enter password"
            className="input"
          />
        </label>
      
</div>
    
      </form>

      <button className="button">Login</button>
    </div>
  );
}

export default Login;
