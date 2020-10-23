<template>

    <div @click="pushToGo" @mouseover="isVisible=true" @mouseleave="isVisible=false" class="md:flex  rounded-lg shadow-lg cursor-pointer    max-w-lg md:max-w-2xl md:h-48  relative ">

      
      <!-- <div class=" absolute z-50">
        <svg class="w-10 h-10 -ml-4 -mt-4 text-yellow-500 animate-pulse cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      </div> -->
      
      <!-- <div v-show="isVisible" class="absolute inset-0 flex justify-center items-center">
        <div class=" text-white text-5xl bg-white">Learn</div>
      </div> -->
      <!-- onerror="this.src='https://ssl.gstatic.com/accounts/ui/avatar_2x.png'" -->
      <div class=" h-32 md:h-full w-full md:w-1/3   rounded-lg rounded-r-none relative ">
        <img
          class=" h-full  w-full object-cover"
          onerror="this.src='https://ssl.gstatic.com/accounts/ui/avatar_2x.png'"
          :src="course.pictureUri"
          alt="week internet"
        />
        <div v-show="isVisible&&!isReview" class=" absolute inset-0 bg-gray-700 opacity-50 flex justify-center items-center  ">
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
        </div>
        <div v-if="mode=='TEACHER'" :class="{'bg-gray-700':course.status=='BUILDING',' bg-orange-700':course.status=='VERIFYING',' bg-green-700':course.status=='PUBLISH'}" class="category absolute  text-white px-2 py-px">{{course.status}}</div>
      </div>
      <div class="w-full md:w-2/3 px-4 py-2 bg-white rounded-lg flex flex-col">
        <div class=" ">
          <p class="text-xl text-gray-800 font-medium  leading-6 md:truncate lg:overflow-visible lg:whitespace-normal ">
            {{course.title}}
          </p>
        </div>
        <div class="flex items-baseline space-x-1 mt-1">
            <div class=" bg-blue-700 text-white px-1 rounded-lg font-sans font-semibold text-xs">GM</div>
            <div class=" truncate">{{course.authorName}}</div>
        </div>

        <div class=" mt-auto flex items-center">
            <img src="/icons/chess-clock-svgrepo-com.svg" class="h-10 " alt="">
            <div class=" ml-1 truncate ">{{duration}} hours</div>
            <div v-if="!course.sale" class="ml-auto font-semibold text-xl ">{{course.price}}$</div>
            <div v-else class=" ml-auto">
              <div class=" flex float-right h-8">
                <div class=" font-semibold tracking-tighter float-right  text-xl text-green-800">
                    48$
                </div>
                <div class=" line-through -mt-1  text-red-800 text-xs font-semibold">60$</div>
              </div>
            </div>
        </div>
        
        <!-- <div v-if="mode=='BUYER'" class=" mt-auto  ">
          <div class="flex">
            <span class="text-xs font-semibold py-1">Your progress</span>
            <span class="text-xs font-semibold py-1 ml-auto text-blue-600"
              >{{course.progress}}%</span
            >
          </div>
          <div class="flex ">
            <div :style="`width:${course.progress}%`" class=" h-2 rounded rounded-r-none bg-blue-400"></div>
            <div :style="`width:${100-course.progress}%`" class=" bg-blue-100"></div>
          </div>
        </div> -->
        <!-- <div v-if="mode=='BUYER'" @click="showReview()" @mouseover="isReview=true" @mouseleave="isReview=false" class=" flex items-center mt-1 hover:text-blue-500  ">
          <svg
                  v-for="item of 5"
                  :key="item"
                  class="w-4 h-4 fill-current text-gray-500 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
               >
                  <path
                     d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
               </svg>
               
               <div class="text-sm ml-2 truncate "> 
                 Leave review
               </div>
        </div> -->
        <!-- <div class=" flex text-center ">
          <div class="w-1/2 border-2 border-red-400 mt-2 mr-2"> Review</div>
          <div class=" w-1/2 border-2 border-red-400  hover:bg-green-500 cursor-pointer mt-2">Continue </div>
        </div> -->
      </div>
    </div>
</template>

<script>
export default {
  components:{
  },
  props:{
    mode:{
      type:String,
      default:'USER'
    },
    course:{
      type:Object
    }
  },
  computed: {
    duration() {
      const temp = this.course.duration
      const hours = Math.floor(temp / 3600);
      const minutes = Math.floor(Math.floor(temp / 60) % 60);
      return `${hours}:${minutes>=10?minutes:'0'+ minutes}`
    }
  },
  created(){
    // console.log(this.course)
  },
  data() {
    return {
      isVisible:false,
      isReview:false
    }
  },
  methods:{
    showReview() {
      this.$modal.show(`review${this.course.id}`);
    },
    hideReviewButton() {
      this.reviewButtonVisible = false
    },
    pushToGo() {
      console.log('sdgdsf')
      this.$router.push(`coursebuild/${this.course.id}`)
    },
    
  }
};
</script>

<style lang='scss'>
.category {
  z-index: 20;
  top: 1rem;
  left: 0rem;
  // border-le: 2px solid black ;
  &:before{
    content: '';
    position: absolute;
    clip-path: polygon(100% 0, 100% 100%, 0% 100%, 50% 50%, 0% 0%);
    top: 0;
    left: -.9rem;
    width: 1rem;
    height: 100%;
    background-color: inherit;
    
  }
}
</style>