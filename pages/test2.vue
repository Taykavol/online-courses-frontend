<template>
  <div class="">
      <dropdown/>
  </div>
</template>

<script>
import Dropdown from "~/components/home/Dropdown"

export default {
components:{
    Dropdown
},
methods:{
    async logout() {
           await this.$store.dispatch('logout')
    }
}
}
</script>

<style>

</style>