<template>
  <div class=" page lg:container lg:mx-auto text-gray-800">
      <div v-if="course" class=" grid grid-cols-10 my-10 ">
          <!-- Video preview -->
          <div  class=" col-span-10 mx-2 sm:mx-0  md:col-span-7 md:pr-4 md:mr-10 ">
              <div class=" shadow-stripe  lg:rounded-2xl  overflow-hidden">
                <Plyr class=" " v-if="course.promoVideo" :id="course.promoVideo"/>
                <Plyr v-else id="76979871"/>
              </div>
          </div>
          <!-- Amazine app -->
          <div v-if="course" :class="{'payment-card ':payment, 'sm:border':!payment}"  class=" col-span-10 mt-4 sm:mt-2  md:p-0 md:col-span-3   rounded-3xl flex flex-col  items-center relative ">
            <div :class="{'md:hidden':payment,'md:block':!payment}" class=" hidden  absolute inset-0 shadow-2xl bg-gradient-to-r from-blue-300 to-blue-400  transform scale-105 -skew-y-4 sm:-rotate-6 sm:rounded-3xl z-0 "></div>
            <div v-show="!payment"  class=" z-20 sm:bg-white sm:shadow-2xl  sm:rounded-3xl w-full h-full p-4 relative flex flex-col items-center justify-center ">
                <div class=" text-xl  mx-4   text-center leading-6    font-neucha text-gray-900    ">{{course.title}}</div>
                <div v-if="course.subtitle" class=" mx-4 text-center mb-2 text-sm xl:text-base font-exo italic">"{{course.subtitle}}"</div>
                <div class=" w-56 h-px bg-blue-600"></div>
                <div class=" lg:mt-4 font-neucha  text-lg tracking-tighter text-black">This course includes:</div>
                <div class=" grid gap-x-4 gap-y-1  grid-cols-2">
                        <div class=" flex items-center ">
                            <img class=" w-10 h-10" src="/icons/chess-clock-svgrepo-com.svg" alt="">
                            <div class=" ml-1">{{duration}} hours  </div>    
                        </div>
                        <div class=" flex items-center">
                            <div class="w-10 h-10 flex items-center justify-center">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                                <!-- <svg class="w-8 h-8 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg> -->
                            </div>
                            <div class=" ml-1">{{course.totalPuzzles}} puzzles</div>    
                        </div>
                        <div class=" flex items-center">
                            <!-- <img class="w-8 h-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8Y2lyY2xlIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgY3g9IjI1NS45OTciIGN5PSIyNTUuOTk3IiByPSIxNDQuODI0IiBmaWxsPSIjZmZkMzQ3IiBkYXRhLW9yaWdpbmFsPSIjZmZkMzQ3IiBjbGFzcz0iIj48L2NpcmNsZT4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBkPSJNMjU2LDExMS4xOGMtNS4yNDIsMC0xMC40MTgsMC4yODYtMTUuNTE2LDAuODI4YzcyLjY4NSw3Ljc0MywxMjkuMzAzLDY5LjI1MiwxMjkuMzAzLDE0My45OTEgIHMtNTYuNjE5LDEzNi4yNDktMTI5LjMwMywxNDMuOTkyYzUuMDk4LDAuNTQ0LDEwLjI3MywwLjgyOCwxNS41MTYsMC44MjhjNzkuOTgyLDAsMTQ0LjgyLTY0LjgzOCwxNDQuODItMTQ0LjgyICBTMzM1Ljk4MywxMTEuMTgsMjU2LDExMS4xOHoiIGZpbGw9IiNmZmJlMzEiIGRhdGEtb3JpZ2luYWw9IiNmZmJlMzEiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMjU2LDQwOC41NTdjLTg0LjEyLDAtMTUyLjU1Ny02OC40MzctMTUyLjU1Ny0xNTIuNTU3YzAtMzQuNTY0LDExLjg4MS02OC40MjMsMzMuNDU0LTk1LjM0ICBjMi42NzItMy4zMzUsNy41NDItMy44NzIsMTAuODc1LTEuMTk5YzMuMzM0LDIuNjczLDMuODcyLDcuNTQyLDEuMTk5LDEwLjg3NkMxMjkuMzA5LDE5NC44NywxMTguOTE2LDIyNC40OSwxMTguOTE2LDI1NiAgYzAsNzUuNTg4LDYxLjQ5NiwxMzcuMDg0LDEzNy4wODQsMTM3LjA4NFMzOTMuMDg0LDMzMS41ODksMzkzLjA4NCwyNTZTMzMxLjU4OCwxMTguOTE2LDI1NiwxMTguOTE2ICBjLTMxLjA5LDAtNjAuNCwxMC4xNDYtODQuNzYyLDI5LjMzOWMtMy4zNTcsMi42NDItOC4yMjIsMi4wNjYtMTAuODY2LTEuMjg5Yy0yLjY0NC0zLjM1Ny0yLjA2Ny04LjIyMiwxLjI4OC0xMC44NjYgIGMyNy4xMTktMjEuMzY1LDU5Ljc0MS0zMi42NTgsOTQuMzM5LTMyLjY1OGM4NC4xMiwwLDE1Mi41NTcsNjguNDM3LDE1Mi41NTcsMTUyLjU1N1MzNDAuMTIsNDA4LjU1NywyNTYsNDA4LjU1N3oiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMjU2LDU2Ljg0OGMtNC4yNzMsMC03LjczNy0zLjQ2My03LjczNy03LjczN1Y3LjczN0MyNDguMjYzLDMuNDYzLDI1MS43MjcsMCwyNTYsMHM3LjczNywzLjQ2Myw3LjczNyw3LjczN3Y0MS4zNzUgIEMyNjMuNzM3LDUzLjM4NSwyNjAuMjczLDU2Ljg0OCwyNTYsNTYuODQ4eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0xNTIuNTYzLDg0LjU2OGMtMi42NzQsMC01LjI3NC0xLjM4Ny02LjcwNy0zLjg2OWwtMjAuNjg3LTM1LjgzMWMtMi4xMzYtMy43LTAuODY5LTguNDMyLDIuODMyLTEwLjU2OSAgYzMuNzAxLTIuMTM0LDguNDMyLTAuODcsMTAuNTY5LDIuODMybDIwLjY4NywzNS44MzFjMi4xMzYsMy43LDAuODY5LDguNDMyLTIuODMyLDEwLjU2OSAgQzE1NS4yMDYsODQuMjMzLDE1My44NzYsODQuNTY4LDE1Mi41NjMsODQuNTY4eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik03Ni44MjMsMTYwLjI5NGMtMS4zMTIsMC0yLjY0My0wLjMzNC0zLjg2MS0xLjAzOEwzNy4xMywxMzguNTY5Yy0zLjctMi4xMzYtNC45NjgtNi44NjgtMi44MzItMTAuNTY5ICBjMi4xMzYtMy43MDEsNi44NjgtNC45NjcsMTAuNTY5LTIuODMybDM1LjgzMiwyMC42ODdjMy43LDIuMTM2LDQuOTY4LDYuODY4LDIuODMyLDEwLjU2OSAgQzgyLjA5NywxNTguOTA3LDc5LjQ5NywxNjAuMjk0LDc2LjgyMywxNjAuMjk0eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik00OS4xMTIsMjYzLjczN0g3LjczN0MzLjQ2NCwyNjMuNzM3LDAsMjYwLjI3NCwwLDI1NnMzLjQ2NC03LjczNyw3LjczNy03LjczN2g0MS4zNzZjNC4yNzMsMCw3LjczNywzLjQ2Myw3LjczNyw3LjczNyAgUzUzLjM4NSwyNjMuNzM3LDQ5LjExMiwyNjMuNzM3eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik00MS4wMDUsMzg3Ljg2OWMtMi42NzQsMC01LjI3NC0xLjM4Ny02LjcwNy0zLjg2OWMtMi4xMzYtMy43LTAuODY5LTguNDMyLDIuODMyLTEwLjU2OWwzNS44MzItMjAuNjg3ICBjMy43LTIuMTM0LDguNDMyLTAuODcsMTAuNTY5LDIuODMyYzIuMTM2LDMuNywwLjg2OSw4LjQzMi0yLjgzMiwxMC41NjlsLTM1LjgzMiwyMC42ODcgIEM0My42NDgsMzg3LjUzNSw0Mi4zMTcsMzg3Ljg2OSw0MS4wMDUsMzg3Ljg2OXoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMTMxLjg2Miw0NzguNzRjLTEuMzEyLDAtMi42NDMtMC4zMzQtMy44NjEtMS4wMzhjLTMuNy0yLjEzNi00Ljk2OC02Ljg2OC0yLjgzMi0xMC41NjlsMjAuNjg3LTM1LjgzMiAgYzIuMTM2LTMuNzAxLDYuODY4LTQuOTY3LDEwLjU2OS0yLjgzMmMzLjcsMi4xMzYsNC45NjgsNi44NjgsMi44MzIsMTAuNTY5bC0yMC42ODcsMzUuODMyICBDMTM3LjEzNiw0NzcuMzUyLDEzNC41MzYsNDc4Ljc0LDEzMS44NjIsNDc4Ljc0eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0yNTYsNTEyYy00LjI3MywwLTcuNzM3LTMuNDYzLTcuNzM3LTcuNzM3di00MS4zNzVjMC00LjI3NCwzLjQ2NC03LjczNyw3LjczNy03LjczN3M3LjczNywzLjQ2Myw3LjczNyw3LjczN3Y0MS4zNzUgIEMyNjMuNzM3LDUwOC41MzcsMjYwLjI3Myw1MTIsMjU2LDUxMnoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMzgwLjEzOCw0NzguNzRjLTIuNjc0LDAtNS4yNzQtMS4zODctNi43MDctMy44NjlsLTIwLjY4Ny0zNS44MzJjLTIuMTM2LTMuNy0wLjg2OS04LjQzMiwyLjgzMi0xMC41NjkgIGMzLjctMi4xMzQsOC40MzItMC44NywxMC41NjksMi44MzJsMjAuNjg3LDM1LjgzMmMyLjEzNiwzLjcsMC44NjksOC40MzItMi44MzIsMTAuNTY5ICBDMzgyLjc4MSw0NzguNDA2LDM4MS40NTEsNDc4Ljc0LDM4MC4xMzgsNDc4Ljc0eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik00NzAuOTk1LDM4Ny44NjljLTEuMzEyLDAtMi42NDMtMC4zMzQtMy44NjEtMS4wMzhsLTM1LjgzMi0yMC42ODdjLTMuNy0yLjEzNi00Ljk2OC02Ljg2OC0yLjgzMi0xMC41NjkgIGMyLjEzNi0zLjcwMSw2Ljg2OC00Ljk2NywxMC41NjktMi44MzJsMzUuODMyLDIwLjY4N2MzLjcsMi4xMzYsNC45NjgsNi44NjgsMi44MzIsMTAuNTY5ICBDNDc2LjI2OSwzODYuNDgxLDQ3My42NjksMzg3Ljg2OSw0NzAuOTk1LDM4Ny44Njl6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTUwNC4yNjMsMjYzLjczN2gtNDEuMzc2Yy00LjI3MywwLTcuNzM3LTMuNDYzLTcuNzM3LTcuNzM3czMuNDY0LTcuNzM3LDcuNzM3LTcuNzM3aDQxLjM3NiAgYzQuMjczLDAsNy43MzcsMy40NjMsNy43MzcsNy43MzdTNTA4LjUzNiwyNjMuNzM3LDUwNC4yNjMsMjYzLjczN3oiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNNDM1LjE3NywxNjAuMjk0Yy0yLjY3NCwwLTUuMjc0LTEuMzg3LTYuNzA3LTMuODY5Yy0yLjEzNi0zLjctMC44NjktOC40MzIsMi44MzItMTAuNTY5bDM1LjgzMi0yMC42ODcgIGMzLjctMi4xMzQsOC40MzItMC44NywxMC41NjksMi44MzJjMi4xMzYsMy43LDAuODY5LDguNDMyLTIuODMyLDEwLjU2OWwtMzUuODMyLDIwLjY4NyAgQzQzNy44MiwxNTkuOTYsNDM2LjQ4OSwxNjAuMjk0LDQzNS4xNzcsMTYwLjI5NHoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMzU5LjQzNyw4NC41NjhjLTEuMzEyLDAtMi42NDMtMC4zMzQtMy44NjEtMS4wMzhjLTMuNy0yLjEzNi00Ljk2OC02Ljg2OC0yLjgzMi0xMC41NjlsMjAuNjg3LTM1LjgzMSAgYzIuMTM2LTMuNzAxLDYuODY4LTQuOTY3LDEwLjU2OS0yLjgzMmMzLjcsMi4xMzYsNC45NjgsNi44NjgsMi44MzIsMTAuNTY5bC0yMC42ODcsMzUuODMxICBDMzY0LjcxMSw4My4xOCwzNjIuMTEsODQuNTY4LDM1OS40MzcsODQuNTY4eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" /> -->
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            <div class=" ml-1">Lifetime access</div>
                        </div>
                        <div class=" flex items-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                            <!-- <img class="w-6 h-6" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMy4yMiA1MTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI0MC4wMTU2MjUgNDk1LjQ2ODc1Yy0uMDE1NjI1LTguMjA3MDMxIDYuMTc1NzgxLTE1LjI3NzM0NCAxNC4zNjcxODctMTUuODg2NzE5IDEwMC44ODI4MTMtNy40NzI2NTYgMTgwLjY4NzUtOTIgMTgwLjY4NzUtMTk0LjczNDM3NWwzMi0uODgyODEydi44ODI4MTJjMCAxMTkuMjYxNzE5LTkyLjQyOTY4NyAyMTcuNDIxODc1LTIwOS40MDYyNSAyMjYuNTc0MjE5LTkuNDU3MDMxLjczNDM3NS0xNy42MzI4MTItNi40ODA0NjktMTcuNjQ4NDM3LTE1Ljk1MzEyNXptMCAwIiBmaWxsPSIjZmJjMDJkIiBkYXRhLW9yaWdpbmFsPSIjZmJjMDJkIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTEzLjg3MTA5NCA0NTYuODc4OTA2Yy03MC4yMjI2NTYtNDAuNTExNzE4LTExMy44NzEwOTQtMTE2LTExMy44NzEwOTQtMTk2Ljk5MjE4NyAwLTM0LjIwNzAzMSA3LjcxMDkzOC02Ny45NTMxMjUgMjIuNDE0MDYyLTk4LjUyNzM0NCAzLjg3NS04LjA1MDc4MSAxMy42MDE1NjMtMTEuMzEyNSAyMS4zNDc2NTctNi44NjcxODdsMS41MzUxNTYuODgyODEyYzcuMDM5MDYzIDQuMDQ2ODc1IDkuMzI4MTI1IDEyLjgwMDc4MSA1LjgyNDIxOSAyMC4xMDkzNzUtMTIuNTQ2ODc1IDI2LjIxMDkzNy0xOS4xMjEwOTQgNTUuMTA1NDY5LTE5LjEyMTA5NCA4NC40MDIzNDQgMCA2OS41OTc2NTYgMzcuNTAzOTA2IDEzNC40NDkyMTkgOTcuODU1NDY5IDE2OS4yNjE3MTl6bTAgMCIgZmlsbD0iIzRkZDBlMSIgZGF0YS1vcmlnaW5hbD0iIzRkZDBlMSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQzNy40NDE0MDYgMTM3Ljg4NjcxOWMtNy4wODk4NDQgNC4xNDQ1MzEtMTYuMzA0Njg3IDIuMzIwMzEyLTIwLjk2MDkzNy00LjQ0OTIxOS0zNi4yNDIxODgtNTIuNjU2MjUtOTYuNzAzMTI1LTg0LjgzMjAzMS0xNjEuMDU0Njg4LTg0LjgzMjAzMS0zNC41MTU2MjUgMC02OC40MzM1OTMgOS4xMjEwOTMtOTguMDk3NjU2IDI2LjM4MjgxMmwtMTYuMDk3NjU2LTI3LjY0NDUzMWMzNC41NDY4NzUtMjAuMTEzMjgxIDc0LjAxNTYyNS0zMC43MzgyODEgMTE0LjE5NTMxMi0zMC43MzgyODEgNzQuNjIxMDk0IDAgMTQ0LjczNDM3NSAzNy4xNTIzNDMgMTg2Ljk1NzAzMSA5OC4wMTU2MjUgNS4zOTQ1MzIgNy43OTI5NjggMy4yMzQzNzYgMTguNDk2MDk0LTQuOTQxNDA2IDIzLjI2NTYyNXptMCAwIiBmaWxsPSIjZTY0YTE5IiBkYXRhLW9yaWdpbmFsPSIjZTY0YTE5IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjA0LjE2MDE1NiA5Ni4xMDkzNzVoLTgwdi04MGMwLTguODMyMDMxIDcuMTY3OTY5LTE2IDE2LTE2IDguODMyMDMyIDAgMTYgNy4xNjc5NjkgMTYgMTZ2NDhoNDhjOC44MzIwMzIgMCAxNiA3LjE2Nzk2OSAxNiAxNnMtNy4xNjc5NjggMTYtMTYgMTZ6bTAgMCIgZmlsbD0iI2ZmNzA0MyIgZGF0YS1vcmlnaW5hbD0iI2ZmNzA0MyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTEzNiA0NjQuMTA5Mzc1aC04MGMtOC44MzIwMzEgMC0xNi03LjE2Nzk2OS0xNi0xNnM3LjE2Nzk2OS0xNiAxNi0xNmg0OHYtNDhjMC04LjgzMjAzMSA3LjE2Nzk2OS0xNiAxNi0xNnMxNiA3LjE2Nzk2OSAxNiAxNnptMCAwIiBmaWxsPSIjODBkZWVhIiBkYXRhLW9yaWdpbmFsPSIjODBkZWVhIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDg1LjkwMjM0NCAzMjEuMzQzNzUtMzMuOTQ5MjE5LTMzLjkzNzUtMzMuOTUzMTI1IDMzLjkzNzVjLTYuMjM4MjgxIDYuMjM4MjgxLTE2LjM4MjgxMiA2LjIzODI4MS0yMi42MjUgMC02LjI1MzkwNi02LjI1NzgxMi02LjIzODI4MS0xNi4zODY3MTkgMC0yMi42MjVsNTYuNTc4MTI1LTU2LjU2MjUgNTYuNTc0MjE5IDU2LjU2MjVjNi4yNTc4MTIgNi4yMzgyODEgNi4yNTc4MTIgMTYuMzgyODEyIDAgMjIuNjI1LTYuMjM4MjgyIDYuMjUzOTA2LTE2LjM2NzE4OCA2LjI1MzkwNi0yMi42MjUgMHptMCAwIiBmaWxsPSIjZmRkODM1IiBkYXRhLW9yaWdpbmFsPSIjZmRkODM1IiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" /> -->
                            <div class=" ml-1">Free updates</div>    
                        </div>
                </div>
                <div v-if="course.sentences.length>0" class=" lg:mt-4 hidden lg:block font-neucha text-black  text-lg ">You will learn:</div>
                <div v-if="course.sentences.length>0" class=" hidden lg:flex lg:flex-col  self-start mx-4 ">
                    <div class="  leading-5  flex flex-col space-y-1 mt-1 ">
                            <div v-for="(item,index) in course.sentences" :key="index" class=" flex items-center"> 
                                <div v-if="item" class=" mr-1 self-start">
                                    <svg class="w-6 h-6 flex-shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                </div>
                                <div class="">{{item}}</div>
                            </div>
                    </div>
                </div>
                <!-- <div class=" mt-auto text-3xl mb-8 "> 30$</div> -->
                <div   style="" @click="buyCourse" class=" font-neucha btn--buy mt-6 md:mt-auto  text-gray-800   duration-150 pb-2 pt-1 px-10 mb-2 rounded-xl  flex flex-col justify-center items-center text-lg cursor-pointer">
                    <div v-if="sale" class="">
                        Buy now for <span class=" text-green-700 ml-1 tracking-tight"> 30$</span>  <span class=" ml-px text-sm mb-2 line-through text-red-800">40$</span>
                    </div>
                    <div class=" tracking-tighter font-medium ">
                        Buy now for <span class="text-2xl ">{{course.price}}$</span> 
                    </div>
                </div>
            </div>
            <div v-show="payment" :class="{'mt-8':payment}" class="z-50 border-none -mt-8    ">
                <CreditCard :price="20" :fn="()=>payment=false"  class="  mx-8 " />    
            </div>
          </div>
          <div v-else  class=" md:col-span-3">
              <div class="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4 w-full">
                <div class="mx-auto h-40 bg-gray-200 rounded-md"></div>
                <div class="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"></div>
                <div class="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"></div>
                <div class="flex justify-center mt-4">
                  <div class="rounded-sm h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                  <div class="rounded-sm h-8 w-20 px-4 bg-green-300"></div>
                </div>
              </div>
          </div>
      </div>
      <div v-if="course" :class="{'-mt-20 lg:mt-0':payment}" class=" flex flex-col md:flex-row items-start   mb-16">
          <!-- Column -->
          <div :class="{'md:-mt-48 xl:-mt-24 xl1:-mt-8 ':payment,' mt-6':!payment}" class=" w-full  md:w-7/10 md:pr-4 ">
              <div class="  border-l border-r border-b bg-white  flex flex-col ">
                      <div class=" h-5 pattern-checks-sm "></div>
                      <div class=" flex flex-col  md:flex-row ">
                        <div class=" sm:w-7/12">    
                            <!-- <div style="background:#f6f9fc;min-height:14rem;" class=" flex   ">
                                <div class=" mt-8 mx-12  h-full flex flex-col items-center justify-center text-lg text-gray-700 ">
                                    <div class="  self-start px-2 rounded">About course</div>
                                    <div class=" mt-1">  
                                    {{course.description}}
                                    </div>
                                </div>
                            </div> -->
                            <div style="min-height:16rem;" class=" mx-12   flex flex-col   text-lg text-gray-700 ">
                                <div v-for="(item,index) in course.description" :key="index" class=" flex flex-col">
                                    <div :class="{'bg-purple-300':index==0,'bg-yellow-300':index==1, 'bg-green-300':index==2, 'bg-blue-300':index==3, 'bg-pink-300':index==4}" class=" font-medium self-start px-2 rounded mt-8 ">{{item.title}}</div>
                                    <div class=" mt-1">  
                                        {{item.description}}
                                    </div>
                                </div>
                                    <!-- <div class=" uppercase self-start bg-green-300 px-2 rounded mt-8 ">What <strong>You</strong> will get from studying this course? </div>
                                    <div class=" mt-1 mb-8"> 
                                        {{course.whatStudentsGet}}
                                    </div> -->
                            </div>
                        </div>
                        <div class=" md:w-5/12 flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 px-6">
                                <div class=" uppercase  bg-orange-300  px-2 rounded mt-8 mb-2 self-center text-gray-700 ">Your instractor</div>
                                <TeacherCard v-if="course.author" :profile="course.author" class="  "/>
                        </div>
                      </div>
              </div>
             <schedule v-if="curriculum" :curriculum="curriculum" :pictureUri="course.pictureUri" class=" mt-8 " />
          </div>
          <div :class="{'sm:-mt-20 lg:-mt-32 xl1:-mt-12':payment , }" class=" w-full   md:w-3/10 mt-2   flex flex-col">
            <reviews  class=" mt-4 w-full" :averageRating="averageReviews" :reviewStats="course.reviewStats" :registedStudents='course.registedStudents' :totalReviews='totalReviews' />
          </div>
      </div>
  </div>
