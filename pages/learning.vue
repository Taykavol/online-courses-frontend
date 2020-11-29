<template>
<div class="mt-8 lg:container mx-auto">
  <!-- <div class="grid grid-cols-10">
      <div class="col-span-3 flex items-center">
          <dropdown :fn="()=>{}" :options="['Last seen','Rating']" class="w-32" />
      </div>
      <div class="col-span-4 text-center text-xl font-medium">My awesome courses</div>
      <nuxt-link to="/#courses"  class=" col-span-3 ml-auto mr-5 text-lg  border-2 text-blue-700 border-blue-700 px-2  hover:bg-blue-700 hover:text-white cursor-pointer ">New course</nuxt-link>
  </div> -->
  <div v-if="courses" class="   ">
      <div v-if="courses.length>0" class="  grid grid-cols-10 w-full  ">
          <div class="col-span-10 grid ph:grid-cols-2 md:grid-cols-3">
            <card v-for="item in courses" :key="item.id" class=" col-span-1  mx-2 mt-4" mode="BUYER" :boughtCourse ="item"/>

          </div>
      </div>
      <div v-else class=" relative flex   ">
              <div class=" border-l-4 border-red-500 pl-2">Sorry, we didn't find your purchased courses.</div>
      </div>
  </div>
  <div v-else class="">
    <div class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  </div>
</div>
</template>

<script>
import Axios from 'axios';
import Dropdown from '~/components/home/Newdrop'
import Card from '~/components/learning/CardMycourse'
import CourseReview from "~/components/learning/ReviewBuilder.vue";

export default {
middleware:['auth'],
components:{
    Card,Dropdown,CourseReview
},
data() {
    return {
        courses:null
    }
},
async created() {
    // const {data} = await Axios('/boughtcourse/all')
    // console.log(data, data.length)
    this.courses = await this.$store.dispatch('boughtCourses')
    const setCoursesIds =[]
    this.courses.forEach(course => {
        setCoursesIds.push(course.course.id)
    });
    if(setCoursesIds.length>0) localStorage.setItem('boughtcourses', JSON.stringify(setCoursesIds))

    console.log('coursesId', setCoursesIds)
}

}
</script>

<style>
.photo--coursenotfound {
    filter:grayscale();
}
.bg-leafs {
    background-color: #f5f5f5;
    background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%239a9a9a' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>