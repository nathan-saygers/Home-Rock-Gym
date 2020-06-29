import React, { useState } from 'react';

import loginAPI from '../APICalls/login'

// Form validation

const validateUsername = username => {
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  if (username.length > 7) {
    return true
  }

  return false
}

function Login() {
  // Component State
  const [ username, setUsername ] = useState("");
  const [ usernameInvalid, setUsernameInvalid] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateUsername(username)) {
      loginAPI(username)
      setUsername("")
    } else {
      setUsernameInvalid(true)
    }
  }

  // On change handler
  const handleChanges = event => {
    setUsername(event.target.value);
    console.log("this hittin?", username)
    console.log(usernameInvalid)
  }

  return (
    <div>
      {/* Login form */}
      <p>This is the login field.  Just your username</p>
      <form onSubmit={handleSubmit}>
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