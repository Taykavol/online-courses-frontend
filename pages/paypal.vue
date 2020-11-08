<template>
  <div class="">
      {{data}}
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
    this.data = data
    // const data = await Axios({
    //   url: "https://api.sandbox.paypal.com/v1/oauth2/token",
    //   method: "POST",

    //   headers: {
    //       Authorization:'Basic AWM3oXkuKBMhbcQSbv_xLHNnW2A87k1cpq1olxcZyQYL7RzC0W9ACuXoNNEYw2AB6VZx0lywS_bfBo2b:ED5DQ4-hMFbN1igpo_yqNpE4D59sK86C5CuAP3fmU88nO47xbPVQyEQ1wYp-h4763rbXla8Fez8QkGBL'
    //   },
    // });
    // const data2 = await Axios.post('https://api.sandbox.paypal.com/v1/oauth2/token',{
    //     grant_type:"authorization_code",
    //     code:code
    // },{
    //     headers:{
    //         // 'Authorization': `Basic ${token}`,
    //         "Accept":"application/json",
    //         "Accept-Language": "en_US",
    //         'AQecO_cPaI4jsY-S7rBVo0QxhQv_NP7gzZML2kACL8P6LqDWabpeo1JfkLFuwFYl3zRG6wB7cxu2h7NO':'EG-hodPsZAQLp-n1gCDfvOBbO0DcFpjxlErH66aoHimbxzHb2K5iDSAKcxMxBZ5CSXnN5Pm-65VWSutO',
    //         'Content-Type': 'application/json'
    //     }
    // })

    // console.log(data2);
  }
};
</script>

<style></style>
