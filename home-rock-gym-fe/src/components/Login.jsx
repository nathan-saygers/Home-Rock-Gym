// dependencies
import React, { useState } from 'react';
import styles from './Login.module.scss'
// components
import LoginValidation from '../components/alerts/LoginValidation'
// utilities
import loginAPI from '../APICalls/login'

// Form validation

const validateUsername = username => {
  const usernameRegex = /^[a-zA-Z0-9_-]+$/;
  if (username.length > 7 && username.match(usernameRegex)) {
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
      setUsernameInvalid(false)
      loginAPI(username)
      setUsername("")
    } else {
      setUsernameInvalid(true)
    }
  }

  // On change handler
  const handleChanges = event => {
    setUsername(event.target.value);
  }

  return (
    <div className={styles.loginContainer} >
      {/* Login form */}
      <p className={styles.loginLabel}>LOGIN</p>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div>
          <input className={styles.loginFormChild}
            name="username"
            placeholder="Username"
            value={ username }
            onChange={ handleChanges }
            />
          <button className={styles.loginFormChild}
            type="submit">Login</button>
        </div>
      </form>
      {usernameInvalid && <LoginValidation />}
    </div>
  )
}

export default Login;