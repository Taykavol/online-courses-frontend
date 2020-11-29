<template>
<div class=" flex">

  <div  @mouseover="isVisible=true" @mouseleave="isVisible=false"  class="  cursor-pointer bg-white  relative card   ">
    <div v-if="course.sale==true" class=" absolute z-50 left-0">
        <div class="sale bg-red-600">88%</div>
    </div>
    <div class="flex  max-w-lg md:max-w-2xl  h-48">
      <div class="h-full w-1/3   rounded-lg rounded-r-none relative">
        <img
          class="h-full  w-full object-cover"
          :src="course.pictureUri"
          alt="week internet"
        />
        <div v-show="isVisible" class=" absolute inset-0 bg-gray-700 opacity-50 flex justify-center items-center  ">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16 w-16 h-16 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
            </div>
      </div>
      <div class="w-full md:w-2/3 px-4 py-2 h-full   flex flex-col">
        <div class=" ">
          <p class="text-xl text-gray-800 font-medium  leading-6  lg:overflow-visible lg:whitespace-normal  ">
            {{course.title}}
          </p>
        </div>
        <div class="flex items-baseline space-x-1 mt-1 ">
            <div class=" bg-blue-700 text-white px-1 rounded-lg font-sans font-semibold text-xs">GM</div>
            <div class="">{{course.author?course.author.teacherName:''}}</div>
        </div>
        <div class=" mt-auto flex items-center">
            <img src="/icons/chess-clock-svgrepo-com.svg" class="h-10 " alt="">
            <div class=" ml-1  ">{{course.duration?duration:'0:00'}} hours</div>
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
      </div>
    </div>
  </div>
  <div class=" flex flex-col justify-between">
      <div @click="confirmVerification()" class=" p-1 text-green-500  ">
          <svg class="w-10 h-10 cursor-pointer transform duration-150 hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
      </div>
      <div class=" p-1  text-red-500   ">
          <svg class="w-10 h-10 cursor-pointer transform duration-150 hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
      </div>
      <div class=" p-1 text-indigo-700 bg-white border-l ">
          <svg class="w-10 h-10 cursor-pointer transform duration-150 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
      </div>
      <div class=" p-1 text-orange-700 bg-white border-l  ">
          <svg @click="$router.push(`course/${course.id}`)" class="w-10 h-10 cursor-pointer transform duration-150 hover:scale-110 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
      </div>
      
  </div>
</div>
</template>

<script>
import Axios from 'axios';
export default {
  props:{
    sale:{
      type:Boolean,
      default:false
    },
    course:{
      type:Object,
      pictureUri:String
    }
  },
  data() {
    return {
      // averageRating:4.5,
      isVisible:false
    }
  },
  computed: {
    numberReviews() {
      const stats = this.course.reviewStats
      return stats.reduce((acc,val)=>acc+val)
    },
    averageRating() {
      const stats = this.course.reviewStats
      const numReviews = this.numberReviews
      if(numReviews==0) return 0 
      return stats.reduce((acc,val,index)=>acc+val*(index+1))/numReviews
    },
    duration() {
      const temp = this.course.duration
      const hours = Math.floor(temp / 3600);
      const minutes = Math.floor(Math.floor(temp / 60) % 60);
      return `${hours}:${minutes>=10?minutes:'0'+ minutes}`
    }
  },
  methods:{
    async confirmVerification() {
      if(confirm('Are you sure, you want to continue?'))
      await Axios({url:`buildcourse/publish/${this.course.id}`, method:"PUT"})
    }
  }
};
</script>

<style lang='scss'>
.card {
    width: 30rem;
}
.sale {
	position: relative;
	// display: inline-block;
	// background: orange;
	color: white;
	height: 2.5rem;
	width: 2.5rem;
	text-align: center;
	vertical-align: middle;
	line-height: 2.5rem;
	// margin: 45vh 45vw;
	transform: rotate(-20deg);
	animation: beat 1s ease infinite alternate;
	&:before,
	&:after {
		content:"";
		position: absolute;
		background: inherit;
		height: inherit;
		width: inherit;
		top: 0;
		left: 0;
		z-index: -1;
		transform: rotate(30deg);
	}
	&:after {
		transform: rotate(60deg);
    }
    @keyframes beat {
	from {	transform: rotate(-20deg) scale(1); }
	to {	transform: rotate(-20deg) scale(1.1); }
}
}
</style>
