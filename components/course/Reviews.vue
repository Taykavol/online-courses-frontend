<template>
  <!-- component -->
<!-- review item -->
<div class="bg-white  w-full  border-l border-t border-r ">
   <div class=" px-4 " >
      <div class=""></div>
      
      <div class=" flex flex-col justify-center items-center">
         <!-- <div  class="flex items-center mt-1">
            <div class="  mr-1 text-3xl text-orange-600 tracking-tighter font-semibold  ">{{ Math.floor(averageRating*100)/100}}</div>
            <div class=" flex">
               <svg
                  v-for="(index,item) of 5"
                  :key="index"
                  :class="{'text-yellow-500':index<=averageRating}"
                  class="w-6 h-6 fill-current text-gray-400 ml-1 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
               >
                  <defs>
                     <linearGradient id="half_grad0">
                           <stop :offset="100*(averageRating-Math.floor(averageRating))+'%'" stop-color="#ecc94b"/>
                           <stop offset="0%" stop-color="#cbd5e0" stop-opacity="1" />
                     </linearGradient>
                  </defs>
                  <path
                     :fill="index==Math.floor(averageRating)+1?`url(#half_grad0)`:''"
                     d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
               </svg>
            </div>
         </div>
         <div class=" flex items-baseline -mt-3">
            <div class="text-gray-800 font-semibold mt-1 ml-1">({{totalReviews}} reviews)</div>
            <div class="mt-1 ml-1 tracking-tight text-lg">{{registedStudents}} students</div>
         </div> -->

         <div  class="flex items-center mt-4  ml-2">
                <div class=" flex">
                <svg
                    v-for="(index,item) of 5"
                    :key="index"
                    :class="{'text-yellow-500':index<=averageRating}"
                    class="w-5 h-5 fill-current text-gray-400  "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <defs>
                        <linearGradient id="half_grad0">
                            <stop :offset="100*(averageRating-Math.floor(averageRating))+'%'" stop-color="#ecc94b"/>
                            <stop offset="0%" stop-color="#cbd5e0" stop-opacity="1" />
                        </linearGradient>
                    </defs>
                    <path
                        :fill="index==Math.floor(averageRating)+1?`url(#half_grad0)`:''"
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                    />
                </svg>
                </div>
                <div class="ml-1  text-lg text-orange-600 tracking-tighter font-semibold  ">{{ Math.floor(averageRating*100)/100}}</div>
                <div class=" flex  text-base ">
                    <div class="text-gray-800 font-semibold  ml-1">({{totalReviews}})</div>
                    <div class=" ml-1 tracking-tight text-base truncate ">{{registedStudents}} students</div>
                </div>
         </div>
      </div>
      <div v-if="percents" :class="{'border-b-2':!this.reviews}" class="   pb-3 flex flex-col-reverse">
         <div  v-for="(item,index) in percents" :key="index" class="flex items-baseline mt-1">
            <div class=" w-1/5 text-blue-600 tracking-tighter text-right mr-2">
               <span>{{index+1}} star</span>
            </div>
            <div class="w-3/5">
               <div class="bg-gray-300 w-full rounded-lg h-2">
                  <div :style='`width:${Math.floor(item) }%`' class=" bg-gray-600 rounded-lg h-2"></div>
               </div>
            </div>
            <div class="w-1/5 text-gray-700 pl-3">
               <span class="text-sm">{{Math.floor(item)}}%</span>
            </div>
         </div>
      </div>
   </div>
   <div class="">
      <div @click="setReviews" v-if="this.reviews.length==0" class=" bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 hover:via-purple-300 text-center p-4 text-xl text-gray-700 cursor-pointer hover:text-gray-900">
         Load last 5 reviews
      </div>
       <div v-else class=" flex flex-col">
          <review class=" border-b border-t" v-for="(item,index) in reviews" :review="reviews[index]" :key="index"/>
           <!-- {{this.reviews[0]}} -->
       </div>
   </div>
</div>
</template>

<script>
import Axios from 'axios';
import Review from "~/components/common/Review.vue";
export default {
   components:{
     Review 
   },
props:{
   totalReviews:{
      type:Number
   },
   averageRating:{
      type:Number
   },
   registedStudents:{
      type:Number
   },
   // reviews:{
   //    type:Array
   // },
   reviewStats:{
      type:Array
   }
},
data() {
   return {
      percents:[],
      reviews:[]
   }
},
created() {
   console.log('av',this.averageRating)
   if(this.reviews) {
      for(let i=0;i<5;i++)
         if(this.totalReviews==0) this.percents[i]=0
         else 
         this.percents[i]=this.reviewStats[i]*100/this.totalReviews
   }
   this.percents.splice()
   // this.reviews 
   // const reducer = (accumulator, currentValue) => accumulator + currentValue;
   // const summa = this.stripe.reduce(reducer)
   // for(let i=0;i<5;i++) this.percents[i] = this.stripe[i]*100/summa
       
   // console.log('stripes',this.stripe)
},
methods:{
   async setReviews() {
      const {data} = await Axios.get(`/buildcourse/${this.$route.params.id}/review`)
      console.log(data)
      this.reviews = data
   }
}
}
</script>

<style>

</style>