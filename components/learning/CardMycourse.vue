<template>

    <div   class=" ">
          <modal v-if="!boughtCourse.review" :name="`review${boughtCourse.id}`" width="40%" height="auto" class="">
            <course-review class="" :fn="hideReviewButton" :course="boughtCourse"/>
          </modal>
          <div @click="pushToGo" @mouseover="isVisible=true" @mouseleave="isVisible=false" class="md:flex  rounded-lg shadow-lg cursor-pointer    max-w-lg md:max-w-2xl md:h-48  relative">
            <div class=" h-32 md:h-full w-full md:w-1/3   rounded-lg rounded-r-none relative ">
              <img
                class=" h-full  w-full object-cover"
                :src="'https://chess-courses.hb.bizmrg.com/'+boughtCourse.course.pictureUri"
                alt="week internet"
              />
              <div v-show="isVisible&&!isReview" class=" absolute inset-0 bg-gray-700 opacity-50 flex justify-center items-center  ">
                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
              </div>
              <div v-if="mode=='TEACHER'" :class="{'bg-gray-700':boughtCourse.course.status=='BUILDING',' bg-orange-700':boughtCourse.course.status=='VERIFYING',' bg-green-700':boughtCourse.course.status=='PUBLISH'}" class="category absolute  text-white px-2 py-px">{{boughtCourse.course.status}}</div>
            </div>
            <div class="w-full md:w-2/3 px-4 py-2 bg-white rounded-lg flex flex-col">
              <div class=" ">
                <p class="text-xl text-gray-800 font-medium  leading-6 md:truncate lg:overflow-visible lg:whitespace-normal ">
                  {{boughtCourse.course.title}}
                </p>
              </div>
              <div v-if="boughtCourse.course.author" class="flex items-baseline space-x-1 mt-1">
                  <div class=" bg-blue-700 text-white px-1 rounded-lg font-sans font-semibold text-xs">{{boughtCourse.course.author.title}}</div>
                  <div class=" truncate">{{boughtCourse.course.author.teacherName}}</div>
              </div>
              
              <div v-if="mode=='BUYER'" class=" mt-auto  ">
                <div class="flex">
                  <span class="text-xs font-semibold py-1">Your progress</span>
                  <span class="text-xs font-semibold py-1 ml-auto text-blue-600"
                    >{{boughtCourse.progress}}%</span
                  >
                </div>
                <div class="flex ">
                  <div :style="`width:${boughtCourse.progress}%`" class=" h-2 rounded rounded-r-none bg-blue-400"></div>
                  <div :style="`width:${100-boughtCourse.progress}%`" class=" bg-blue-100"></div>
                </div>
              </div>
              <div v-if="mode=='BUYER'&&boughtCourse.reviewId==null" @click.stop="showReview()" @mouseover="isReview=true" @mouseleave="isReview=false" class=" flex items-center mt-1 hover:text-blue-500  ">
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
                    
                    <div  class="text-sm ml-2 truncate "> 
                      Leave review
                    </div>
              </div>
            </div>

          </div>
    </div>
</template>

<script>
import CourseReview from "~/components/learning/ReviewBuilder.vue";
export default {
  components:{
    CourseReview
  },
  props:{
    mode:{
      type:String,
      default:'USER'
    },
    boughtCourse:{
      type:Object
    }
  },
  data() {
    return {
      isVisible:false,
      isReview:false
    }
  },
  methods:{
    showReview() {
      this.$modal.show(`review${this.boughtCourse.id}`);
    },
    hideReviewButton() {
      this.reviewButtonVisible = false
    },
    pushToGo() {
      this.$router.push(`/player/${this.boughtCourse.id}`)
      console.log('sdgdsf')
      // this.$router.push(`coursebuild/${this.course.id}`)

    }
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