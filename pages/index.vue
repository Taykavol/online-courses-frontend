<template>
  <div class=" mb-16   ">
      <div class="lg:container mx-auto">
            <div class="mt-10 grid grid-cols-11 ">
                <div class="col-span-3  photo">
                    <puzzle :puzzle='{fen:"start"}'/>
                </div>
                <div class="col-span-7 text-center text-xl  ">
                    <img class=" w-full object-cover photo" src="https://images.unsplash.com/photo-1600745643317-c722b98a0579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
                </div>
                <div class="col-span-1 flex flex-col items-center">
                    <div class="">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube-square" class="svg-inline--fa fa-youtube-square fa-w-14 w-12 h-12 duration-300 hover:text-red-600 cursor-pointer " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"></path></svg>
                    </div>
                    <div class="">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" class="svg-inline--fa fa-facebook-square fa-w-14 h-12 w-12 duration-300 hover:text-blue-600 cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
                    </div>
                    <div class="">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14 h-12 w-12 transform duration-300 hover:rotate-180 cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                    </div>
                    <div class=" mt-auto">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess-bishop" class="svg-inline--fa fa-chess-bishop fa-w-10 w-24 h-24 hover:text-white  bishop  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M8 287.88c0 51.64 22.14 73.83 56 84.6V416h192v-43.52c33.86-10.77 56-33 56-84.6 0-30.61-10.73-67.1-26.69-102.56L185 285.65a8 8 0 0 1-11.31 0l-11.31-11.31a8 8 0 0 1 0-11.31L270.27 155.1c-20.8-37.91-46.47-72.1-70.87-92.59C213.4 59.09 224 47.05 224 32a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32c0 15 10.6 27.09 24.6 30.51C67.81 106.8 8 214.5 8 287.88zM304 448H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>
                        <!-- <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess" class="svg-inline--fa fa-chess fa-w-16 w-24 h-24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M74 208H64a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h15.94A535.78 535.78 0 0 1 64 384h128a535.78 535.78 0 0 1-15.94-128H192a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-10l33.89-90.38a16 16 0 0 0-15-21.62H144V64h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8h-24V8a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v24H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v32H55.09a16 16 0 0 0-15 21.62zm173.16 251.58L224 448v-16a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v16L8.85 459.58A16 16 0 0 0 0 473.89V496a16 16 0 0 0 16 16h224a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31zm92.77-157.78l-3.29 82.2h126.72l-3.29-82.21 24.6-20.79A32 32 0 0 0 496 256.54V198a6 6 0 0 0-6-6h-26.38a6 6 0 0 0-6 6v26h-24.71v-26a6 6 0 0 0-6-6H373.1a6 6 0 0 0-6 6v26h-24.71v-26a6 6 0 0 0-6-6H310a6 6 0 0 0-6 6v58.6a32 32 0 0 0 11.36 24.4zM384 304a16 16 0 0 1 32 0v32h-32zm119.16 155.58L480 448v-16a16 16 0 0 0-16-16H336a16 16 0 0 0-16 16v16l-23.15 11.58a16 16 0 0 0-8.85 14.31V496a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31z"></path></svg> -->
                    </div>
                </div>
            </div>
            <div ref="filters" :class="{'pb-32 pt-2 ':visibleFilters}"  class="  col-span-2 hidden lg:flex lg:justify-between  bg-white my-8 px-4  relative filters  ">
                    <div :class="{'opacity-100':visibleFilters}" class="delay-500 opacity-0 duration-500">
                        <div class="  border-gray-300 rounded-t-lg">
                            <div class=" text-sm text-center">Review</div>
                            <Select  class=" z-50 relative w-48" :ignoreValue="[]" :currentValue="reviewFilter" :options="reviewOptions"/>
                        </div>
                        <div class="  border-gray-300 rounded-t-lg">
                            <div class=" text-sm text-center">Category</div>
                            <Select  class=" z-40 relative w-48" :ignoreValue="[]" :currentValue="categoryFilter" :options="categoryOptions"/>
                        </div>
                    </div>
                    <div :class="{'opacity-100':visibleFilters}" class=" w-1/2 mx-auto mt-5 delay-500 opacity-0 duration-500">
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

                    <div :class="{'opacity-100':visibleFilters}" class="delay-500 opacity-0 duration-500">
                        <div class="  border-gray-300 rounded-t-lg">
                            <div class=" text-sm text-center">Price</div>
                            <Select  class=" z-50 relative w-48" :ignoreValue="[]" :currentValue="reviewFilter" :options="reviewOptions"/>
                        </div>
                        <div class="  border-gray-300 rounded-t-lg">
                            <div class=" text-sm text-center">Sale</div>
                            <Select  class=" z-40 relative w-48" :ignoreValue="[]" :currentValue="categoryFilter" :options="categoryOptions"/>
                        </div>
                    </div>
                    
            </div>
            <div class=" grid grid-cols-8  mt-4 section--courses">
                
                <div   class="col-span-10 sm:col-span-10 lg:col-span-8 grid grid-cols-9 gap-x-6 relative">
                    <div v-if="title1&&title2&&title3" class=" ph2:col-span-3 text-center   flex ">
                        <div @click="toggleSettings();"  class="w-8 h-8 mr-1 ">
                            <svg :class="{'text-blue-500':visibleFilters,'text-gray-700':!visibleFilters}" class="w-8 h-8 rounded cursor-pointer hover:text-blue-500  hover:animate-spin " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <Select class=" z-20 relative w-48" :ignoreValue="[title2.selectedValue,title3.selectedValue]" :currentValue="title1.selectedValue" :options="title1.options"/>
                    </div>
                    <div v-if="title1&&title2&&title3" class=" ph2:col-span-3 text-center flex ">
                        <div @click="toggleSettings()"  class="w-8 h-8 mr-1 ">
                            <svg :class="{'text-blue-500':visibleFilters,'text-gray-700':!visibleFilters}" class="w-8 h-8 rounded cursor-pointer hover:text-blue-500  hover:animate-spin " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <Select class=" z-20 relative w-48" :ignoreValue="[title1.selectedValue,title3.selectedValue]" :currentValue="title2.selectedValue" :options="title2.options"/>
                    </div>
                    <div v-if="title1&&title2&&title3" class=" ph2:col-span-3 text-center flex ">
                        <div @click="toggleSettings()"  class="w-8 h-8 mr-1 ">
                            <svg :class="{'text-blue-500':visibleFilters,'text-gray-700':!visibleFilters}" class="w-8 h-8 rounded cursor-pointer hover:text-blue-500  hover:animate-spin " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <Select class=" z-20 relative w-48" :ignoreValue="[title1.selectedValue,title2.selectedValue]" :currentValue="title3.selectedValue" :options="title3.options"/>
                    </div>

                    <div v-if="loading[0]" class="col-span-8 ph2:col-span-3 mx-8">
                        <Skeleton class="mt-2" v-for="(item,index) in 5" :key="index"/>
                    </div>
                    <div v-else class="col-span-8 ph2:col-span-3 select-none ">
                        <column-courses :size=3 :title="title1" :courses='setCourse(checked)'></column-courses>
                    </div>
                    <div v-if="loading[1]" class="col-span-8 ph2:col-span-3 mx-8">
                        <Skeleton class="mt-2 " v-for="(item,index) in 5" :key="index"/>
                    </div>
                    <div v-else class="col-span-8 ph2:col-span-3 select-none ">
                        <column-courses :size=3 :title="title1"  :courses='setCourse(checked1)' ></column-courses>
                    </div>
                    <div v-if="loading[2]" class="col-span-8 ph2:col-span-3 mx-8">
                        <Skeleton class="mt-2 " v-for="(item,index) in 5" :key="index"/>
                    </div>
                    <div v-else class="col-span-8 ph2:col-span-3 select-none ">
                        <column-courses :size=3 :title="title1"  :courses='setCourse(checked2)' ></column-courses>
                    </div>
                </div>
            </div>
      </div>
                <div class="prisma-bg   flex justify-center items-center mt-20 relative">
                    <img  style="height:20rem" class=" absolute right-0 -mr-10 hidden xl:block " src="/images/bg/chess-pieces.png" alt="">
                    <div class=" w-1/2  xl:w-1/3   ">
                    <div class="flex justify-around mb-6 text-gray-300 text-xl">
                        <div class=" bg-blue-600 w-48 h-10 flex justify-center items-center rounded-md cursor-pointer hover:bg-blue-600">I am student</div>
                        <div class=" bg-gray-600 w-48 h-10 flex justify-center items-center rounded-md cursor-pointer hover:bg-blue-600">I am teacher</div>
                    </div>
                    <Plyr    id="76979871"/>
                        <!-- <img class=" w-full h-64 object-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""> -->
                    </div>
                    <div class="  flex flex-col justify-around ml-24 mt-10">
                        <div v-for="(item,index) in 5" :key="item" :class="{' text-gray-300':index==0,' text-gray-500':index!=0}" class=" my-3 flex items-center cursor-pointer hover:text-gray-300" >
                            <div  :class="{'bg-red-800':index==0}"  class="text-2xl    w-10 h-10 rounded-full flex justify-center items-center  ">
                                {{index+1}}
                            </div> 
                            <div   class=" text-xl ml-3 font-medium font-sans">We lost but what a final is?</div>
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
    this.$store.dispatch('bestCoursesFromHomePage').then((data)=>{
        this.courses = data
        this.$set(this.loading,0,false);
    })
    this.$store.dispatch('newestCoursesFromHomePage').then((data)=>{
        this.newestCourses = data
        this.$set(this.loading,1,false);
    })
    this.$store.dispatch('topCoursesFromHomePage').then((data)=>{
        this.topCourses=data
        this.$set(this.loading,2,false);
    })
},
data() {
    return {
        modalWidth:0,
        visibleFilters:false,
        checked:[true,false,false,false],
        checked1:[false,true,false,false],
        checked2:[false,false,true,false],
        categoryFilter:'Not selected',
        reviewFilter:0,
        levelFilter:[1000,2900],
        courses:[],
        newestCourses:[],
        topCourses:[],
        recommendedCourses:[],
        title1:null,
        title2:null,
        title3:null,
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
        loading:[true,true,true],
        categoryOptions:[
        {title:"Not selected",text:"Not selected",fn:()=>this.changeCategory('Not selected') ,url:"https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        {title:"OPENINGS",text:"Openings",fn:()=>this.changeCategory('OPENINGS'), url:"https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        {title:"MIDDLEGAME",text:"Middlegame",fn:()=>this.changeCategory('MIDDLEGAME'), url:"https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        {title:"ENDGAME",text:"Endgame",fn:()=>this.changeCategory('ENDGAME'), url:"https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        {title:"BASICS", text:"Basics", fn:()=>this.changeCategory('BASICS'), url:"https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        ],
        reviewOptions:[
            {title:0,text:"Not selected",fn:()=>this.changeReviews(0),url:"/images/courselist/star.svg"},
            {title:4,text:"4+",fn:()=>this.changeReviews(4),url:"/images/courselist/star.svg"},
            {title:3,text:"3+",fn:()=>this.changeReviews(3),url:"/images/courselist/star.svg"},
            {title:2,text:"2+",fn:()=>this.changeReviews(2),url:"/images/courselist/star.svg"},
            {title:1,text:"1+",fn:()=>this.changeReviews(1),url:"/images/courselist/star.svg"},
        ]
    }
},
computed: {

 filtred1() {
        console.log(1)
        let newCourses = this.courses.slice()
        console.log(this.levelFilter, newCourses[0].level)
        if(this.categoryFilter != 'Not selected') newCourses = newCourses.filter(course => course.category ==this.categoryFilter)
        if(this.reviewFilter != 'all') newCourses = newCourses.filter(course => course.averageRating >=this.reviewFilter)
        if(!(this.levelFilter[0]==1000&&this.levelFilter[1]==2900)) newCourses = newCourses.filter(course => {return course.level[0]>=this.levelFilter[0]&&course.level[1]<=this.levelFilter[1]} )
        return newCourses
 },
 filtred2() {
        console.log(2)

        let newCourses = this.newestCourses.slice()
        if(this.categoryFilter != 'Not selected') newCourses = newCourses.filter(course => course.category ==this.categoryFilter)
        if(this.reviewFilter != 'all') newCourses = newCourses.filter(course => course.averageRating >=this.reviewFilter)
        if(!(this.levelFilter[0]==1000&&this.levelFilter[1]==2900)) newCourses = newCourses.filter(course =>  {return course.level[0]>=this.levelFilter[0]&&course.level[1]<=this.levelFilter[1]})
        return newCourses
 },
 filtred3() {
        console.log(3)

        let newCourses = this.topCourses.slice()
        if(this.categoryFilter != 'Not selected') newCourses = newCourses.filter(course => course.category ==this.categoryFilter)
        if(this.reviewFilter != 'all') newCourses = newCourses.filter(course => course.averageRating >=this.reviewFilter)
        if(!(this.levelFilter[0]==1000&&this.levelFilter[1]==2900)) newCourses = newCourses.filter(course => {return course.level[0]>=this.levelFilter[0]&&course.level[1]<=this.levelFilter[1]})
        return newCourses
 },
 filtred4() {
        console.log(4)
        let newCourses = this.recommendedCourses.slice()
        if(this.categoryFilter != 'Not selected') newCourses = newCourses.filter(course => course.category ==this.categoryFilter)
        if(this.reviewFilter != 'all') newCourses = newCourses.filter(course => course.averageRating >=this.reviewFilter)
        if(!(this.levelFilter[0]==1000&&this.levelFilter[1]==2900)) newCourses = newCourses.filter(course => {return course.level[0]>=this.levelFilter[0]&&course.level[1]<=this.levelFilter[1]})
        return newCourses
 },
 
},
methods:{
   async onChange(index, checked, title) {
        
        for(let i=0;i<checked.length;i++) {
            checked[i] =false
        }
        this.$set(this.loading,index,false)
        checked[index]=true
        checked.splice()
        switch (index) {
            case 0:  this.courses = await this.$store.dispatch('bestCoursesFromHomePage'); this.$set(title,'selectedValue','Best courses'); this.$set(this.loading,index,false);  return;
            case 1:  this.newestCourses = await this.$store.dispatch('newestCoursesFromHomePage'); this.$set(title,'selectedValue','Recommended'); this.$set(this.loading,index,false); return;
            case 2:  this.topCourses =await this.$store.dispatch('topCoursesFromHomePage'); this.$set(title,'selectedValue','Top players'); this.$set(this.loading,index,false); return;
            case 3:  this.recommendedCourses = await this.$store.dispatch('recommendedCoursesFromHomePage'); this.$set(title,'selectedValue','New courses'); this.$set(this.loading,index,false); return;
        }
    },
    changeCategory(category) {
        this.categoryFilter = category
    },
    changeReviews(review) {
        this.reviewFilter = review
    },
    changeLevel(level) {
        this.levelFilter = level
        this.levelFilter.splice()
    },
    setCourse(checked) {
        const index = checked.findIndex(item=>item)
        switch (index) {
            case 0: return this.filtred1
            case 1: return this.filtred2
            case 2: return this.filtred3
            case 3: return this.filtred4
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
    }
},

}
</script>
<style >
@import url('vue-slider-component/theme/antd.css');

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
.filters {
  max-height: 0;
  overflow: hidden;
  transition: all 1s ease-out;
}
.bg-wk {
    background-image: url('/images/courselist/star.svg');
    background-repeat: no-repeat;
  }
  .bg-wch {
    background-image: url('/images/courselist/trophy-solid.svg');
    background-repeat: no-repeat;
  }
  .prisma-bg {
      height: 35rem;
      background:  radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747;
  }
  .promo-video-height {
      height: 25rem;
  }
</style>