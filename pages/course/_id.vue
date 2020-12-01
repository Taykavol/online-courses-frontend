<template>
  <div class=" page lg:container lg:mx-auto text-gray-800">
      <!-- fixed z-50 w-full bg-opacity-100 -mt-10 -->
      <!-- <div class="  text-xl"> {{course?course.title:''}} </div> -->
      <Header class=" " >  </Header>
      <!-- hey {{$route.params.id}} -->
      <div v-if="course" class=" grid grid-cols-10 my-10 ">
          <div  class=" col-span-10  md:col-span-7 md:pr-4 md:mr-10 ">
              <div class=" shadow-stripe">
                <Plyr class=" " v-if="course.promoVideo" :id="course.promoVideo"/>
                <!-- <img src="" v-else class=" h-64"/> -->
                <Plyr v-else id="76979871"/>

              </div>
              <!-- <div ref="plyr" data-plyr-provider="vimeo" data-plyr-embed-id="76979871"></div> -->
              <!-- <div class=" " ref="plyr" >
                  <iframe
                  class=""
                    src="https://player.vimeo.com/video/449314038?loop=false&amp;byline=false&amp;portrait=false&amp;title=true&amp;speed=true&amp;transparent=0&amp;gesture=media"
                    allowfullscreen
                    allowtransparency
                    allow="autoplay"
                ></iframe>
              </div> -->
          </div>
          <!-- <div class=" col-span-1 md:hidden"></div> -->
          <div v-if="course"  class="col-span-10 mt-4 sm:mt-0  md:p-0 md:col-span-3 border sm:bg-white rounded-3xl flex flex-col  items-center relative ">
            <div class=" hidden md:block absolute inset-0 shadow-2xl bg-gradient-to-r from-blue-300 to-blue-400  transform scale-105 -skew-y-4 sm:-rotate-6 sm:rounded-3xl z-0 "></div>
            <div  class=" z-20 sm:bg-white sm:shadow-2xl  sm:rounded-3xl w-full h-full p-4 relative flex flex-col items-center justify-center">
                <div class=" text-xl  mx-4   text-center leading-6    font-neucha text-gray-800   ">{{course.title}}</div>
                <div v-if="course.subtitle" class=" mx-4 text-center mb-2 text-sm xl:text-base font-exo">"{{course.subtitle}}"</div>
                <div class=" w-40 h-1 bg-blue-600"></div>
                <!-- <div class="flex justify-center w-full items-baseline  mt-px">
                    <div class="">By</div>
                    <div v-if="course.author" class=" mx-1 bg-blue-700 text-white px-1 rounded-lg font-sans font-semibold text-xs">{{course.author.title}}</div>
                    <div v-if="course.author" class=" truncate ">{{course.author.teacherName}}</div>
                </div> -->
                <!-- <div   class="flex items-center  ml-2 ">
                    <div class=" flex">
                    <svg
                        v-for="(index,item) of 5"
                        :key="index"
                        :class="{'text-yellow-500':index<=averageReviews}"
                        class="w-5 h-5 fill-current text-gray-400  "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <defs>
                            <linearGradient id="half_grad0">
                                <stop :offset="100*(averageReviews-Math.floor(averageReviews))+'%'" stop-color="#ecc94b"/>
                                <stop offset="0%" stop-color="#cbd5e0" stop-opacity="1" />
                            </linearGradient>
                        </defs>
                        <path
                            :fill="index==Math.floor(averageReviews)+1?`url(#half_grad0)`:''"
                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                    </svg>
                    </div>
                    <div class="ml-1  text-lg text-orange-600 tracking-tighter font-semibold  ">{{ Math.floor(averageReviews*100)/100}}</div>
                    <div class=" flex  text-base ">
                        <div class="text-gray-800 font-semibold  ml-1">({{totalReviews}})</div>
                        <div class=" ml-1 tracking-tight text-base ">{{course.registedStudents}} students</div>
                    </div>
                </div> -->
                <div class=" lg:mt-4 font-neucha  text-lg tracking-tighter">This course includes:</div>
                <div class=" grid gap-x-4 gap-y-1  grid-cols-2">
                        <div class=" flex items-center ">
                            <img class=" w-10 h-10" src="/icons/chess-clock-svgrepo-com.svg" alt="">
                            <div class=" ml-1">{{duration}} hours  </div>    
                        </div>
                        <div class=" flex items-center">
                            <div class="w-10 h-10 flex items-center justify-center">
                                <svg class="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg>
                                <!-- <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg> -->
                                <!-- <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess-board" class="svg-inline--fa fa-chess-board fa-w-16 w-8 h-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.9.2h-64v64h64zM0 64.17v64h64v-64zM128 .2H64v64h64zm64 255.9v64h64v-64zM0 192.12v64h64v-64zM383.85.2h-64v64h64zm128 0h-64v64h64zM128 256.1H64v64h64zM511.8 448v-64h-64v64zm0-128v-64h-64v64zM383.85 512h64v-64h-64zm128-319.88v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm255.9 0h64v-64h-64zM0 320.07v64h64v-64zm319.88-191.92v-64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-127.95h64v-64h-64zm0 191.93v64h64v-64zM64 384.05v64h64v-64zm128-255.9v-64h-64v64zm191.92 255.9h64v-64h-64zm-128-191.93v-64h-64v64zm128-127.95v64h64v-64zm-128 255.9v64h64v-64zm-64-127.95H128v64h64zm191.92 64h64v-64h-64zM128 128.15H64v64h64zm0 191.92v64h64v-64z"></path></svg> -->
                            </div>
                            <div class=" ml-1">{{course.totalPuzzles}} puzzles</div>    
                        </div>
                        <div class=" flex items-center">
                            <img class="w-8 h-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8Y2lyY2xlIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgY3g9IjI1NS45OTciIGN5PSIyNTUuOTk3IiByPSIxNDQuODI0IiBmaWxsPSIjZmZkMzQ3IiBkYXRhLW9yaWdpbmFsPSIjZmZkMzQ3IiBjbGFzcz0iIj48L2NpcmNsZT4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBkPSJNMjU2LDExMS4xOGMtNS4yNDIsMC0xMC40MTgsMC4yODYtMTUuNTE2LDAuODI4YzcyLjY4NSw3Ljc0MywxMjkuMzAzLDY5LjI1MiwxMjkuMzAzLDE0My45OTEgIHMtNTYuNjE5LDEzNi4yNDktMTI5LjMwMywxNDMuOTkyYzUuMDk4LDAuNTQ0LDEwLjI3MywwLjgyOCwxNS41MTYsMC44MjhjNzkuOTgyLDAsMTQ0LjgyLTY0LjgzOCwxNDQuODItMTQ0LjgyICBTMzM1Ljk4MywxMTEuMTgsMjU2LDExMS4xOHoiIGZpbGw9IiNmZmJlMzEiIGRhdGEtb3JpZ2luYWw9IiNmZmJlMzEiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMjU2LDQwOC41NTdjLTg0LjEyLDAtMTUyLjU1Ny02OC40MzctMTUyLjU1Ny0xNTIuNTU3YzAtMzQuNTY0LDExLjg4MS02OC40MjMsMzMuNDU0LTk1LjM0ICBjMi42NzItMy4zMzUsNy41NDItMy44NzIsMTAuODc1LTEuMTk5YzMuMzM0LDIuNjczLDMuODcyLDcuNTQyLDEuMTk5LDEwLjg3NkMxMjkuMzA5LDE5NC44NywxMTguOTE2LDIyNC40OSwxMTguOTE2LDI1NiAgYzAsNzUuNTg4LDYxLjQ5NiwxMzcuMDg0LDEzNy4wODQsMTM3LjA4NFMzOTMuMDg0LDMzMS41ODksMzkzLjA4NCwyNTZTMzMxLjU4OCwxMTguOTE2LDI1NiwxMTguOTE2ICBjLTMxLjA5LDAtNjAuNCwxMC4xNDYtODQuNzYyLDI5LjMzOWMtMy4zNTcsMi42NDItOC4yMjIsMi4wNjYtMTAuODY2LTEuMjg5Yy0yLjY0NC0zLjM1Ny0yLjA2Ny04LjIyMiwxLjI4OC0xMC44NjYgIGMyNy4xMTktMjEuMzY1LDU5Ljc0MS0zMi42NTgsOTQuMzM5LTMyLjY1OGM4NC4xMiwwLDE1Mi41NTcsNjguNDM3LDE1Mi41NTcsMTUyLjU1N1MzNDAuMTIsNDA4LjU1NywyNTYsNDA4LjU1N3oiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMjU2LDU2Ljg0OGMtNC4yNzMsMC03LjczNy0zLjQ2My03LjczNy03LjczN1Y3LjczN0MyNDguMjYzLDMuNDYzLDI1MS43MjcsMCwyNTYsMHM3LjczNywzLjQ2Myw3LjczNyw3LjczN3Y0MS4zNzUgIEMyNjMuNzM3LDUzLjM4NSwyNjAuMjczLDU2Ljg0OCwyNTYsNTYuODQ4eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0xNTIuNTYzLDg0LjU2OGMtMi42NzQsMC01LjI3NC0xLjM4Ny02LjcwNy0zLjg2OWwtMjAuNjg3LTM1LjgzMWMtMi4xMzYtMy43LTAuODY5LTguNDMyLDIuODMyLTEwLjU2OSAgYzMuNzAxLTIuMTM0LDguNDMyLTAuODcsMTAuNTY5LDIuODMybDIwLjY4NywzNS44MzFjMi4xMzYsMy43LDAuODY5LDguNDMyLTIuODMyLDEwLjU2OSAgQzE1NS4yMDYsODQuMjMzLDE1My44NzYsODQuNTY4LDE1Mi41NjMsODQuNTY4eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik03Ni44MjMsMTYwLjI5NGMtMS4zMTIsMC0yLjY0My0wLjMzNC0zLjg2MS0xLjAzOEwzNy4xMywxMzguNTY5Yy0zLjctMi4xMzYtNC45NjgtNi44NjgtMi44MzItMTAuNTY5ICBjMi4xMzYtMy43MDEsNi44NjgtNC45NjcsMTAuNTY5LTIuODMybDM1LjgzMiwyMC42ODdjMy43LDIuMTM2LDQuOTY4LDYuODY4LDIuODMyLDEwLjU2OSAgQzgyLjA5NywxNTguOTA3LDc5LjQ5NywxNjAuMjk0LDc2LjgyMywxNjAuMjk0eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik00OS4xMTIsMjYzLjczN0g3LjczN0MzLjQ2NCwyNjMuNzM3LDAsMjYwLjI3NCwwLDI1NnMzLjQ2NC03LjczNyw3LjczNy03LjczN2g0MS4zNzZjNC4yNzMsMCw3LjczNywzLjQ2Myw3LjczNyw3LjczNyAgUzUzLjM4NSwyNjMuNzM3LDQ5LjExMiwyNjMuNzM3eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik00MS4wMDUsMzg3Ljg2OWMtMi42NzQsMC01LjI3NC0xLjM4Ny02LjcwNy0zLjg2OWMtMi4xMzYtMy43LTAuODY5LTguNDMyLDIuODMyLTEwLjU2OWwzNS44MzItMjAuNjg3ICBjMy43LTIuMTM0LDguNDMyLTAuODcsMTAuNTY5LDIuODMyYzIuMTM2LDMuNywwLjg2OSw4LjQzMi0yLjgzMiwxMC41NjlsLTM1LjgzMiwyMC42ODcgIEM0My42NDgsMzg3LjUzNSw0Mi4zMTcsMzg3Ljg2OSw0MS4wMDUsMzg3Ljg2OXoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMTMxLjg2Miw0NzguNzRjLTEuMzEyLDAtMi42NDMtMC4zMzQtMy44NjEtMS4wMzhjLTMuNy0yLjEzNi00Ljk2OC02Ljg2OC0yLjgzMi0xMC41NjlsMjAuNjg3LTM1LjgzMiAgYzIuMTM2LTMuNzAxLDYuODY4LTQuOTY3LDEwLjU2OS0yLjgzMmMzLjcsMi4xMzYsNC45NjgsNi44NjgsMi44MzIsMTAuNTY5bC0yMC42ODcsMzUuODMyICBDMTM3LjEzNiw0NzcuMzUyLDEzNC41MzYsNDc4Ljc0LDEzMS44NjIsNDc4Ljc0eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0yNTYsNTEyYy00LjI3MywwLTcuNzM3LTMuNDYzLTcuNzM3LTcuNzM3di00MS4zNzVjMC00LjI3NCwzLjQ2NC03LjczNyw3LjczNy03LjczN3M3LjczNywzLjQ2Myw3LjczNyw3LjczN3Y0MS4zNzUgIEMyNjMuNzM3LDUwOC41MzcsMjYwLjI3Myw1MTIsMjU2LDUxMnoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMzgwLjEzOCw0NzguNzRjLTIuNjc0LDAtNS4yNzQtMS4zODctNi43MDctMy44NjlsLTIwLjY4Ny0zNS44MzJjLTIuMTM2LTMuNy0wLjg2OS04LjQzMiwyLjgzMi0xMC41NjkgIGMzLjctMi4xMzQsOC40MzItMC44NywxMC41NjksMi44MzJsMjAuNjg3LDM1LjgzMmMyLjEzNiwzLjcsMC44NjksOC40MzItMi44MzIsMTAuNTY5ICBDMzgyLjc4MSw0NzguNDA2LDM4MS40NTEsNDc4Ljc0LDM4MC4xMzgsNDc4Ljc0eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik00NzAuOTk1LDM4Ny44NjljLTEuMzEyLDAtMi42NDMtMC4zMzQtMy44NjEtMS4wMzhsLTM1LjgzMi0yMC42ODdjLTMuNy0yLjEzNi00Ljk2OC02Ljg2OC0yLjgzMi0xMC41NjkgIGMyLjEzNi0zLjcwMSw2Ljg2OC00Ljk2NywxMC41NjktMi44MzJsMzUuODMyLDIwLjY4N2MzLjcsMi4xMzYsNC45NjgsNi44NjgsMi44MzIsMTAuNTY5ICBDNDc2LjI2OSwzODYuNDgxLDQ3My42NjksMzg3Ljg2OSw0NzAuOTk1LDM4Ny44Njl6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTUwNC4yNjMsMjYzLjczN2gtNDEuMzc2Yy00LjI3MywwLTcuNzM3LTMuNDYzLTcuNzM3LTcuNzM3czMuNDY0LTcuNzM3LDcuNzM3LTcuNzM3aDQxLjM3NiAgYzQuMjczLDAsNy43MzcsMy40NjMsNy43MzcsNy43MzdTNTA4LjUzNiwyNjMuNzM3LDUwNC4yNjMsMjYzLjczN3oiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNNDM1LjE3NywxNjAuMjk0Yy0yLjY3NCwwLTUuMjc0LTEuMzg3LTYuNzA3LTMuODY5Yy0yLjEzNi0zLjctMC44NjktOC40MzIsMi44MzItMTAuNTY5bDM1LjgzMi0yMC42ODcgIGMzLjctMi4xMzQsOC40MzItMC44NywxMC41NjksMi44MzJjMi4xMzYsMy43LDAuODY5LDguNDMyLTIuODMyLDEwLjU2OWwtMzUuODMyLDIwLjY4NyAgQzQzNy44MiwxNTkuOTYsNDM2LjQ4OSwxNjAuMjk0LDQzNS4xNzcsMTYwLjI5NHoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMzU5LjQzNyw4NC41NjhjLTEuMzEyLDAtMi42NDMtMC4zMzQtMy44NjEtMS4wMzhjLTMuNy0yLjEzNi00Ljk2OC02Ljg2OC0yLjgzMi0xMC41NjlsMjAuNjg3LTM1LjgzMSAgYzIuMTM2LTMuNzAxLDYuODY4LTQuOTY3LDEwLjU2OS0yLjgzMmMzLjcsMi4xMzYsNC45NjgsNi44NjgsMi44MzIsMTAuNTY5bC0yMC42ODcsMzUuODMxICBDMzY0LjcxMSw4My4xOCwzNjIuMTEsODQuNTY4LDM1OS40MzcsODQuNTY4eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
                            <!-- <img class="w-8 h-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC42NjcgNDkwLjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxjaXJjbGUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBjeD0iMjQ1LjMzMyIgY3k9IjI0NS4zMzMiIHI9IjE2MCIgZmlsbD0iI2ZmYzEwNyIgZGF0YS1vcmlnaW5hbD0iI2ZmYzEwNyIgY2xhc3M9IiI+PC9jaXJjbGU+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNMjQ1LjMzMyw2NEMyNTEuMjI0LDY0LDI1Niw1OS4yMjQsMjU2LDUzLjMzM1YxMC42NjdDMjU2LDQuNzc2LDI1MS4yMjQsMCwyNDUuMzMzLDAgICBjLTUuODkxLDAtMTAuNjY3LDQuNzc2LTEwLjY2NywxMC42Njd2NDIuNjY3QzIzNC42NjcsNTkuMjI0LDIzOS40NDIsNjQsMjQ1LjMzMyw2NHoiIGZpbGw9IiNmZmQ1NGYiIGRhdGEtb3JpZ2luYWw9IiNmZmQ1NGYiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik0yNDUuMzMzLDQyNi42NjdjLTUuODkxLDAtMTAuNjY3LDQuNzc2LTEwLjY2NywxMC42NjdWNDgwYzAsNS44OTEsNC43NzYsMTAuNjY3LDEwLjY2NywxMC42NjcgICBjNS44OTEsMCwxMC42NjctNC43NzYsMTAuNjY3LTEwLjY2N3YtNDIuNjY3QzI1Niw0MzEuNDQyLDI1MS4yMjQsNDI2LjY2NywyNDUuMzMzLDQyNi42Njd6IiBmaWxsPSIjZmZkNTRmIiBkYXRhLW9yaWdpbmFsPSIjZmZkNTRmIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNNDgwLDIzNC42NjdoLTQyLjY2N2MtNS44OTEsMC0xMC42NjcsNC43NzYtMTAuNjY3LDEwLjY2N2MwLDUuODkxLDQuNzc2LDEwLjY2NywxMC42NjcsMTAuNjY3SDQ4MCAgIGM1Ljg5MSwwLDEwLjY2Ny00Ljc3NiwxMC42NjctMTAuNjY3QzQ5MC42NjcsMjM5LjQ0Miw0ODUuODkxLDIzNC42NjcsNDgwLDIzNC42Njd6IiBmaWxsPSIjZmZkNTRmIiBkYXRhLW9yaWdpbmFsPSIjZmZkNTRmIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNNjQsMjQ1LjMzM2MwLTUuODkxLTQuNzc2LTEwLjY2Ny0xMC42NjctMTAuNjY3SDEwLjY2N0M0Ljc3NiwyMzQuNjY3LDAsMjM5LjQ0MiwwLDI0NS4zMzMgICBDMCwyNTEuMjI0LDQuNzc2LDI1NiwxMC42NjcsMjU2aDQyLjY2N0M1OS4yMjQsMjU2LDY0LDI1MS4yMjQsNjQsMjQ1LjMzM3oiIGZpbGw9IiNmZmQ1NGYiIGRhdGEtb3JpZ2luYWw9IiNmZmQ1NGYiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik0xNDAuMDk2LDg0LjM5NWMxLjkwOSwzLjMwNyw1LjQ0LDUuMzQxLDkuMjU5LDUuMzMzYzEuODczLDAuMDA3LDMuNzE1LTAuNDg2LDUuMzMzLTEuNDI5ICAgYzUuMTAyLTIuOTQ2LDYuODQ5LTkuNDY5LDMuOTA0LTE0LjU3MWwtMjEuMzMzLTM2Ljk0OWMtMi45NzktNS4wODItOS41MTQtNi43ODctMTQuNTk2LTMuODA4ICAgYy01LjAzNSwyLjk1MS02Ljc2Myw5LjQwMS0zLjg3OCwxNC40NzRMMTQwLjA5Niw4NC4zOTV6IiBmaWxsPSIjZmZkNTRmIiBkYXRhLW9yaWdpbmFsPSIjZmZkNTRmIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNMzUwLjU3MSw0MDYuMjcyYy0yLjk4LTUuMDgyLTkuNTE1LTYuNzg2LTE0LjU5Ny0zLjgwNmMtNS4wMzMsMi45NTItNi43NjEsOS40LTMuODc4LDE0LjQ3MyAgIGwyMS4zMzMsMzYuOTQ5YzEuOTA5LDMuMzA3LDUuNDQsNS4zNDEsOS4yNTksNS4zMzNjMS44NzMsMC4wMDcsMy43MTUtMC40ODYsNS4zMzMtMS40MjljNS4xMDItMi45NDYsNi44NDktOS40NjksMy45MDQtMTQuNTcxICAgTDM1MC41NzEsNDA2LjI3MnoiIGZpbGw9IiNmZmQ1NGYiIGRhdGEtb3JpZ2luYWw9IiNmZmQ1NGYiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik00MTEuNjA1LDE2MGMxLjg3MywwLjAwNywzLjcxNS0wLjQ4Niw1LjMzMy0xLjQyOWwzNi45NDktMjEuMzMzICAgYzUuMjItMi43MzEsNy4yMzgtOS4xNzYsNC41MDctMTQuMzk2Yy0yLjczMS01LjIyLTkuMTc2LTcuMjM4LTE0LjM5Ni00LjUwN2MtMC4yNjYsMC4xMzktMC41MjUsMC4yODktMC43NzgsMC40NWwtMzYuOTQ5LDIxLjMzMyAgIGMtNS4xMDIsMi45NDYtNi44NDksOS40Ny0zLjkwNCwxNC41NzFjMS45MDUsMy4zLDUuNDI2LDUuMzMzLDkuMjM3LDUuMzMzVjE2MHoiIGZpbGw9IiNmZmQ1NGYiIGRhdGEtb3JpZ2luYWw9IiNmZmQ1NGYiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik03My43MjgsMzMyLjA5NmwtMzYuOTQ5LDIxLjMzM2MtNS4xMDIsMi45NDYtNi44NDksOS40NjktMy45MDQsMTQuNTcxICAgYzEuOTA1LDMuMyw1LjQyNiw1LjMzMyw5LjIzNyw1LjMzM2MxLjg3MywwLjAwNywzLjcxNS0wLjQ4Niw1LjMzMy0xLjQyOWwzNi45NDktMjEuMzMzYzUuMjItMi43MzEsNy4yMzgtOS4xNzYsNC41MDctMTQuMzk2ICAgYy0yLjczMS01LjIyLTkuMTc2LTcuMjM4LTE0LjM5Ni00LjUwN2MtMC4yNjYsMC4xMzktMC41MjUsMC4yODktMC43NzgsMC40NUw3My43MjgsMzMyLjA5NnoiIGZpbGw9IiNmZmQ1NGYiIGRhdGEtb3JpZ2luYWw9IiNmZmQ1NGYiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik0zNi43NzksMTM3LjIzN2wzNi45NDksMjEuMzMzYzEuNjEzLDAuOTM5LDMuNDQ2LDEuNDMzLDUuMzEyLDEuNDI5ICAgYzUuODkxLDAsMTAuNjY2LTQuNzc2LDEwLjY2Ni0xMC42NjdjMC0zLjgxLTIuMDMzLTcuMzMxLTUuMzMzLTkuMjM3bC0zNi45NDktMjEuMzMzYy00Ljk3Mi0zLjE2LTExLjU2NC0xLjY5Mi0xNC43MjQsMy4yNzkgICBzLTEuNjkyLDExLjU2NCwzLjI3OSwxNC43MjRjMC4yNTMsMC4xNjEsMC41MTIsMC4zMTEsMC43NzgsMC40NUwzNi43NzksMTM3LjIzN3oiIGZpbGw9IiNmZmQ1NGYiIGRhdGEtb3JpZ2luYWw9IiNmZmQ1NGYiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik00NTMuODg4LDM1My40MjlsLTM2Ljk0OS0yMS4zMzNjLTQuOTcyLTMuMTYtMTEuNTY0LTEuNjkyLTE0LjcyNCwzLjI3OSAgIGMtMy4xNiw0Ljk3MS0xLjY5MiwxMS41NjQsMy4yNzksMTQuNzI0YzAuMjUzLDAuMTYxLDAuNTEzLDAuMzExLDAuNzc4LDAuNDVsMzYuOTQ5LDIxLjMzM2MxLjYxOSwwLjk0MywzLjQ2LDEuNDM2LDUuMzMzLDEuNDI5ICAgYzUuODkxLDAsMTAuNjY2LTQuNzc2LDEwLjY2Ni0xMC42NjdjMC0zLjgxMS0yLjAzMy03LjMzMi01LjMzMy05LjIzN1YzNTMuNDI5eiIgZmlsbD0iI2ZmZDU0ZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZDU0ZiI+PC9wYXRoPgoJPHBhdGggc3R5bGU9IiIgZD0iTTMzNiw4OC4yOTljMS42MTksMC45NDMsMy40NiwxLjQzNiw1LjMzMywxLjQyOWMzLjgxOCwwLjAwOCw3LjM0OS0yLjAyNyw5LjI1OS01LjMzM2wyMS4zMzMtMzYuOTQ5ICAgYzIuOTExLTUuMTIxLDEuMTE5LTExLjYzMy00LjAwMi0xNC41NDRjLTUuMDczLTIuODgzLTExLjUyMS0xLjE1Ni0xNC40NzMsMy44NzhsLTIxLjMzMywzNi45NDkgICBDMzI5LjE2OCw3OC44MjQsMzMwLjkwNiw4NS4zNDYsMzM2LDg4LjI5OXoiIGZpbGw9IiNmZmQ1NGYiIGRhdGEtb3JpZ2luYWw9IiNmZmQ1NGYiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik0xNTQuNjY3LDQwMi4zNjhjLTUuMTAyLTIuOTQ1LTExLjYyNS0xLjE5OC0xNC41NzEsMy45MDRsLTIxLjMzMywzNi45NDkgICBjLTIuOTQ1LDUuMTAyLTEuMTk4LDExLjYyNSwzLjkwNCwxNC41NzFjMS42MTksMC45NDMsMy40NiwxLjQzNiw1LjMzMywxLjQyOWMzLjgxOCwwLjAwOCw3LjM1LTIuMDI3LDkuMjU5LTUuMzMzbDIxLjMzMy0zNi45NDkgICBjMi45NC01LjEwNSwxLjE4Ni0xMS42MjctMy45MTktMTQuNTY3QzE1NC42NzEsNDAyLjM3LDE1NC42NjksNDAyLjM2OSwxNTQuNjY3LDQwMi4zNjh6IiBmaWxsPSIjZmZkNTRmIiBkYXRhLW9yaWdpbmFsPSIjZmZkNTRmIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" /> -->
                            <!-- <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> -->
                            <div class=" ml-1">Lifetime access</div>
                        </div>
                        <div class=" flex items-center">
                            <img class="w-6 h-6" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMy4yMiA1MTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI0MC4wMTU2MjUgNDk1LjQ2ODc1Yy0uMDE1NjI1LTguMjA3MDMxIDYuMTc1NzgxLTE1LjI3NzM0NCAxNC4zNjcxODctMTUuODg2NzE5IDEwMC44ODI4MTMtNy40NzI2NTYgMTgwLjY4NzUtOTIgMTgwLjY4NzUtMTk0LjczNDM3NWwzMi0uODgyODEydi44ODI4MTJjMCAxMTkuMjYxNzE5LTkyLjQyOTY4NyAyMTcuNDIxODc1LTIwOS40MDYyNSAyMjYuNTc0MjE5LTkuNDU3MDMxLjczNDM3NS0xNy42MzI4MTItNi40ODA0NjktMTcuNjQ4NDM3LTE1Ljk1MzEyNXptMCAwIiBmaWxsPSIjZmJjMDJkIiBkYXRhLW9yaWdpbmFsPSIjZmJjMDJkIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTEzLjg3MTA5NCA0NTYuODc4OTA2Yy03MC4yMjI2NTYtNDAuNTExNzE4LTExMy44NzEwOTQtMTE2LTExMy44NzEwOTQtMTk2Ljk5MjE4NyAwLTM0LjIwNzAzMSA3LjcxMDkzOC02Ny45NTMxMjUgMjIuNDE0MDYyLTk4LjUyNzM0NCAzLjg3NS04LjA1MDc4MSAxMy42MDE1NjMtMTEuMzEyNSAyMS4zNDc2NTctNi44NjcxODdsMS41MzUxNTYuODgyODEyYzcuMDM5MDYzIDQuMDQ2ODc1IDkuMzI4MTI1IDEyLjgwMDc4MSA1LjgyNDIxOSAyMC4xMDkzNzUtMTIuNTQ2ODc1IDI2LjIxMDkzNy0xOS4xMjEwOTQgNTUuMTA1NDY5LTE5LjEyMTA5NCA4NC40MDIzNDQgMCA2OS41OTc2NTYgMzcuNTAzOTA2IDEzNC40NDkyMTkgOTcuODU1NDY5IDE2OS4yNjE3MTl6bTAgMCIgZmlsbD0iIzRkZDBlMSIgZGF0YS1vcmlnaW5hbD0iIzRkZDBlMSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQzNy40NDE0MDYgMTM3Ljg4NjcxOWMtNy4wODk4NDQgNC4xNDQ1MzEtMTYuMzA0Njg3IDIuMzIwMzEyLTIwLjk2MDkzNy00LjQ0OTIxOS0zNi4yNDIxODgtNTIuNjU2MjUtOTYuNzAzMTI1LTg0LjgzMjAzMS0xNjEuMDU0Njg4LTg0LjgzMjAzMS0zNC41MTU2MjUgMC02OC40MzM1OTMgOS4xMjEwOTMtOTguMDk3NjU2IDI2LjM4MjgxMmwtMTYuMDk3NjU2LTI3LjY0NDUzMWMzNC41NDY4NzUtMjAuMTEzMjgxIDc0LjAxNTYyNS0zMC43MzgyODEgMTE0LjE5NTMxMi0zMC43MzgyODEgNzQuNjIxMDk0IDAgMTQ0LjczNDM3NSAzNy4xNTIzNDMgMTg2Ljk1NzAzMSA5OC4wMTU2MjUgNS4zOTQ1MzIgNy43OTI5NjggMy4yMzQzNzYgMTguNDk2MDk0LTQuOTQxNDA2IDIzLjI2NTYyNXptMCAwIiBmaWxsPSIjZTY0YTE5IiBkYXRhLW9yaWdpbmFsPSIjZTY0YTE5IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjA0LjE2MDE1NiA5Ni4xMDkzNzVoLTgwdi04MGMwLTguODMyMDMxIDcuMTY3OTY5LTE2IDE2LTE2IDguODMyMDMyIDAgMTYgNy4xNjc5NjkgMTYgMTZ2NDhoNDhjOC44MzIwMzIgMCAxNiA3LjE2Nzk2OSAxNiAxNnMtNy4xNjc5NjggMTYtMTYgMTZ6bTAgMCIgZmlsbD0iI2ZmNzA0MyIgZGF0YS1vcmlnaW5hbD0iI2ZmNzA0MyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTEzNiA0NjQuMTA5Mzc1aC04MGMtOC44MzIwMzEgMC0xNi03LjE2Nzk2OS0xNi0xNnM3LjE2Nzk2OS0xNiAxNi0xNmg0OHYtNDhjMC04LjgzMjAzMSA3LjE2Nzk2OS0xNiAxNi0xNnMxNiA3LjE2Nzk2OSAxNiAxNnptMCAwIiBmaWxsPSIjODBkZWVhIiBkYXRhLW9yaWdpbmFsPSIjODBkZWVhIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDg1LjkwMjM0NCAzMjEuMzQzNzUtMzMuOTQ5MjE5LTMzLjkzNzUtMzMuOTUzMTI1IDMzLjkzNzVjLTYuMjM4MjgxIDYuMjM4MjgxLTE2LjM4MjgxMiA2LjIzODI4MS0yMi42MjUgMC02LjI1MzkwNi02LjI1NzgxMi02LjIzODI4MS0xNi4zODY3MTkgMC0yMi42MjVsNTYuNTc4MTI1LTU2LjU2MjUgNTYuNTc0MjE5IDU2LjU2MjVjNi4yNTc4MTIgNi4yMzgyODEgNi4yNTc4MTIgMTYuMzgyODEyIDAgMjIuNjI1LTYuMjM4MjgyIDYuMjUzOTA2LTE2LjM2NzE4OCA2LjI1MzkwNi0yMi42MjUgMHptMCAwIiBmaWxsPSIjZmRkODM1IiBkYXRhLW9yaWdpbmFsPSIjZmRkODM1IiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
                            <!-- <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> -->
                            <div class=" ml-1">Free updates</div>    
                        </div>
                </div>
                <div v-if="course.sentences.length>0" class=" lg:mt-4 hidden lg:block font-neucha text-gray-700 text-lg ">You will learn:</div>
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
          <!-- <div class=" col-span-1 md:hidden"></div> -->

      </div>
      <div v-if="course" class=" flex flex-col md:flex-row items-start  mb-16">
          <!-- <div class="col-span-7"></div> -->
                          <!-- <div class=" whitespace-pre-line ">{{course.description}}</div>
                    <div v-if="course.sentences.length>0" class=" mt-4 lg:hidden italic text-lg font-medium ">You will learn:</div>
                        <div v-if="course.sentences.length>0" class=" lg:hidden flex flex-col  self-start ml-8 ">
                            <div class="  leading-5 font-serif ">
                                    <div v-for="(item,index) in course.sentences" :key="index" class="">&#8226; {{item}}</div>
                                    <div class="">...</div>
                            </div>
                        </div> -->
          <div class=" w-full  md:w-7/10 md:pr-4">
              <div class="  border-l border-r border-b bg-white  flex flex-col ">
                  
                  <!-- <div class=" text-center text-2xl italic ">Description</div> -->
                      <div class=" h-5 pattern-checks-sm "></div>
                      <div class=" flex flex-col  sm:flex-row ">
                        <div class=" sm:w-7/12">    
                            <div style="background:#f6f9fc;min-height:14rem;" class=" flex   ">
                                <div class=" mt-8 mx-12  h-full flex flex-col items-center justify-center text-lg text-gray-700 ">
                                    <div class=" uppercase self-start bg-purple-300 px-2 rounded">About course</div>
                                    <div class=" mt-1">  
                                    {{course.description}}
                                    </div>
                                </div>
                            </div>
                            <div style="min-height:16rem;" class=" mx-12   flex flex-col items-center  text-lg text-gray-700 ">
                                    <div class=" uppercase self-start bg-yellow-300 px-2 rounded mt-8 ">Who this course is for?</div>
                                    <div class=" mt-1">  
                                        {{course.forWho}}
                                    </div>
                                    <div class=" uppercase self-start bg-green-300 px-2 rounded mt-8 ">What <strong>You</strong> will get from studying this course? </div>
                                    <div class=" mt-1 mb-8"> 

                                        {{course.whatStudentsGet}}
                                    </div>
                            </div>
                        </div>
                        <div class=" sm:w-5/12 flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 px-12">
                                <!-- <div class=" uppercase text-lg mb-4  text-gray-700 bg-orange-300 px-2 rounded mt-8 ">Your instructor</div> -->
                                <div class=" uppercase  bg-orange-300  px-2 rounded mt-8 self-center text-gray-700 ">Your instractor</div>
                                <TeacherCard v-if="course.author" :profile="course.author" class="  "/>
                        </div>
                      </div>
              </div>
            
            <!-- <div class=" text-center text-2xl italic ">Schedule</div> -->
             <schedule v-if="curriculum" :curriculum="curriculum" :pictureUri="course.pictureUri" class=" mt-8 " />

          </div>
          <div class=" w-full  md:w-3/10 mt-4 md:mt-0 flex flex-col">
            <!-- <TeacherCard v-if="course.author" :profile="course.author" class=" mb-4"/>
            <div v-else  class=" ">
              <div class="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4 w-full">
                <div class="mx-auto h-40 bg-gray-200 rounded-md"></div>
                <div class="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"></div>
                <div class="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"></div>
                <div class="flex justify-center mt-4">
                  <div class="rounded-sm h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                  <div class="rounded-sm h-8 w-20 px-4 bg-green-300"></div>
                </div>
              </div>
          </div> -->
          <!-- v-if="course.reviewStats &&totalReviews" -->
            <reviews  class=" mt-4 w-full" :averageRating="averageReviews" :reviewStats="course.reviewStats" :registedStudents='course.registedStudents' :totalReviews='totalReviews' />
          </div>
          <!-- <div class="">sdgd</div> -->
      </div>
  </div>
