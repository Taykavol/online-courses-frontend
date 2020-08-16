import axios from 'axios'

export const state = () => ({
  status: '',
  token: localStorage.getItem('token') || '',
  user : {}
})
  
export const mutations = {
  auth_request(state){
    state.status = 'loading'
  },
  auth_success(state, payload){
    state.status = 'success'
    state.token = payload.token
    console.log('dsgdfgdf',payload.user, payload.token)
    state.user = payload.user
  },
  auth_error(state){
    state.status = 'error'
  },
  logout(state){
    state.status = ''
    state.token = ''
  },
}

export const actions = {
  login({commit}, user){
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({url: 'http://localhost:4000/login', data: user, method: 'POST' })
      .then(resp => {
        console.log('token',resp.data.token)
        const token = resp.data.token
        const user = resp.data.user
        console.log('user',user)
        localStorage.setItem('token', token)
        if(user)
        localStorage.setItem('email', user.email)
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', {token, user})
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error')
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },
  register({commit}, user){
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({url: 'http://localhost:4000/signup', data: user, method: 'POST' })
      .then(resp => {
        const token = resp.data.token
        const user = resp.data.user
        console.log('user',user)
        localStorage.setItem('token', token)
        if(user)
        localStorage.setItem('email', user.email)
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', {token, user})
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error', err)
        localStorage.removeItem('token')
        reject(err)
      })
    })
   },
   logout({commit}){
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
   },
   loginLichess({commit}) {
     return new Promise((resolve,reject) =>{
      commit('auth_request')
      /* --- Fill in your app config here --- */
      const port = 3000;
      const clientId = 'IKGglix7XImcYLPc';
      const redirectUri = `http://localhost:${port}/test`;

      const scopes = [
        "email:read"
      ];
        /* --- Lichess config --- */
      const tokenHost = 'https://oauth.lichess.org';
      const authorizePath = '/oauth/authorize';
      // const tokenPath = '/oauth';

      const state = Math.random().toString(36).substring(2);
      const authorizationUri = `${tokenHost}${authorizePath}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&state=${state}`;
      window.location.href = authorizationUri;
      // this.$router.push(authorizationUri)
      // axios({url:authorizationUri})
      // .then(data=>console.log('data',data))
     })
   }


}

export const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
}
