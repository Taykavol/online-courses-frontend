<template>
  <div @click="$router.push(`course/${course.id}`)" @mouseover="isVisible=true" @mouseleave="isVisible=false"  class=" cursor-pointer   relative  px-6 pb-3 ">
    <div v-if="course.sale==true" class=" absolute z-50 left-0">
                <div class="sale bg-red-600">88%</div>
            </div>
    <div class="md:flex    rounded-lg shadow-lg    max-w-lg md:max-w-2xl md:h-48">
      <div class="h-40 md:h-full w-full md:w-1/3   rounded-lg rounded-r-none relative">
        <img
          class="h-full  w-full object-cover"
          :src="course.pictureUri"
          alt="week internet"
        />
        <div v-show="isVisible" class=" absolute inset-0 bg-gray-700 opacity-50 flex justify-center items-center  ">
          <!-- <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess-king" class="svg-inline--fa fa-chess-king fa-w-14 w-16 h-16 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 448H48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm16-288H256v-48h40a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8h-40V8a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v40h-40a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h40v48H32a32 32 0 0 0-30.52 41.54L74.56 416h298.88l73.08-214.46A32 32 0 0 0 416 160z"></path></svg> -->
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16 w-16 h-16 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
          <!-- <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg> -->
          <!-- <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> -->
              <!-- <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg> -->
            </div>
      </div>
      <div class="w-full md:w-2/3 px-4 py-2 bg-white rounded-lg flex flex-col">
        <div class=" ">
          <!-- <div class=" flex float-right h-8">
            <div class=" font-semibold tracking-tighter float-right  text-xl text-green-800">
                48$
            </div>
            <div class=" line-through -mt-1 ml-1 text-red-800 text-sm font-semibold">60$</div>
          </div> -->
          <p class="text-xl text-gray-800 font-medium  leading-6 md:truncate lg:overflow-visible lg:whitespace-normal  ">
            {{course.title}}
          </p>
        </div>
        <div class="flex items-baseline space-x-1 mt-1 truncate">
            <!-- <div class="">By</div> -->
            <div class=" bg-blue-700 text-white px-1 rounded-lg font-sans font-semibold text-xs">GM</div>
            <div class="">{{course.author?course.author.teacherName:''}}</div>
        </div>
        <div class=" flex items-center mt-1 " >
          <svg
                  v-for="(index,item) of 5"
                  :key="index"
                  :class="{'text-yellow-500':index<=averageRating}"
                  class="w-5 h-5 fill-current text-gray-500 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
               >
                  <defs>
                     <linearGradient id="half_grad0">
                           <stop :offset="100*(averageRating-Math.floor(averageRating))+'%'" stop-color="#ecc94b"/>
                           <stop offset="0%" stop-color="#a0aec0" stop-opacity="1" />
                     </linearGradient>
                  </defs>
                  <path
                     :fill="index==Math.floor(averageRating)+1?`url(#half_grad0)`:''"
                     d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
               </svg>
                <div v-if="numberReviews" class="ml-1  text-lg text-orange-600 tracking-tighter font-semibold  ">{{ Math.floor(averageRating*100)/100}}</div>
               <div class="text-sm ml-1 truncate "> 
                 <span  class=" font-semibold">({{numberReviews}})</span> 
                 <span class="  ">{{course.registedStudents}} Students</span>
               </div>
        </div>
        <div class=" mt-auto flex items-center">
            <img src="/icons/chess-clock-svgrepo-com.svg" class="h-10 " alt="">
            <div class=" ml-1 truncate ">{{course.duration?duration:'0:00'}} hours</div>
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
</template>

<script>
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
  }
};
</script>

<style lang='scss'>
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
