<template>
  <div class=" mb-16 ">
            <div class="mt-16 grid grid-cols-11 ">
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
            <div class=" grid grid-cols-10  mt-16">
                <div id="courses" class=" col-span-2 hidden lg:block  ">
                    <div  class=" text-center text-xl  mb-3">Categories</div>
                    <div class=" bg-white p-4 border-gray-300 border rounded-t-lg">
                        <div class=" text-center  border-gray-200 border-b-2 rounded-t-lg p-1">Select two options</div>
                        <div class=" flex flex-col ml-2">
                            <div class="inline-flex items-center mt-3 relative">
                                <input v-model="checked[0]" type="checkbox" class=" h-5 w-5 text-orange-600 cursor-pointer" disabled checked><span class="ml-2 text-gray-700">Best courses<span class=" text-red-700">*</span> </span>
                                <!-- <div class=" absolute  bg-gray-700 text-white">This is temprory</div> -->
                            </div>
                            <div @change="onChange(1)" class="inline-flex items-center mt-3">
                                <input v-model="checked[1]" type="checkbox" class=" h-5 w-5 text-orange-600 cursor-pointer" checked><span class="ml-2 text-gray-700">New courses</span>
                            </div>
                            <div @change="onChange(2)" class="inline-flex items-center mt-3">
                                <input v-model="checked[2]" type="checkbox" class=" h-5 w-5 text-orange-600 cursor-pointer" ><span class="ml-2 text-gray-700">Top players</span>
                            </div>
                            <div @change="onChange(3)" class="inline-flex items-center mt-3">
                                <input v-model="checked[3]" type="checkbox" class=" h-5 w-5 text-orange-600 cursor-pointer" ><span class="ml-2 text-gray-700">Our Recommendation</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class=" text-center text-xl  my-3">Filters</div>
                    <div class=" bg-white border-gray-300 border p-4  rounded-t-lg">
                        <div class=" text-center  border-gray-200 border-b-2 rounded-t-lg p-2">Select any numbers</div>
                        <div class=" mt-2 flex items-baseline justify-between">
                            <div class=" text-lg">Category:</div>
                            <newdrop :fn='changeCategory' :options="['all','openings','middlegame','endgames']"/>
                            </div>
                            <div class=" mt-2 flex items-baseline justify-between">
                            <div class=" text-lg">Reviews:</div>
                            <newdrop :fn='changeReviews' :options="['all','4+','3+','2+']"/>
                            </div>
                            <div class=" mt-2 flex items-baseline justify-between">
                            <div class=" text-lg">Level:</div>
                            <newdrop :fn='changeLevel' class=" text-xs" :options="['all','Begginers 1000-1500','Intermideate 1500-2000','Advanced 2000-2800']"/>
                            </div>
                            
                    </div>
                    <!-- <div class=" text-center">Title</div> -->
                </div>
                <div class="col-span-10 sm:col-span-10 lg:col-span-8 grid grid-cols-8">
                    <div v-if="checked[0]" class="col-span-8 ph2:col-span-4 select-none ">
                        <transition name="page">
                        <column-courses title="Best courses" :courses='filtredCourse( courses )' ></column-courses>
                        </transition>
                    </div>
                    <div v-if="checked[1]" class="col-span-8 ph2:col-span-4 select-none ">
                        <column-courses title="New courses" :courses='filtredCourse( newestCourses )'></column-courses>
                    </div>
                    <div v-if="checked[2]" class="col-span-8 ph2:col-span-4 select-none ">
                        <column-courses title="Top players" :courses='filtredCourse( topCourses )' ></column-courses>
                    </div>
                    <div v-if="checked[3]" class="col-span-8 ph2:col-span-4 select-none ">
                        <column-courses title="Recommendations" :courses='filtredCourse( recommendedCourses )'></column-courses>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
import Puzzle from '~/components/common/Puzzle'
import Registration from '~/components/home/Registration'
import Newdrop from '~/components/home/Newdrop'
import ColumnCourses from '~/components/home/Columncourses'
import Axios from 'axios'

