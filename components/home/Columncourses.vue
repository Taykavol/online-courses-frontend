<template>
<div class="">
  <div v-if="courses.length>=1" class=" relative">
    <div  class=" pagination absolute z-10 right-0 bottom-0 -mb-10 ph2:mb-0 ph2:bottom-auto  ph2:-mt-10    text-xl  flex justify-between ">
      <div class="w-1/3"></div>
      <div class="w-2/3 text-center">
        <!-- <Select class=" z-50 relative w-48" :currentValue="title.selectedValue" :options="title.options"/> -->
      </div>
      <div class="w-1/3 text-right pr-8 flex justify-end space-x-1 font-bold">
        <paginate
        :class="{'invisible':pageCount==1}"
        class=" flex outline-none z-0 "
        v-model="pageNumber"
        :page-count="pageCount"
        :prev-text="''"
        :page-link-class="'outline-none mx-px hover:text-indigo-600'"
        :next-text="''"
        :break-view-class="' cursor-text'"
        :active-class="' text-indigo-600 border-b-2 border-indigo-600 '"
        :container-class="''">
      </paginate>
      </div>
    </div>
    <slot v-bind:paginatedData="paginatedData">
      <card class=" mb-4 mt-2 " v-for="item in paginatedData" :key="item.id" :course="{...item,pictureUri:item.pictureUri?'https://chess-courses.hb.bizmrg.com/'+item.pictureUri:'https://images.unsplash.com/photo-1601758002737-1919f3ba2774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}" />
    </slot>
  </div>
  <div v-else class="">
    Sorry,
  </div>
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
    
    size:{
      type:Number,
      default:5
    }

  },
  data() {
    return {
        pageNumber: 1,
        // size:5,
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
  },
  updated() {
    console.log('Courses', this.courses)
  }
};
</script>

<style>
.pagination {
  @media (max-width:640px) {
    right: 25%;
  }
}

</style>
