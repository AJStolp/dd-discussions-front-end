import config from "../config";

const AuthApiService = {
   postLogin({ username, password }) {
      return fetch(`${config.API_ENDPOINT}/auth/login`, {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
         // body: JSON.stringify({ username, password }),
      })
      .then(res => {
         res.json()
      })
      .catch(error => {
         console.log(error, "I AM POST LOGIN ERROR")
      })
   },
   postUser(user) {
      return fetch(`${config.API_ENDPOINT}/api/users`, {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
         body: JSON.stringify(user),
      })
      .then(res => {
         res.json()
      })
      .catch(error => {
         console.log(error, "I AM POST USER ERROR")
      })
   }
}
export default AuthApiService;