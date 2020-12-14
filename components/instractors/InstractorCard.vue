<template>
  <div @click="goTo()"   style="width:18rem" class=" bg-white flex flex-col shadow-2xl rounded-lg overflow-hidden cursor-pointer ">
      <img class=" object-cover h-56  bg-gradient-to-r  bg-bricks" :src="`${s3URL}${instructor.avatarBackground}`" alt="">
            <div class=" flex border-b p-2 ">
                <div class="w-1/2 flex flex-col items-center justify-center  "> 
                    <div class="  font-semibold text-sm  text-gray-700">Courses</div> 
                    <div class="  font-bold -mt-1 text-gray-900 flex items-center justify-center">
                        {{instructor.publishedCourses}}
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                    </div>
                </div>
                <div class="w-1/2 flex flex-col items-center justify-center border-l  "> 
                    <div class="  font-semibold text-sm  text-gray-700">Rating</div> 
                    <div class="  font-bold -mt-1 text-gray-900 flex items-center justify-center">
                        <div class="">{{instructor.instructorRating}}</div>
                        <svg class="w-4 h-4 text-yellow-500 mt-px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                </div>
                <div class="w-1/2 flex flex-col items-center justify-center border-l  "> 
                    <div class="  font-semibold text-sm text-gray-700">Students</div> 
                    <div class="  font-bold -mt-1 text-gray-900 flex items-center justify-center">
                        <div class="">{{instructor.registedStudents}}</div>
                    </div>
                </div>
            </div>
        <div class=" px-4 pb-3 mt-2  text-center bg-white rounded lg:px-6  mx-8 flex flex-col ">
            <div class=" flex self-center items-baseline   ">
                <div :class="{'bg-blue-700':instructor.title=='GM','bg-red-600':instructor.title=='IM','bg-pink-600':instructor.title=='WGM'}"  class=" px-1 rounded-lg font-sans  text-white text-xs  ">{{instructor.title}}</div>
                <div  class=" ml-1 text-base font-semibold "> {{instructor.teacherName}} </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props:{
        instructor:{
            type:Object
        },
        mode:{
            type:String,
            default:'basic'
        }
    },
    data() {
        return {    
            s3URL:process.env.s3Url
        }
    },
    methods:{
        goTo() {
            if(this.mode=='basic')
                this.$router.push(`/instructor/${this.instructor.id}`)
        }
    }
}
</script>

<style>
.bg-bricks {
  background-color: #a133336b;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23dcdcdc' fill-opacity='0.9'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>