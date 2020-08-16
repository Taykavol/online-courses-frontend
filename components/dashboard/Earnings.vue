<template>
  <div class=" w-full flex">
    <div class="my-1 pt-2 pb-2 px-10  flex-1 bg-gray-200 w-3/4  rounded-l-lg">
      <div class="mr-6  mt-8 py-2 h-full  flex flex-col bg-gray-100 rounded-lg">
        <div class=" h-64 flex">
          <div class=" w-1/3 bg-gray-300 m-4 flex flex-col justify-center items-center">
            <div class="">Last month</div>
            <div class="mt-1 text-3xl font-semibold">$ 1,579.20*% = $ 947.52 </div>
            <div
            class="float-right text-base bg-green-400 rounded px-2 py-1 text-white cursor-pointer"
            >Finished
            </div>
          </div>
          <div class=" w-1/3 bg-gray-300 m-4 flex flex-col justify-center items-center">
          <div class="">This month</div>
            <div class="mt-1 text-3xl font-semibold">$ 1,579.20</div>
            <div
              class="float-right text-base bg-blue-400 rounded px-2 py-1 text-white cursor-pointer"
            >
              Active
            </div>
          </div>
          <div class=" w-1/3 bg-gray-300 m-4 flex flex-col justify-center items-center">
          <div class="">Total earning</div>
            <div class="mt-1 text-3xl font-semibold">$ 17979.20</div>
            <div
            class="float-right text-base bg-green-400 rounded px-2 py-1 text-white cursor-pointer"
            >Finished
            </div>
          </div>
        </div>
      </div>
    </div>
    <aside-component class=" w-1/4"></aside-component>
  </div>
</template>

<script>
import AsideComponent from "~/components/dashboard/Aside.vue";

export default {
  components: {
    AsideComponent
  }
};
</script>

<style></style>
