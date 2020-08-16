
<template>
<div class=" flex justify-center">
  <div class=" cont relative ">

  <swiper ref="mySwiper" class="swiper bg-transparent  relative " :options="swiperOption">
    <swiper-slide class=" justify-center flex bg-transparent   " v-for="(course,index) in courses" :key="index">
      <my-card :course="course" class="  "></my-card> 
      </swiper-slide>
  </swiper>
    <div v-if="!isEnd" @click="slideNext" class="button-next absolute z-40 bg-gray-100 rounded-full w-20 h-20 flex justify-center items-center " >
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class=" w-12 h-12 svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
    </div>
    <div v-if="!isBeginning" @click="slideBack" class="button-prev  absolute  z-40 bg-gray-100 rounded-full w-20 h-20 flex justify-center items-center " >
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="w-12 h-12 svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
    </div>
  </div>

</div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import MyCard from '~/components/home/Card'

  export default {
    name: 'swiper-example-loop-group',
    title: 'Loop mode with multiple slides per group',
    props:{
      courses:{
        type:Array,
        require:true
        }
    },
    components: {
      Swiper,
      SwiperSlide,
      MyCard
    },
    computed: {
    swiper() {
        return this.$refs.mySwiper.$swiper
      },
    },
    data() {
      return {
        isBeginning:true,
        isEnd:false,
        swiperOption: {
          slidesPerView: 5,
          slidesPerGroup: 3,
          loopFillGroupWithBlank: true,
          simulateTouch:false,

          breakpoints: {
            1700: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            1400: {
              slidesPerView: 4,
              slidesPerGroup: 4,

            },
            1200: {
              slidesPerView: 3,
              slidesPerGroup: 3,

            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,

            },
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              
              simulateTouch:true,
            }},
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: false
          // },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    updated(){
      console.log('sdf')
      this.isBeginning = this.$refs.mySwiper.$swiper.isBeginning

    },
    methods:{
        slideNext() {
          this.swiper.slideNext()
            this.isBeginning = this.$refs.mySwiper.$swiper.isBeginning
            this.isEnd = this.$refs.mySwiper.$swiper.isEnd
        },
        slideBack() {
            this.swiper.slidePrev()
            this.isBeginning = this.$refs.mySwiper.$swiper.isBeginning
            this.isEnd = this.$refs.mySwiper.$swiper.isEnd
            
        }
    }
  }
</script>

<style lang="scss" >
@import url('../../node_modules/swiper/swiper-bundle.css');
.button-next {
  top:2rem;
  right: -1.5rem;
  background-color: #183153;
  color: #FFD43B;
  cursor: pointer;
  transition: transform .5s;
  &:hover {
    transform:scale(1.1);
  }
}
.swiper-button-prev {
 
}
.button-prev {
  top: 2rem;
  left: -1.5rem;
  background-color: #183153;
  color: #FFD43B;
  cursor: pointer;
  transition: transform .5s;
  &:hover {
    transform:scale(1.1);
  }
  // opacity: .75;
}
.swiper {
  width: 90rem;
  @media (max-width: 1699px) {
   width: 70rem;
 }
 @media (max-width: 1399px) {
   width: 50rem;
 }
 @media (max-width: 1200px) {
   width: 33rem;
 }

  .swiper-slide {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: center;
    font-weight: bold;
    font-size: 1rem;
  }
}
.cont {
  width: 90rem;
  
  @media (max-width: 1699px) {
   width: 70rem;
 }
  @media (max-width: 1399px) {
   width: 50rem;
 }
 @media (max-width: 1200px) {
   width: 33rem;
 }
}
// @import url('../node_modules/swiper/css/swiper.css');
//   @import './base.scss';
</style>