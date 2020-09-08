<template>
    <!-- <div class=" bg-white rounded m-4 p-4 shadow-xl flex flex-col cursor-pointer  transform duration-500 hover:-translate-y-1">
      <div class="flex">
        <div class=" w-full">
          <h1 class="font-semibold truncate font-serif">
            {{boughtCourse.course.title}}
          </h1>
          <span class="block text-xs text-center uppercase text-blue-400">{{boughtCourse.course.category}}</span>
        </div>
      </div>
      <div class="py-4 text-sm">
        {{boughtCourse.course.subtitle}}
        
      </div>
        <div class=" mt-auto  ">
        <div class="flex">
          <span class="text-xs font-semibold py-1">Progress</span>
          <span class="text-xs font-semibold py-1 ml-auto text-blue-600"
            >{{boughtCourse.progress}}%</span
          >
        </div>
        <div class="flex ">
          <div :style="`width:${boughtCourse.progress}%`" class=" h-2 rounded rounded-r-none bg-blue-400"></div>
          <div :style="`width:${100-boughtCourse.progress}%`" class=" bg-blue-100"></div>
        </div>
        </div>

    </div> -->
    <!-- component -->
<!-- <div class="bg-white shadow-lg rounded-lg overflow-hidden ">
        <img class="w-full h-56 object-cover object-center" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar">
        <div class="flex items-center px-6 py-3 bg-gray-900">
            <svg class="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
                <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"/>
            </svg>
            <h1 class="mx-3 text-white font-semibold text-lg">Focusing</h1>
        </div>
        <div class="py-4 px-6">
            <h1 class="text-2xl font-semibold text-gray-800">Patterson johnson</h1>
            <p class="py-2 text-lg text-gray-700">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
            <div class="flex items-center mt-4 text-gray-700">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z"/><g><path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z"/></g>
                </svg>
                <h1 class="px-2 text-sm">MerakiTeam</h1>
            </div>
            <div class="flex items-center mt-4 text-gray-700">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"/>
                </svg>
                <h1 class="px-2 text-sm">California</h1>
            </div>
            <div class="flex items-center mt-4 text-gray-700">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
                </svg>
                <h1 class="px-2 text-sm">patterson@example.com</h1>
            </div>
        </div>
    </div> -->
    <!-- item card -->
<div class="md:flex shadow-lg   mx-5 max-w-md  h-48">
   <img class="h-full w-full md:w-5/12 object-cover rounded-lg rounded-r-none pb-5/6" src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag">
   <div class="w-full md:w-7/12 px-3 pt-3 pb-1 flex flex-col bg-white rounded-lg">
      <div class="flex items-center">
         <h2 class="text-lg text-gray-800  font-serif  truncate">{{boughtCourse.course.title}}</h2>
      </div>
      <div class=" flex ">
        <!-- <div class=" font-serif">by</div> -->
        <div class=" bg-pink-400 px-1 text-orange-800 font-bold rounded-lg mx-1">{{boughtCourse.course.author.title}}</div>
      <div class="font-serif  truncate text-gray-700">{{boughtCourse.course.author.teacherName}}</div>
      </div>
          <!-- <p class="">{{boughtCourse.course.subtitle}}</p> -->
          <!-- <div class=" mt-auto self-end  bg-orange-500  text-center">give Feedback</div> -->
          <div class=" mt-auto flex cursor-pointer">
            <svg @mouseover="rating=index+1" @mouseleave="rating=0" :class="{'text-yellow-500':rating>index}" class="star w-6 h-6  " v-for="(item,index) in 5" :key="index" viewBox="0 0 20 20" fill="currentColor" ><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </div>
      <div class=" mt-auto  ">
        <div class="flex">
          <span class="text-xs font-semibold py-1">Your progress</span>
          <span class="text-xs font-semibold py-1 ml-auto text-blue-600"
            >{{boughtCourse.progress}}%</span
          >
        </div>
        <div class="flex ">
          <div :style="`width:${boughtCourse.progress}%`" class=" h-2 rounded rounded-r-none bg-blue-400"></div>
          <div :style="`width:${100-boughtCourse.progress}%`" class=" bg-blue-100"></div>
        </div>
        </div>
        <div class=" text-center bg-green-400 hover:bg-green-500 cursor-pointer mt-2">Continue </div>
      <!-- <p class="text-sm text-gray-700 mt-4">
         Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
      </p> -->
      <!-- <div class="flex items-center justify-end mt-4 top-auto">
         <button class="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">Delete</button>
         <button class=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">Edit</button>
         <button class=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">Publish</button>
      </div> -->
   </div>
</div>
</template>

<script>
export default {
  props:{
    boughtCourse:{
      type:Object,
      require:true
    }
  },
  data() {
    return {
      rating:0
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
