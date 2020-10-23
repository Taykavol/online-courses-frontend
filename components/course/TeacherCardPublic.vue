<template>
  <!-- <div class="">
      <div
        class="container mx-auto  rounded-lg overflow-hidden shadow-lg my-2 bg-white"
      >
        <div
          class="relative z-10"
          style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));"
        >
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Profile image"
          />

        </div>
        <div
          class="relative flex justify-between items-center flex-row px-6 z-50 -mt-10"
        >
        <div class=" flex text-lg  ">
                <div class=" self-center bg-blue-700 text-white px-1 rounded-lg font-sans font-semibold mr-1 ">GM</div>
                <div class=" ">Vadim Moiseenko</div>
        </div>
          <button
            class="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="pt-6 pb-8 text-gray-600 text-center">
          <p>Fullstack Developer</p>
          <p class="text-sm">Coding from Planet Earth</p>
        </div>

        <div
          class="pb-10 uppercase text-center tracking-wide flex justify-around"
        >
          <div class="posts">
            <p class="text-gray-400 text-sm">Posts</p>
            <p class="text-lg font-semibold text-blue-300">76</p>
          </div>
          <div class="followers">
            <p class="text-gray-400 text-sm">Followers</p>
            <p class="text-lg font-semibold text-blue-300">964</p>
          </div>
          <div class="following">
            <p class="text-gray-400 text-sm">Following</p>
            <p class="text-lg font-semibold text-blue-300">34</p>
          </div>
        </div>
      </div>
    </div> -->
    <div class=" border bg-white max-w-md xl:max-w-full">
        <div class="relative">
            <img class=" h-64  object-cover w-full " :src="`https://chess-courses.hb.bizmrg.com/${profile.avatar}`" alt="">
            <div class=" absolute bottom-0 bg-gray-900 h-12 w-full opacity-75"></div>
            <div class=" absolute bottom-0 flex h-12 items-center text-lg text-white  w-full">
                <div  class="ml-4 bg-blue-700  px-1 rounded-lg font-sans font-semibold  ">{{profile.title}}</div>
                <div  class=" ml-1 ">{{profile.teacherName}} </div>
                <!-- <div class=" ml-auto mr-2">2549 ELO</div> -->
            </div>
            
        </div>
        <div class=" p-4">
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

<style></style>
