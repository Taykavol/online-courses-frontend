import axios from 'axios'

export const state = () => ({
  status: '',
  token: localStorage.getItem('token') || '',
  user : { email:localStorage.getItem('email') || '', role:localStorage.getItem('role') || ''},
  courseList1:[],
  courseList2:[],
  courseList3:[],
  courseList4:[],
  boughtCoursesIds:localStorage.getItem('boughtcourses')||[],
  boughtCourses:[],
  myBuildCourses:null,
  profile:null,
  teacherName:null,
  title:null,
  revenue:null,
  instructors:null,

  // alert:{}
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
  
  setMyBuildCourses(state,courses) {
    state.myBuildCourses=courses
  },
  setMyBuildCourseCurriculum(state,{courseId,curriculum}) {
    const courseIndex = state.myBuildCourses.findIndex(course=>course.id==courseId)
    state.myBuildCourses[courseIndex].curriculum = curriculum
  },
  setMyBuildCourseCredentials(state,{courseId,title}) {
    const courseIndex = state.myBuildCourses.findIndex(course=>course.id==courseId)
    state.myBuildCourses[courseIndex].title = title
  },
  // setAlert(state, {mode,message}) {
  //   console.log('Done')
  //   state.alert.mode = mode
  //   state.alert.message = message
  //   state.alert.visible = true
  //   const good= ()=>{
  //     state.alert = {}
  //   }
  //   setTimeout(()=>{
  //     good()
  //   },2000)
  // },
  setCourseList1(state, courses) {
    state.courseList1 = courses
  },
  setCourseList2(state, courses) {
    state.courseList2 = courses
  },
  setCourseList3(state, courses) {
    state.courseList3 = courses
  },
  setCourseList4(state, courses) {
    state.courseList4 = courses
  },
  setBoughtCourses(state, courses) {
    state.boughtCourses = courses
  },
  editBoughtCourse(state, {courseId, course}) {
    if(state.boughtCourses.length==0) return
    console.log(courseId,course)
  let index = state.boughtCourses.findIndex(course=>course.id==courseId)
  // state.boughtCourses.splice(index,1,course)

  state.boughtCourses.splice(index,1,JSON.parse(JSON.stringify(course)))
  
  // console.log('Hey from Vuex!',boughtCourse)
    // boughtCourse = course
  },
  setProfile(state, profile) {

    console.log('SetProfile!')
    state.profile = profile
    localStorage.setItem('profile',JSON.stringify(profile))
  },
  addMyBuildCourses(state,course){
    state.myBuildCourses.push(course)
  },
  setIntructors(state,instructors) {
    state.instructors = instructors
  },
  
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
   setInstructors: async({state , commit})=>{
    if(!state.instructors) {
      const data = await axios({url:"/profile/all"})
      commit('setIntructors', data.data)
      return data.data
    } else {
      return state.instructors
    }
   },
   setInstructor: async({state,commit},id)=>{
    if(!state.instructors) {
      let {data} = await axios.get(`/profile/${id}`)
      return data
    } else {
      return state.instructors.find(instructor=>instructor.id==id)
    }
   },
   courseList1: async ({state,commit}) =>{
    if(state.courseList1.length==0) {
      
      let {data} = await axios.get('/buildcourse/published')
      data = data.filter(course=>!state.boughtCoursesIds.includes(course.id))

      // state.courseList1 = data
      commit('setCourseList1',data)
      return data
    }
    return state.courseList1
  },
  courseList2: async ({state,commit}) =>{
    if(state.courseList2.length==0) {
      let {data} = await axios.get('/buildcourse/newest')
      data = data.filter(course=>!state.boughtCoursesIds.includes(course.id))
      commit('setCourseList2',data)
      return data
    }
    return state.courseList2
  },
  courseList3: async ({state,commit}) =>{
    if(state.courseList3.length==0) {
      let {data} = await axios.get('/buildcourse/top')
      data = data.filter(course=>!state.boughtCoursesIds.includes(course.id))

      commit('setCourseList3',data)
      return data
    }
    return state.courseList3
  },
  courseList4: async ({state,commit}) =>{
    if(state.courseList4.length==0) {
      let {data} = await axios.get('/buildcourse/recommended')
      data = data.filter(course=>!state.boughtCoursesIds.includes(course.id))
      commit('setCourseList4',data)
      return data
    }
    return state.courseList4
  },
  boughtCourses: async ({state,commit}) =>{
    if(state.boughtCourses.length==0) {
      const {data} = await axios.get('/boughtcourse/all')
      console.log('data', data)
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
  // alert: state=>state.alert,
  revenue: state=>state.revenue,
  coursesHome: state=>{
   return state.courseList1.concat(state.courseList2).concat(state.courseList3).concat(state.courseList4)
  },
  profile: state => {
    if(localStorage.getItem('profile')) return JSON.parse(localStorage.getItem('profile')) 
    return state.profile
  },
  boughtcourse: state => state.boughtCourses,
  instructors: state =>state.instructors
}
