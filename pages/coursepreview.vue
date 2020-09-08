<template>
  <div class=" ">
      <div class=" h-40 bg-white">

      </div>
      <div class=" flex justify-center bg-gray-300 py-5">
        <iframe class="  rounded-lg overflow-hidden" src="https://player.vimeo.com/video/449314038" width="640" height="366" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <div class=" ml-10 text-center flex flex-col text-2xl">
            <div class="flex  flex-col  text-gray-200 ">
                <div class=" w-64 bg-awesome rounded-t-lg p-2 border-dashed border-b-2 border-orange-900 ">Best price</div>
                <div class=" rounded-b-lg bg-awesome p-2 text-3xl price "> $35  </div>
                <div class="   bg-awesome self-center w-10 h-6 arrow "></div>
            </div>
            <div class=" bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-extrabold rounded-lg cursor-pointer shadow-xl uppercase tracking-tighter ">buy in 1 click</div>
            <div class=""></div>
        </div>

      </div>
      <div class="  flex-col flex  ">
            <!-- <reviews/> -->
            <schedule class=" w-7/12 ml-12  mt-4 " />

      </div>
  </div>
</template>

<script>
import reviews from '~/components/courseprev/reviews.vue'
import schedule from '~/components/courseprev/schedule.vue'
export default {
components:{
    reviews,schedule
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@1,700&display=swap');
.arrow {
    clip-path: polygon(50% 100%, 100% 0, 0 0);
}
.bg-awesome {
    background-color: #183153;
}
.price {
    /* font-family: 'Fredoka One', cursive; */
    /* font-family: 'Frijole', cursive; */
    /* font-family: 'Titan One', cursive; */
    font-family: 'Crimson Text', serif;
    /* font-weight: 700; */
}

</style>