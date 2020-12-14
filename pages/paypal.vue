<template>
  <div  class=" flex flex-col items-center justify-center h-screen w-full">
    <div v-if="true" class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
      <div class=" font-monser text-3xl text-green-800">Success</div>
      <svg class="w-32 h-32 text-green-700 animate__animated animate__fadeInDown " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    </div>
    <div v-else class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  middleware:['common'],
  data() {
      return {
          data:''
      }
  },
  async created() {
    try {
      const code = this.$route.query.code;
      console.log(code);
      const token =
        "AWM3oXkuKBMhbcQSbv_xLHNnW2A87k1cpq1olxcZyQYL7RzC0W9ACuXoNNEYw2AB6VZx0lywS_bfBo2b:ED5DQ4-hMFbN1igpo_yqNpE4D59sK86C5CuAP3fmU88nO47xbPVQyEQ1wYp-h4763rbXla8Fez8QkGBL";
      const data = await Axios({
        url: "/paypal",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
            code
        }
      });
      this.data = data.data.email
      setTimeout(()=>{
        this.$router.push('/teacher')
      }, 2000)
    } catch (error) {
      setTimeout(()=>{
        this.$router.push('/teacher')
      }, 2000)
    }
  }
};
</script>

<style></style>
