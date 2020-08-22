<template>
  <nav class="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">
    <!-- Left side NavBar -->

    <div>
      <!-- App Logo -->

      <svg
        class="h-8 w-8 fill-current text-blue-600 dark:text-blue-300"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82
					6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12
					15l5-2.73V16z"
        ></path>
      </svg>
    </div>

    <div class="mt-2 text-gray-700 dark:text-gray-400 capitalize">
      <!-- Links -->

      <div :class="[isActive=='dashboard'?'text-blue-600':'','mt-3 p-2 hover:text-blue-600 rounded-lg']">
        <div @click="setComponent('course-puzzle');isActive='dashboard'" class=" flex flex-col items-center cursor-pointer" >
          <svg class="fill-current h-8 w-8" viewBox="0 0 24 24">
            <path
              d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
            ></path>
          </svg>
          <span class="text-xs mt-2">dashBoard</span>
        </div>
      </div>
      <div :class="[isActive=='settings'?'text-blue-600':'','mt-3 p-2 hover:text-blue-600 rounded-lg']">
        <div @click="setComponent('settings'); isActive='settings'" href="settings" class=" flex flex-col items-center cursor-pointer" >
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cogs" class=" h-8 w-8 svg-inline--fa fa-cogs fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"></path></svg>
          <span class="text-xs mt-2">Settings</span>
        </div>
      </div>
    </div>

      <!-- <div class=" bg-black opacity-25 h-px w-full mt-20 "></div> -->
      <ul>
      <li
      v-if="isTeacher=='USER'"
          class="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
                    rounded-lg"
        >
          <div @click="setComponent('lichess-verification'); isActive='settings'" class=" flex flex-col items-center cursor-pointer">
            <svg fill="none" class="  h-8 w-8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            
            <span class="text-xs mt-2">Instructor</span>
          </div>
        </li>
      </ul>
    <!-- Divider -->
    <div v-if="isTeacher=='ADMIN'||isTeacher=='TEACHER'" class="">
      <div class="mt-20 text-base text-blue-600 text-center font-bold">Teacher</div>
      <div class=" bg-black opacity-25 h-px w-full mt-2  "></div>
      <ul>
        <li
          :class="[isActive=='settings'?'text-blue-600':'','mt-3 p-2 hover:text-blue-600 rounded-lg']"
        >
          <div @click="setComponent('earnings'); isActive='earnings'"  class=" flex flex-col items-center">
            <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M21 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0
                                012-2h14a2 2 0 012 2v1h-9a2 2 0 00-2 2v8a2 2 0 002
                                2m0-2h10V8H12m4 5.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0
                                011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5z"
              ></path>
            </svg>
            <span class="text-xs mt-2">earnings</span>
          </div>
        </li>
        <li :class="[isActive=='my-course'?'text-blue-600':'','mt-3 p-2 hover:text-blue-600 rounded-lg']">
          <div @click="setComponent('my-courses'); isActive='my-course'" class=" flex flex-col items-center">
            <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0
                                001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z"
              ></path>
            </svg>
            <span class="text-xs mt-2">My courses</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- <div
      class="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			dark:text-blue-500 rounded-full"
    >

      <a href="/">
        <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
          <path
            d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7
						7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0
						003-3V10c0-5-4.03-9-9-9z"
          ></path>
        </svg>
      </a>
    </div> -->
  </nav>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.users);
  },
  beforeMount() {
    // if (
    //   this.user.role == "teacher" ||
    //   this.user.role == "teacher+" ||
    //   this.user.role == "administrator"
    // ) {
    //   this.isTeacher = true;
    // }
  },
  props:{
    setComponent:{
      type:Function
    }
  },
  computed:{
    isTeacher() {
      console.log('role',localStorage.getItem('role'))
      return localStorage.getItem('role')
    }
  },
  data() {
    return {
      user: {
        role: "student"
      },
      isActive:this.$route.query.tab||"dashboard"
    };
  }
};
</script>

<style></style>
