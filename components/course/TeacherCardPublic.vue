<template>
    <div class="   max-w-md xl:max-w-full">
        <div class="relative flex flex-col justify-center items-center ">
            <img style="width:12rem; max-height:16rem" class=" w-full object-contain  " :src="`https://chess-courses.hb.bizmrg.com/${profile.avatar}`" alt="">
            <!-- <div class=" absolute bottom-0 bg-gray-900 h-12 w-full opacity-75"></div> -->
            <div class="  bottom-0 flex mt-2 items-baseline   ">
                <div  class=" bg-blue-700  px-1 rounded-lg font-sans  text-white text-sm  ">{{profile.title}}</div>
                <div  class=" ml-1 ">{{profile.teacherName}} </div>
            </div>
            
        </div>
        <div class="  leading-6 mt-3 ">
          {{profile.aboutMe}}
        </div>
        <!-- <div class="flex border-t">
                <div class="w-1/2 flex-col">
                    <span class="flex justify-center text-2xl font-semibold">{{profile.publishedCourses}}</span>
                    <span class="flex justify-center text-gray-500 -mt-1">Courses</span>
                </div>
                <div class="w-1/2 flex-col">
                    <span class="flex justify-center text-2xl font-semibold">{{profile.registedStudents}}</span>
                    <span class="flex justify-center text-gray-500 -mt-1">Total students</span>
                </div>
            </div> -->
    </div>
</template>

<script>

export default {
  props:{
    profile:{
      type:Object,
      require:true
    }
  }
};
</script>

<style>
.bg-custom {
  background-image: url('/images/bg/bg-black.png');
  background-size: cover;

}
</style>
