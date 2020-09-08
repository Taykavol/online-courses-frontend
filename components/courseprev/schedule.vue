<template>
  <div class="   ">
    <div class=" text-center title">Schedule</div>
    <div v-for="(item,index) in 4" :key="index"  class=" ">
      <div :class="{' rounded-t-lg':index==0}" class=" bg-prisma p-2 text-xl text-gray-400 title">
        How to play chess
      </div>
      <div v-for="(item2,index2) in random(10)+1 " :key="index2" :class="{'border-t-2':index2!=0}" class="  p-2 flex border-l-2 border-r-2 ">
        <div  class=" w-full text-xl ">
          <div class="text-gray-900 flex items-baseline ">
            <div class=" mr-2 font-serif">{{index2+1}}</div>
            <div class="">Whart</div>
          </div>
        </div>
        <div  class="flex w-full justify-end  items-center">
          <div class=" relative mx-2">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess-board" class="svg-inline--fa fa-chess-board fa-w-16 w-6 h-6 mx-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.9.2h-64v64h64zM0 64.17v64h64v-64zM128 .2H64v64h64zm64 255.9v64h64v-64zM0 192.12v64h64v-64zM383.85.2h-64v64h64zm128 0h-64v64h64zM128 256.1H64v64h64zM511.8 448v-64h-64v64zm0-128v-64h-64v64zM383.85 512h64v-64h-64zm128-319.88v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm255.9 0h64v-64h-64zM0 320.07v64h64v-64zm319.88-191.92v-64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-127.95h64v-64h-64zm0 191.93v64h64v-64zM64 384.05v64h64v-64zm128-255.9v-64h-64v64zm191.92 255.9h64v-64h-64zm-128-191.93v-64h-64v64zm128-127.95v64h64v-64zm-128 255.9v64h64v-64zm-64-127.95H128v64h64zm191.92 64h64v-64h-64zM128 128.15H64v64h64zm0 191.92v64h64v-64z"></path></svg>
            <div class=" flex justify-center items-center absolute top-0 right-0 bg-red-600 rounded-full w-1 h-1 text-sm  p-2"> 
              <div class="">17</div>
            </div>
          </div>
          <!-- <div class=" font-serif ">+5 exercises</div> -->
          <svg v-if="randomBoolean()" viewBox="0 0 20 20" fill="currentColor" class="lock-closed w-20 h-6  text-red-800"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
          <div v-else class="  font-serif  px-2 bg-blue-400 hover:bg-blue-500 cursor-pointer w-20 text-center rounded-lg">preview</div>

        </div>
        
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods:{
    random(range) {
      return Math.floor(Math.random()*range)
    },
    randomBoolean() {
      return !!Math.round(Math.random()) 
    }
  }
}
</script>

<style>
.title {
  font-family: Montserrat;
  font-weight: bold;
  /* margin-left: 1rem; */
}
.bg-prisma {
  background: radial-gradient(
      37.86% 77.79% at 50% 100%,
      rgba(113, 128, 150, 0.25) 0%,
      rgba(113, 128, 150, 0) 100%
    ),
    linear-gradient(180deg, #344058 0%, #2d3748 100%),
    linear-gradient(180deg, #0d0f14 0%, rgba(27, 32, 43, 0) 100%), #2f3747;
}
</style>