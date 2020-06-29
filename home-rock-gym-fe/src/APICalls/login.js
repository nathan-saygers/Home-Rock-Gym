import axios from 'axios';

// User login call

const loginAPI = username => {

  axios
    .post(
      "http://localhost:4000/api/users/login",
      {"username": username}
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

export default loginAPI;