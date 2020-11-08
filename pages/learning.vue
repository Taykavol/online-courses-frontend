<template>
<div class="mt-8 lg:container mx-auto">
  <div class="grid grid-cols-10">
      <div class="col-span-3 flex items-center">
          <!-- <div class=" mr-2">Sorted by</div> -->
          <dropdown :fn="()=>{}" :options="['Last seen','Rating']" class="w-32" />
      </div>
      <div class="col-span-4 text-center text-xl font-medium">My awesome courses</div>
      <nuxt-link to="/#courses"  class=" col-span-3 ml-auto mr-5 text-lg  border-2 text-blue-700 border-blue-700 px-2  hover:bg-blue-700 hover:text-white cursor-pointer ">New course</nuxt-link>
      <!-- <div class="col-span-2"></div> -->
  </div>
  <div class="  grid grid-cols-10  ">
      <div v-if="courses.length>0" class=" col-span-10 grid ph:grid-cols-2 md:grid-cols-3   ">
            <card v-for="item in courses" :key="item.id" class=" col-span-1  mx-2 mt-4" mode="BUYER" :boughtCourse ="item"/>
            <!-- <card class=" col-span-1  mx-2 mt-4" mode="BUYER" :course ="{id:2,pictureUri:'https://images.unsplash.com/photo-1599687266197-6c66c083b39c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',progress:2, title:'My course 2'}"/>
            <card class=" col-span-1  mx-2 mt-4" mode="BUYER" :course ="{id:3,pictureUri:'https://images.unsplash.com/photo-1599687266197-6c66c083b39c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',progress:2, title:'My course 3'}"/>
            <card class=" col-span-1  mx-2 mt-4" mode="BUYER" :course ="{id:4,pictureUri:'https://images.unsplash.com/photo-1599687266197-6c66c083b39c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',progress:2, title:'My course 4'}"/>
            <card class=" col-span-1  mx-2 mt-4" mode="BUYER" :course ="{id:4,pictureUri:'https://images.unsplash.com/photo-1599687266197-6c66c083b39c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',progress:2, title:'My course 4'}"/> -->
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
        courses:[]
    }
},
async created() {
    const {data} = await Axios('/boughtcourse/all')
    console.log(data, data.length)
    this.courses = await this.$store.dispatch('boughtCourses', data)
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

</style>