<template>
  <div class=" ">
    <div v-if="courses" class=" flex flex-col">
      <ColumnCourses :size="5" :title="'Verification'" v-slot:default="slotProps" class=" w-full sm:w-1/2 lg:w-1/3 my-2" :courses="courses"> 
        <VerifCard class=" my-2" v-for="course in slotProps.paginatedData" :key="course.id"  :course="{...course,pictureUri:course.pictureUri?'https://chess-courses.hb.bizmrg.com/'+course.pictureUri:'https://images.unsplash.com/photo-1601758002737-1919f3ba2774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}"/>
      </ColumnCourses>
      <!-- <card  :course="{...item,pictureUri:item.pictureUri?'https://chess-courses.hb.bizmrg.com/'+item.pictureUri:'https://images.unsplash.com/photo-1601758002737-1919f3ba2774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}" /> -->
    </div>
      course
  </div>
</template>

<script>
import VerifCard from "~/components/admin/CourseVerif";
import ColumnCourses from "~/components/home/Columncourses"
import Axios from 'axios'
export default {
 components:{
     VerifCard,ColumnCourses
 },
 async created() {
   const {data} = await Axios.get('/buildcourse/top')
   this.courses = data
  //  Axios({url:''})
 },
 data() {
   return {
     courses:null
   }
 }
}
</script>

<style>

</style>