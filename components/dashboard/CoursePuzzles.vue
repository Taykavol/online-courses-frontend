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
        class="mr-6  mt-8 py-2 w-full  flex flex-col bg-gray-100
				dark:bg-gray-600 rounded-lg"
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
        <div class=" grid grid-cols-2   ">
          <Bought-Course
            :boughtCourse="item"
            class=" "
            v-for="(item, index) in courses"
            :key="index"
          ></Bought-Course>
        </div>
      </div>
      <!-- Position of the day. -->
      <div
        class="  w-4/12 mt-8 py-2 flex-shrink-0 flex flex-col
				bg-gray-200 rounded-lg position"
      >
        <div class=" flex-col flex justify-around items-center h-full ">
          <puzzle
            :puzzle="puzzle"
            v-for="(puzzle, index) in puzzles"
            :key="index"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios"
import BoughtCourse from "~/components/dashboard/BoughtCourse";
import AsideComponent from "~/components/dashboard/Aside.vue";
import Puzzle from "~/components/dashboard/Puzzle.vue";

export default {
  components: {
    AsideComponent,
    BoughtCourse,
    Puzzle
  },
  async created() {
    const courses = await axios({url:"/boughtcourse/all"})
    this.courses = courses.data
  },
  data() {
    return {
      user: {
        name: "Vadim"
      },
      courses: [],
      puzzles: [
        {
          description: "Course for begginers",
          author: "created by GM Moiseenko Vadim",
          fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq",
          solution: ["e4", "e5", "Nf3"]
        },
        {
          description: "",
          fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq",
          solution: ["e4", "e5", "Nf3"]
        }
      ]
    };
  }
};
</script>

<style></style>
