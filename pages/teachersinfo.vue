<template>
  <!-- component -->
<div class="container  mx-auto w-full  text-gray-900">
    <Header>
        <div class=""></div>
    </Header>
  <div class="relative flex  flex-wrap  mt-8   ">
    <!-- <div class=" text-center mb-8 text-5xl font-neucha font-bold">How to publish a course</div> -->
    <!-- <div class="z-20 relative flex items-center bg-gray-700   p-2 rounded-lg  self-center my-4 ">
            <div style="background:#183153; color:#ffd43c" class=" w-6 h-6 rounded flex justify-center items-center mr-1 z-20">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
            </div>
            <h1 class="mx-auto   font-semibold  z-20 text-gray-200 ">How to publish course?</h1>
      </div> -->
    <!-- <div class="border-r-2 absolute border-opacity-20 border-gray-700 h-full border" style="left: 50%"></div> -->
    <!-- START -->
    <div  class="mb-8 flex sm:flex-row flex-col justify-between   items-center w-full left-timeline ">
      <div class="  rounded-lg  w-full  sm:w-5/12 px-6 py-4 border bg-white">
        <div class="mb-3 font-bold  text-xl font-neucha text-gray-800 flex items-baseline">
            <div style="background:#183153; color:#ffd43c" class=" flex-none w-6 h-6 rounded flex justify-center items-center mr-1 z-20">1</div>
            Register your account from scratch</div>
        <div class=" font-medium leading-snug tracking-wide ">
            You should register account via button with lichess.org. So make sure, that your lichess account has
            <div class=" inline-block bg-blue-700 text-xs self-center px-1 rounded-full text-white ml-1">GM</div>
            <div class="inline-block bg-red-700 text-xs self-center px-1 rounded-full text-white ml-1">IM</div>
            <div class=" inline-block bg-pink-500 text-xs self-center px-1 rounded-full text-white mx-1">WGM</div>
            title mark, because now only for these Titles creation of courses allowed. So, if everything okay you will get teacher account automatically</div>
      </div>
      <div class="  bg-gray-500 h-8 w-px sm:h-px sm:w-2/12"></div>
      <div class="  rounded-lg w-full  sm:w-5/12 px-6 py-4 border bg-white relative">
        <div style="left:50%" class=" absolute h-32 w-px bg-gray-500 bottom-0 -mb-32 "></div>
        <h3 class="mb-3 font-bold  text-xl">or ...</h3>
        <div class=" font-medium leading-snug tracking-wide mt-1">If you already have account, just connect with your lichess account via settings tab <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-cog" class="svg-inline--fa fa-user-cog fa-w-20  inline-block   w-6 h-6 text-gray-700 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z"></path></svg>   </div>
      </div>
    </div>
    <!-- 1 STEP -->
    <div  class="mb-8 flex sm:flex-row flex-col justify-between  items-center w-full left-timeline ">
      <div class=" z-20   rounded-lg  w-full  sm:w-5/12 px-6 py-4 border bg-white relative">
        <div style="left:50%" class=" absolute  sm:h-32 w-px bg-gray-500 bottom-0 sm:-mb-32 "></div>
        <div class="mb-3 font-bold  text-xl font-neucha  flex items-center text-gray-800"><div style="background:#183153; color:#ffd43c" class=" px-1 flex-none  rounded flex justify-center items-baseline mr-2 z-20">2. <span class=" text-red-600 text-sm">2</span> </div> Fill out the instructor fields</div>
        <div class=" font-medium leading-snug tracking-wide ">Students have to know about you! Your name, chess victories and tell about yourself also upload your photo. </div>
      </div>
        <div class="  bg-gray-500 h-8 w-px sm:h-px sm:w-2/12"></div>
      <div class=" z-30   rounded-lg  w-full  sm:w-5/12 px-6 py-4 border bg-white relative ">
        <div class="mb-3 font-bold  text-xl font-neucha  flex items-baseline"><div style="background:#183153; color:#ffd43c" class=" flex-none px-1 rounded flex justify-center items-baseline mr-2 z-20">2. <span class=" text-red-600 text-sm">1</span></div>Payouts details</div>
        <div class=" font-medium leading-snug tracking-wide mt-1">Also we need to know how we will pay to you. You will get 50% from any sell.  There are two ways at the moment PayPal and Binance (cryptocurrency USDT). </div>
      </div>
    </div>
    <!-- 2 step -->
    <div  class="mb-8 flex  sm:flex-row flex-col   items-center w-full left-timeline z-20 ">

        <!-- <div class="w-5/12 flex flex-col items-center justify-center">
            <h3 class="mb-3 font-bold  text-lg text-center font-neucha text-purple-700">Puzzle builder inside! Create puzzles, make your course interacrive.</h3>

            <img style="height:25rem" src="/gifs/another.gif" class="  object-right  ">
        </div> -->
      <!-- <div class="z-20 relative flex items-center bg-gray-700 p-2 rounded-lg ">
            <div style="background:#183153; color:#ffd43c" class=" w-6 h-6 rounded flex justify-center items-center mr-1 z-20">3</div>
            <h1 class="mx-auto   font-semibold text-lg z-20 text-gray-200">Create course</h1>
          </div> -->
          <div class=" self-start  rounded-lg  w-full  sm:w-6/12 px-6 py-4 border bg-white  mt-16 relative">
            <div style="left:50%" class=" absolute h-40 w-px bg-gray-500 top-0 -mt-40 sm:bottom-0 sm:top-auto sm:-mb-40 sm:z-0 "></div>

            <div class="mb-3 font-bold  text-xl font-neucha text-gray-800 flex items-baseline  relative">
                <div class="mb-3 font-bold  text-xl font-neucha  flex items-center text-gray-800"><div style="background:#183153; color:#ffd43c" class=" px-1 flex-none  rounded flex justify-center items-baseline mr-2 z-20">3. <span class=" text-red-600 text-sm">1</span></div></div>
                <!-- <div style="background:#183153; color:#ffd43c" class=" flex-none w-6 h-6 rounded flex justify-center items-center mr-1 z-20">3</div> -->
                    Create a course
                </div>
                <div class="">
                    At this stage, you have to create a course curriculum using the built-in awesome drag and drop Course Builder&trade;, add a description, upload a couple of photos and videos. 
                </div>
                <div class=" ">We love quality information. Therefore, each course must have the following <strong>requirements:</strong> </div>
                    <div class="  leading-5  flex flex-col space-y-1 mt-1   ">
                            <div v-for="(item,index) in courseRequires" :key="index" class=" flex items-center"> 
                                <div v-if="item" class=" mr-1 self-start">
                                    <svg class="w-6 h-6 flex-shrink-0 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                </div>
                                <div class="">{{item}}</div>
                            </div>
                    </div>
                    <div class=" mt-1 ">
                        Hmm...but It's still seems pretty easy. <strong>Yes!</strong> 
                    </div>

                </div>
            <div class=" w-1/12"></div>
            <div class="  rounded-lg  w-full  sm:w-5/12  py-4 ">
                <div class=" text-center mb-2  "> Mini view of <strong>Course Builder&trade;</strong> </div>
                <div class=" browser--card w-full  z-20 rounded-2xl p-2 flex  flex-col items-center bg-white   text-gray-800  ">
                    <div class=" w-full  flex  items-center  rounded-t  font-neucha  text-center text-black" id="headerTerminal">
                        <div ref="coursename" class=" flex ml-auto">Course title</div>
                        <div class=" flex ml-auto">
                            <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                            </div>
                            <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                            </div>
                            <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                            </div>
                        </div>
                    </div>
                    <!-- <div class="my-1 pl-48  font-neucha ">"Best Ruy Lopez course" </div> -->

                    <div class="flex flex-col mt-8  space-y-5 w-full ">
                        <!-- :class="{'hidden animate__animated animate__fadeIn':index==1}" -->
                        <div ref="module"  v-for="(item,index) in fakeChapters"  class=" bg-lesson  p-2   border-2 mr-2 flex flex-col justify-around">
                            <div class=" flex font-neucha items-center">
                                <div style="background-color:#183153;color:#ffd43b" class=" w-5 h-5 rounded flex justify-center items-center mr-2 "> {{index+1}} </div>
                                <div ref="typewriter" class="text-base ">
                                    Chapter {{index+1}}
                                </div>
                            </div>
                            <!-- :style="index2==1?'display:none':''"  :class="{'animate__animated animate__jackInTheBox':index2==1}"-->
                            <div v-for="(item,index2) in item.lessons" ref="lessonarea"   class=" text-sm my-2 bg-white w-11/12 h-10 border-2 border-gray-400 flex items-center pl-2 mr-2  ">
                                <div ref="lesson"  class="">
                                    Lesson {{index2+1}}
                                </div>
                                <div class=" ml-auto relative   flex  justify-center items-center">
                                    <svg class=" w-8 h-8" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 481.882 481.882" style="enable-background:new 0 0 481.882 481.882;" xml:space="preserve">
                                        <path style="fill:#EBF0F3;" d="M315.031,0H69.873c-6.024,0-11.445,4.819-11.445,11.445v458.993c0,6.024,4.819,11.445,11.445,11.445
                                            h342.137c6.024,0,11.445-4.819,11.445-11.445V108.424c0-3.012-1.205-6.024-3.012-7.831L322.861,3.012
                                            C320.452,1.205,318.042,0,315.031,0z"/>
                                        <path style="fill:#D5D6DB;" d="M330.692,103.605h91.558c-0.602-1.205-1.205-2.409-2.409-3.012l-48.791-48.791L322.861,3.012
                                            c-1.205-1.205-1.807-1.807-3.012-2.409V92.16C319.247,98.786,324.668,103.605,330.692,103.605z"/>
                                        <path style="fill:#64798A;" d="M342.136,190.946l-47.586,22.889v-20.48c0-4.216-3.614-7.831-7.831-7.831H136.132
                                            c-4.216,0-7.831,3.614-7.831,7.831v125.892c0,4.216,3.614,7.831,7.831,7.831h151.191c4.216,0,7.831-3.614,7.831-7.831v-20.48
                                            l47.586,22.889c5.421,2.409,11.445-1.205,11.445-7.228V198.174C353.581,192.151,347.558,188.536,342.136,190.946z"/>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess-board" class="svg-inline--fa fa-chess-board fa-w-16 h-6 w-6 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.9.2h-64v64h64zM0 64.17v64h64v-64zM128 .2H64v64h64zm64 255.9v64h64v-64zM0 192.12v64h64v-64zM383.85.2h-64v64h64zm128 0h-64v64h64zM128 256.1H64v64h64zM511.8 448v-64h-64v64zm0-128v-64h-64v64zM383.85 512h64v-64h-64zm128-319.88v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm255.9 0h64v-64h-64zM0 320.07v64h64v-64zm319.88-191.92v-64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-127.95h64v-64h-64zm0 191.93v64h64v-64zM64 384.05v64h64v-64zm128-255.9v-64h-64v64zm191.92 255.9h64v-64h-64zm-128-191.93v-64h-64v64zm128-127.95v64h64v-64zm-128 255.9v64h64v-64zm-64-127.95H128v64h64zm191.92 64h64v-64h-64zM128 128.15H64v64h64zm0 191.92v64h64v-64z"></path></svg>
                                </div>
                                <svg ref="check" class="w-6 h-6 ml-2 hidden -mr-8 text-green-700 animate__animated animate__jackInTheBox  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
        </div>
      </div>
    </div>


    <div  class="mb-8 flex  sm:flex-row flex-col-reverse justify-between  items-center w-full left-timeline z-20">
        <div class="w-full  sm:w-5/12 flex-none flex flex-col space-y-16    self-start ">
            <div class=" self-start   rounded-lg w-full   px-6 py-4 border bg-white relative">
            <div style="left:50%" class=" absolute h-32 w-px bg-gray-500 bottom-0 -mb-32 "></div>
            
                <div class="mb-3 font-bold  text-xl font-neucha  flex items-baseline text-gray-800">
                    <div class="mb-3 font-bold  text-xl font-neucha  flex items-center"><div style="background:#183153; color:#ffd43c" class=" px-1 flex-none  rounded flex justify-center items-baseline mr-2 z-20">3. <span class=" text-red-600 text-sm">2</span></div></div>
                    <!-- <div style="background:#183153; color:#ffd43c" class=" flex-none w-6 h-6 rounded flex justify-center items-center mr-1 z-20">1</div> -->
                    Add some Puzzles</div>
                    <div class="">
                    Our students like to solve puzzles, because this is the only way to make progress. Create a couple of chess exercises using the built-in amazine Puzzle Builder&trade;. 
                    </div>
                    <div class=" flex">
                        <div  class=" mr-1 self-start">
                            <svg class="w-6 h-6 flex-shrink-0 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="">More than 5 puzzles in total</div>
                    </div>
            </div>
                  <div class="   self-start rounded-lg  w-full  px-6 py-4 border bg-white relative">
                <div style="left:50%" class=" absolute h-16 w-px bg-gray-500 bottom-0 -mb-16 "></div>

                <div class="mb-3 font-bold  text-xl font-neucha  flex items-baseline text-gray-800">
                    <div class="mb-3 font-bold  text-xl font-neucha  flex items-center"><div style="background:#183153; color:#ffd43c" class="  w-8 h-8 flex-none  rounded flex justify-center items-baseline mr-2 z-20">4</div></div>
                    <!-- <div style="background:#183153; color:#ffd43c" class=" flex-none w-6 h-6 rounded flex justify-center items-center mr-1 z-20">1</div> -->
                    Verification and Publishing</div>
                    <div class="">
                        After everything is ready. It is time to publish the course, just push button <div class=" inline-block bg-orange-400 px-2 rounded-lg">verification</div>. But before, we must make sure that you are you, and that you have the rights to sell the course. To do this, we will ask you to record a video with a corresponding statement. 
                    </div>
                    <div class=" flex">
                        <div  class=" mr-1 self-start">
                            <svg class="w-6 h-6 flex-shrink-0 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="">Verification video (5-60 sec)</div>
                    </div>
            </div>
            <div style="background:#183153" class=" px-6 text-xl text-yellow-500 p-2   font-neucha">Excellent. Job is done! You made this world a little bit better and started making money from it!</div>

      </div>
      <!-- <div  class=" relative">
          <div class=" absolute  inset-0 flex justify-center z-0">
              <div style=" background:whitesmoke" class="w-2 h-64 "></div>
          </div>

      </div> -->
        <div class=" hidden w-full sm:w-9/12 flex-none sm:flex flex-col justify-start items-center  ">
            <div class="scale-75 "> Try mini version of <strong>Puzzle Builder&trade;</strong> </div>
            <puzzle-component class="transform scale-50 -ml-48 sm:scale-75 sm:-ml-32 -mt-16  " :saveFunction="()=>{}" :puzzles="[]"></puzzle-component>
        </div>
    </div>
    <!-- <div  class=" flex justify-between  items-center w-full left-timeline z-20 sm:-mt-24">
        <div class=" w-5/12 flex justify-center"> 
            <div style="background:#183153" class=" px-6 text-xl text-yellow-500   font-neucha">Excellent. Job is done! You made this world a little bit better and started making money from it!</div>
        </div>
    </div> -->

  </div>
