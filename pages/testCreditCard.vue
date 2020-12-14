<template>
  <div class=" flex  flex-col container mx-auto ">
      <!-- <CourseBeforeBuy class=" hidden lg:block w-full lg:w-1/2 "/> -->
      <div class=" my-4  z-50 text-center  "> 
        <h2 class="text-sm title-font text-gray-500 tracking-widest">COURSE</h2>
        <h1 class="text-gray-900 text-2xl  font-medium -mt-1">The Catcher in the Rye</h1>
          <!-- <div class="text-2xl">Chess for begginers.</div> -->
          <div class="">
              <div class="">By GM Vadim Moiseenko </div>
          </div>
      </div>
      <CreditCard class="w-full lg:w-1/2 flex flex-col items-center justify-center" />

  </div>
</template>

<script>
import CreditCard from "~/components/common/CreditCard";
import CourseBeforeBuy from "~/components/common/CourseBeforeBuy"
export default {
  components: {
    CreditCard,CourseBeforeBuy
  },
  methods:{

  }
};
</script>

<style>
.bg--modal {
    background: rgb(196, 196, 196,0);
}
</style>