</template>

<script>
// import plyr from 'plyr'
import CreditCard from "~/components/common/CreditCard";
import Header from '~/components/layout/Header'
import Schedule from '~/components/course/Schedule'
import Plyr from '~/components/common/PlyrVideo'
import Reviews from '~/components/course/Reviews'
import TeacherCard from '~/components/course/TeacherCardPublic'
import Axios from 'axios'
export default {
middleware:['common'],
components:{
    Schedule,Reviews,Plyr,TeacherCard,Header,CreditCard
},
mounted() {
    // this.player = new plyr(this.$refs.plyr)
},
data() {
    return {
        player:null,
        sale:false,
        course:null,
        curriculum:null,
        payment:false
    }
},
computed: {
    duration() {
      const temp = this.course.duration
      const hours = Math.floor(temp / 3600);
      const minutes = Math.floor(Math.floor(temp / 60) % 60);
      return `${hours}:${minutes>=10?minutes:'0'+ minutes}`
    },
    // isVisible() {
    //     const temp  = JSON.parse(localStorage.getItem('boughtcourses')) 
    //     if(!temp) return false
    //     if(temp.find(courseId =>courseId == this.$route.params.id)>=0) return true
    //     return false
    // },
    averageReviews() {
      if(this.totalReviews==0) return 0
      return  this.course.reviewStats.reduce((acc,val,index)=>acc+val*(index+1))/this.course.reviewStats.reduce((acc,val)=>acc+val)
    },
    totalReviews() {
        if(!this.course.reviewStats) return 0
       return this.course.reviewStats.reduce((acc,val)=>acc+val)
    }
},

async created() {
    const course = this.$store.getters.coursesHome.find(course=>course.id == this.$route.params.id)
    if(course)
    this.course = course
    else  {
        const {data} = await Axios.get(`/buildcourse/${this.$route.params.id}/preview`)
        this.course = data
    }
    this.curriculum = JSON.parse(this.course.curriculum) 
    console.log('curriculum',this.curriculum)
    console.log('course',this.course)
},
methods:{
    buyCourse() {
        this.payment = true
    },
    
},

}
</script>


<style lang="scss">
// --plyr-color-main:black;

.texture--bg {
    background-color: #f6f9fc;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
.payment-card {
    @media (max-width:1450px) {
    transform: scale(0.8) translateY(-10%)
  }
}
.card {
    min-width: 20rem;
    @media (max-width: 360px) {
        min-width: 0;
    }
}
.plyr__poster {
    // height: 100%;
}
.btn--buy {
    background-color:#ffd43b; 
    color:midnightblue;
    &:hover {
        // color:#ffd332;
        background-color:#ffe070; 
    }
}
// .page {
//  --plyr-color-main:black;
// }
// .text {
//     color:var(--plyr-color-main)
// }
/* <link rel="stylesheet" href="" /> */
</style>