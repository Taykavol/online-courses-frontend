<template>
  <div class=" container mx-auto mt-4">
    <div class="">
        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>email address</label>
      <div v-if="false" class='w-full md:w-1/2 px-3 mb-6'>
        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email'  required>
      </div>
      <div v-else class="w-full md:w-1/2 px-3 mb-6 flex items-center">
        <div class=" appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 ">
          mvkvol@yandex.ru
        </div>
        <div class="">
          <svg class="w-8 h-8 cursor-pointer transform duration-300 hover:text-blue-700 hover:scale-95" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        </div>
      </div>
    </div>
    <!-- <div class=" flex flex-col">
        <label class='block  tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>LICHESS CONNECT ( For getting teacher account you have to have <div class=" inline-block bg-blue-700 text-xs self-center px-1 rounded-full text-white ml-1">GM</div>
            <div class="inline-block bg-red-700 text-xs self-center px-1 rounded-full text-white ml-1">IM</div>
            <div class=" inline-block bg-pink-500 text-xs self-center px-1 rounded-full text-white mx-1">WGM</div> title.  ) </label>
        <div class="self-start flex items-center space-x-1">
          <div @click="loginLichess()" class="    px-3 py-2 bg-white  cursor-pointer border">  <img class=" inline-block w-6 h-6 mr-2" src="/images/chess-images/lichess.svg" alt=""> Lichess.org </div>
          <svg v-if="roleTeacher" class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          <svg v-else class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
        </div>
    </div> -->
  </div>
</template>

<script>
export default {
  computed: {
    roleTeacher() {
      return localStorage.getItem('role') == 'TEACHER'
    },
    async loginLichess() {
      const redirectUri = process.env.baseUrl+`/auth/?provider=lichess`;
      const state = Math.random().toString(36).substring(2);
      const authorizationUri = `https://oauth.lichess.org/oauth/authorize?response_type=code&client_id=${process.env.lichessClientId}&redirect_uri=${redirectUri}&scope=email:read&state=${state}`;
      window.location.href = authorizationUri;
    },
  }
}
</script>

<style>

</style>