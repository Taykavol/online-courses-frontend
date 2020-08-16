<template>
  <div class="">
    hey
      <!-- <puzzle-component></puzzle-component> -->
  </div>
</template>

<script>
// import PuzzleComponent from "~/components/publishcourse/puzzlebuilder/PuzzleComponent.vue"
import axios from 'axios'
export default {
// middleware:['lichessAuth'],
// components:[PuzzleComponent],
async beforeCreate() {
  console.log(this.$route.query.code)
  let url = new URL("http://localhost:4000/lichess/callback"),
    params = {code:this.$route.query.code, state:this.$route.query.state}
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  // fetch(url).then(...)
  const data = await fetch(url)
  const {email,token} = await data.json()
  localStorage.setItem('email',email)
  localStorage.setItem('token',token)
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
      this.$router.push('/home')
    }
  },100)
  
}
}
</script>

<style>

</style>