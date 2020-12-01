<template>
    <div v-if="courses" class=" flex flex-col w-1/2 ">

      <ColumnCourses v-if="courses.length>=1" :size="5" :title="'Verification'" v-slot:default="slotProps" class=" w-full " :courses="courses"> 
        <VerifCard class=" " v-for="course in slotProps.paginatedData" :key="course.id"  :course="{...course,pictureUri:course.pictureUri?'https://chess-courses.hb.bizmrg.com/'+course.pictureUri:'https://images.unsplash.com/photo-1601758002737-1919f3ba2774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}"/>
      </ColumnCourses>
      <div v-else class="">Courses for verification not found</div>
      <!-- <card  :course="{...item,pictureUri:item.pictureUri?'https://chess-courses.hb.bizmrg.com/'+item.pictureUri:'https://images.unsplash.com/photo-1601758002737-1919f3ba2774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}" /> -->
    </div>
    <div v-else class="">...loading</div>
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
   const {data} = await Axios.get('/buildcourse/verified')
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