<template>
  <div class="flex items-start p-3  ">
    <div class="flex-shrink-0">
      <div class="inline-block relative">
        <img class=" w-16 h-16" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImZsYXQiPjxwYXRoIGQ9Im0yOTYgMzQ0IDE0Ny44ODIgNzMuOTQxYTYwIDYwIDAgMCAxIDMyLjU2NCA0NS4xOGwzLjU1NCAyNC44NzloLTQ0OGwzLjU1NC0yNC44NzlhNjAgNjAgMCAwIDEgMzIuNTY0LTQ1LjE4bDE0Ny44ODItNzMuOTQxeiIgZmlsbD0iI2VhZWFlOCIgZGF0YS1vcmlnaW5hbD0iI2VhZWFlOCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yMDggMzY4aDk2djEyMGgtOTZ6IiBmaWxsPSIjYjBkMmZkIiBkYXRhLW9yaWdpbmFsPSIjYjBkMmZkIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTIxNiAzMTJ2MzJsLTggMjRoNDggNDhsLTgtMjR2LTMyeiIgZmlsbD0iI2ZkYzlhNiIgZGF0YS1vcmlnaW5hbD0iI2ZkYzlhNiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNjAgMjAwdi03My42NzVhNTMuOSA1My45IDAgMCAwIC0xNS43ODYtMzguMTExbC0xNi40MjgtMTYuNDI4YTUzLjkgNTMuOSAwIDAgMCAtMzguMTExLTE1Ljc4NmgtNTIuODMxYTUzLjkgNTMuOSAwIDAgMCAtNDQuODQ0IDI0bC05LjQ2NCAzLjE1NWE0NC42NTggNDQuNjU4IDAgMCAwIC0yMy4wMzYgMTcuNTk0IDQ0LjY2NiA0NC42NjYgMCAwIDAgLTcuNSAyNC43NzN2NzQuNDc4eiIgZmlsbD0iIzU1MzAwYiIgZGF0YS1vcmlnaW5hbD0iIzU1MzAwYiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yOTYgMzEydjE5LjY0Yy0uMDguMDYtLjE3LjExLS4yNS4xN2E3MC45IDcwLjkgMCAwIDEgLTc5Ljc1LS4xN3YtMTkuNjR6IiBmaWxsPSIjZTZhZjg5IiBkYXRhLW9yaWdpbmFsPSIjZTZhZjg5IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI1NiAzMjhhNzAuOSA3MC45IDAgMCAxIC02NS44MjctNDQuNTY3IDE5OC4xNTYgMTk4LjE1NiAwIDAgMSAtMTQuMTczLTczLjU5NnYtNTcuODM3bDI0LTQwLjczIDUuMTE0IDQuMTg1YTEyNi4yNjYgMTI2LjI2NiAwIDAgMCA3OS45NjIgMjguNTQ1aDUwLjkyNHY2NS44MzdhMTk4LjE1NiAxOTguMTU2IDAgMCAxIC0xNC4xNzMgNzMuNiA3MC45IDcwLjkgMCAwIDEgLTY1LjgyNyA0NC41NjN6IiBmaWxsPSIjZmRjOWE2IiBkYXRhLW9yaWdpbmFsPSIjZmRjOWE2IiBzdHlsZT0iIj48L3BhdGg+PGcgZmlsbD0iIzU1MzAwYiI+PHBhdGggZD0ibTMwNCAxODRhNy45ODggNy45ODggMCAwIDEgLTIuNTMxLS40MTNsLTI0LThhOCA4IDAgMSAxIDUuMDYtMTUuMTc4bDI0IDhhOCA4IDAgMCAxIC0yLjUyOSAxNS41OTF6IiBmaWxsPSIjNTUzMDBiIiBkYXRhLW9yaWdpbmFsPSIjNTUzMDBiIiBzdHlsZT0iIj48L3BhdGg+PGNpcmNsZSBjeD0iMjkwIiBjeT0iMjAyIiByPSIxMCIgZmlsbD0iIzU1MzAwYiIgZGF0YS1vcmlnaW5hbD0iIzU1MzAwYiIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTIwOCAxODRhOCA4IDAgMCAxIC0yLjUyOS0xNS41OTFsMjQtOGE4IDggMCAxIDEgNS4wNiAxNS4xNzhsLTI0IDhhNy45OTIgNy45OTIgMCAwIDEgLTIuNTMxLjQxM3oiIGZpbGw9IiM1NTMwMGIiIGRhdGEtb3JpZ2luYWw9IiM1NTMwMGIiIHN0eWxlPSIiPjwvcGF0aD48Y2lyY2xlIGN4PSIyMjIiIGN5PSIyMDIiIHI9IjEwIiBmaWxsPSIjNTUzMDBiIiBkYXRhLW9yaWdpbmFsPSIjNTUzMDBiIiBzdHlsZT0iIj48L2NpcmNsZT48L2c+PHBhdGggZD0ibTI0Ni4xMTEgMjgwaC02LjExMWE4IDggMCAwIDEgMC0xNmg2LjExMWE2OC4xMTggNjguMTE4IDAgMCAwIDMwLjMxMS03LjE1NSA4IDggMCAxIDEgNy4xNTYgMTQuMzEgODQuMjA5IDg0LjIwOSAwIDAgMSAtMzcuNDY3IDguODQ1eiIgZmlsbD0iI2U2YWY4OSIgZGF0YS1vcmlnaW5hbD0iI2U2YWY4OSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNjQgMjQ4aC0xNmE4IDggMCAwIDEgLTgtOHYtMjRhOCA4IDAgMCAxIDE2IDB2MTZoOGE4IDggMCAwIDEgMCAxNnoiIGZpbGw9IiNlNmFmODkiIGRhdGEtb3JpZ2luYWw9IiNlNmFmODkiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMTc2IDE3NmgtMTEuMDU2YTIwLjk0NCAyMC45NDQgMCAwIDAgLTIwLjk0NCAyMC45NDR2MTQuMTEyYTIwLjk0NCAyMC45NDQgMCAwIDAgMi4yMTEgOS4zNjYgMjAuOTQ0IDIwLjk0NCAwIDAgMCAxOC43MzMgMTEuNTc4aDE5LjA1NnoiIGZpbGw9IiNmZGM5YTYiIGRhdGEtb3JpZ2luYWw9IiNmZGM5YTYiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzM2IDE3NmgxMS4wNTZhMjAuOTQ0IDIwLjk0NCAwIDAgMSAyMC45NDQgMjAuOTQ0djE0LjExMmEyMC45NDQgMjAuOTQ0IDAgMCAxIC0yLjIxMSA5LjM2NiAyMC45NDQgMjAuOTQ0IDAgMCAxIC0xOC43MzMgMTEuNTc4aC0xOS4wNTZ6IiBmaWxsPSIjZmRjOWE2IiBkYXRhLW9yaWdpbmFsPSIjZmRjOWE2IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTcyIDQ4OHYtMzJhOCA4IDAgMCAxIDE2IDB2MzJ6IiBmaWxsPSIjY2JjYmNiIiBkYXRhLW9yaWdpbmFsPSIjY2JjYmNiIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTQyNCA0ODh2LTMyYTggOCAwIDAgMSAxNiAwdjMyeiIgZmlsbD0iI2NiY2JjYiIgZGF0YS1vcmlnaW5hbD0iI2NiY2JjYiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yMjQgMzkyIDE2IDMyaDMybDE2LTMyLTMyLTI0eiIgZmlsbD0iIzAyOTZlNSIgZGF0YS1vcmlnaW5hbD0iIzAyOTZlNSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNDAgNDI0LTggNjRoNDhsLTgtNjR6IiBmaWxsPSIjMDI5NmU1IiBkYXRhLW9yaWdpbmFsPSIjMDI5NmU1IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI3NCA0NDBoLTM2bDItMTZoMzJ6IiBmaWxsPSIjMDI5NmU1IiBkYXRhLW9yaWdpbmFsPSIjMDI5NmU1IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI1NiAzNjgtNTYgNDAtMTYtNDggMjQtMjR6IiBmaWxsPSIjYjBkMmZkIiBkYXRhLW9yaWdpbmFsPSIjYjBkMmZkIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI1NiAzNjggNTYgNDAgMTYtNDgtMjQtMjR6IiBmaWxsPSIjYjBkMmZkIiBkYXRhLW9yaWdpbmFsPSIjYjBkMmZkIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI3NCA0NDBoLTM2bDItMTZoMzJ6IiBmaWxsPSIjMDI2Y2EyIiBkYXRhLW9yaWdpbmFsPSIjMDI2Y2EyIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
        <!-- <div class="relative w-16 h-16 rounded-full overflow-hidden">
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
        </svg> -->
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
