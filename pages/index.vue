<template>
  <div class="  font-exo  ">
      <!-- <div class=" section--canvas -mt-16 ">
          <canvas class=" w-full h-full  " style="clip-path: polygon(0 0, 100% 0%, 100% 30%, 0% 100%);" ref="canvas" width="32px" height="32px"/>

      </div> -->
      <div  class=" section--canvas   relative   ">
        <div  class=" absolute  prisma-bg w-screen  inset-0 z-0  mt-8 ">
            <div class=" relative w-full h-full">
                <div class=" absolute pattern-dots-lg text-gray-700  w-1/3 h-full bottom-0 -mb-20">

                </div>
            </div>
        </div>
          
      <div class="  flex flex-col sm:flex-row  justify-center w-full h-full  space-x-6      ">
            <div class="   text-5xl w-full sm:w-7/12 lg:w-1/3 mt-12  text-gray-800 leading-none tracking-tight break-normal  relative ">
                <div class=" z-10 relative text-gray-300 flex flex-col -mt-64 sm:mt-0 ">
                    <div class=" z-10 relative mt-8 w-full font-monser">
                        Amazine platform for <span> <div class=" inline-block text-blue-500 animate__animated animate__lightSpeedInLeft">learning </div> and <span class=" text-orange-500 animate__animated animate__flipInX"> creating </span> chess courses </span>
                    </div>
                    <div class="self-start w-full flex justify-center sm:justify-start space-x-4 font-neucha text-gray-300 tracking-normal ">
                        <nuxt-link to="/teachersinfo"   class=" flex items-center   text-xl mt-10  bg-green-600 rounded-lg  p-2  hover:bg-green-700 cursor-pointer duration-1000 transform scale-98    "> 
                            <div class=" mr-2">I am a teacher</div>
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg>
                        </nuxt-link>
                        <!-- <div   class=" flex items-center   text-xl mt-10   bg-purple-600 rounded-lg  p-2  hover:bg-purple-700 cursor-pointer duration-1000 transform scale-98    "> 
                            <div class=" mr-2 ">I am a student</div>
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class=" relative  sm:w-1/4  ">
                <!-- <img class=" absolute bottom-0 mb-40 xl:mb-48 -ml-56 xl:-ml-64   h-64 " src="/images/bg/chess-pieces.png" alt=""> -->
                <div class="absolute ">
                    <div  class="   mt-12 rounded-2xl relative   phone--card  bg-white  border-2 border-t-4 border-gray-600 border-opacity-25 ">
                    <img style="height:18rem; width:20rem" class=" select-none absolute bottom-0 right-0 mb-10  -mr-64    " src="/images/bg/chess-pieces.png" alt="">
                        <div class=" m-4 mb-20 h-full flex flex-col items-center">
                            <div class=" flex">
                                <div class=" rounded-2xl w-4 h-4 bg-gray-800 flex items-center justify-center -mt-3 mb-4 ">
                                    <div class=" w-1 h-1 bg-white rounded-full">

                                    </div>
                                </div>
                                <!-- <div class="">
                                    {{time.getTime()}}
                                </div> -->
                            </div>
                            <div class=" mt-8 ">
                                <puzzle :class="{'animate__jackInTheBox':firstLoaded==false}" v-if="currentPuzzle" class="animate__animated   " :key="currentPuzzle.fen" :fn="onSolvePuzzle" :puzzle='currentPuzzle'/>
                            </div>
                            <div class=" flex mt-auto space-x-3">
                                <svg class="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <!-- <div class=" w-6 h-6 bg-gray-800 rounded-full text-white flex justify-center items-center">1</div> -->
                                <div @click="setPuzzle(0)" v-if="!isPuzzlesSolved[0]" :class="{'bg-blue-800':currentNumberOfPuzzle==0, 'bg-gray-800':currentNumberOfPuzzle!=0}" class="w-6 h-6  rounded-full text-white flex justify-center items-center">2</div>
                                <svg v-else class="w-6 h-6 text-green-700 animate__animated animate__jackInTheBox" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <div @click="setPuzzle(1)" v-if="!isPuzzlesSolved[1]" :class="{'bg-blue-800':currentNumberOfPuzzle==1, 'bg-gray-800':currentNumberOfPuzzle!=1}" class="w-6 h-6  rounded-full text-white flex justify-center items-center">3</div>
                                <svg v-else class="w-6 h-6 text-green-700 animate__animated animate__jackInTheBox" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <svg class="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <div @click="setPuzzle(2)" v-if="!isPuzzlesSolved[2]" :class="{'bg-blue-800':currentNumberOfPuzzle==2, 'bg-gray-800':currentNumberOfPuzzle!=2}" class="w-6 h-6  rounded-full text-white flex justify-center items-center">5</div>
                                <svg v-else class="w-6 h-6 text-green-700 animate__animated animate__jackInTheBox" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div class="mt-auto mb-8 flex justify-around w-full text-sm">
                                <div class="  bg-blue-800 text-white p-2 rounded-xl">
                                    Solve puzzles
                                </div>

                                <div class=" hover:bg-blue-800 cursor-pointer  bg-gray-800 text-white p-2 rounded-xl">
                                    Watch video
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    
        <!-- <div style="clip-path: polygon(80% 11%, 100% 11%, 100% 44%, 0 100%, 0 42%);" class=" top-0 absolute h-full w-full cool-path z-0 bg-gradient-to-r from-gray-100 via-indigo-100 to-gray-100 ">
          <canvas class=" w-full h-full  "  ref="canvas" width="32px" height="32px"/>
        </div> -->
      </div>
      <div class="lg:container mx-auto relative filter--container ">
            <div ref="filters"   class="-mt-24 p-6 py-3 border  col-span-2 flex flex-col sm:flex-row lg:justify-between  bg-white my-4   relative   ">
                    <div  class="delay-500  duration-500 flex flex-col ph2:flex-row sm:block justify-between">
                        <div class="  border-gray-300 rounded-t-lg flex flex-col items-center">
                            <div class=" text-sm text-center">Review</div>
                            <Select   class=" relative w-48" :ignoreValue="[]" :currentValue="reviewFilter" :options="reviewOptions"/>
                        </div>
                        <div class="  border-gray-300 rounded-t-lg flex flex-col items-center">
                            <div class=" text-sm text-center">Category</div>
                            <Select   class=" relative w-48" :ignoreValue="[]" :currentValue="categoryFilter" :options="categoryOptions"/>
                        </div>
                    </div>
                    <div  style=" opacity:0.99" class=" w-full sm:w-1/2 mt-8 delay-500  duration-500 mx-2 z-0 ">
                        <div class=" text-sm text-center">Low &larr; Difficulty &rarr; High</div>
                        <VueSlider :lazy="true"   @change="changeLevel(value)" class=" " :marks="marks1" v-model="value" :data="data" >
                            <template v-slot:label="{ label,  value }">
                                <div class="vue-slider-mark-label " 
                                :class="
                                {'bg-blue-700 text-white px-1 rounded-lg font-sans font-semibold text-xs':value==2500,
                                'bg-red-700 text-white px-1 rounded-lg font-sans font-semibold text-xs':value==2400,
                                'bg-gray-700 text-white px-1 rounded-lg font-sans font-semibold text-xs':value==2300,
                                'bg-purple-700 text-white px-1 rounded-lg font-sans font-semibold text-xs':value==2000,
                                'bg-wk w-5 h-5  ':value==2800,
                                'bg-wch w-5 h-5  ':value==2900,
                                }">{{label}}</div>
                            </template>
                        </VueSlider>
                        <div class=" mt-8">
                        </div>
                    </div>

                    <div  class="delay-500  duration-500 flex flex-col ph2:flex-row sm:block justify-between">
                        <div class="  border-gray-300 rounded-t-lg flex flex-col items-center">
                            <div class=" text-sm text-center">Price</div>
                            <Select  class="  relative w-48" :ignoreValue="[]" :currentValue="priceFilter" :options="priceOptions"/>
                        </div>
                        <div class="  border-gray-300 rounded-t-lg flex flex-col items-center">
                            <div class=" text-sm text-center">Sale</div>
                            <Select   class="  relative w-48" :ignoreValue="[]" :currentValue="saleFilter" :options="saleOptions"/>
                        </div>
                    </div>
                    
            </div>
            <div class=" grid grid-cols-8  mt-4 section--courses relative">
                <div class="pattern-dots-lg absolute w-1/3 h-64 text-gray-400 right-0 mt-48 -mr-48"></div>
                
                <div   class="col-span-10 sm:col-span-10 lg:col-span-8 grid grid-cols-9 gap-y-12 ph2:gap-y-0 gap-x-6 relative">
                    
                    
                    
                    <!-- 1 column -->
                    <div v-if="loading[0]" class="col-span-10 ph2:col-span-3 mx-8">
                        <Skeleton class="mt-2" v-for="(item,index) in 5" :key="index"/>
                    </div>
                    <div v-else class="col-span-10 ph2:col-span-3 select-none ">
                        <div v-if="title1&&title2&&title3" class="  text-center   flex justify-center ph2:justify-start ">

                        <Select class="  relative w-48" :ignoreValue="[title2.selectedValue,title3.selectedValue]" :currentValue="title1.selectedValue" :options="title1.options"/>
                    </div>
                    
                        <column-courses :size=3 :title="title1" :courses='setCourse(checked)'></column-courses>
                    </div>
                    <!-- 2 column -->
                    <div v-if="loading[1]" class="col-span-10 ph2:col-span-3 mx-8">
                        <Skeleton class="mt-2 " v-for="(item,index) in 5" :key="index"/>
                    </div>
                    <div v-else class="col-span-10 ph2:col-span-3 select-none ">
                        <div v-if="title1&&title2&&title3" class="  text-center flex justify-center ph2:justify-start">
                        <Select class="  relative w-48" :ignoreValue="[title1.selectedValue,title3.selectedValue]" :currentValue="title2.selectedValue" :options="title2.options"/>
                    </div>
                        <column-courses :size=3 :title="title1"  :courses='setCourse(checked1)' ></column-courses>
                    </div>
                    <!-- 3 column -->
                    <div v-if="loading[2]" class="col-span-10 ph2:col-span-3 mx-8">
                        <Skeleton class="mt-2 " v-for="(item,index) in 5" :key="index"/>
                    </div>
                    <div v-else class="col-span-10 ph2:col-span-3 select-none ">
                        <div v-if="title1&&title2&&title3" class="  text-center flex justify-center ph2:justify-start ">
                        <Select class="  relative w-48" :ignoreValue="[title1.selectedValue,title2.selectedValue]" :currentValue="title3.selectedValue" :options="title3.options"/>
                    </div>
                        <column-courses :size=3 :title="title1"  :courses='setCourse(checked2)' ></column-courses>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import Select from '~/components/common/Select'
