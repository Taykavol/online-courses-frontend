<template>
  <div class=" border w-full">
     <modal @closed="getWindowWidth()" :name="`publicVideo`" :width="windowWidth>1024?`60%`:'90%'" :key="windowWidth" height="auto" class="">
       <VideoPreview :id="videoId" :key="videoId"/>
      </modal>
    <div v-for="(chapter,index) in curriculum" :key="index" class="">
      <div @click="clickEvent(index)" :class="{'bg-white newbg hover:text-gray-700':index%2==0,'bg-gray-200 hover:text-gray-700':index%2==1}" class=" lesson transform  duration-300  p-2 text-lg flex cursor-pointer">
        <div class="index flex items-center transform duration-300">
          <div style="background-color:#183153; color:#ffd43b" class=" px-3  rounded-lg mr-2 font-bold ">{{index+1}}</div>
          <div class=" text-sm ph2:text-lg ">{{chapter.name}}</div>
        </div>
        <div class="ml-auto text-xs ph2:text-sm  italic self-center mr-2"> {{chapter.lessons.length}} lesson<span v-if="chapter.lessons.length>1">s</span> </div>
        <div class=" text-xs ph2:text-sm hidden ph2:block  italic self-center mr-2">{{totalTime(chapter)}} </div>
        <div :class="{'rotate-180':isActive[index]}" class=" transform duration-150  self-center  ">
          <svg  class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>
        <div :ref="`card`" class="  panel border-b ">
          <div @click="lesson.preview?showVideo(lesson.video.vimeoId):''" :class="{'   cursor-default':!lesson.preview,'cursor-pointer':lesson.preview, 'border-t':index2==0,'border-b':index2!=chapter.lessons.length}"  class=" duration-300 relative  flex bg-white " @mouseover="isVisible[index*3+index2+1]=true; isVisible.splice()" @mouseleave="isVisible[index*3+index2+1]=false; isVisible.splice()"  v-for="(lesson,index2) in chapter.lessons" :key="index2"   >
            <div v-if="!lesson.preview" class=" absolute inset-0  pattern-dots-sm text-gray-400 z-0 "></div>
            <div class=" relative ml-4 self-center flex-none">
              <div class="relative">
                <img class=" h-16 w-24 p-2 ph2:h-20 ph2:w-32 object-cover " :src="`https://chess-courses.hb.bizmrg.com/${pictureUri}`" alt="">
                <div class=" time absolute z-50 bg-gray-800 px-1 text-white text-xs">{{videoDuration(lesson.video.duration)}}</div>
                <div v-if="lesson.preview&&isVisible[index*3+index2+1]" class=" absolute inset-0 bg-gray-900 m-2 opacity-25">
                  
                </div>
                <div v-if="lesson.preview" v-show="isVisible[index*3+index2+1]" class=" m-2 absolute inset-0  opacity-50 flex justify-center items-center  ">
                  <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                </div>
              </div>
            </div>
            <div class=" m-2 flex flex-col relative">
              <!-- {{lesson.order+1}}. -->
              <div   class=" text-sm ph2:text-lg font-medium self-start "> {{lesson.name}}</div>
              <!-- <div class="h-1 w-24 bg-blue-200"></div> -->
              <div class=" hidden ph2:block ">{{lesson.description}}</div>
            </div>
              <svg v-if="!lesson.preview" class="w-10 h-10 ml-auto self-center mr-4 text-gray-700 relative    " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>

            <!-- <div v-if="!lesson.preview" class=" absolute bg-gray-500 inset-0 opacity-25 flex justify-center items-center text-black cursor-default ">
              <svg class="w-12 h-12   " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div> -->
          </div>
        </div>
    </div>
  </div>

</template>

<script>
import VideoPreview from '~/components/common/PlyrVideo'
export default {
  components:{
    VideoPreview,
  },
  props:{
    curriculum:{
      type:Array
    },
    pictureUri:{
      type:String
    }
  },
  methods:{
    random(range) {
      return Math.floor(Math.random()*range)
    },
    randomBoolean() {
      return !!Math.round(Math.random()) 
    }
  },
  created() {
    this.setActive()
    this.$nextTick(()=>{
        this.$refs.card[0].style.maxHeight = this.$refs.card[0].scrollHeight + "px";
    })
  },
  data() {
    return {
      isActive:[],
      isVisible:[],
      videoId:'',
      windowWidth:document.documentElement.clientWidth,
    }
  },
  
  methods: {
    getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
        // this.$modal.show('publicVideo')
      },
    setActive() {
      for(let i =0;i<4;i++) {
        this.isActive[i]=true
      }
      this.isActive[0]=false
    },
    totalTime(chapter) {
      let temp =0
      chapter.lessons.forEach(lesson=>temp=temp+lesson.video.duration)
      const totalTime = this.fullVideoDuration(temp)
      return totalTime 
    },
    clickEvent(index) {
      this.isActive[index]=!this.isActive[index]; 
      if(this.$refs.card[index].style.maxHeight) {
        this.$refs.card[index].style.maxHeight = null
      } else {
        this.$refs.card[index].style.maxHeight = this.$refs.card[index].scrollHeight + "px";
      }
      this.isActive.splice();
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
      const seconds = temp%60
      // const seconds = temp%60
      return `${hours}:${minutes>=10?minutes:'0'+ minutes}:${seconds>=10?seconds:'0'+seconds}`
    },
    showVideo ( videoId) {
      console.log(videoId)
      this.$modal.show('publicVideo')
      this.videoId = videoId
      // const controls =['play-large','rewind', 'play','fast-forward', 'progress', 'current-time', 'mute', 'volume',  'settings', 'pip', 'airplay', 'fullscreen']
    //   this.player = new plyr(this.$refs.plyr,{
    //   controls,
    //   vimeo:{
    //     responsive:true,
    //   }
    // });
      // console.log('Googd?')

    // this.player.source = {
    //     type: 'video',
    //     sources: [
    //         {
    //         src: '471962833',
    //         provider: 'vimeo',
    //         },
    //     ],
    //     };
    }
  }
}
</script>

<style>
.time {
   bottom: .75rem;
   right: .75rem;
}
.panel {
  max-height: 0;
  overflow: hidden;
  transition: all .3s ease-out;
}
.newbg {
  background-color: rgba(255, 255, 255, 0.397);
}
/* .pattern-vertical-lines-sm {
 background: repeating-linear-gradient(
  45deg,
  rgba(255, 255, 255, 0.02),
  rgba(255, 255, 255, 0.80) 20px
);
} */
.lesson:hover > .index  {
  @apply translate-x-px
}
/* .fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */
</style>