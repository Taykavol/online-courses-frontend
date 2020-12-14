<template>
  <!-- bg-white border-b border-r border-l -->
  <nav
    class="h-16 flex justify-center items-center bg-white text-gray-700 font-bold font-sans text-lg  bg-opacity-50 border-b border-r border-l"
  >
    <modal name="login" :width="modalWidth" height="400px">
      <Registration authType="login" />
    </modal>
    <modal name="register" :width="modalWidth" height="400px">
      <Registration authType="register" />
    </modal>
    <div class=" flex items-center">
      <svg class=" w-8 h-8 ml-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess-board"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.9.2h-64v64h64zM0 64.17v64h64v-64zM128 .2H64v64h64zm64 255.9v64h64v-64zM0 192.12v64h64v-64zM383.85.2h-64v64h64zm128 0h-64v64h64zM128 256.1H64v64h64zM511.8 448v-64h-64v64zm0-128v-64h-64v64zM383.85 512h64v-64h-64zm128-319.88v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm255.9 0h64v-64h-64zM0 320.07v64h64v-64zm319.88-191.92v-64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-127.95h64v-64h-64zm0 191.93v64h64v-64zM64 384.05v64h64v-64zm128-255.9v-64h-64v64zm191.92 255.9h64v-64h-64zm-128-191.93v-64h-64v64zm128-127.95v64h64v-64zm-128 255.9v64h64v-64zm-64-127.95H128v64h64zm191.92 64h64v-64h-64zM128 128.15H64v64h64zm0 191.92v64h64v-64z"></path></svg>
    </div>
    <div class=" ml-auto flex items-center z-20">
      <nuxt-link
        :exact="true"
        to="/"
        class=" cursor-pointer flex flex-col items-center ml-4"
      >
        <svg class="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
        <div class=" -mt-2 text-xs ">courses</div>
      </nuxt-link>
      <nuxt-link :exact="true" to='/instructors' class=" flex flex-col items-center ml-4">
          <svg class="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
          <div class=" -mt-2 text-xs  ">teachers</div>
      </nuxt-link>
    </div>
    
    
    <div
      v-if="isTeacher"
      class="ml-auto flex text-base items-center text-gray-700 z-20"
    >
      <nuxt-link  to="/admin" class="">
        <svg
          @click="setTabName('admin')"
          v-if="isTeacher == 'ADMIN'"
          class="svg-inline--fa fa-user-tie fa-w-14 cursor-pointer hover:text-blue-500 mx-2 w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          ></path>
        </svg>
      </nuxt-link>
      <nuxt-link v-if="isTeacher == 'TEACHER'" to="/teacher" class="flex flex-col items-center">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <div class=" -mt-1 text-xs  ">instractor</div>
      </nuxt-link>
      <div
        v-if="isTeacher == 'TEACHER' || isTeacher == 'ADMIN'"
        class="w-px bg-gray-500 self-stretch ml-3"
      ></div>
      <nuxt-link to="/learning" class=" flex flex-col items-center ml-3">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg>
          <div class=" -mt-1 text-xs  ">learning</div>
      </nuxt-link>
      <nuxt-link to="/settings" class="flex flex-col items-center ml-3">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        <div class=" -mt-1 text-xs  ">settings</div>
      </nuxt-link>
      <div class="w-px bg-gray-500 self-stretch mx-2"></div>
      <div @click="logout()" class="flex flex-col items-center mx-3 hover:text-red-400 cursor-pointer">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
        <div class=" -mt-1 text-xs  ">logout</div>
      </div>
    </div>
    <div v-if="!isTeacher" class="ml-auto flex items-center text-base space-x-1 mr-4  ">
      <div @click="openRegistration('login')" class=" hover:text-blue-700 cursor-pointer p-2 px-3 ">Login</div>
      <div @click="openRegistration('register')" class=" p-2 px-3  bg-gray-800 rounded-2xl text-white  cursor-pointer hover:bg-gray-700 transform duration-300 hover:scale-95">
        Register now
      </div>
    </div>
  </nav>
</template>

<script>
import Registration from '~/components/home/Registration'
const MODAL_WIDTH = 320;
export default {
  data() {
    return {
      temp: 0,
      tabName:''
    };
  },
  components:{
    Registration
  },
  created() {
    this.modalWidth = MODAL_WIDTH;
  },
  updated() {
    console.log('Updated')
  },
  methods: {
    openRegistration(authType) {
      this.$modal.show(authType);
    },
    async logout() {
      await this.$store.dispatch("logout");
      this.temp = 1;
    },
    setTabName(value) {
      this.tabName = value
    }
  },
  computed: {
    isTeacher() {
      this.temp = this.temp + 4;
      return localStorage.getItem("role");
    },
  },
};
</script>

<style>
</style>