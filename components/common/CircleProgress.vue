<template>
  <div class=" relative ">
    <svg class="progress-ring overflow-visible transform -rotate-90 relative  z-30  " width="60" height="60">
      <circle
        ref="progresscirclepuzzle"
        class="progress-ring__circle "
        fill="transparent"
        stroke="currentColor"
        stroke-width="5"
        cx="30"
        cy="30"
        r="25"
      ></circle>
    </svg>
    <svg class="progress-ring overflow-visible transform -rotate-90  absolute inset-0  " width="60" height="60">
      <circle
        class="progress-ring__circle text-gray-400"
        fill="transparent"
        stroke="#cbd5e0"
        stroke-width="5"
        cx="30"
        cy="30"
        r="25"
      ></circle>
    </svg>
    <div class=" absolute inset-0 flex flex-col justify-center items-center text-xs text-gray-800">
        <img class="w-6 h-6 -mb-1" :src="src" alt="">
      {{percent}}%
        <!-- <svg  class="svg-inline--fa fa-photo-video fa-w-20 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="photo-video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"></path></svg> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number
    },
    src:{
        type: String
    }
  },
  mounted(){
      console.log('Amasd',this.percent)
      this.setProgressPuzzle(this.percent)
  },
  methods:{
      setProgressPuzzle(percent) {
        // const percent = this.totalPuzzleSolved
        const circle =   this.$refs.progresscirclepuzzle
        const radius = circle.r.baseVal.value
        const circumference = 2*Math.PI*radius

        circle.style.strokeDasharray=`${circumference} ${circumference}`

        const offset = circumference - percent / 100 *circumference
        circle.style.strokeDashoffset = offset
    }
  }
};
</script>

<style>

</style>
