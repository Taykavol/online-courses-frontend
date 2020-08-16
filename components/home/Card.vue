<template>
  <div class="w-64">
    <a href="#">
      <div class="card  relative">
        <div
          class="  bg-white rounded-lg cursor-pointer   duration-1000 shadow-xl  relative "
        >
          <!-- <div class="rotate-block" v-if="course.sale">
            <h5 class="simple-ribbon text-xl font-serif font-bold">Sale 50%</h5>
          </div> -->
          <!-- Image -->
          <img
            class="w-full h-32 object-cover object-center"
            :src="course.url"
            alt="avatar"
          />
          <!-- Opening -->
          <!-- <div class="flex items-center px-6 py-3 bg-gray-900">
            <div class="flex justify-between w-full">
              <div class="mx-3 text-white font-semibold text-lg">
                {{ course.part }}
              </div>
              <div class="mx-3 text-white font-semibold text-lg text-right">
                {{ course.level }}
              </div>
            </div>
          </div> -->
          <!-- Info -->
          <div class=" pt-1 pl-2">
            <h1 class="text-xl font-semibold text-gray-800 truncate ">
              {{ course.title }}
            </h1>
            <!-- <div class="py-2 text-lg text-gray-700  break-words">
              {{ course.desc }}
            </div> -->
            <!-- <hr class="" /> -->
            <!-- <h1 class="mb-2 font-serif text-center">Instructors</h1> -->
            <div class="flex items-center ">
              <div
                class="flex items-center "
                v-for="(instractor, index) in course.instractors"
                :key="index"
              >
                <div class=" bg-blue-700  font-serif rounded-lg p-1 text-sm font-bold text-white">GM</div>
                <div class="text-lg ml-2">
                  <p class=" text-gray-700 leading-none font-semibold">
                    {{ instractor.name }}
                  </p>
                </div>
              </div>
            </div>
            <hr class="mt-2" />

            <div class="flex item-center mt-2 relative w-full ">
              <svg
                class="w-5 h-5 fill-current text-orange-300"
                viewBox="0 0 24 24"
              >
                  <defs>
                    <linearGradient :id="'half_grad0'+course.id">
                        <stop :offset="100*scoresHelper[0]+'%'" stop-color="#fbd38d"/>
                        <stop offset="0%" stop-color="#a0aec0" stop-opacity="1" />
                    </linearGradient>
                 </defs>
                <path
                  :fill="`url(#half_grad0${course.id})`"
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                />
              </svg>
              <svg
                class="w-5 h-5 fill-current text-orange-300"
                viewBox="0 0 24 24"
              >
                <defs>
                    <linearGradient :id="'half_grad1'+course.id">
                        <stop :offset="100*scoresHelper[1]+'%'" stop-color="#fbd38d"/>
                        <stop offset="0%" stop-color="#a0aec0" stop-opacity="1" />
                    </linearGradient>
                 </defs>
                <path
                  :fill="`url(#half_grad1${course.id})`"
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                />
              </svg>
              <svg
                class="w-5 h-5 fill-current text-orange-300"
                viewBox="0 0 24 24"
              >
                <defs>
                    <linearGradient :id="'half_grad2'+course.id">
                        <stop :offset="100*scoresHelper[2]+'%'" stop-color="#fbd38d"/>
                        <stop offset="0%" stop-color="#a0aec0" stop-opacity="1" />
                    </linearGradient>
                 </defs>
                <path
                  :fill="`url(#half_grad2${course.id})`"
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                />
              </svg>
              <svg
                class="w-5 h-5 fill-current text-orange-300"
                viewBox="0 0 24 24"
              >
                <defs>
                    <linearGradient :id="'half_grad3'+course.id">
                        <stop :offset="100*scoresHelper[3]+'%'" stop-color="#fbd38d"/>
                        <stop offset="0%" stop-color="#a0aec0" stop-opacity="1" />
                    </linearGradient>
                 </defs>
                <path
                  :fill="`url(#half_grad3${course.id})`"
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                />
              </svg>
              <svg
                class="w-5 h-5 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
              <defs>
                    <linearGradient :id="'half_grad4'+course.id">
                        <stop :offset="100*scoresHelper[4]+'%'" stop-color="#fbd38d"/>
                        <stop offset="0%" stop-color="#a0aec0" stop-opacity="1" />
                    </linearGradient>
                 </defs>
                <path
                :fill="`url(#half_grad4${course.id})`"
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                />
              </svg>
              <div class=" flex items-baseline">
                <div class=" font-bold ">{{ course.score }}</div>
                <div class="ml-1 text-xs ">({{ course.reviews }})</div>
              </div>
              <!-- <div class="hours text-gray-500 text-sm flex ">
                <img src="/chess-clock.svg" class=" h-8 -mt-1 mr-2 " alt="" />
                {{ course.time }}
              </div> -->
            </div>
            <div class="  flex justify-center items-center flex-col">
              <div class="mt-2 font-semibold text-2xl" v-if="!course.sale">
                59$
              </div>
              <div class="mt-2 text-right" v-if="course.sale">
                  <span class="line-through font-semibold">59$</span>
                  <span class="font-semibold text-2xl text-green-700">39$</span>
              </div>
              <!-- <div class="  font-serif">Lifetime access!</div> -->
            </div>
          </div>
        </div>
      </div></a
    >
  </div>
