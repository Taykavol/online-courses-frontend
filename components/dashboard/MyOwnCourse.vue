<template>
  <!-- <div class="flex justify-center p-24  bg-gray-100"> -->
    <div @click="consol" class="bg-white rounded m-4 p-4 shadow flex flex-col cursor-pointer duration-300 transform hover:-translate-y-1">
      <div class="flex">
        <div class=" text-center w-full">
          <h1 class="font-semibold">
            {{courseInfo.title}}
          </h1>
          <span class="block text-xs uppercase text-blue-400">{{courseInfo.category}}</span>
        </div>
        <!-- <div class="w-1/3">
          <span
            v-if="courseInfo.progress>0&&courseInfo.progress<100"
            class="float-right text-base bg-blue-400 rounded px-2 py-1 text-white cursor-pointer"
            >Active</span
          >
          <span
            v-if="courseInfo.progress==0"
            class="float-right  text-base bg-red-400 rounded px-2 py-1 text-white cursor-pointer"
            >New</span
          >
          <span
            v-if="courseInfo.progress==100"
            class="float-right text-base bg-green-400 rounded px-2 py-1 text-white cursor-pointer"
            >Finished</span
          >
        </div> -->
      </div>
      <div class="py-4 text-sm">
        {{courseInfo.subtitle}}
        
      </div>
        <div class=" mt-auto  ">
        <div class="flex">
          <div class="w-1/2 flex-col">
            <span class="flex justify-center text-2xl font-semibold">{{courseInfo.lessons}}</span>
            <span class="flex justify-center text-gray-500">Lessons</span>
          </div>
          <div class="w-1/2 flex-col">
            <span class="flex justify-center text-2xl font-semibold">{{totalDuration}}</span>
            <span class="flex justify-center text-gray-500">Hours</span>
          </div>
        </div>
        </div>

    </div>
  <!-- </div> -->
</template>

<script>
export default {
  props:{
    courseInfo:{
      type:Object,
      require:true
    }
  },
  computed:{
    totalDuration() {
      let temp = this.courseInfo.duration;
      const hours = Math.floor(temp / 3600);
      const minutes = Math.floor(Math.floor(temp / 60) % 60);
      const second = (Math.floor(temp) % 3600) % 60;
      console.log(temp);
      return `${hours}:${minutes > 10 ? minutes : "0" + minutes}:${
        second > 10 ? second : "0" + second
      } `;
    },
  },
  methods:{
    consol() {
      console.log('sdgdfg')
      this.$router.push(`/course/${this.courseInfo.id}`)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
