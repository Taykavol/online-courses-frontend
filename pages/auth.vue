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
  // layout:'test',
// middleware:['lichessAuth'],
// components:[PuzzleComponent],
async beforeCreate() {
  
},
async created() {
  console.log(this.$route.query.code)
  const provider = this.$route.query.provider 
  switch (provider) {
    case 'google': await this.googleAuth(); break;
    case 'lichess': await this.lichessAuth(); break;
    case 'facebook': await this.facebookAuth(); break;
    case 'vk' : await this.VKAuth(); break;
  }
  
  const interval = setInterval(()=>{
    if(localStorage.getItem('email')) {
      clearInterval(interval)
      this.$router.push('/')
    }
  },3000)
  
},
methods:{
  async lichessAuth() {
    let url = new URL(process.env.baseUrlBackend+"/lichess/callback"),
    params = {code:this.$route.query.code, state:this.$route.query.state}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const data = await fetch(url)
    const {email,token,role,courses} = await data.json()
    localStorage.setItem('boughtcourses',JSON.stringify(courses.map(value=>value.courseId)))
    localStorage.setItem('email',email)
    localStorage.setItem('token',token)
    localStorage.setItem('role',role)
    axios.defaults.headers.common['Authorization'] = token
    this.$store.commit('auth_success',{token,user:{email}})
    console.log('created')
  },
  async googleAuth() {
    console.log('Goodle')
    // const url = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/auth/?provider=google&response_type=code&access_type=offline&scope=https://www.googleapis.com/auth/userinfo.email&client_id=231498108232-bqrk6v0pmvnm8o8igcn6en22f42g41ls.apps.googleusercontent.com`
    console.log(`${process.env.baseUrlBackend}'/auth/google'`)
    const data = await axios({url:`${process.env.baseUrlBackend}/auth/google`,method:"POST",data:{
      code:this.$route.query.code
    }})
    const {email,token,role} = data.data
    localStorage.setItem('email',email)
    localStorage.setItem('token',token)
    localStorage.setItem('role',role)
    axios.defaults.headers.common['Authorization'] = token
    this.$store.commit('auth_success',{token,user:{email}})

    
    console.log('Your email data:',data)
    // confirm(`Your email is ${data}`)
  },
  async facebookAuth() {
    console.log('facebook')
    const data = await axios({url:`${process.env.baseUrlBackend}/auth/facebook`,method:"POST",data:{
      code:this.$route.query.code
    }})
    const {email,token,role} = data.data
    localStorage.setItem('email',email)
    localStorage.setItem('token',token)
    localStorage.setItem('role',role)
    axios.defaults.headers.common['Authorization'] = token
    this.$store.commit('auth_success',{token,user:{email}})

    console.log(data)
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
  console.log('VK',data)
  //  const {email,token,role} = data.data
  //   localStorage.setItem('email',email)
  //   localStorage.setItem('token',token)
  //   localStorage.setItem('role',role)
  //   axios.defaults.headers.common['Authorization'] = token
  //   this.$store.commit('auth_success',{token,user:{email}})
 }
}
}
</script>

<style>

</style>