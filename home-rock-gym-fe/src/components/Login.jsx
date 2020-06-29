import React, { useState } from 'react';

function Login() {
  // Component State
  const [ username, setUsername ] = useState({
    username: ""
  });

  // On change handler
  const handleChanges = event => {
    setUsername({...username, [event.target.name]: event.target.value });
  }

  // Submission handler
  const userLogin = event => {
    event.preventDefault();

    setUsername({ username: "" })
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
          onChange={handleChanges}
          ref={}
          />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Login;