export default {
components:{
    Newdrop,ColumnCourses,Puzzle,Registration
},
middleware:['common'],
async created() {
    this.courses = await this.$store.dispatch('bestCoursesFromHomePage')
    // tcommit('setBestCoursesFromHomePage',data)

    this.newestCourses = await this.$store.dispatch('newestCoursesFromHomePage')

    // this.courses.splice()
    // console.log("COURSES",data)
},
data() {
    return {
        modalWidth:0,
        checked:[true,true,false,false],
        categoryFilter:'all',
        reviewFilter:'all',
        levelFilter:'all',
        courses:[],
        newestCourses:[],
        topCourses:[],
        recommendedCourses:[]
        
        // courses:[{id:1,category:'all',pictureUri:'https://chess-courses.hb.bizmrg.com/course/unsplash-kiss.jpg'},
        // {id:2,category:'openings',pictureUri:'https://images.unsplash.com/photo-1600711725341-ce0d8dd638c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'},
        // {id:3,category:'middlegame',sale:true,level:'begginers',pictureUri:'https://images.unsplash.com/photo-1600872353506-917aeb4194d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},
        // {id:4,category:'endgames',pictureUri:'https://images.unsplash.com/photo-1600725099448-45cbd882f731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        // {id:5,category:'middlegame',pictureUri:'https://images.unsplash.com/photo-1600890301202-0041e9801845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'},
        // {id:6,category:'middlegame', review:3.9, level:'begginers', pictureUri:'https://images.unsplash.com/photo-1600877685303-857fde8d40d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'},
        // ],
        // newestCourses:[{id:1,category:'all',pictureUri:'https://images.unsplash.com/photo-1600398138360-ae1ac2285bc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},
        // {id:2,category:'openings',pictureUri:'https://images.unsplash.com/photo-1600949970629-f1ea4f8414cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},
        // {id:3,category:'middlegame',level:'begginers',pictureUri:'https://images.unsplash.com/photo-1600194991511-4181a2a9bc7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},
        // {id:4,category:'endgames',pictureUri:'https://images.unsplash.com/photo-1600916795407-ae9bd8a104ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'},
        // {id:5,category:'middlegame',pictureUri:'https://images.unsplash.com/photo-1600931842703-882bf46cb17e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},
        // {id:6,category:'middlegame', review:3.9, level:'begginers', pictureUri:'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        // {id:7,category:'middlegame', review:4.9, level:'advanced', pictureUri:'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        // {id:8,category:'middlegame', review:3.2, level:'begginers', pictureUri:'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        // {id:9,category:'middlegame', review:3.9, level:'begginers', pictureUri:'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        // ],

    }
},
methods:{
   async onChange(index) {
        for(let i=1;i<this.checked.length;i++) {
            this.checked[i] =false
        }
        this.checked[index]=true
        this.checked.splice()
        switch (index) {
            case 0:  this.courses = await this.$store.dispatch('bestCoursesFromHomePage'); return;
            case 1:  this.newestCourses = await this.$store.dispatch('newestCoursesFromHomePage'); return;
            case 2:  this.topCourses =await this.$store.dispatch('topCoursesFromHomePage'); return;
            case 3:  this.recommendedCourses = await this.$store.dispatch('recommendedCoursesFromHomePage'); return;
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
    },
    filtredCourse( courses ) {
        console.log('FiltredCourses', courses)
        let newCourses = courses.slice()
        if(this.categoryFilter != 'all') newCourses = newCourses.filter(course => course.category ==this.categoryFilter)
        if(this.reviewFilter != 'all') newCourses = newCourses.filter(course => course.review >=+this.reviewFilter[0])
        if(this.levelFilter != 'all') newCourses = newCourses.filter(course => course.level ==this.levelFilter.split(' ')[0].toLowerCase())
        return newCourses
        // if(this.category)
    }
    // nextPage(){
    //      this.pageNumber++;
    //   },
    // prevPage(){
    //     this.pageNumber--;
    // },
    // numPage(num) {
    //     this.pageNumber=num
    // },
    // numPage1(num) {
    //     this.pageNumber1=num
    // }
}
}
</script>

<style lang='scss' scoped>

.photo {
    height: 20rem;
}
.bishop {
    transition: all .3s;
    stroke: black;
    stroke-width: 5px;
}


</style>