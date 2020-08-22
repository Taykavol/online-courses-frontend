
import axios from 'axios'
export default function ({ store, redirect }) {
    if (!store.getters.isLoggedIn) {
      return redirect('/home')
    }
    axios.defaults.headers.common['Authorization'] ="Bearer "+ localStorage.getItem('token')
    axios.defaults.baseURL = 'http://localhost:4000';
    console.log(axios.defaults.headers.common['Authorization'])
  }