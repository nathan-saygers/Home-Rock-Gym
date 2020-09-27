import axios from 'axios';

// User login call

const loginAPI = username => {

  axios
    .post(
      "http://localhost:4000/api/users/login",
      {"username": username}
    )
    .then(response => {
      localStorage.setItem('userIdent', response.data.userIdent)
    })
    .catch(error => {
      console.log(error.message)
    })
}

export default loginAPI;