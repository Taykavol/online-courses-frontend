<template>
  <div class="  font-exo  ">
      <!-- <div class=" section--canvas -mt-16 ">
          <canvas class=" w-full h-full  " style="clip-path: polygon(0 0, 100% 0%, 100% 30%, 0% 100%);" ref="canvas" width="32px" height="32px"/>

      </div> -->
      <div  class=" section--canvas   relative   ">
        <div  class=" absolute  prisma-bg w-screen  inset-0 z-0  mt-8 ">
            <div class=" relative w-full h-full">
                <div class=" absolute pattern-dots-lg text-gray-700  w-1/3 h-full bottom-0 -mb-20">

                </div>
            </div>
        </div>
          
      <div class="  flex flex-col sm:flex-row  justify-center w-full h-full  space-x-6      ">
            <div class="  text-4xl p-2 lg:p-0  lg:text-5xl w-full sm:w-7/12 lg:w-1/3 mt-12  text-gray-800 leading-none tracking-tight break-normal  relative ">
                <div class=" z-10 relative text-gray-300 flex flex-col -mt-64 sm:mt-0 ">
                    <img style="height:16rem; width:18rem" class=" select-none absolute right-0  bottom-0 hidden md:block md:-mb-32 lg:-mr-20  xl:mr-0 xl:-mb-48      " src="/images/bg/chess-pieces.png" alt="">

                    <div class=" z-10 relative mt-8 w-full font-monser">
                        Amazine platform for <span> <div class=" inline-block text-blue-500 animate__animated animate__lightSpeedInLeft">learning </div> and <span class=" text-orange-500 animate__animated animate__flipInX"> creating </span> chess courses </span>
                    </div>
                    <div class="self-start w-full flex justify-center sm:justify-start space-x-4 font-neucha text-gray-300 tracking-normal ">
                        <nuxt-link to="/teachersinfo"   class=" flex items-center   text-xl mt-10  bg-green-600 rounded-lg  p-2  hover:bg-green-700 cursor-pointer duration-1000 transform scale-98    "> 
                            <div class=" mr-2">I am a teacher</div>
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg>
                        </nuxt-link>
                        <!-- <div   class=" flex items-center   text-xl mt-10   bg-purple-600 rounded-lg  p-2  hover:bg-purple-700 cursor-pointer duration-1000 transform scale-98    "> 
                            <div class=" mr-2 ">I am a student</div>
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class=" relative  sm:w-1/4  ">
                <!-- <img class=" absolute bottom-0 mb-40 xl:mb-48 -ml-56 xl:-ml-64   h-64 " src="/images/bg/chess-pieces.png" alt=""> -->
                <div class="absolute flex justify-center items-center ">
                    <div  class="   mt-12 rounded-2xl relative   phone--card  bg-white  border-2 border-t-4 border-gray-600 border-opacity-25 ">
                        <div class=" absolute right-0 top-0 hidden   -mr-20 lg:flex flex-col space-y-3   "> 
                            <!-- Facebook svg -->
                            <svg class=" w-10 h-10 cursor-pointer transform hover:scale-105 duration-300" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <path style="fill:#1976D2;" d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h384c35.296,0,64-28.704,64-64V64
                                C512,28.704,483.296,0,448,0z"/>
                            <path style="fill:#FAFAFA;" d="M432,256h-80v-64c0-17.664,14.336-16,32-16h32V96h-64l0,0c-53.024,0-96,42.976-96,96v64h-64v80h64
                                v176h96V336h48L432,256z"/>
                            </svg>
                            <!-- Instagramm svg -->
                            <svg class=" w-10 h-10 transform duration-300 hover:rotate-180 cursor-pointer" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047"><stop offset="0" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></linearGradient><path d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z" fill="url(#SVGID_1_)"/><path d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" fill="#fff"/></svg>
                            <!-- Youtube -->
                            <svg class=" w-10 h-10 cursor-pointer " height="512pt" viewBox="0 0 512 512.00038" width="512pt" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="116.4724094584" x2="485.3952722936" y1="-12.8049247178" y2="697.9363124434"><stop offset="0" stop-color="#fffcf8"/><stop offset=".1875" stop-color="#faf8f6"/><stop offset=".4041" stop-color="#eceef2"/><stop offset=".6353" stop-color="#d5dcea"/><stop offset=".875" stop-color="#b5c4df"/><stop offset="1" stop-color="#a1b5d8"/></linearGradient><linearGradient id="b"><stop offset="0" stop-color="#a1b5d8" stop-opacity="0"/><stop offset=".3094" stop-color="#90a2bd" stop-opacity=".309804"/><stop offset=".7554" stop-color="#7c8b9c" stop-opacity=".756863"/><stop offset="1" stop-color="#748290"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="196.3726539866" x2="-671.0159540134" xlink:href="#b" y1="222.4596783332" y2="-265.4464136668"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="256.0003" x2="256.0003" xlink:href="#b" y1="451.9660859688" y2="531.7738692808"/><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="423.506191583" x2="72.2556688904" xlink:href="#b" y1="422.9150930938" y2="71.6646707934"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="236.6364516796" x2="283.6559416872" y1="199.8905078512" y2="336.8001698168"><stop offset="0" stop-color="#e52d27"/><stop offset="1" stop-color="#b31217"/></linearGradient><path d="m420.421875 503.234375c-109.503906 11.6875-219.339844 11.6875-328.84375 0-43.664063-4.660156-78.152344-39.148437-82.8125-82.816406-11.6875-109.503907-11.6875-219.335938 0-328.839844 4.660156-43.664063 39.148437-78.152344 82.8125-82.8125 109.503906-11.6875 219.335937-11.6875 328.839844 0 43.667969 4.660156 78.15625 39.148437 82.816406 82.8125 11.6875 109.503906 11.6875 219.335937 0 328.839844-4.660156 43.667969-39.144531 78.15625-82.8125 82.816406zm0 0" fill="url(#a)"/><path d="m475.386719 110.097656c-4.132813-38.746094-34.734375-69.351562-73.484375-73.488281-97.171875-10.367187-194.632813-10.367187-291.804688 0-38.746094 4.136719-69.351562 34.742187-73.488281 73.488281-10.367187 97.171875-10.367187 194.632813 0 291.800782 4.136719 38.75 34.742187 69.355468 73.488281 73.488281 97.171875 10.371093 194.632813 10.371093 291.800782 0 38.75-4.132813 69.355468-34.738281 73.488281-73.488281 10.371093-97.167969 10.371093-194.628907 0-291.800782zm0 0" fill="url(#c)"/><path d="m7.671875 409.804688c.351563 3.539062.714844 7.078124 1.09375 10.617187 4.660156 43.664063 39.148437 78.152344 82.816406 82.8125 109.503907 11.6875 219.335938 11.6875 328.839844 0 43.667969-4.660156 78.152344-39.148437 82.8125-82.8125.378906-3.539063.742187-7.078125 1.097656-10.617187zm0 0" fill="url(#d)"/><path d="m420.421875 503.234375c43.667969-4.660156 78.152344-39.148437 82.8125-82.816406 5.113281-47.882813 7.988281-95.828125 8.628906-143.785157l-111.21875-111.214843c-5.710937-7.078125-10.875-7.734375-21.578125-9.824219-8.671875-1.695312-17.542968-2.851562-26.367187-3.199219-28.214844-1.113281-56.449219-2.171875-84.683594-2.441406-41.457031-.394531-82.921875-.257813-124.214844 4.539063-17.804687 2.066406-36.625 16.03125-38.644531 35.066406-1.035156 9.78125-2.832031 19.507812-3.390625 29.3125-2.042969 35.707031-2.46875 71.394531 2.523437 106.960937 1.671876 11.910157 3.511719 17.359375 11.539063 24l162.011719 162.011719c47.550781-.675781 95.097656-3.542969 142.582031-8.609375zm0 0" fill="url(#e)"/><path d="m264.773438 366.203125c-41.328126-1.386719-73.316407-2.175781-105.265626-3.699219-9.75-.46875-19.785156-1.792968-29.019531-4.792968-16.996093-5.515626-26.691406-17.945313-29.210937-35.894532-4.992188-35.566406-4.566406-71.253906-2.523438-106.960937.5625-9.804688 2.359375-19.53125 3.394532-29.3125 2.011718-19.035157 20.835937-33.003907 38.640624-35.066407 41.296876-4.796874 82.757813-4.933593 124.21875-4.539062 28.234376.269531 56.464844 1.328125 84.679688 2.441406 8.824219.347656 17.695312 1.507813 26.367188 3.199219 19.109374 3.730469 30.164062 15.683594 33.53125 34.882813 4.554687 25.976562 5.746093 52.203124 4.789062 78.441406-.722656 19.859375-2.769531 39.6875-4.828125 59.46875-2.273437 21.832031-21.175781 34.761718-38.199219 35.882812-38.582031 2.542969-77.207031 4.347656-106.574218 5.949219zm0 0" fill="url(#f)"/><path d="m225.800781 304.300781c26.679688-16.378906 52.707031-32.367187 79.515625-48.828125-26.753906-16.441406-52.777344-32.433594-79.515625-48.863281zm0 0" fill="#fff"/></svg>
                        
                        </div>
                        <div class=" m-4 mb-20 h-full flex flex-col items-center">
                            <div class=" flex">
                                <div class=" rounded-2xl w-4 h-4 bg-gray-800 flex items-center justify-center -mt-3 mb-4 ">
                                    <div class=" w-1 h-1 bg-white rounded-full">

                                    </div>
                                </div>
                            </div>
                            <div class=" mt-8 ">
                                <puzzle :class="{'animate__jackInTheBox':firstLoaded==false}" v-if="currentPuzzle" class="animate__animated   " :key="currentPuzzle.fen" :fn="onSolvePuzzle" :puzzle='currentPuzzle'/>
                            </div>
                            <div class=" flex mt-auto space-x-3">
                                <svg class="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <!-- <div class=" w-6 h-6 bg-gray-800 rounded-full text-white flex justify-center items-center">1</div> -->
                                <div @click="setPuzzle(0)" v-if="!isPuzzlesSolved[0]" :class="{'bg-blue-800':currentNumberOfPuzzle==0, 'bg-gray-800':currentNumberOfPuzzle!=0}" class="w-6 h-6  rounded-full text-white flex justify-center items-center">2</div>
                                <svg v-else class="w-6 h-6 text-green-700 animate__animated animate__jackInTheBox" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <div @click="setPuzzle(1)" v-if="!isPuzzlesSolved[1]" :class="{'bg-blue-800':currentNumberOfPuzzle==1, 'bg-gray-800':currentNumberOfPuzzle!=1}" class="w-6 h-6  rounded-full text-white flex justify-center items-center">3</div>
                                <svg v-else class="w-6 h-6 text-green-700 animate__animated animate__jackInTheBox" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <svg class="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <div @click="setPuzzle(2)" v-if="!isPuzzlesSolved[2]" :class="{'bg-blue-800':currentNumberOfPuzzle==2, 'bg-gray-800':currentNumberOfPuzzle!=2}" class="w-6 h-6  rounded-full text-white flex justify-center items-center">5</div>
                                <svg v-else class="w-6 h-6 text-green-700 animate__animated animate__jackInTheBox" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div class="mt-auto mb-8 flex justify-around w-full text-sm">
                                <div class="  bg-blue-800 text-white p-2 rounded-xl">
                                    Solve puzzles
                                </div>

                                <div class=" hover:bg-blue-800 cursor-pointer  bg-gray-800 text-white p-2 rounded-xl">
                                    Watch video
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class=" self-end  ml-10 z-50  relative" >
                        <img style="height:22rem; width:40rem" class=" hidden ph2:block sm:hidden object-contain transform scale-150 ph2:scale-125 " src="/images/bg/chess-pieces.png" alt="">
                    </div>
                </div>
                
            </div>
            <div class=" mt-12 z-50 relative">
                

                <!-- <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" class="svg-inline--fa fa-facebook-square fa-w-14 w-6 h-6 text-blue-700 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg> -->
            </div>
        </div>
    
        <!-- <div style="clip-path: polygon(80% 11%, 100% 11%, 100% 44%, 0 100%, 0 42%);" class=" top-0 absolute h-full w-full cool-path z-0 bg-gradient-to-r from-gray-100 via-indigo-100 to-gray-100 ">
          <canvas class=" w-full h-full  "  ref="canvas" width="32px" height="32px"/>
        </div> -->
      </div>
      <div class="lg:container mx-auto relative filter--container ">
            <div ref="filters"   class="-mt-24 p-6 py-3 border  col-span-2 flex flex-col lg:flex-row lg:justify-between  bg-white my-4   relative   ">
                    <div  class="delay-500  duration-500 flex flex-col ph2:flex-row lg:block justify-between">
                        <div class="  border-gray-300 rounded-t-lg flex flex-col items-center">
                            <div class=" text-sm text-center">Review</div>
                            <Select   class=" relative w-48" :ignoreValue="[]" :currentValue="reviewFilter" :options="reviewOptions"/>
                        </div>
                        <div class="  border-gray-300 rounded-t-lg flex flex-col items-center">
                            <div class=" text-sm text-center">Category</div>
                            <Select   class=" relative w-48" :ignoreValue="[]" :currentValue="categoryFilter" :options="categoryOptions"/>
                        </div>
                    </div>
                    <div  style=" opacity:0.99" class=" w-full lg:w-1/2 mt-8 delay-500  duration-500 mx-2 z-0 ">
                        <div class=" text-sm text-center">Low &larr; Difficulty &rarr; High</div>
                        <VueSlider :lazy="true"   @change="changeLevel(value)" class=" " :marks="marks1" v-model="value" :data="data" >
                            <template v-slot:label="{ label,  value }">
                                <div class="vue-slider-mark-label " 
                                :class="
                                {'bg-blue-700 text-white px-1 rounded-lg font-sans font-semibold text-xs':value==2500,
                                'bg-red-700 text-white px-1 rounded-lg font-sans font-semibold text-xs':value==2400,
                                'bg-gray-700 text-white px-1 rounded-lg font-sans font-semibold text-xs':value==2300,
                                'bg-purple-700 text-white px-1 rounded-lg font-sans font-semibold text-xs':value==2000,
                                'bg-wk w-5 h-5  ':value==2800,
                                'bg-wch w-5 h-5  ':value==2900,
                                }">{{label}}</div>
                            </template>
                        </VueSlider>
                        <div class=" mt-8">
                        </div>
                    </div>

                    <div  class="delay-500  duration-500 flex flex-col ph2:flex-row lg:block justify-between">
                        <div class="  border-gray-300 rounded-t-lg flex flex-col items-center">
                            <div class=" text-sm text-center">Price</div>
                            <Select  class="  relative w-48" :ignoreValue="[]" :currentValue="priceFilter" :options="priceOptions"/>
                        </div>
                        <div class="  border-gray-300 rounded-t-lg flex flex-col items-center">
                            <div class=" text-sm text-center">Sale</div>
                            <Select   class="  relative w-48" :ignoreValue="[]" :currentValue="saleFilter" :options="saleOptions"/>
                        </div>
                    </div>
                    
            </div>
            <div class=" grid grid-cols-8  mt-4 section--courses relative">
                <!-- <div class="pattern-dots-lg absolute w-1/3 h-64 text-gray-400 right-0 mt-48 -mr-48"></div> -->
                
                <div   class="col-span-10 sm:col-span-10 lg:col-span-8 grid grid-cols-9 gap-y-12 ph2:gap-y-0 gap-x-6 relative mx-8 ph2:mx-0">
                    
                    
                    
                    <!-- 1 column -->
                    <div v-if="loading[0]" class="col-span-10 ph2:col-span-3 mx-8">
                        <Skeleton class="mt-2" v-for="(item,index) in 5" :key="index"/>
                    </div>
                    <div v-else class="col-span-10 ph2:col-span-3 select-none ">
                        <div v-if="title1&&title2&&title3" class="  text-center   flex justify-center ph2:justify-start ">

                        <Select class="  relative w-48" :ignoreValue="[title2.selectedValue,title3.selectedValue]" :currentValue="title1.selectedValue" :options="title1.options"/>
                    </div>
                    
                        <column-courses :size=3 :title="title1" :courses='setCourse(checked)'></column-courses>
                    </div>
                    <!-- 2 column -->
                    <div v-if="loading[1]" class="col-span-10 ph2:col-span-3 mx-8">
                        <Skeleton class="mt-2 " v-for="(item,index) in 5" :key="index"/>
                    </div>
                    <div v-else class="col-span-10 ph2:col-span-3 select-none ">
                        <div v-if="title1&&title2&&title3" class="  text-center flex justify-center ph2:justify-start">
                        <Select class="  relative w-48" :ignoreValue="[title1.selectedValue,title3.selectedValue]" :currentValue="title2.selectedValue" :options="title2.options"/>
                    </div>
                        <column-courses :size=3 :title="title1"  :courses='setCourse(checked1)' ></column-courses>
                    </div>
                    <!-- 3 column -->
                    <div v-if="loading[2]" class="col-span-10 ph2:col-span-3 mx-8">
                        <Skeleton class="mt-2 " v-for="(item,index) in 5" :key="index"/>
                    </div>
                    <div v-else class="col-span-10 ph2:col-span-3 select-none ">
                        <div v-if="title1&&title2&&title3" class="  text-center flex justify-center ph2:justify-start ">
                        <Select class="  relative w-48" :ignoreValue="[title1.selectedValue,title2.selectedValue]" :currentValue="title3.selectedValue" :options="title3.options"/>
                    </div>
                        <column-courses :size=3 :title="title1"  :courses='setCourse(checked2)' ></column-courses>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import Select from '~/components/common/Select'
