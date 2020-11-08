<template>
<div class="  " >
    <div class=" h-16 flex items-center">
        <div class="text-gray-700 hover:text-blue-600 w-16 h-16  flex items-center justify-center cursor-pointer   z-50">
            <svg @click="$router.push('/learning')" class="w-10 h-10  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
        </div>
        <div class=" w-2/3 ml-4 flex">
            <div class=" w-full flex   mr-20 self-end text-3xl"> 
                <div style="background-color:#183153; color:#ffd43b" class=" px-3  rounded-lg mr-2 font-bold ">
                    {{currentChapterOrder+1}}.<span class=" text-xl text-red-500">{{currentLessonIndex+1}}</span>
                </div>
                <div class=" ml-2  tracking-tight text-blue-800 font-semibold">
                    {{currentLessonTitle}}
                </div>
            </div>
        </div>
        <div class=" w-1/3   text-xl  flex  items-center justify-around">
            <div class="flex flex-col">
                <div class=" flex  justify-center items-center  ">
                    <svg  class="svg-inline--fa fa-photo-video fa-w-20 w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="photo-video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"></path></svg>
                    <!-- <svg class="w-6 h-6 text-purple-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg> -->
                    <!-- <div class="  w-16 text-sm">Video </div> -->
                    <div class=" lg:w-40 xl:w-64 h-2 rounded-2xl bg-gray-400 self-center mx-3">
                        <div :style="`width:${totalProgress}%`"  class=" duration-1000 bg-gradient-to-r from-blue-300 to-blue-500 rounded-2xl  h-2"></div>
                    </div>
                    <div class=" text-sm">{{totalProgress}}%</div>
                </div>
                <div class=" flex  justify-center items-center">
                    <svg class="svg-inline--fa fa-chess-board fa-w-16 w-6 h-5 " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess-board"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.9.2h-64v64h64zM0 64.17v64h64v-64zM128 .2H64v64h64zm64 255.9v64h64v-64zM0 192.12v64h64v-64zM383.85.2h-64v64h64zm128 0h-64v64h64zM128 256.1H64v64h64zM511.8 448v-64h-64v64zm0-128v-64h-64v64zM383.85 512h64v-64h-64zm128-319.88v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm255.9 0h64v-64h-64zM0 320.07v64h64v-64zm319.88-191.92v-64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-127.95h64v-64h-64zm0 191.93v64h64v-64zM64 384.05v64h64v-64zm128-255.9v-64h-64v64zm191.92 255.9h64v-64h-64zm-128-191.93v-64h-64v64zm128-127.95v64h64v-64zm-128 255.9v64h64v-64zm-64-127.95H128v64h64zm191.92 64h64v-64h-64zM128 128.15H64v64h64zm0 191.92v64h64v-64z"></path></svg>
                    <!-- <svg class="w-6 h-6 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg> -->
                    <!-- <div class="  w-16 text-sm ">Puzzles </div> -->
                    <div class=" lg:w-40  xl:w-64 h-2 rounded-2xl bg-gray-400 self-center mx-3">
                        <div :style="`width:${totalProgress}%`"  class=" duration-1000  bg-gradient-to-r from-green-300 to-green-500 rounded-2xl  h-2"></div>
                    </div>
                    <div class=" text-sm">{{totalProgress}}%</div>
                </div>
            </div>
            <div class=" flex hover:text-yellow-600 cursor-pointer  ">
                <div class=" text-sm ml-6 mr-1 text-gray-800">
                    Leave rating
                </div>
                <svg class="w-6 h-6 mr-2 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
            
        </div>

    </div>
    <div class="flex items-start">
    <!-- Player -->
        <div  class=" w-2/3 bg-black ml-16 ">
            <div class="relative">
                <div  class=" absolute z-50 w-full h-full bg-white ">
                    <PuzzleTraining :puzzles="puzzles" :key="puzzles" />
                </div>
                <div class="  " ref="plyr" data-plyr-provider="vimeo" :data-plyr-embed-id="id" >
                </div>
            </div>
        </div>
        <!-- Curriculum -->
        <div class=" w-1/3 bg-white curriculum--height border   ">
            <div class="  w-full">
                <div v-for="(chapter,index) in curriculum" :key="index" class="  w-full">
                <div @click="clickEvent(index)" :class="{'bg-white  hover:text-gray-700':index%2==0,'bg-gray-200 hover:text-gray-700':index%2==1}" class=" lesson transform  duration-300  p-2 text-lg flex cursor-pointer">
                    <div class="index flex items-center transform duration-300 truncate">
                        <div style="background-color:#183153; color:#ffd43b" class=" px-3  rounded-lg mr-2 font-bold ">{{index+1}}</div>
                        <div class=" text-sm ph2:text-lg truncate ">{{chapter.name}}</div>
                    </div>
                    <div class="ml-auto text-sm w-20  italic self-center  hidden xl1:block"> {{chapter.lessons.length}} lesson<span v-if="chapter.lessons.length>1">s</span> </div>
                    <div class=" text-xs ph2:text-sm hidden ph2:block  italic self-center mx-2">{{totalTime(chapter)}} </div>
                    <div  class=" transform duration-150  self-center  ">
                    <svg  class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
                    <div :ref="`card`" class="  panel border-b ">
                    <div :ref="`lesson`"  @click="setVideoOrSolvePuzzles(lesson, index);currentLessonIndex=index2;currentLessonTitle=lesson.name" :class="{' bg-yellow-100':currentLessonOrder==lesson.order , 'border-t':index2==0,'border-b':index2!=2}"  class=" lessongood  relative  flex cursor-pointer "  v-for="(lesson,index2) in chapter.lessons" :key="index2"   >

                        <div class=" relative self-center flex-none">
                        <div class="relative">
                            <img class=" h-16 w-24 p-2 ph2:h-20 ph2:w-32 object-cover " :src="`https://images.unsplash.com/photo-1604328911326-183973db71eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`" alt="">
                            <div class=" time absolute z-50 bg-gray-800 px-1 text-white text-xs">{{videoDuration(lesson.video.duration)}}</div>
                            <div  class=" absolute inset-0 bg-gray-200 opacity-25">
                            
                            </div>
                            <div :class="{'flex':currentLessonOrder==lesson.order,'hidden':currentLessonOrder!=lesson.order }"  class="  btn--play m-2 absolute inset-0 bg-gray-700 opacity-50  justify-center items-center  ">
                            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                        </div>
                        <div :class="{'':currentLessonOrder==lesson.order,'truncate':currentLessonOrder!=lesson.order}" class=" m-2 flex flex-col justify-center mr-8  ">
                            <div   class=" text-sm ph2:text-lg self-start tracking-tight "> {{lesson.name}}</div>
                            <div :class="{'':currentLessonOrder==lesson.order,'truncate':currentLessonOrder!=lesson.order}" class=" hidden xl:block text-sm  ">{{lesson.description}}</div>
                        </div>
                        <div @click.stop="saveProgress(lesson.order)" class="self-center mr-4 mt-4 ml-auto relative text-gray-700 hover:text-blue-600 ">
                            <div v-if="progressOfLessons[lesson.order]" class="  ">
                                <svg   class=" w-12 h-6 text-green-600 rounded-full absolute right-0 -mr-2 -mt-6 text-sm font-bold text-center flex justify-center items-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div v-else class="  ">
                                <svg  class=" w-12 h-6 text-red-500 rounded-full absolute right-0 -mr-2 -mt-6 text-sm font-bold text-center flex justify-center items-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </div>
                            <svg  class="svg-inline--fa fa-photo-video fa-w-20 w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="photo-video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"></path></svg>
                        </div>
                        <div v-if="lesson.puzzles.length" @click.stop="startSolvePuzzles(lesson.puzzles)" class=" self-center mt-4 mr-3 relative duration-150 transform hover:text-blue-700">
                            <div class=" w-12 h-5 rounded-full   absolute right-0 -mr-2 -mt-6 text-sm font-bold text-center flex justify-center items-center">
                                <span  class=" text-green-700 ">{{solvedPuzzles(lesson)}}</span>/<span class=" ">{{lesson.puzzles.length}}</span>
                            </div>
                            <svg class="svg-inline--fa fa-chess-board fa-w-16 w-8 h-8 " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess-board"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.9.2h-64v64h64zM0 64.17v64h64v-64zM128 .2H64v64h64zm64 255.9v64h64v-64zM0 192.12v64h64v-64zM383.85.2h-64v64h64zm128 0h-64v64h64zM128 256.1H64v64h64zM511.8 448v-64h-64v64zm0-128v-64h-64v64zM383.85 512h64v-64h-64zm128-319.88v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm255.9 0h64v-64h-64zM0 320.07v64h64v-64zm319.88-191.92v-64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-127.95h64v-64h-64zm0 191.93v64h64v-64zM64 384.05v64h64v-64zm128-255.9v-64h-64v64zm191.92 255.9h64v-64h-64zm-128-191.93v-64h-64v64zm128-127.95v64h64v-64zm-128 255.9v64h64v-64zm-64-127.95H128v64h64zm191.92 64h64v-64h-64zM128 128.15H64v64h64zm0 191.92v64h64v-64z"></path></svg>
                            <!-- <svg class="w-10 h-10 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg> -->
                        </div>
                        
                        <!-- <svg v-if="!lesson.preview" class="w-10 h-10 ml-auto self-center mr-4 text-gray-700   " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg> -->


                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import plyr from "plyr";
