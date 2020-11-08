
import axios from 'axios'
export default function ({ store, redirect }) {
    // console.log('Hey')
    axios.defaults.headers.common['Authorization'] ="Bearer "+ localStorage.getItem('token')
    axios.defaults.baseURL = process.env.baseUrlBackend;
    // console.log(axios.defaults.headers.common['Authorization'])
  }