import Skeleton from '~/components/common/Skeleton'
import Puzzle from '~/components/common/Puzzle'
import Registration from '~/components/home/Registration'
import Newdrop from '~/components/home/Newdrop'
import ColumnCourses from '~/components/home/Columncourses'
import Axios from 'axios'
import VueSlider from "vue-slider-component";
import Plyr from '~/components/common/PlyrVideo';


export default {
components:{
    Newdrop,ColumnCourses,Puzzle,Registration,Skeleton,Select,VueSlider,Plyr
},
middleware:['common'],
 created() {
    this.title1={
        selectedValue:'Best courses',
        options:[
        {title:'Best courses',text:'Best courses', url:'/images/courselist/trophy-solid.svg',fn:()=>this.onChange(0,this.checked, this.title1)},
        {title:'Recommended',text:'Recommended', url:'/images/courselist/thumb.svg',fn:()=>this.onChange(1,this.checked,this.title1)}, 
        {title:'Top players',text:'Top players', url:'/images/courselist/graphic-designer.svg',fn:()=>this.onChange(2,this.checked,this.title1)}, 
        {title:'New courses',text:'New courses', url:'/images/courselist/fire.svg',fn:()=>this.onChange(3,this.checked,this.title1)}
        ]}
    this.title2= {
        selectedValue:'Recommended',
        options:[
        {title:'Best courses',text:'Best courses', url:'/images/courselist/trophy-solid.svg',fn:()=>this.onChange(0,this.checked1,this.title2)},
        {title:'Recommended',text:'Recommended', url:'/images/courselist/thumb.svg',fn:()=>this.onChange(1,this.checked1,this.title2)}, 
        {title:'Top players',text:'Top players', url:'/images/courselist/graphic-designer.svg',fn:()=>this.onChange(2,this.checked1,this.title2)}, 
        {title:'New courses',text:'New courses', url:'/images/courselist/fire.svg',fn:()=>this.onChange(3,this.checked1,this.title2)}
        ]}
    this.title3= {
        selectedValue:'Top players',
        options:[
        {title:'Best courses',text:'Best courses', url:'/images/courselist/trophy-solid.svg',fn:()=>this.onChange(0,this.checked2,this.title3)},
        {title:'Recommended',text:'Recommended', url:'/images/courselist/thumb.svg',fn:()=>this.onChange(1,this.checked2,this.title3)}, 
        {title:'Top players',text:'Top players', url:'/images/courselist/graphic-designer.svg',fn:()=>this.onChange(2,this.checked2,this.title3)}, 
        {title:'New courses',text:'New courses', url:'/images/courselist/fire.svg',fn:()=>this.onChange(3,this.checked2,this.title3)}
        ]}
    this.$store.dispatch('courseList1').then((data)=>{
        this.courses = data
        this.$set(this.loading,0,false);
    })
    this.$store.dispatch('courseList2').then((data)=>{
        this.newestCourses = data
        this.$set(this.loading,1,false);
    })
    this.$store.dispatch('courseList3').then((data)=>{
        this.topCourses=data
        this.$set(this.loading,2,false);
    })
},
mounted(){
    console.log('This loading:', this.loading[0],this.loading[1],this.loading[2],this.loading[3])
    // this.typeWriteAnimation()
    this.currentPuzzle = this.puzzles[0]
},
data() {
    return {
        firstLoaded:true,
        modalWidth:0,
        visibleFilters:false,
        checked:[true,false,false,false],
        checked1:[false,true,false,false],
        checked2:[false,false,true,false],
        categoryFilter:'Not selected',
        reviewFilter:0,
        priceFilter:'Not selected',
        saleFilter:'Not selected',
        levelFilter:[1000,2900],
        isRoadMap:false,
        roadMapStep:0,
        courses:[],
        newestCourses:[],
        topCourses:[],
        recommendedCourses:[],
        title1:null,
        title2:null,
        title3:null,
        currentPuzzle:null,
        currentNumberOfPuzzle:0,
        puzzles:[
            {fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", solution:['e4'], level:`<div class=" flex items-baseline ">
                <div class=" w-3 h-3 bg-green-600 ml-2 mr-1"></div>
                <div class=" mr-2 font-neucha text-base ">easy</div>
              </div>`},
        {fen:"r1bq1rk1/pp1nnppp/4p3/3pP3/1b1P4/2NBB2N/PP3PPP/2RQK2R w K - 13 13", solution:['Bxh7+','Kxh7','Qh5+','Kg8','Ng5','Re8','Qxf7+','Kh8','Qh5+','Kg8','Qh7+','Kf8','Nxe6+'],level:`<div class=" flex items-baseline ">
            <div class=" w-3 h-3 bg-blue-600 ml-2 mr-1"></div>
            <div class=" mr-2 font-neucha text-base ">intermediate</div>
          </div>`},
        {fen:"rnbqkbnr/ppppppPp/8/8/8/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1", solution:['gxh8=Q'],level:`<div class=" flex items-baseline ">
            <div class=" w-3 h-3 bg-red-600 ml-2 mr-1"></div>
            <div class=" mr-2 font-neucha text-base ">hard</div>
          </div>`},
        ],
        isPuzzlesSolved:[false,false,false],
        value:[1000,2900],
        marks1: {
          '1000': {pos:0,label:'1000 ELO'},
          '1500': {pos:26.3,label:'1500 ELO'},
          '2000': {pos:52.63,label:'CM'},
          '2300': {pos:68.32, label:'FM', },
          '2400': {pos:73.68, label:'IM', },
          '2500': {pos:78.93, label:'GM', },
          '2800': {pos:94.73, label:'', },
          '2900': {pos:100, label:'', },
        },
        data: [
        1000,
        1100,
        1200,
        1300,
        1400,
        1500,
        1600,
        1700,
        1800,
        1900,
        2000,
        2100,
        2200,
        2300,
        2400,
        2500,
        2600,
        2700,
        2800,
        2900
      ],
        loading:[true,true,true,true],
        categoryOptions:[
        {title:"Not selected",text:"Not selected",fn:()=>this.changeCategory('Not selected') ,url:"/images/pieces/chess-solid.svg"},
        {title:"OPENINGS",text:"Openings",fn:()=>this.changeCategory('OPENINGS'), url:"/images/pieces/chess-pawn-solid.svg"},
        {title:"MIDDLEGAME",text:"Middlegame",fn:()=>this.changeCategory('MIDDLEGAME'), url:"/images/pieces/chess-knight-solid.svg"},
        {title:"ENDGAME",text:"Endgame",fn:()=>this.changeCategory('ENDGAME'), url:"/images/pieces/chess-bishop-solid.svg"},
        {title:"BASICS", text:"Games", fn:()=>this.changeCategory('BASICS'), url:"/images/pieces/chess-rook-solid.svg"},
        ],
        reviewOptions:[
            {title:0,text:"Not selected",fn:()=>this.changeReviews(0),url:"/images/courselist/star.svg"},
            {title:4,text:"4+",fn:()=>this.changeReviews(4),url:"/images/courselist/star.svg"},
            {title:3,text:"3+",fn:()=>this.changeReviews(3),url:"/images/courselist/star.svg"},
            {title:2,text:"2+",fn:()=>this.changeReviews(2),url:"/images/courselist/star.svg"},
            {title:1,text:"1+",fn:()=>this.changeReviews(1),url:"/images/courselist/star.svg"},
        ],
        priceOptions:[
            {title:"Not selected",text:"Not selected",fn:()=>this.changePrice("Not selected"),url:"/images/courselist/dollar.svg"},
            {title:10,text:"10$-20$",fn:()=>this.changePrice(10),url:"/images/courselist/dollar.svg"},
            {title:20,text:"20$-30$",fn:()=>this.changePrice(20),url:"/images/courselist/dollar.svg"},
            {title:30,text:"30$-40$",fn:()=>this.changePrice(30),url:"/images/courselist/dollar.svg"},
            {title:40,text:"40$+",fn:()=>this.changePrice(40),url:"/images/courselist/dollar.svg"},
        ],
        saleOptions:[
            {title:"Not selected",text:"Not selected",fn:()=>this.changeSale("Not selected"),url:"/images/courselist/discount.svg"},
            {title:"Yes",text:"Yes",fn:()=>this.changeSale("Yes"),url:"/images/courselist/discount.svg"},
            {title:"No",text:"No",fn:()=>this.changeSale("No"),url:"/images/courselist/discount.svg"},
        ]
    }
},
computed: {
 filtred() {
  return (newCourses)=>{
    if(this.categoryFilter != 'Not selected') newCourses = newCourses.filter(course => course.category ==this.categoryFilter)
    if(this.priceFilter !='Not selected') {
        if(this.priceFilter==40) {
            newCourses = newCourses.filter(course => course.price >= this.priceFilter)
        } else {
            newCourses = newCourses.filter(course => { return course.price >= this.priceFilter && course.price <= this.priceFilter+10})
        }
    }
    if(this.reviewFilter != 'all') newCourses = newCourses.filter(course => course.averageRating >=this.reviewFilter)
    if(!(this.levelFilter[0]==1000&&this.levelFilter[1]==2900)) newCourses = newCourses.filter(course => { console.log('filters',course.level,this.levelFilter ); return ( (course.level[0]>=this.levelFilter[0])&&(course.level[0]<=this.levelFilter[1])) || ((course.level[1]>=this.levelFilter[0]) && (course.level[1]<=this.levelFilter[1]))||(course.level[0]<=this.levelFilter[0]&&course.level[1]>=this.levelFilter[1]) } )
    return newCourses
  }
 },
},
methods:{
   async onChange(index, checked, title) {
        console.log('OnChange',index,this.loading)
        for(let i=0;i<checked.length;i++) {
            checked[i] =false
        }
        this.$set(this.loading,index,false)
        this.$set(checked,index,true)
        // Old
        // checked[index]=true
        // checked.splice()
        switch (index) {
            case 0:  this.courses = await this.$store.dispatch('courseList1'); this.$set(title,'selectedValue','Best courses'); this.$set(this.loading,index,false);  return;
            case 1:  this.newestCourses = await this.$store.dispatch('courseList2'); this.$set(title,'selectedValue','Recommended'); this.$set(this.loading,index,false); return;
            case 2:  this.topCourses =await this.$store.dispatch('courseList3'); this.$set(title,'selectedValue','Top players'); this.$set(this.loading,index,false); return;
            case 3:  this.recommendedCourses = await this.$store.dispatch('courseList4'); this.$set(title,'selectedValue','New courses'); this.$set(this.loading,index,false); return;
        }
    },
    changeCategory(category) {
        this.categoryFilter = category
    },
    changeReviews(review) {
        this.reviewFilter = review
    },
    changePrice(price) {
        this.priceFilter = price
    },
    changeLevel(level) {
        this.levelFilter = level
        this.levelFilter.splice()
    },
    changeSale(sale) {
        this.saleFilter = sale
    },
    setCourse(checked) {
        const index = checked.findIndex(item=>item)
        switch (index) {
            case 0: return this.filtred(this.courses)
            case 1: return this.filtred(this.newestCourses)
            case 2: return this.filtred(this.topCourses)
            case 3: return this.filtred(this.recommendedCourses)
        }
    },
    toggleSettings() {
        this.visibleFilters=!this.visibleFilters; 
        if(this.$refs.filters.style.maxHeight) {
            this.$refs.filters.style.maxHeight = null
            this.$refs.filters.style.overflow = "hidden"
        } else {
            this.$refs.filters.style.maxHeight = this.$refs.filters.scrollHeight + "px";
            this.$refs.filters.style.overflow = "visible"
        }
    },
    onSolvePuzzle() {
        this.$set(this.isPuzzlesSolved,this.currentNumberOfPuzzle,true)
        if(this.currentNumberOfPuzzle==2) return
        setTimeout(()=>{
        let index=-1;
        for (let i=this.currentNumberOfPuzzle;i<this.isPuzzlesSolved.length;i++) {
            if(this.isPuzzlesSolved[i]==false) {
                index=i
                break;
            }
        }
        if(index>=0) {
            this.currentNumberOfPuzzle=index
            this.currentPuzzle = this.puzzles[this.currentNumberOfPuzzle]
            this.firstLoaded = false
        }
        },2000)
    },
    setPuzzle(number) {
        console.log('SetPuzzle',number)
        this.currentNumberOfPuzzle=number
        this.currentPuzzle = this.puzzles[this.currentNumberOfPuzzle]
        this.firstLoaded = false

    },
},

}
</script>
<style >
@import url('vue-slider-component/theme/antd.css');
.Typewriter__cursor-none {
      display: none;
}
</style>

<style lang='scss' scoped>
.section {
    &--courses {
        min-height:15rem ;
    }
}
.photo {
    height: 20rem;
}
.bishop {
    transition: all .3s;
    stroke: black;
    stroke-width: 5px;
}
// .filters {
//   max-height: 0;
//   overflow: hidden;
//   transition: all 1s ease-out;
// }
.bg-wk {
    background-image: url('/images/courselist/star.svg');
    background-repeat: no-repeat;
  }
  .bg-wch {
    background-image: url('/images/courselist/trophy-solid.svg');
    background-repeat: no-repeat;
  }
  .prisma-bg {
    //   height: 35rem;
        height:25rem;
      background:  radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747;
        @media (max-width:450px) {
            height:auto
        }
  }
  .promo-video-height {
      height: 25rem;
  }
  .section {
      &--canvas {
        //   background: whitesmoke;
          height: 42rem;

      }
  }
  .cool-path {
    //   opacity: .75;
      height: 70vh;
    //   background: white;
  }
  .phone--card {
      box-shadow:0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3), inset 0 -2px 6px 0 rgba(10,37,64,.35);
      width: 17rem;
      height: 30rem;
  }
  
  .bg-lesson {
      background:#f6f9fc;
  }
  .scale-98:hover {
      transform: scale(.985);
      
  }
  .filter--container {
    //   @media (max-width:450px) {
    //       margin-top:25rem
    //   }
      @media (max-width:639px) {
          margin-top: 25rem;
      }
  }
</style>