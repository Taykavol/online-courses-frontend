
import axios from 'axios'
export default function ({ store, redirect }) {
    if (!store.getters.isLoggedIn) {
      return redirect('/')
    }
    axios.defaults.headers.common['Authorization'] ="Bearer "+ localStorage.getItem('token')
    console.log('Url',process.env.baseUrlBackend)
    axios.defaults.baseURL = process.env.baseUrlBackend;
    // console.log(axios.defaults.headers.common['Authorization'])
  }