</div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';
import Header from '~/components/layout/Header'
import PuzzleComponent from "~/components/publishcourse/puzzlebuilder/PuzzleComponent.vue";
export default {
    layout:'builder',
    components:{
        Header,PuzzleComponent
    },
    data() {
        return {
            information:[{title:"Registration", html:""}],
            fakeChapters:[{lessons:["",""]},{lessons:[""]}],
            courseRequires:['Minimum 2 hours of video course uploading.', 'Promo photo', 'Promo video (0-5 mins)', 'Course detail infromation (description,level,etc.)']
        }
    },
    mounted() {
        this.typeWriteAnimation()
    },
    methods:{
        typeWriteAnimation() {
        let app = this.$refs.typewriter[0]

    let typewriter = new Typewriter(app, {
    delay: 70,
    // deleteSpeed:75
    });

    typewriter
    .pauseFor(1000)
    .typeString('Exchange variation: 3.Bb5')
    .pauseFor(300)
    .deleteChars(5)
    .typeString('4.Bc6 ')
    .callFunction((args)=>{console.log(args.elements.cursor); args.elements.cursor.setAttribute('style','display:none')})
    .pauseFor(1000)
    .callFunction(()=>{
        let app1 = this.$refs.lesson[0]
        let typewriter1 = new Typewriter(app1, {
        delay: 70,
        });
        typewriter1
        .pauseFor(1000)
        .typeString('4...bc?')
        .pauseFor(300)
        .typeString(' 5.Ne5! Qe7 6.Nc6')
        .callFunction((args)=>{ args.elements.cursor.setAttribute('style','display:none');this.$refs.check[0].setAttribute('style','display:block')})
        .pauseFor(1000)
        .callFunction(()=>{
            let app2 = this.$refs.lesson[1]
            this.$refs.lessonarea[1].setAttribute('style','display:flex')
            let typewriter2 = new Typewriter(app2, {
            delay: 70,
            });
            typewriter2
            .pauseFor(1000)
            .typeString('4...dc')
            .pauseFor(300)
            .typeString(' 5.d4 ed')
            .callFunction((args)=>{this.$refs.check[1].setAttribute('style','display:block'); args.elements.cursor.setAttribute('style','display:none')})
            .pauseFor(1000)
            .callFunction(()=>{
                this.$refs.module[1].setAttribute('style','display:flex')
                let typewriter3 = new Typewriter(this.$refs.typewriter[1], {
                delay: 70,
                });
                typewriter3
                .pauseFor(1000)
                .typeString('Open Defence: ')
                .pauseFor(300)
                .typeString('4.Ba4 Nf6 5.0-0 Nxe4')
                .callFunction((args)=>{console.log(args.elements.cursor); args.elements.cursor.setAttribute('style','display:none')})
                .pauseFor(1000)
                .callFunction(()=>{ })
                .callFunction(()=>{
                    let typewriter4 = new Typewriter(this.$refs.lesson[2],{
                        delay:70
                    })
                    typewriter4
                    .pauseFor(1000)
                    .typeString('...')
                    .callFunction((args)=>{console.log(args.elements.cursor); args.elements.cursor.setAttribute('style','display:none')})
                    .pauseFor(300)
                    .callFunction(()=>{this.isRoadMap=true; this.roadMapStep=1;setTimeout(() => {
                        let typewriter5 = new Typewriter(this.$refs.coursename, {
                            delay: 70,
                        });
                        typewriter5
                        .pauseFor(400)
                        .typeString('Amazine Ruy Lopez course')
                        .callFunction((args)=>{console.log(args.elements.cursor); args.elements.cursor.setAttribute('style','display:none')})
                        .start()
                        this.roadMapStep=2;
                        setTimeout(() => {
                            this.roadMapStep=3;
                            this.typeWriteAnimation()    
                        }, 4000);
                    }, 4000);})
                    .start()
                })
                .start()
            })
            .start()
        })
        .start()
    })
    .start()
    }
    }
}
</script>

<style>
.browser--card {
      box-shadow:0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3), inset 0 -2px 6px 0 rgba(10,37,64,.35);
      /* width: 40rem; */
      height: 25rem;
      top: 1rem;
      left: 4rem;

  }
</style>