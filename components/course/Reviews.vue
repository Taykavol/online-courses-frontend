<template>
  <!-- component -->
<!-- review item -->
<div class="bg-white  w-full  border-l border-t border-r relative mt-10 ">
   <svg v-if="!reviewsViewer"  @click="setReviews();reviewsViewer=true" class=" z-50 p-1 text-purple-800 absolute right-0 -mt-10 w-10 h-10 transform duration-200 hover:scale-110 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
   <div class=" absolute inset-x-0 -mt-8 text-xl ">
      <div class=" text-center italic ">Reviews</div>
   </div>
   <!-- <img @click="setReviews(); reviewsViewer=!reviewsViewer" class=" absolute right-0 -mt-10 w-10 h-10 transform duration-200 hover:scale-110 cursor-pointer " src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUwNC4xMzEgNTA0LjEzMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBkPSJtMTUwLjMxOSA4My41MzZoMzIzLjgxMmMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMHYyMzYuMzE4YzAgMTEuMDQ2LTguOTU0IDIwLTIwIDIwaC0xNzUuMDkzbC00Ny45NzIgNjAuNzc2LTUwLjY3NC02MC43NzZoLTE3MC4zOTJjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwdi0yMzYuMzE4YzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwaDM4LjA1MiIgZmlsbD0iIzk5ZWJmYSIgZGF0YS1vcmlnaW5hbD0iIzk5ZWJmYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxnIGZpbGw9IiNmZmMxNDQiPjxwYXRoIGQ9Im0xMTYuNzYzIDE2Ny42MDEgMTguNDYyIDI5LjEzMyAzMy40MTMgOC41NTctMjIuMDAyIDI2LjU2MiAyLjE4NyAzNC40MjEtMzIuMDYtMTIuNzE3LTMyLjA2MSAxMi43MTcgMi4xODctMzQuNDIxLTIyLjAwMS0yNi41NjIgMzMuNDEyLTguNTU3eiIgZmlsbD0iI2ZmYzE0NCIgZGF0YS1vcmlnaW5hbD0iI2ZmYzE0NCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNTEuMDY1IDE2Ny42MDEgMTguNDYzIDI5LjEzMyAzMy40MTIgOC41NTctMjIuMDAxIDI2LjU2MiAyLjE4NyAzNC40MjEtMzIuMDYxLTEyLjcxNy0zMi4wNiAxMi43MTcgMi4xODctMzQuNDIxLTIyLjAwMi0yNi41NjIgMzMuNDEzLTguNTU3eiIgZmlsbD0iI2ZmYzE0NCIgZGF0YS1vcmlnaW5hbD0iI2ZmYzE0NCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zODUuMzY4IDE2Ny42MDEgMTguNDYzIDI5LjEzMyAzMy40MTIgOC41NTctMjIuMDAxIDI2LjU2MiAyLjE4NyAzNC40MjEtMzIuMDYxLTEyLjcxNy0zMi4wNiAxMi43MTcgMi4xODctMzQuNDIxLTIyLjAwMi0yNi41NjIgMzMuNDEzLTguNTU3eiIgZmlsbD0iI2ZmYzE0NCIgZGF0YS1vcmlnaW5hbD0iI2ZmYzE0NCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PGc+PHBhdGggZD0ibTQ3NC4xMzEgNzMuNTM3aC0zMjMuODEzYy0xMi44NCAwLTEyLjg1OCAyMCAwIDIwaDMyMy44MTNjNS41MTQgMCAxMCA0LjQ4NiAxMCAxMHYyMzYuMzE4YzAgNS41MTQtNC40ODYgMTAtMTAgMTBoLTE3NS4wOTNjLTMuMDYxIDAtNS45NTMgMS40MDEtNy44NSAzLjgwNGwtNDAuMzM2IDUxLjEwMi00Mi43ODEtNTEuMzFjLTEuOS0yLjI3OC00LjcxNC0zLjU5Ni03LjY4MS0zLjU5NmgtMTcwLjM5Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0yMzYuMzE4YzAtNS41MTQgNC40ODYtMTAgMTAtMTBoMzguMDUyYzEyLjg0IDAgMTIuODU4LTIwIDAtMjBoLTM4LjA1MmMtMTYuNTQyIDAtMzAgMTMuNDU4LTMwIDMwdjIzNi4zMThjMCAxNi41NDIgMTMuNDU4IDMwIDMwIDMwaDE2NS43MDlsNDcuNjc2IDU3LjE4YzQuMDI2IDQuODI5IDExLjYzMyA0LjczIDE1LjUzLS4yMDlsNDQuOTctNTYuOTcxaDE3MC4yNDZjMTYuNTQyIDAgMzAtMTMuNDU4IDMwLTMwdi0yMzYuMzE4YzAtMTYuNTQyLTEzLjQ1OC0zMC0zMC0zMHoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNTUuMzc3IDIwMi4yMDFjLTEuMDU5IDMuMjU4LS4zNzYgNi44MzEgMS44MSA5LjQ2OWwxOS40NzEgMjMuNTA3LTEuOTM1IDMwLjQ2NGMtMS41MiAyMy44NjUgMzQuMzEtMS40NzkgNDIuMDQtMS4zMjUgNy43OTcuMTU2IDQzLjU0MyAyNC45MiA0Mi4wNCAxLjMyNWwtMS45MzYtMzAuNDY0IDE5LjQ3Mi0yMy41MDdjNC41NDgtNS40ODkgMS43MjgtMTQuMjg4LTUuMjIxLTE2LjA2NmwtMjkuNTY5LTcuNTcyLTE2LjM0LTI1Ljc4MmMtMy44MTUtNi4wMjItMTMuMDU0LTYuMDU5LTE2Ljg5MyAwbC0xNi4zNCAyNS43ODItMjkuNTY5IDcuNTcyYy0zLjMxOS44NDktNS45NzEgMy4zMzgtNy4wMyA2LjU5N3ptNDUuNDAzIDQuMjJjNy4zOTMtMS44OTIgMTIuMjU5LTE0LjI2NSAxNS45ODItMjAuMTQgMy42NjMgNS43OCA4LjY2IDE4LjI2NiAxNS45ODIgMjAuMTRsMTguMTI2IDQuNjQyLTExLjkzNyAxNC40MWMtMS42MjUgMS45NjItMi40NCA0LjQ3MS0yLjI3OCA3LjAxM2wxLjE4NyAxOC42NzUtMTcuMzkzLTYuODk5Yy0yLjM2OS0uOTM5LTUuMDA2LS45MzktNy4zNzUgMGwtMTcuMzkzIDYuODk5IDEuMTg2LTE4LjY3NWMuMTYyLTIuNTQyLS42NTMtNS4wNTEtMi4yNzgtNy4wMTNsLTExLjkzNi0xNC40MXoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzEyLjQ1MSAyMDIuMjAxYy0xLjA1OS0zLjI1OC0zLjcxMS01Ljc0OC03LjAzLTYuNTk4bC0yOS41NjktNy41NzItMTYuMzQtMjUuNzgyYy0zLjgxNS02LjAyMi0xMy4wNTQtNi4wNTktMTYuODkzIDBsLTE2LjM0IDI1Ljc4Mi0yOS41NjkgNy41NzJjLTMuMzE5Ljg1LTUuOTcyIDMuMzQtNy4wMyA2LjU5OHMtLjM3NiA2LjgzMSAxLjgxIDkuNDY5bDE5LjQ3MiAyMy41MDctMS45MzYgMzAuNDY0Yy0xLjUyMSAyMy44NjQgMzQuMzExLTEuNDc5IDQyLjA0LTEuMzI1IDcuNzk3LjE1NiA0My41NDMgMjQuOTIgNDIuMDQgMS4zMjVsLTEuOTM2LTMwLjQ2NCAxOS40NzItMjMuNTA3YzIuMTg1LTIuNjM4IDIuODY4LTYuMjExIDEuODA5LTkuNDY5em0tMzkuMjE0IDIzLjI3MmMtMS42MjUgMS45NjItMi40NCA0LjQ3MS0yLjI3OCA3LjAxM2wxLjE4NyAxOC42NzVjLTYuMjQ1LTIuNDc3LTE0LjIxOS03LjYwNC0yMS4wOC03LjYwNC02LjgyOSAwLTE0Ljg1MiA1LjEzMy0yMS4wOCA3LjYwNGwxLjE4Ny0xOC42NzVjLjE2Mi0yLjU0Mi0uNjUzLTUuMDUxLTIuMjc4LTcuMDEzbC0xMS45MzctMTQuNDEgMTguMTI2LTQuNjQyYzcuMzkzLTEuODkyIDEyLjI1OS0xNC4yNjUgMTUuOTgyLTIwLjE0IDMuNjYzIDUuNzggOC42NiAxOC4yNjYgMTUuOTgyIDIwLjE0bDE4LjEyNiA0LjY0MnoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDQ2Ljc1NCAyMDIuMjAxYy0xLjA1OS0zLjI1OS0zLjcxMS01Ljc0OC03LjAzLTYuNTk4bC0yOS41NjktNy41NzItMTYuMzQtMjUuNzgyYy0zLjgxNS02LjAyMi0xMy4wNTQtNi4wNTktMTYuODkzIDBsLTE2LjM0IDI1Ljc4Mi0yOS41NjkgNy41NzJjLTYuOTA2IDEuNzY4LTkuNzk3IDEwLjU0My01LjIyMSAxNi4wNjZsMTkuNDcyIDIzLjUwNy0xLjkzNiAzMC40NjRjLTEuNTIgMjMuODYxIDM0LjI5My0xLjQ4IDQyLjA0LTEuMzI1IDcuNzgyLjE1NSA0My41NDMgMjQuOTI2IDQyLjA0IDEuMzI1bC0xLjkzNS0zMC40NjQgMTkuNDcxLTIzLjUwN2MyLjE4Ni0yLjYzNyAyLjg2OS02LjIxIDEuODEtOS40Njh6bS0zOS4yMTMgMjMuMjcyYy0xLjYyNSAxLjk2Mi0yLjQ0IDQuNDcxLTIuMjc4IDcuMDEzbDEuMTg2IDE4LjY3NS0xNy4zOTMtNi44OTljLTIuNDU4LS45MzktNC45MTctLjkzOS03LjM3NSAwbC0xNy4zOTMgNi44OTkgMS4xODctMTguNjc1Yy4xNjItMi41NDItLjY1My01LjA1MS0yLjI3OC03LjAxM2wtMTEuOTM3LTE0LjQxIDE4LjEyNi00LjY0MmM3LjM5My0xLjg5MiAxMi4yNTktMTQuMjY1IDE1Ljk4Mi0yMC4xNCAzLjY2MyA1Ljc4IDguNjYgMTguMjY2IDE1Ljk4MiAyMC4xNGwxOC4xMjYgNC42NDJ6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTEwMy44NTcgOTEuODQ1YzcuNTI3IDUuMTU4IDE3LjU3Ni0yLjMzNyAxNS4xNzUtMTAuOTczLTEuMTQzLTQuMTEyLTQuODctNy4xMDctOS4xMzktNy4zMTktNC4yNTktLjIxMS04LjI4NSAyLjQxNi05LjgxNSA2LjM5LTEuNjQ4IDQuMjg0LS4wODcgOS4zNzUgMy43NzkgMTEuOTAyeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==" /> -->
   <div class=" px-4 " >
      
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
               <span class="text-sm">({{reviewStats[index]}}) {{Math.floor(item)}}%</span>
            </div>
         </div>
      </div>
   </div>
   <div v-if="this.reviews.length!=0&&reviewsViewer" class=" flex flex-col">
          <review class=" border-b border-t" v-for="(item,index) in reviews" :review="reviews[index]" :key="index"/>
       </div>
   <!-- <div class="">
      <div @click="setReviews" v-if="this.reviews.length==0" class=" bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 hover:via-purple-300 text-center p-4 text-xl text-gray-700 cursor-pointer hover:text-gray-900">
         Load last 5 reviews
      </div>
       
   </div> -->
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
      reviews:[],
      reviewsViewer:false
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