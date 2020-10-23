<template>
  <div class="">
    <div class="  text-xl mb-3 flex justify-between ">
      <div class="w-1/3"></div>
      <div class="w-1/3 text-center">{{title}}</div>
      <div class="w-1/3 text-right pr-8 flex justify-end space-x-1 font-bold">
        <paginate
        class=" flex outline-none  "
        v-model="pageNumber"
        :page-count="pageCount"
        :prev-text="''"
        :page-link-class="'outline-none mx-px hover:text-indigo-600'"
        :next-text="''"
        :break-view-class="' cursor-text'"
        :active-class="' text-indigo-600 border-b-2 border-indigo-600 '"
        :container-class="''">
      </paginate>
        <!-- <div v-if="pageNumber > 1" class="">...</div>
        <div
          v-if="pageNumber >= -1 && pageNumber <= 1 && pageCount > 1"
          @click="numPage(0)"
          :class="{
            ' text-purple-500 border-b-2 border-purple-400': pageNumber == 0
          }"
          class=" cursor-pointer"
        >
          1
        </div>
        <div
          v-if="pageNumber >= 0 && pageNumber <= 2 && pageCount > 1"
          @click="numPage(1)"
          :class="{
            '  text-purple-500 border-b-2 border-purple-400': pageNumber == 1
          }"
          class=" cursor-pointer"
        >
          2
        </div>
        <div
          v-if="pageNumber >= 1 && pageNumber <= 3 && pageCount > 2"
          @click="numPage(2)"
          :class="{
            '  text-purple-500 border-b-2 border-purple-400': pageNumber == 2
          }"
          class=" cursor-pointer"
        >
          3
        </div>
        <div
          v-if="pageNumber >= 2 && pageNumber <= 4 && pageCount > 3"
          @click="numPage(3)"
          :class="{
            'text-purple-500 border-b-2 border-purple-400': pageNumber == 3
          }"
          class=" cursor-pointer"
        >
          4
        </div>
        <div v-if="pageCount > 2 && pageNumber < pageCount - 2" class="">
          ...
        </div> -->
      </div>
    </div>
    <card class=" " v-for="item in paginatedData" :key="item.id" :course="{...item,pictureUri:item.pictureUri?'https://chess-courses.hb.bizmrg.com/'+item.pictureUri:'https://images.unsplash.com/photo-1601758002737-1919f3ba2774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}" />
  </div>
</template>

<script>
import Card from "~/components/home/Card4brain";
import Paginate from 'vuejs-paginate'
export default {
  components: {
    Card,Paginate
  },
  
  props:{
    courses:{
        type:Array
    },
    title:{
      type:String
    }

  },
  data() {
    return {
        pageNumber: 1,
        size:5,
        page:1
    };
  },
  methods:{
      numPage(num) {
        this.pageNumber = num
      }
  },
  watch: {
    courses() {
      this.pageNumber = 1
    }
  },
  computed: {
    pageCount() {
      let l = this.courses.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = (this.pageNumber-1) * this.size,
        end = start + this.size;
      
      return this.courses.slice(start, end);
    }
  }
};
</script>

<style>
.pagination {
 outline: none !important ;
 @apply outline-none border-none text-red-600;

}
.pagination:focus {
  /* ou */
  @apply outline-none
}
</style>
