<template>
    <nav class=" h-16 bg-white flex justify-center items-center border-b border-r border-l      ">
          <modal  name="registration" :width="modalWidth" height="auto">
            <registration/>
          </modal>
              <div class=" ml-5 ">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess-board" class="svg-inline--fa fa-chess-board fa-w-16 h-10 w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.9.2h-64v64h64zM0 64.17v64h64v-64zM128 .2H64v64h64zm64 255.9v64h64v-64zM0 192.12v64h64v-64zM383.85.2h-64v64h64zm128 0h-64v64h64zM128 256.1H64v64h64zM511.8 448v-64h-64v64zm0-128v-64h-64v64zM383.85 512h64v-64h-64zm128-319.88v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm255.9 0h64v-64h-64zM0 320.07v64h64v-64zm319.88-191.92v-64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-127.95h64v-64h-64zm0 191.93v64h64v-64zM64 384.05v64h64v-64zm128-255.9v-64h-64v64zm191.92 255.9h64v-64h-64zm-128-191.93v-64h-64v64zm128-127.95v64h64v-64zm-128 255.9v64h64v-64zm-64-127.95H128v64h64zm191.92 64h64v-64h-64zM128 128.15H64v64h64zm0 191.92v64h64v-64z"></path></svg>
              </div>
              <div class="ml-auto flex">
                <nuxt-link :exact='true' to="/" class=" mx-4 cursor-pointer hover:text-blue-500 flex items-center ">
                    <!-- <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book-open" class="svg-inline--fa fa-book-open fa-w-18 w-5 h-5 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path></svg> -->
                    <div class="">Courses</div>
                </nuxt-link>
                <div class=" mx-4 cursor-pointer hover:text-gray-800 flex items-center">
                    <!-- <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-tie" class="svg-inline--fa fa-user-tie fa-w-14 w-5 h-5 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></svg> -->
                    <div class="">Teachers</div>
                    
                </div>
                <div class=" mx-4 cursor-pointer hover:text-gray-800 ">
                    Contacts
                </div>
              </div>
              <div v-if="isTeacher" class=" ml-auto flex text-base items-center  text-gray-700 ">
                  <nuxt-link to="/admin" class="">
                    <svg v-if="isTeacher=='ADMIN' " class="svg-inline--fa fa-user-tie fa-w-14 cursor-pointer hover:text-blue-500 mx-2 w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
                    <!-- <svg v-if="isTeacher=='ADMIN' " class="svg-inline--fa fa-user-tie fa-w-14 cursor-pointer hover:text-blue-500 mx-2 w-6 h-6 " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-tie"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></svg> -->
                  </nuxt-link>
                  <nuxt-link to="/teacher" class="">
                    <svg v-if="isTeacher=='TEACHER'||isTeacher=='ADMIN' " class="svg-inline--fa fa-user-tie fa-w-14 cursor-pointer hover:text-blue-500 mx-2 w-6 h-6 " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-tie"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></svg>
                  </nuxt-link>
                <div v-if="isTeacher=='TEACHER'||isTeacher=='ADMIN' " class=" w-px bg-gray-500  self-stretch mx-2"></div>
                <nuxt-link to="/learning" class="">
                    <svg class="w-8 h-8 mx-2 cursor-pointer hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                </nuxt-link>
                <div class="">
                    <svg class="svg-inline--fa fa-sliders-h fa-w-16 w-6 h-6 cursor-pointer hover:text-blue-500 mx-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"></path></svg>
                </div>
                <div class=" w-px bg-gray-500 self-stretch mx-2"></div>
                <svg @click="logout()" class="svg-inline--fa fa-sign-out-alt fa-w-16 w-6 h-6 cursor-pointer hover:text-red-700 mx-2 mr-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></svg>
                <!-- <div class=" w-px bg-gray-500  self-stretch "></div> -->
              </div>
                <div v-if="!isTeacher" @click="openRegistration" class=" ml-auto mr-5 text-lg  border-2 text-blue-700 border-blue-700 px-2  hover:bg-blue-700 hover:text-white cursor-pointer ">Login/Registration</div>
    </nav>
</template>

<script>
const MODAL_WIDTH = 638
export default {
    data() {
        return {
            temp:0
        }
    },
    created() {
        this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
    },
    methods:{
        openRegistration() {
            this.$modal.show('registration')
        },
        async logout() {
            await this.$store.dispatch('logout')
            this.temp = 1
        }
    },
    computed:{
        isTeacher() {
            this.temp = this.temp+4
          return localStorage.getItem('role')
        }
    },
}
</script>

<style>

</style>