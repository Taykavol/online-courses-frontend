<template>
  <div class="relative h-screen">
    <div style="height: 30.3rem" class="absolute -mt-4 w-screen z-0 "></div>
    <div class="lg:container mx-auto mt-8">
      <div class="grid md:grid-cols-3 ph2:grid-cols-2 xl:grid-cols-4 w-full gap-x-2 md:gap-x-6 gap-y-6">
        <div v-for="(item, index2) in instructors" :key="index2" class="col-span-1 flex items-center justify-center">
          <Card :instructor="item" class="w-full z-10 relative flex duration-500 hover:opacity-75 " />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import Card from "~/components/instractors/InstractorCard";
export default {
  middleware: "common",
  components: {
    Card,
  },
  data() {
    return {
      instructors: [],
    };
  },
  async created() {
    this.instructors = await this.$store.dispatch("setInstructors");
  },
  // methods: {
  //     scroll () {
  //             console.log('scrol')
  //         window.onscroll = () => {
  //         let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

  //         if (bottomOfWindow) {
  //             alert('sgddfg')
  //             console.log('super')
  //         }
  //         };
  //     },
  // },
  // mounted() {
  //     this.scroll();
  // }
};
</script>

<style>

.amazine-bg {
  background-color: #f5f5f5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23bbbbbb' fill-opacity='0.42'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
}

</style>