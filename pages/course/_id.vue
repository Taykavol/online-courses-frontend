<template>
  <div class=" page">
      <!-- hey {{$route.params.id}} -->
      <div class=" grid grid-cols-10 my-10">
          <div class=" col-span-10  md:col-span-7 md:pr-4">
              <Plyr v-if="course.promoVideo" :id="course.promoVideo"/>
              <!-- <img src="" v-else class=" h-64"/> -->
              <Plyr v-else id="76979871"/>
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
          <div class="col-span-10 ph:p-8 md:p-0 md:col-span-3 border bg-white flex flex-col  items-center card">
            <div class=" text-2xl tracking-tight m-4 mb-3 text-center leading-6 ">{{course.title}}</div>
            <div class=" w-40 h-1 bg-blue-600"></div>
            <div class="flex items-baseline space-x-1 mt-1">
                <div class="">By</div>
                <div v-if="course.author" class=" bg-blue-700 text-white px-1 rounded-lg font-sans font-semibold text-xs">{{course.author.title}}</div>
                <div v-if="course.author" class=" truncate">{{course.author.teacherName}}</div>
            </div>
            <div v-if="course.subtitle" class=" mx-4 text-center mt-1 text-sm xl:text-base">"{{course.subtitle}}"</div>
            <div   class="flex items-center  ml-2">
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
            </div>
            <div class=" grid gap-4 mt-3 grid-cols-2">
                    <div class=" flex items-center ">
                        <img class=" w-10 h-10" src="/icons/chess-clock-svgrepo-com.svg" alt="">
                        <div class=" ml-1">{{duration}} hours <span class=" hidden xl:inline"> videos</span> </div>    
                    </div>
                    <div class=" flex items-center">
                        <div class="w-10 h-10 flex items-center justify-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess-board" class="svg-inline--fa fa-chess-board fa-w-16 w-8 h-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.9.2h-64v64h64zM0 64.17v64h64v-64zM128 .2H64v64h64zm64 255.9v64h64v-64zM0 192.12v64h64v-64zM383.85.2h-64v64h64zm128 0h-64v64h64zM128 256.1H64v64h64zM511.8 448v-64h-64v64zm0-128v-64h-64v64zM383.85 512h64v-64h-64zm128-319.88v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm255.9 0h64v-64h-64zM0 320.07v64h64v-64zm319.88-191.92v-64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-127.95h64v-64h-64zm0 191.93v64h64v-64zM64 384.05v64h64v-64zm128-255.9v-64h-64v64zm191.92 255.9h64v-64h-64zm-128-191.93v-64h-64v64zm128-127.95v64h64v-64zm-128 255.9v64h64v-64zm-64-127.95H128v64h64zm191.92 64h64v-64h-64zM128 128.15H64v64h64zm0 191.92v64h64v-64z"></path></svg>
                        </div>
                        <div class=" ml-1">{{course.totalPuzzles}} puzzles</div>    
                    </div>
                    <div class=" flex items-center">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <div class=" ml-1">Lifetime access</div>
                    </div>
                    <div class=" flex items-center">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                        <div class=" ml-1">Free updates</div>    
                    </div>
            </div>
            <!-- <div class=" mt-auto text-3xl mb-8 "> 30$</div> -->
            <div v-if="!isVisible" @click="buyCourse" class=" mt-6 md:mt-auto bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 hover:via-gray-400 text-gray-800 duration-150 w-full h-16 flex justify-center items-center text-xl cursor-pointer">
                <div v-if="sale" class="">
                    Buy now for <span class=" text-green-700 ml-1 tracking-tight"> 30$</span>  <span class=" ml-px text-sm mb-2 line-through text-red-800">40$</span>
                </div>
                <div class="">
                    Buy now for {{course.price}}$
                </div>
            </div>
            <div v-else class=" mt-6 md:mt-auto  bg-yellow-300 text-gray-800 hover:bg-yellow-400 duration-150 w-full h-16 flex flex-col justify-center items-center text-lg cursor-pointer">
                <div class="">
                    You have already bought this course
                </div>
                <div class="">Continue to learn</div>
            </div>
          </div>
          <!-- <div class=" col-span-1 md:hidden"></div> -->

      </div>
      <div class=" flex flex-col md:flex-row items-start  mb-16">
          <!-- <div class="col-span-7"></div> -->
          <div class=" w-full  md:w-7/10 md:pr-4">
              <div class=" border bg-white mb-6 p-5 pt-2">
                  <div class=" text-center text-2xl italic ">Description</div>
                  <div class=" whitespace-pre-line ">{{course.description}}</div>
              </div>
            
            <div class=" text-center text-2xl italic ">Schedule</div>
             <schedule v-if="curriculum" :curriculum="curriculum" :pictureUri="course.pictureUri" class=" " />

          </div>
          <div class="col-span-3  md:w-3/10 mt-4 md:mt-0 flex flex-col">
            <TeacherCard v-if="course.author" :profile="course.author" class=" mb-4"/>
            <reviews v-if="course.reviewStats &&totalReviews" class="" :averageRating="averageReviews" :reviewStats="course.reviewStats" :registedStudents='course.registedStudents' :totalReviews='totalReviews' />
          </div>
          <!-- <div class="">sdgd</div> -->
      </div>
  </div>
</template>

<script>
// import plyr from 'plyr'
import Schedule from '~/components/course/Schedule'
import Plyr from '~/components/common/PlyrVideo'
import Reviews from '~/components/course/Reviews'
import TeacherCard from '~/components/course/TeacherCardPublic'
import Axios from 'axios'
export default {
middleware:['common'],
components:{
    Schedule,Reviews,Plyr,TeacherCard
},
mounted() {
    // this.player = new plyr(this.$refs.plyr)
},
data() {
    return {
        player:null,
        sale:false,
        course:{},
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
    isVisible() {
        const temp  = JSON.parse(localStorage.getItem('boughtcourses')) 
        // console.log(typeof(temp))
        if(!temp) return false
        if(temp.find(courseId =>courseId == this.$route.params.id)>=0) return true
        return false
    },
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
        // const {profileData} = await Axios.get('http://localhost:4000/')
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
// .page {
//  --plyr-color-main:black;
// }
// .text {
//     color:var(--plyr-color-main)
// }
/* <link rel="stylesheet" href="" /> */
</style>