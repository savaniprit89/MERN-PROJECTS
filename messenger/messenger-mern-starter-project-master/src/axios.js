import axios from 'axios'

const instance =axios.create({
   // baseURL: 'http://localhost:9000'
   baseURL:'https://messenger-23e6.onrender.com'
})

export default instance;