</template>

<script>
export default {
  props: {
    course: { type: Object, required: true },
  },
  data() {
    return {
      scoresHelper: []
    }
  },
  methods: {},
  created() {
    const trunc = Math.trunc(this.course.score);
    const drobnay = this.course.score - trunc;
    // console.log(this.scoresHelper, trunc,drobnay)
    
    for(let i=0; i<trunc; i++) {
      this.scoresHelper[i]=1
    }
    this.scoresHelper[trunc] = drobnay
    let j=trunc+1
    // console.log("Jey:",j)
    while(j<5) {
      this.scoresHelper[j]=0
      j++
    }
    // console.log(this.scoresHelper, trunc,drobnay)
    
  },
  mounted() {
    // const trunc = Math.trunc(this.course.score);
    // const drobnay = this.course.score - trunc;
    // console.log(this.scoresHelper, trunc,drobnay)
    
    // for(let i=0; i<trunc; i++) {
    //   this.scoresHelper[i]=1
    // }
    // this.scoresHelper[trunc] = drobnay
  }
};
</script>

<style scoped>
.card {
}
/* .card:hover > div {
  transform: translateY(-15px);
  @apply shadow-2xl;
} */
.stars--text {
  position: absolute;
  left: 6.5rem;
  top: -2px;
}
.score {
  position: absolute;
  top: 0.2rem;
  left: 1.3rem;
}
.hours {
  position: absolute;
  top: -2px;
  right: 0;
}
.desc {
}

/* Lenta */

/* .rotate-block {
  position: absolute;
  right: -15px;
  top: -15px;
  z-index: 1;
  overflow: hidden;
  width: 200px;
  height: 200px;
  text-align: right;
}
.simple-ribbon {
  display: block;
  position: absolute;
  top: 52px;
  left: 8px;
  background: #68d391;
  box-sizing: content-box;
  text-align: center;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  padding: 10px 20px;
  height: 20px;
  width: 100%;
}
.simple-ribbon::after,
.simple-ribbon::before {
  content: "";
  position: absolute;
  top: 100%;
  border-width: 10px 10px;
  border-style: solid;
  border-radius: 1px;
  box-sizing: border-box;
  padding: 0;
  width: 0;
  z-index: -1;
}
.simple-ribbon::before {
  left: 0;
  border-color: #2f855a transparent transparent #2f855a;
}
.simple-ribbon::after {
  right: 0;
  border-color: #2f855a #2f855a transparent transparent;
} */
</style>
