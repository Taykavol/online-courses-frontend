<template>
<!-- <div class=""> -->
    <!-- <Alert  v-if="$store.getters.alert" class=" absolute  right-0 top-0 opacity-75" :alert='$store.getters.alert' /> -->
  <div class="  ">
    <Header class="lg:container mx-auto " :key="$store.getters.isLoggedIn" />
    <Nuxt keep-alive />
  </div>
<!-- </div> -->
</template>

<script>
// import Alert from "~/components/common/Alert"
import Header from '~/components/layout/Header'
export default {
  components:{
    Header, 
    // Alert
  }
}
</script>

<style lang="scss">
html {
  font-family:'Exo 2',-apple-system;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  // scroll-behavior: smooth;
  // background: #f6f9fc;
  background: whitesmoke;
  overflow-y:scroll;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 1280px) {
    font-size: 15px;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
.nuxt-link-active {
  @apply text-blue-500;
}
.nuxt-link-prefetched {
 @apply text-red-700;
}
</style>
