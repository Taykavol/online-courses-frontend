<template>
  <div class="">
    <div class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  </div>
</template>

<script>
// import PuzzleComponent from "~/components/publishcourse/puzzlebuilder/PuzzleComponent.vue"
import axios from 'axios'
export default {
  layout:'test',
// middleware:['lichessAuth'],
// components:[PuzzleComponent],
async beforeCreate() {
  console.log(this.$route.query.code)
  let url = new URL("http://localhost:4000/lichess/callback"),
    params = {code:this.$route.query.code, state:this.$route.query.state}
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  // fetch(url).then(...)
  const data = await fetch(url)
  const {email,token,role,courses} = await data.json()
  // console.log('courses',courses.map(value=>value.courseId) )
  // localStorage.setItem('boughtcourses', )
  localStorage.setItem('boughtcourses',JSON.stringify(courses.map(value=>value.courseId)))
  localStorage.setItem('email',email)
  localStorage.setItem('token',token)
  localStorage.setItem('role',role)
  axios.defaults.headers.common['Authorization'] = token
  this.$store.commit('auth_success',{token,user:{email}})
  // window.href.s
  // console.log()
},
created() {
  console.log('created')
  const interval = setInterval(()=>{
    if(localStorage.getItem('email')) {
      clearInterval(interval)
      this.$router.push('/')
    }
  },100)
  
}
}
</script>

<style>

</style>