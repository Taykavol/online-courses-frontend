<template>
  <div class=" page">
    <!-- <div class=" bg-transparent h-16 fixed w-full z-30">Navigation</div> -->
    <div v-if='isLoaded' class=" flex">
      <div class=" w-1/6   ">
      <course-nav :setComponent="setComponent" :course='course1'></course-nav>
      </div>
      <div class=" w-5/6 ">
        <component v-bind:is="currentComponent" v-bind="currentProperties" ></component>
      </div>
    </div>
  </div>
</template>
<script>
import CourseNav from "~/components/publishcourse/CourseNav";
import CourseBuilder from "~/components/publishcourse/CourseBuilder";
import TargetStudents from "~/components/publishcourse/TargetStudents";
import CourseSettings from "~/components/publishcourse/CourseSettings"

export default {
  middleware:['auth'],
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    CourseBuilder,TargetStudents,CourseNav,CourseSettings
  },
  computed: {
    currentProperties() {
      if(this.course1)
      switch (this.currentComponent) {
        case 'course-builder' : return {course:this.course1.curriculum}; 
      }
    }
  },
  async created(){
    try {
      const data =  await fetch(`http://localhost:4000/buildcourse/${this.$route.params.id}`)
      let JSONcourse = await data.json()
      console.log(JSONcourse)
      let course =  JSONcourse
      course.curriculum = JSON.parse(JSONcourse.curriculum)
      console.log('course',course)
      if(!course) return this.$router.push('/dashboard')
      this.course1=course
      this.isLoaded=true
    } catch (error) {
      console.log(error)
      this.$router.push('/dashboard')
    }
     
  },
  data() {
    return {
      currentComponent:'course-builder',
      course1:{},
      isLoaded:false,
    };
  },
  methods: {
    setComponent(name) {
      this.currentComponent = name
    }
  }
};
</script>

<style lang="scss" scoped>
.page{
  
}
.section{
  &__nav {
    width: 20rem;
    @media (max-width: 1280px ) {
        width: 15rem;
    }
  }
}
</style>