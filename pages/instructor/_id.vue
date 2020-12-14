<template>
  <div class=" lg:container mx-auto">
      <div class=" flex flex-col md:flex-row mt-4 ">
        <div class=" mb-8 md:mb-0  w-full md:w-1/3 flex flex-col sm:flex-row md:flex-col items-center md:mr-8 lg:mr-0  relative  ">
            <div class=" absolute h-screen  inset-0 z-0"></div>
            <!-- Instructor card -->
          <Card v-if="instructor" mode="individual" class=" w-full sm:w-1/3 z-10 " :instructor="instructor"/>
          <div class="z-10 sm:w-2/3 md:w-auto px-4 py-5 mt-4 text-center bg-white rounded lg:px-6 shadow-small-blue border-blur-grey mx-8 flex flex-col ">
            <div class=" text-sm font-bold">About instuctor</div>
            <p v-if="instructor" class="text-sm font-body font-italic  ">
              {{instructor.aboutMe}}
            </p>
          </div>
        </div>
        <div :class="{'':courses.length==1}" class="w-full md:w-2/3  grid grid-cols-1 ph2:grid-cols-2 gap-3 h-full mx-2 ">
        <!-- Loop of courses of instructor -->
            <CourseCard  class=" " v-for="item in courses" :key="item.id" :course="{...item, author:{}, pictureUri:s3+item.pictureUri}" />
        </div>
      </div>
  </div>
</template>

<script>
import Card from '~/components/instractors/InstractorCard'
import CourseCard from '~/components/home/Card4brain'
import Axios from 'axios'
export default {
  middleware:"common",
  components:{
    Card,CourseCard
  },
   fetch() {
    Axios(`/buildcourse/${this.$route.params.id}/published`)
    .then((data)=>{
      this.courses = data.data
     console.log('this.courses',this.courses)
    })
  },
  data() {
    return {
      courses:[],
      instructor:null,
      s3:process.env.s3Url
    }
  },
  async created() {
    this.instructor = await this.$store.dispatch('setInstructor',this.$route.params.id)
  }
}
</script>

<style>
.instructor-bg {
  background-color: #f5f5f5;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236e5d7a' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>