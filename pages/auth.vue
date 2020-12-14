<template>
  <div class="">
    <div class=" top-0 right-0 h-screen w-screen  flex justify-center items-center">
      <div v-if="!mistake" class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      <div v-else class=" text-2xl"> {{mistake}} </div>
    </div>
  </div>
</template>

<script>
// import PuzzleComponent from "~/components/publishcourse/puzzlebuilder/PuzzleComponent.vue"
import axios from 'axios'
export default {
  // layout:'test',
// middleware:'common',
// components:[PuzzleComponent],
data() {
  return {
    mistake:''
  }
},
async created() {
  console.log(this.$route.query.code)
  const provider = this.$route.query.provider 
  console.log('AuthType',this.$route.query.authType)
  switch (provider) {
    case 'google-login': await this.googleAuth('login'); break;
    case 'google-register': await this.googleAuth('register'); break;
    case 'facebook-login': await this.facebookAuth('login'); break;
    case 'facebook-register': await this.facebookAuth('register'); break;
    case 'lichess': await this.lichessAuth(); break;
    case 'vk' : await this.VKAuth(); break;
  }
},
methods:{
  async lichessAuth() {
    let url = new URL(process.env.baseUrlBackend+"/lichess/callback"),
    params = {code:this.$route.query.code, state:this.$route.query.state}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const data = await fetch(url)
    const {email,token,role,courses} = await data.json()
    console.log('data from server',email,token,role,courses)
    if(courses)
      localStorage.setItem('boughtcourses',JSON.stringify(courses.map(value=>value.courseId)))
    if(!token) 
      return this.mistake = 'Something wrong try again'
    localStorage.setItem('email',email)
    localStorage.setItem('token',token)
    localStorage.setItem('role',role)
    axios.defaults.headers.common['Authorization'] = token
    this.$store.commit('auth_success',{token,user:{email}})
    console.log('created')
    this.redirectTo(1000)

  },
  async googleAuth(authType) {
    console.log('Goodle')
    // const url = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/auth/?provider=google&response_type=code&access_type=offline&scope=https://www.googleapis.com/auth/userinfo.email&client_id=231498108232-bqrk6v0pmvnm8o8igcn6en22f42g41ls.apps.googleusercontent.com`
    console.log(`${process.env.baseUrlBackend}'/auth/google'`)
    const data = await axios({url:`${process.env.baseUrlBackend}/auth/google`,method:"POST",data:{
      code:this.$route.query.code,
      authType
    }})
    const {email,token,role} = data.data
    if(!token) {
      this.mistake = data.data
    } else {
      localStorage.setItem('email',email)
      localStorage.setItem('token',token)
      localStorage.setItem('role',role)
      axios.defaults.headers.common['Authorization'] = token
      this.$store.commit('auth_success',{token,user:{email}})
      this.redirectTo(1000)

    }
  },
  async facebookAuth(authType) {
    console.log('facebook')
    const data = await axios({url:`${process.env.baseUrlBackend}/auth/facebook`,method:"POST",data:{
      code:this.$route.query.code,
      authType
    }})
    const {email,token,role} = data.data
    if(!token) {
      this.mistake = data.data
    } else {
    localStorage.setItem('email',email)
    localStorage.setItem('token',token)
    localStorage.setItem('role',role)
    axios.defaults.headers.common['Authorization'] = token
    this.$store.commit('auth_success',{token,user:{email}})
    this.redirectTo(1000)

    }
  },
 async VKAuth() {
   console.log('VK')
   const data = await axios({url:`${process.env.baseUrlBackend}/auth/vk`,method:"POST",data:{
     code:this.$route.query.code
   }})
   const {email,token,role} = data.data
    localStorage.setItem('email',email)
    localStorage.setItem('token',token)
    localStorage.setItem('role',role)
    axios.defaults.headers.common['Authorization'] = token
    this.$store.commit('auth_success',{token,user:{email}})
    this.redirectTo(1000)
  // console.log('VK',)
  //  const {email,token,role} = data.data
  //   localStorage.setItem('email',email)
  //   localStorage.setItem('token',token)
  //   localStorage.setItem('role',role)
  //   axios.defaults.headers.common['Authorization'] = token
  //   this.$store.commit('auth_success',{token,user:{email}})
 },
 redirectTo(time) {
   const interval = setInterval(()=>{
      clearInterval(interval)
      this.$router.push('/')
  },time)
 }
}
}
</script>

<style>

</style>