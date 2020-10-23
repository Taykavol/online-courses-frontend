<template>
  <div class="flex items-start p-3  ">
    <div class="flex-shrink-0">
      <div class="inline-block relative">
        <div class="relative w-16 h-16 rounded-full overflow-hidden">
          <!-- <img
            class="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
            src="https://picsum.photos/id/646/200/200"
            alt="Profile picture"
          /> -->
          <div v-if="review.authorName" class="absolute top-0 left-0 w-full h-full bg-orange-300 flex justify-center items-center text-4xl font-serif "
            > {{review.authorName[0]}}</div>
          <div
            class="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"
          ></div>
        </div>
        <svg
          class="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"
          />
        </svg>
      </div>
    </div>
    <div class="ml-6">
      <p class="flex items-baseline">
        <span class="text-gray-900 ">{{review.authorName}}</span>
        <span class="ml-2 text-green-600 text-xs">Verified Buyer</span>
      </p>
      <div  class="flex items-center mt-1">
        <svg
          v-for="(index,item) of 5"
          :key="index"
          :class="{'text-yellow-600':index<=review.review}"
          class="w-4 h-4 fill-current text-gray-500 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          />
        </svg>
      </div>
      <div class="mt-1">
        <span class="font-semibold ">{{review.reviewSubtitle}}</span>
        <p class="-mt-5 whitespace-pre-line">
          {{review.reviewMessage}}
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    props:{
        review:{
            type:Object,
            default:()=>{
                return {review:{}}
            }
        }
    },
    created() {
        console.log(this.review)
    }
};
</script>

<style></style>