import Skeleton from '~/components/common/Skeleton'
import Puzzle from '~/components/common/Puzzle'
import Registration from '~/components/home/Registration'
import Newdrop from '~/components/home/Newdrop'
import ColumnCourses from '~/components/home/Columncourses'
import Axios from 'axios'
import VueSlider from "vue-slider-component";
import Plyr from '~/components/common/PlyrVideo';


export default {
components:{
    Newdrop,ColumnCourses,Puzzle,Registration,Skeleton,Select,VueSlider,Plyr
},
middleware:['common'],
 created() {
    this.title1={
        selectedValue:'Best courses',
        options:[
        {title:'Best courses',text:'Best courses', url:'/images/courselist/trophy-solid.svg',fn:()=>this.onChange(0,this.checked, this.title1)},
        {title:'Recommended',text:'Recommended', url:'/images/courselist/thumb.svg',fn:()=>this.onChange(1,this.checked,this.title1)}, 
        {title:'Top players',text:'Top players', url:'/images/courselist/graphic-designer.svg',fn:()=>this.onChange(2,this.checked,this.title1)}, 
        {title:'New courses',text:'New courses', url:'/images/courselist/fire.svg',fn:()=>this.onChange(3,this.checked,this.title1)}
        ]}
    this.title2= {
        selectedValue:'Recommended',
        options:[
        {title:'Best courses',text:'Best courses', url:'/images/courselist/trophy-solid.svg',fn:()=>this.onChange(0,this.checked1,this.title2)},
        {title:'Recommended',text:'Recommended', url:'/images/courselist/thumb.svg',fn:()=>this.onChange(1,this.checked1,this.title2)}, 
        {title:'Top players',text:'Top players', url:'/images/courselist/graphic-designer.svg',fn:()=>this.onChange(2,this.checked1,this.title2)}, 
        {title:'New courses',text:'New courses', url:'/images/courselist/fire.svg',fn:()=>this.onChange(3,this.checked1,this.title2)}
        ]}
    this.title3= {
        selectedValue:'Top players',
        options:[
        {title:'Best courses',text:'Best courses', url:'/images/courselist/trophy-solid.svg',fn:()=>this.onChange(0,this.checked2,this.title3)},
        {title:'Recommended',text:'Recommended', url:'/images/courselist/thumb.svg',fn:()=>this.onChange(1,this.checked2,this.title3)}, 
        {title:'Top players',text:'Top players', url:'/images/courselist/graphic-designer.svg',fn:()=>this.onChange(2,this.checked2,this.title3)}, 
        {title:'New courses',text:'New courses', url:'/images/courselist/fire.svg',fn:()=>this.onChange(3,this.checked2,this.title3)}
        ]}
    this.$store.dispatch('courseList1').then((data)=>{
        this.courses = data
        this.$set(this.loading,0,false);
    })
    this.$store.dispatch('courseList2').then((data)=>{
        this.newestCourses = data
        this.$set(this.loading,1,false);
    })
    this.$store.dispatch('courseList3').then((data)=>{
        this.topCourses=data
        this.$set(this.loading,2,false);
    })
},
mounted(){
    console.log('This loading:', this.loading[0],this.loading[1],this.loading[2],this.loading[3])
    // this.typeWriteAnimation()
    this.currentPuzzle = this.puzzles[0]
},
data() {
    return {
        firstLoaded:true,
        modalWidth:0,
        visibleFilters:false,
        checked:[true,false,false,false],
        checked1:[false,true,false,false],
        checked2:[false,false,true,false],
        categoryFilter:'Not selected',
        reviewFilter:0,
        priceFilter:'Not selected',
        saleFilter:'Not selected',
        levelFilter:[1000,2900],
        isRoadMap:false,
        roadMapStep:0,
        courses:[],
        newestCourses:[],
        topCourses:[],
        recommendedCourses:[],
        title1:null,
        title2:null,
        title3:null,
        currentPuzzle:null,
        currentNumberOfPuzzle:0,
        puzzles:[
            {fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", solution:['e4'], level:`<div class=" flex items-baseline ">
                <div class=" w-3 h-3 bg-green-600 ml-2 mr-1"></div>
                <div class=" mr-2 font-neucha text-base ">easy</div>
              </div>`},
        {fen:"r1bq1rk1/pp1nnppp/4p3/3pP3/1b1P4/2NBB2N/PP3PPP/2RQK2R w K - 13 13", solution:['Bxh7+','Kxh7','Qh5+','Kg8','Ng5','Re8','Qxf7+','Kh8','Qh5+','Kg8','Qh7+','Kf8','Nxe6+'],level:`<div class=" flex items-baseline ">
            <div class=" w-3 h-3 bg-blue-600 ml-2 mr-1"></div>
            <div class=" mr-2 font-neucha text-base ">intermediate</div>
          </div>`},
        {fen:"rnbqkbnr/ppppppPp/8/8/8/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1", solution:['gxh8=Q'],level:`<div class=" flex items-baseline ">
            <div class=" w-3 h-3 bg-red-600 ml-2 mr-1"></div>
            <div class=" mr-2 font-neucha text-base ">hard</div>
          </div>`},
        ],
        isPuzzlesSolved:[false,false,false],
        value:[1000,2900],
        marks1: {
          '1000': {pos:0,label:'1000 ELO'},
          '1500': {pos:26.3,label:'1500 ELO'},
          '2000': {pos:52.63,label:'CM'},
          '2300': {pos:68.32, label:'FM', },
          '2400': {pos:73.68, label:'IM', },
          '2500': {pos:78.93, label:'GM', },
          '2800': {pos:94.73, label:'', },
          '2900': {pos:100, label:'', },
        },
        data: [
        1000,
        1100,
        1200,
        1300,
        1400,
        1500,
        1600,
        1700,
        1800,
        1900,
        2000,
        2100,
        2200,
        2300,
        2400,
        2500,
        2600,
        2700,
        2800,
        2900
      ],
        loading:[true,true,true,true],
        categoryOptions:[
        {title:"Not selected",text:"Not selected",fn:()=>this.changeCategory('Not selected') ,url:"/images/pieces/chess-solid.svg"},
        {title:"OPENINGS",text:"Openings",fn:()=>this.changeCategory('OPENINGS'), url:"/images/pieces/chess-pawn-solid.svg"},
        {title:"MIDDLEGAME",text:"Middlegame",fn:()=>this.changeCategory('MIDDLEGAME'), url:"/images/pieces/chess-knight-solid.svg"},
        {title:"ENDGAME",text:"Endgame",fn:()=>this.changeCategory('ENDGAME'), url:"/images/pieces/chess-bishop-solid.svg"},
        {title:"BASICS", text:"Games", fn:()=>this.changeCategory('BASICS'), url:"/images/pieces/chess-rook-solid.svg"},
        ],
        reviewOptions:[
            {title:0,text:"Not selected",fn:()=>this.changeReviews(0),url:"/images/courselist/star.svg"},
            {title:4,text:"4+",fn:()=>this.changeReviews(4),url:"/images/courselist/star.svg"},
            {title:3,text:"3+",fn:()=>this.changeReviews(3),url:"/images/courselist/star.svg"},
            {title:2,text:"2+",fn:()=>this.changeReviews(2),url:"/images/courselist/star.svg"},
            {title:1,text:"1+",fn:()=>this.changeReviews(1),url:"/images/courselist/star.svg"},
        ],
        priceOptions:[
            {title:"Not selected",text:"Not selected",fn:()=>this.changePrice("Not selected"),url:"/images/courselist/dollar.svg"},
            {title:10,text:"10$-20$",fn:()=>this.changePrice(10),url:"/images/courselist/dollar.svg"},
            {title:20,text:"20$-30$",fn:()=>this.changePrice(20),url:"/images/courselist/dollar.svg"},
            {title:30,text:"30$-40$",fn:()=>this.changePrice(30),url:"/images/courselist/dollar.svg"},
            {title:40,text:"40$+",fn:()=>this.changePrice(40),url:"/images/courselist/dollar.svg"},
        ],
        saleOptions:[
            {title:"Not selected",text:"Not selected",fn:()=>this.changeSale("Not selected"),url:"/images/courselist/discount.svg"},
            {title:"Yes",text:"Yes",fn:()=>this.changeSale("Yes"),url:"/images/courselist/discount.svg"},
            {title:"No",text:"No",fn:()=>this.changeSale("No"),url:"/images/courselist/discount.svg"},
        ]
    }
},
computed: {
 filtred() {
  return (newCourses)=>{
    if(this.categoryFilter != 'Not selected') newCourses = newCourses.filter(course => course.category ==this.categoryFilter)
    if(this.priceFilter !='Not selected') {
        if(this.priceFilter==40) {
            newCourses = newCourses.filter(course => course.price >= this.priceFilter)
        } else {
            newCourses = newCourses.filter(course => { return course.price >= this.priceFilter && course.price <= this.priceFilter+10})
        }
    }
    if(this.reviewFilter != 'all') newCourses = newCourses.filter(course => course.averageRating >=this.reviewFilter)
    if(!(this.levelFilter[0]==1000&&this.levelFilter[1]==2900)) newCourses = newCourses.filter(course => {return course.level[0]>=this.levelFilter[0]&&course.level[1]<=this.levelFilter[1]} )
    return newCourses
  }
 },
},
methods:{
   async onChange(index, checked, title) {
        console.log('OnChange',index,this.loading)
        for(let i=0;i<checked.length;i++) {
            checked[i] =false
        }
        this.$set(this.loading,index,false)
        this.$set(checked,index,true)
        // Old
        // checked[index]=true
        // checked.splice()
        switch (index) {
            case 0:  this.courses = await this.$store.dispatch('courseList1'); this.$set(title,'selectedValue','Best courses'); this.$set(this.loading,index,false);  return;
            case 1:  this.newestCourses = await this.$store.dispatch('courseList2'); this.$set(title,'selectedValue','Recommended'); this.$set(this.loading,index,false); return;
            case 2:  this.topCourses =await this.$store.dispatch('courseList3'); this.$set(title,'selectedValue','Top players'); this.$set(this.loading,index,false); return;
            case 3:  this.recommendedCourses = await this.$store.dispatch('courseList4'); this.$set(title,'selectedValue','New courses'); this.$set(this.loading,index,false); return;
        }
    },
    changeCategory(category) {
        this.categoryFilter = category
    },
    changeReviews(review) {
        this.reviewFilter = review
    },
    changePrice(price) {
        this.priceFilter = price
    },
    changeLevel(level) {
        this.levelFilter = level
        this.levelFilter.splice()
    },
    changeSale(sale) {
        this.saleFilter = sale
    },
    setCourse(checked) {
        const index = checked.findIndex(item=>item)
        switch (index) {
            case 0: return this.filtred(this.courses)
            case 1: return this.filtred(this.newestCourses)
            case 2: return this.filtred(this.topCourses)
            case 3: return this.filtred(this.recommendedCourses)
        }
    },
    toggleSettings() {
        this.visibleFilters=!this.visibleFilters; 
        if(this.$refs.filters.style.maxHeight) {
            this.$refs.filters.style.maxHeight = null
            this.$refs.filters.style.overflow = "hidden"
        } else {
            this.$refs.filters.style.maxHeight = this.$refs.filters.scrollHeight + "px";
            this.$refs.filters.style.overflow = "visible"
        }
    },
    onSolvePuzzle() {
        this.$set(this.isPuzzlesSolved,this.currentNumberOfPuzzle,true)
        if(this.currentNumberOfPuzzle==2) return
        setTimeout(()=>{
        let index=-1;
        for (let i=this.currentNumberOfPuzzle;i<this.isPuzzlesSolved.length;i++) {
            if(this.isPuzzlesSolved[i]==false) {
                index=i
                break;
            }
        }
        if(index>=0) {
            this.currentNumberOfPuzzle=index
            this.currentPuzzle = this.puzzles[this.currentNumberOfPuzzle]
            this.firstLoaded = false
        }
        },2000)
    },
    setPuzzle(number) {
        console.log('SetPuzzle',number)
        this.currentNumberOfPuzzle=number
        this.currentPuzzle = this.puzzles[this.currentNumberOfPuzzle]
        this.firstLoaded = false

    },
},

}
</script>
<style >
@import url('vue-slider-component/theme/antd.css');
.Typewriter__cursor-none {
      display: none;
}
</style>

<style lang='scss' scoped>
.section {
    &--courses {
        min-height:15rem ;
    }
}
.photo {
    height: 20rem;
}
.bishop {
    transition: all .3s;
    stroke: black;
    stroke-width: 5px;
}
// .filters {
//   max-height: 0;
//   overflow: hidden;
//   transition: all 1s ease-out;
// }
.bg-wk {
    background-image: url('/images/courselist/star.svg');
    background-repeat: no-repeat;
  }
  .bg-wch {
    background-image: url('/images/courselist/trophy-solid.svg');
    background-repeat: no-repeat;
  }
  .prisma-bg {
    //   height: 35rem;
        height:25rem;
      background:  radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747;
        @media (max-width:450px) {
            height:auto
        }
  }
  .promo-video-height {
      height: 25rem;
  }
  .section {
      &--canvas {
        //   background: whitesmoke;
          height: 42rem;

      }
  }
  .cool-path {
    //   opacity: .75;
      height: 70vh;
    //   background: white;
  }
  .phone--card {
      box-shadow:0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3), inset 0 -2px 6px 0 rgba(10,37,64,.35);
      width: 17rem;
      height: 30rem;
  }
  
  .bg-lesson {
      background:#f6f9fc;
  }
  .scale-98:hover {
      transform: scale(.985);
      
  }
  .filter--container {
    //   @media (max-width:450px) {
    //       margin-top:25rem
    //   }
      @media (max-width:640px) {
          margin-top: 25rem;
      }
  }
</style>