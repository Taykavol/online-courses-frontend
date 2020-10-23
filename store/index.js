import axios from 'axios'

export const state = () => ({
  status: '',
  token: localStorage.getItem('token') || '',
  user : { email:localStorage.getItem('email') || '', role:localStorage.getItem('role') || ''},
  bestCoursesFromHomePage:[],
  newestCoursesFromHomePage:[],
  topCoursesFromHomePage:[],
  recommendedCoursesFromHomePage:[],
  boughtCourses:[],
  myBuildCourses:null,
  profile:null,
  teacherName:null,
  title:null,
  revenue:null,
  alert:{}
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
    state.user = {email:null}
    // state.myCourses = null
  },
  setTeacherName(state,name) {
    state.teacherName = name
    localStorage.setItem('teacherName',name)
  },
  setTitle(state,title) {
    state.title =title
  },
  setRevenue(state, value) {
    state.revenue = value
  },
  // setMyCourses(state,courses) {
  //   state.myCourses=courses
  // },
  setMyBuildCourses(state,courses) {
    state.myBuildCourses=courses
  },
  setMyBuildCourseCurriculum(state,{courseId,curriculum}) {
    
    const courseIndex = state.myBuildCourses.findIndex(course=>course.id==courseId)
    // console.log('from state)', courseIndex,state.myBuildCourses[courseIndex] )
    state.myBuildCourses[courseIndex].curriculum = curriculum
    // console.log('from state 2',curriculum, state.myBuildCourses[courseIndex] ,state.myBuildCourses[courseIndex].curriculum)

    // state.myBuildCourses = state.myBuildCourses.splice(index,1,newCourse)
  },
  setMyBuildCourseCredentials(state,{courseId,title}) {
    const courseIndex = state.myBuildCourses.findIndex(course=>course.id==courseId)
    state.myBuildCourses[courseIndex].title = title
  },
  setAlert(state, {mode,message}) {
    console.log('Done')
    state.alert.mode = mode
    state.alert.message = message
    state.alert.visible = true
    const good= ()=>{
      state.alert = {}
    }
    setTimeout(()=>{
      good()
    },2000)
  },
  setBestCoursesFromHomePage(state, courses) {
    state.bestCoursesFromHomePage = courses
  },
  setNewestCoursesFromHomePage(state, courses) {
    state.newestCoursesFromHomePage = courses
  },
  setTopCoursesFromHomePage(state, courses) {
    state.topCoursesFromHomePage = courses
  },
  setRecommendedCoursesFromHomePage(state, courses) {
    state.recommendedCoursesFromHomePage = courses
  },
  setBoughtCourses(state, courses) {
    state.boughtCourses = courses
  },
  setProfile(state, profile) {
    state.profile = profile
    localStorage.setItem('profile',JSON.stringify(profile))
  }
  // nullAlert(state) {
  //   state.alert = {}
  // }
}

export const actions = {
  login({commit}, user){
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({url: '/login', data: user, method: 'POST' })
      .then(resp => {
        console.log('token',resp.data.token)
        const token = resp.data.token
        const user = resp.data.user
        console.log('user',user)
        localStorage.setItem('token', token)
        if(user) {
          localStorage.setItem('email', user.email)
          localStorage.setItem('role',user.role)
        }
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
      axios({url: '/signup', data: user, method: 'POST' })
      .then(resp => {
        const token = resp.data.token
        const user = resp.data.user
        console.log('user',user)
        localStorage.setItem('token', token)
        if(user) {
          localStorage.setItem('email', user.email)
          console.log(user.role)
          localStorage.setItem('role',user.role)
        }
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
      localStorage.removeItem('role')
      localStorage.removeItem('teacherName')
      localStorage.removeItem('boughtcourses')
      localStorage.removeItem('profile')
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
     })
   },
   bestCoursesFromHomePage: async ({state,commit}) =>{
    if(state.bestCoursesFromHomePage.length==0) {
      
      const {data} = await axios.get('/buildcourse/published')
      // state.bestCoursesFromHomePage = data
      commit('setBestCoursesFromHomePage',data)
      return data
    }
    return state.bestCoursesFromHomePage
  },
  newestCoursesFromHomePage: async ({state,commit}) =>{
    if(state.newestCoursesFromHomePage.length==0) {
      const {data} = await axios.get('/buildcourse/newest')
      commit('setNewestCoursesFromHomePage',data)
      return data
    }
    return state.newestCoursesFromHomePage
  },
  topCoursesFromHomePage: async ({state,commit}) =>{
    if(state.topCoursesFromHomePage.length==0) {
      const {data} = await axios.get('/buildcourse/top')
      commit('setTopCoursesFromHomePage',data)
      return data
    }
    return state.topCoursesFromHomePage
  },
  recommendedCoursesFromHomePage: async ({state,commit}) =>{
    if(state.recommendedCoursesFromHomePage.length==0) {
      const {data} = await axios.get('/buildcourse/recommended')
      commit('setRecommendedCoursesFromHomePage',data)
      return data
    }
    return state.recommendedCoursesFromHomePage
  },
  boughtCourses: async ({state,commit}) =>{
    if(state.boughtCourses.length==0) {
      const {data} = await axios.get('/boughtcourse/all')
      commit('setBoughtCourses',data)
      return data
    }
    return state.boughtCourses
  },


}

export const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  // myCourses: state=>state.myCourses,
  myBuildCourses: state=>state.myBuildCourses,
  getUser: state=>state.user,
  teacherName: state=>{
    if(localStorage.getItem('teacherName')) return localStorage.getItem('teacherName')
    return state.teacherName
  },
  title: state=>state.title,
  alert: state=>state.alert,
  revenue: state=>state.revenue,
  coursesHome: state=>{
   return state.bestCoursesFromHomePage.concat(state.newestCoursesFromHomePage).concat(state.topCoursesFromHomePage).concat(state.recommendedCoursesFromHomePage)
  },
  profile: state => {
    if(localStorage.getItem('profile')) return JSON.parse(localStorage.getItem('profile')) 
    return state.profile
  }
  // bestCoursesFromHomePage: async (state) =>{
  //   if(state.bestCoursesFromHomePage.length==0) {
      
  //     const {data} = await axios.get('http://localhost:4000/buildcourse/published')
  //     // state.bestCoursesFromHomePage = data
  //     // commit()
  //     return data
  //   }
  //   return state.bestCoursesFromHomePage
  // },
  // newestCoursesFromHomePage: async state =>{
  //   if(state.newestCoursesFromHomePage.length==0) {
  //     const {data} = await axios.get('http://localhost:4000/buildcourse/newest')
  //     return data
  //   }
  //   return state.newestCoursesFromHomePage
  // },
  // topCoursesFromHomePage: async state =>{
  //   if(state.topCoursesFromHomePage.length==0) {
  //     const {data} = await axios.get('http://localhost:4000/buildcourse/top')
  //     return data
  //   }
  //   return state.topCoursesFromHomePage
  // },
}
