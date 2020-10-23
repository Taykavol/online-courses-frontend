<template>
  <div class="group inline-block relative">
  <button
    @click.prevent="pushed=!pushed"
    class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center w-full min-w-16  "
  >
    <span  class="pr-1 font-semibold flex-1">{{select}}</span>
    <span>
      <svg
       :class="{'-rotate-180':pushed}"
        class="fill-current h-4 w-4 transform 
        transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </span>
  </button>
  <ul
   :class="{'scale-0':!pushed,'scale-100':pushed}"
    class="bg-white border rounded-sm absolute right-0 
  transition duration-150 ease-in-out origin-top min-w-32  z-40 "
  >
    <li  v-for="(item,index) in newArray" :key="index" @click="select=item;pushed=false;fn(select)" class="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
data() {
    return {
        select:this.options[0],
        pushed:false,
    }
},
methods:{
  close(e) {
    if (!this.$el.contains(e.target)) {
    this.pushed=false
    }
  }
},
computed: {
    newArray() {
        return this.options.filter(option=>option!=this.select)
    }
},
mounted () {
    document.addEventListener('click', this.close)
  },
  beforeDestroy () {
    // console.log('hoo')
    document.removeEventListener('click',this.close)
  },
props:{
    options:{
        type:Array
    },
    fn:{
      type:Function,
      // require:true
    }
}
}
</script>

<style scoped>
  /* since nested groupes are not supported we have to use 
     regular css for the nested dropdowns 
  */
  /* li>ul                 { transform: translatex(100%) scale(0) }
  li:hover>ul           { transform: translatex(101%) scale(1) } */
  /* li > button svg       { transform: rotate(-90deg) }
  li:hover > button svg { transform: rotate(-270deg) } */

  /* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
  .group:hover .group-hover\:scale-100 { transform: scale(1) }
  .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
  .scale-0 { transform: scale(0) }
  .min-w-16 { min-width: 4rem }
</style>