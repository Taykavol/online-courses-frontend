<template>
  <main
    class="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200  rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto select-none"
  >
    <div class="flex  capitalize text-3xl">
      <span class="font-semibold">hello,</span>
      <span class=" ml-2">{{ user.name }}!</span>
    </div>
    <div class="flex">
      <div
        class="mr-6  mt-8 py-2  flex flex-col bg-gray-100
				dark:bg-gray-600 rounded-lg w-full"
      >
        <!-- Card list container -->

        <div
          class="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
					capitalize  "
        >
          <!-- Header -->
          <div>Your courses</div>
          <!-- <div class="ml-2">Sortby</div>
              <div class="ml-2">Search</div> -->
          <div
            class="ml-auto flex items-center cursor-pointer hover:text-blue-400"
          >
            <div class=" ">New course</div>
            <div class="ml-1">
              <svg class="h-5 w-5 fill-current" viewBox="0 0 256 512">
                <path
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
                    0l-22.6-22.6c-9.4-9.4-9.4-24.6
                    0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
                    0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
                    136c9.5 9.4 9.5 24.6.1 34z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   ">
          <my-own-course
            :courseInfo="item"
            class=" "
            v-for="(item, index) in courses"
            :key="index"
          ></my-own-course>
          <div v-if="isLoaded" @click="createCourse" class="bg-white rounded m-4 p-4 shadow flex flex-col justify-center items-center cursor-pointer duration-300 transform hover:-translate-y-1 add ">
              <div class="">+</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import MyOwnCourse from "~/components/dashboard/MyOwnCourse";
import AsideComponent from "~/components/dashboard/Aside.vue";
import axios from "axios"
export default {
  components: {
    AsideComponent,
    MyOwnCourse,
  },
  methods:{
    async createCourse() {
      const course = await axios.post('http://localhost:4000/buildcourse/create')
      if(!course) return
      const {id} = course.data
      if(!id) return 
      this.$router.push('/course/'+id)
      console.log(course)
    }
  },
  async created() {
    const data = await axios({url:'/buildcourse/all', method:"GET"})
    if(typeof(data.data)=="string") {
      this.isLoaded=true
      return
    } 
    this.courses=data.data
    this.isLoaded=true
  },
  data() {
    return {
      user: {
        name: "Vadim"
      },
      courses: "",
      isLoaded:false
    };
  }
};
</script>

<style>
.add {
 min-height: 20rem;
}
</style>
