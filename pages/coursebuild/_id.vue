<template>
  <div class="">
    <!-- <div class=" bg-transparent h-16 fixed w-full z-30">Navigation</div> -->
    <!-- <div class=" bg-white h-16 border-b border-r border-l flex justify-center">
      <div class=" flex items-center text-xl">
        
        <div @click="$router.push('/teacher')" class="border-2 border-gray-700 text-gray-700  hover:bg-gray-700 hover:text-white mx-10  px-3 cursor-pointer">&larr; Back to courses</div>
      </div>
      <div class=" ml-auto flex items-center justify-center h-full text-lg">
        <div class=" border-red-700 border-2 rounded-full w-8 h-8 flex items-center justify-center mx-2">1</div>
        <div @click="isSettings=true" :class="{'text-blue-700 border-b-2 border-blue-700':isSettings}" class="  cursor-pointer mr-2"> Curriculum </div>
        &rarr;
        <div class=" border-red-700 border-2 rounded-full w-8 h-8 flex items-center justify-center mx-2">2</div>
        <div @click="isSettings=false" :class="{'text-blue-700 border-b-2 border-blue-700':!isSettings}" class="  cursor-pointer mr-2"> Course info</div>
        &rarr;
        <div class="border-2 border-yellow-700 text-yellow-700  hover:bg-yellow-700 hover:text-white mx-4 px-3 cursor-pointer">Pass verification</div>

      </div>
      <div class=" ml-auto flex items-center justify-center text-lg    ">
        <div class="border-2 border-blue-700 text-blue-700  hover:bg-blue-700 hover:text-white mx-10 px-3 cursor-pointer">Preview</div>
      </div>
    </div> -->
    <div v-if='isLoaded' class=" ">
      <div class=" flex ">
        <div :class="{'w-full':isSettings, 'w-full':!isSettings }"  class="  w-full  ">
        <keep-alive>
        <CourseBuilder class=" " v-if="isSettings" :courseProp="JSON.parse(JSON.stringify(this.course1)) "/>
        </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import CourseNav from "~/components/publishcourse/CourseNav";
import CourseBuilder from "~/components/publishcourse/CourseBuilder";
// import TargetStudents from "~/components/publishcourse/TargetStudents";
import CourseSettings from "~/components/publishcourse/CourseSettings"
import axios from "axios"
export default {
  layout:'builder',
  middleware:['auth'],
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    CourseBuilder,CourseSettings
  },
  computed: {
    // currentProperties() {
    //   if(this.course1)
    //   switch (this.currentComponent) {
    //     case 'course-builder' : return {course:this.course1.curriculum}; 
    //     case 'course-settings' : return {course:this.course1}; 
    //   }
    // }
  },
  async created(){
    // try {
      console.log('good')
      if(this.$store.getters.myBuildCourses&&this.$store.getters.myBuildCourses.find(course=>course.id ==this.$route.params.id)) {
        console.log('We were here',this.$store.getters.myBuildCourses)
        let course = {...this.$store.getters.myBuildCourses.find(course => course.id ==this.$route.params.id)}
        course.curriculum = JSON.parse(course.curriculum)

        this.course1= course
        this.isLoaded=true
        return;
      }
      console.log('Before fetching',this.$route.params.id)
      const data = await axios({url:`/buildcourse/${this.$route.params.id}`})
      console.log('After fetching')

      console.log(data)
      let JSONcourse = data.data
      console.log(JSONcourse)
      let course =  JSONcourse
      course.curriculum = JSON.parse(JSONcourse.curriculum)
      console.log('course',course)
      if(!course) return 
      // this.$router.push('/dashboard')
      this.course1=course
      this.isLoaded=true
    // } catch (error) {
      // console.log(error)
      // this.$router.push('/dashboard')
    // }
     
  },
  data() {
    return {
      currentComponent:'course-builder',
      course1:{},
      isLoaded:false,
      isSettings:true
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