</template>

<script>
// import plyr from 'plyr'
import Header from '~/components/layout/Header'
import Schedule from '~/components/course/Schedule'
import Plyr from '~/components/common/PlyrVideo'
import Reviews from '~/components/course/Reviews'
import TeacherCard from '~/components/course/TeacherCardPublic'
import Axios from 'axios'
export default {
layout:'builder',
middleware:['common'],
components:{
    Schedule,Reviews,Plyr,TeacherCard,Header
},
mounted() {
    // this.player = new plyr(this.$refs.plyr)
},
data() {
    return {
        player:null,
        sale:false,
        course:null,
        curriculum:null
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
    async buyCourse() {
        try {
            const {data} = await Axios.post(`/boughtcourse/${this.$route.params.id}`)
             //    course buy process
        
            if(localStorage.getItem('boughtcourses')){
                let temp = JSON.parse(localStorage.getItem('boughtcourses'))
                temp.push(`${this.$route.params.id}`)
                localStorage.setItem('boughtcourses',JSON.stringify(temp))
            } else {
                localStorage.setItem('boughtcourses',JSON.stringify([this.$route.params.id]))
            }
     
            console.log('Bought Course: ',data)
            
        } catch (error) {
            
        }
    }
},

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
.font-montserrat {
     font-family: 'Montserrat', sans-serif;;
}
</style>
<style lang="scss">
// --plyr-color-main:black;
.plyr__video-embed {

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