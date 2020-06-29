import React, { useState } from 'react';
import loginAPI from '../APICalls/login'

function Login() {
  // Component State
  const [ username, setUsername ] = useState("");

  // On change handler
  const handleChanges = event => {
    console.log("this hittin?")
    setUsername(event.target.value);
  }

  // Submission handler
  const userLogin = event => {
    event.preventDefault();
    loginAPI(username)
    setUsername("")
  }

  return (
    <div>
      <p>This is the login field.  Just your username</p>
      <form onSubmit={userLogin}>
        <input 
          type="text"
          name="username"
          placeholder="username"
          value={ username }
          onChange={ handleChanges }
          />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Login;