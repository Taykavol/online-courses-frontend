<template>
  <div class=" ">
    <!-- component -->
    <div class="h-screen w-full flex overflow-hidden ">
      <nav-component :setComponent="setComponent" ></nav-component>
      <keep-alive>
      <component :is="currentComponent"></component>
      </keep-alive>
      <!-- <aside-component></aside-component> -->
    </div>
  </div>
</template>

<script>
import CoursePuzzle from "~/components/dashboard/CoursePuzzles"
import NavComponent from "~/components/dashboard/Nav.vue";
import Settings from "~/components/dashboard/Settings.vue";
import Earnings from "~/components/dashboard/Earnings.vue";
import MyCourses from "~/components/dashboard/MyCourses.vue"
import LichessVerification from "~/components/dashboard/LichessVerification.vue"

// import AsideComponent from "~/components/dashboard/Aside.vue"

export default {
  middleware:['auth'],
  components: {
    NavComponent,
    CoursePuzzle,
    Settings,
    Earnings,
    MyCourses,
    LichessVerification
    // AsideComponent
  },
  data(){
    return {
      currentComponent:'course-puzzle'
    }
  },
  created() {
    // console.log('tab',this.$route.query.tab)
      switch(this.$route.query.tab) {
        case 'course-puzzle' : this.setComponent(this.$route.query.tab); break;
        case 'settings' : this.setComponent(this.$route.query.tab); break;
        case 'earnings' : this.setComponent(this.$route.query.tab); break;
        case 'my-courses' : this.setComponent(this.$route.query.tab); break;
      }
      
  },
  methods:{
    setComponent(name) {
      // console.log(this.$route.query)
      this.currentComponent = name
    }
  }
};
</script>

<style>
@import url("~/assets/css/cm-chessboard");

.position {
  height: 50rem;
}
</style>