import Axios from 'axios';
import PuzzleTraining from '~/components/player/PuzzleTraining'
export default {
  layout:'builder',
  middleware:['auth'],
  components:{
      PuzzleTraining
  },
  async created() {
    // this.id =474819758
    const {data} = await Axios({url:`/boughtCourse/${this.$route.params.id}`, method:"GET"})
    this.curriculum = JSON.parse(data.course.curriculum) 
    this.progressOfLessons = data.progressOfLessons
    console.log('good?',this.curriculum[this.curriculum.length-1])

    if(data.progressOfLessons.length==0) {
        for (let i=0; i<=this.curriculum[this.curriculum.length-1].lessons[this.curriculum[this.curriculum.length-1].lessons.length-1].order; i++) 
            this.progressOfLessons[i]=false
        this.progressOfLessons.splice()
    }
    if(data.progressOfPuzzles.length==0) {
        for(let i=0; i<data.course.totalPuzzles;i++)
        this.progressOfPuzzles[i] = false
    }

        console.log('Progress',this.progressOfLessons) 
         if (!localStorage.getItem(`boughtCoursePlayer${this.$route.params.id}`))  {
             this.$nextTick(()=>{
                 this.$refs.card[0].style.maxHeight = this.$refs.card[0].scrollHeight + "px";
                 this.$refs.lesson[0].click()
             })
            return
         }
        const {chapter,lesson, vimeoId} = JSON.parse(localStorage.getItem(`boughtCoursePlayer${this.$route.params.id}`)) 
        this.$nextTick(()=>{
            if(chapter>=0) {
                this.$refs.card[chapter].style.maxHeight = this.$refs.card[chapter].scrollHeight + "px";
                this.$refs.lesson[lesson].click()
            }
            else  {
                console.log('else')
                this.$refs.card[0].style.maxHeight = this.$refs.card[0].scrollHeight + "px";
                const index = this.progressOfLessons.findIndex(element=>element==false)
                this.$refs.lesson[index].click()
                }
        })
  },
  mounted() {
    const controls =['play-large','rewind', 'play','fast-forward', 'progress', 'current-time', 'mute', 'volume',  'settings', 'pip', 'airplay', 'fullscreen']
    // const controls =['play-large']
    this.player = new plyr(this.$refs.plyr,{
      controls,
      vimeo:{
        responsive:true,
      }
    });
    this.player.on('ended',()=>{
        
        this.saveProgressTrue(this.currentLessonOrder)
        this.endScreen = true
        // this.$refs.lesson[this.currentLessonOrder+1].click()
        console.log('next,video')
    })
  },
  data() {
      return {
          id:localStorage.getItem(`boughtCoursePlayerVimeoId${this.$route.params.id}`)||2,
          puzzles:[{}],
          curriculum:[],
          isVisible:[],
          progressOfLessons:[],
          progressOfPuzzles:[],
          interval:null,
          player:null,
          currentLessonOrder:0,
          currentLessonIndex:0,
          currentLessonTitle:'',
          currentChapterOrder:0,
          endScreen:false,
          

      }
  },
  computed: {
      
      totalProgress() { 
        if(this.progressOfLessons.length) {
            const lessons = this.progressOfLessons.filter(val=>val==true)
            if(lessons)
            return Math.ceil(lessons.length/this.progressOfLessons.length*100)  
            return 0
        }
        return 0
      },
      solvedPuzzles() {
          return lesson => `${lesson.puzzles.filter(puzzle=>this.progressOfPuzzles[puzzle.order]).length}`
      },
  },
  methods:{
    totalTime(chapter) {
      let temp =0
      chapter.lessons.forEach(lesson=>temp=temp+lesson.video.duration)
      const totalTime = this.fullVideoDuration(temp)
      return totalTime 
    },
    clickEvent(index) {
      if(this.$refs.card[index].style.maxHeight) {
        this.$refs.card[index].style.maxHeight = null
      } else {
        this.$refs.card[index].style.maxHeight = this.$refs.card[index].scrollHeight + "px";
      }
    },
    videoDuration(time) {
      const temp = Math.ceil(time)
      // const hours = Math.floor(temp / 3600);
      const minutes = Math.floor(Math.floor(temp / 60) % 60);
      const seconds = temp%60
      return `${minutes>=10?minutes:'0'+ minutes}:${seconds>=10?seconds:'0'+seconds}`
    },
    fullVideoDuration(time) {
      const temp = Math.ceil(time)
      const hours = Math.floor(temp / 3600);
      const minutes = Math.floor(Math.floor(temp / 60) % 60);
      // const seconds = temp%60
      return `${hours}h${minutes}m`
    },
    saveProgress(order) {
        // this.progressOfLessons[order] = !this.progressOfLessons[order]
        this.$set(this.progressOfLessons,order,!this.progressOfLessons[order])
        clearTimeout(this.interval)
        this.interval = setTimeout( async ()=>{
            this.interval = null
            console.log(await Axios({url:`/boughtCourse/${this.$route.params.id}`, method:"PATCH", data:{
                progressOfLessons:this.progressOfLessons
            }}))
        },5000)
    },
    saveProgressTrue(order) {
        this.$set(this.progressOfLessons,order,true)
        clearTimeout(this.interval)
        this.interval = setTimeout( async ()=>{
            this.interval = null
            console.log(await Axios({url:`/boughtCourse/${this.$route.params.id}`, method:"PATCH", data:{
                progressOfLessons:this.progressOfLessons
            }}))
        },5000)
    },
    setVideoOrSolvePuzzles(lesson, chapterIndex) {
        this.endScreen = false
        this.id = lesson.video.vimeoId
        console.log('VimdeoId',this.id)
        this.player.source = {
        type: 'video',
        sources: [
            {
            src: this.id,
            provider: 'vimeo',
            },
        ],
        };
        this.currentChapterOrder = chapterIndex
        console.log('Current chapter:',this.currentChapterOrder)

        this.currentLessonOrder = lesson.order
        this.$nextTick(()=>{
            this.$refs.card[this.currentChapterOrder].style.maxHeight = this.$refs.card[this.currentChapterOrder].scrollHeight + "px";
        })

        localStorage.setItem(`boughtCoursePlayer${this.$route.params.id}`,JSON.stringify({lesson:this.currentLessonOrder,chapter:this.currentChapterOrder}))
        localStorage.setItem(`boughtCoursePlayerVimeoId${this.$route.params.id}`,this.id)
        setTimeout(()=>{
            this.player.play()
        },2000)
        console.log('Current lesson:',this.currentLessonOrder)
    },
    startSolvePuzzles( puzzles) {
        this.puzzles = puzzles
    }
  }

};
</script>
<style >
@import url('~/node_modules/plyr/dist/plyr.css');
</style>
<style >
  .time {
   bottom: .75rem;
   right: .75rem;
}
.panel {
  max-height: 0;
  overflow: hidden;
  transition: all .3s ease-out;
}
.curriculum--height {
    
    height: calc(100vh - 64px);
}
.lessongood:hover .btn--play {
    display: flex;
    
}
</style>
