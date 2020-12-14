<template>
  <div class="">

  </div>
</template>

<script>
import Axios from 'axios'
export default {
    middleware:'auth',
    created() {
        this.apiRequest(3,3000)
    //    const data =  await Axios(`/boughtCourse/course/${this.$route.params.id}`)
    //    if(data.data.body) return console.log('Redirect')
    //    if(data.data.error) return console.log('Error')
    },
    methods:{
        apiRequest(number , time) {
            if(number==0) return this.$router.push('/learning')
            setTimeout(async ()=>{
                const data =  await Axios(`/boughtCourse/course/${this.$route.params.id}`)
                if(data.data.body)  {
                    this.$router.push('/learning')
                    return
                } 
                if(data.data.error) {
                    console.log('Error')
                    this.apiRequest(number-1, time)
                    return  
                } 
            },time)
        }
    }
}
</script>

<style>

</style>