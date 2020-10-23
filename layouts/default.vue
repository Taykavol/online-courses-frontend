<template>
<!-- <div class=""> -->
    <!-- <Alert  v-if="$store.getters.alert" class=" absolute  right-0 top-0 opacity-75" :alert='$store.getters.alert' /> -->
  <div class="lg:container mx-auto  ">
    <Header/>
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
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
html {
  font-family:
    'Exo 2',
    -apple-system;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  background: #f5f5f5;
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
