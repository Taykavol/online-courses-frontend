<template>
  <div class="space-y-1 w-44 ">
    <!-- <label id="listbox-label" class="block text-sm leading-5 font-medium text-gray-700  ">
          Assigned to
        </label> -->
    <div @click="paymentSelect = !paymentSelect" class="relative">
      <span class="inline-block w-full rounded-md shadow-sm">
        <button
          type="button"
          class="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-1 text-left focus:outline-none  focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
        >
          <div class="flex items-center space-x-3">
            <img
              :src="selectedUrl"
              alt=""
              class="flex-shrink-0 h-6 w-6 "
            />
            <span class="block truncate">
              {{ currentVal }}
            </span>
          </div>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 ">
            <svg
              class="h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </span>

      <!--
            Select popover, show/hide based on select state.

            Entering: ""
              From: ""
              To: ""
            Leaving: "transition ease-in duration-100"
              From: "opacity-100"
              To: "opacity-0"
          -->
      <transition
        leave-class=""
        leave-to-class=""
        leave-active-class=""
      >
        <div
          v-show="paymentSelect == true"
          style=" opacity:0.99"
          class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-50 "
        >
          <ul
            style=" opacity:0.99"
            class=" max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
          >
            <!--
                Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

                Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
              -->
            <li
              v-for="(option,index) in options"
              :key="index"
              @click="option.fn()"
              role="option"
              :class="{
                'text-white bg-indigo-600': currentValue == option.title,
                'text-gray-900':currentValue != option.title,
                ' hidden':ignoreValue.find(value=>value==option.title)
              }"
              class=" cursor-pointer select-none relative py-1 pl-2 pr-9 hover:bg-indigo-600 hover:text-white "
            >
              <div class="flex items-center space-x-3 ">
                <img
                  :src="option.url"
                  alt=""
                  class="flex-shrink-0 h-6 w-6 "
                />
                <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                <span class="font-normal block truncate">
                  {{option.text}}
                </span>
              </div>

              <!--
                  Checkmark, only display for selected option.

                  Highlighted: "text-white", Not Highlighted: "text-indigo-600"
                -->
              <span
                v-if="currentValue == option.title"
                class="absolute inset-y-0 right-0 flex items-center pr-4 "
              >
                <!-- Heroicon name: check -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  // props:['currentValue','options', 'ignoreValue'],
  props:{
    currentValue:{
      
    },
    options:{
      type:Array
    },
    ignoreValue:{
      type:Array,
      default:()=>[]
    }
  },
  data() {
      return {
          paymentSelect:false,
          currentVal:''
      }
  },
  computed: {
      selectedUrl() {
          const option = this.options.find(option=>option.title==this.currentValue)
          if(option)  {
            this.currentVal = option.text
            return option.url
          }
          this.currentVal ="Not selected"
          return '/images/payment/payment.png'
          
      },
  },
  created() {
      console.log('ignore',this.ignoreValue)
  },
  mounted() {
      document.addEventListener('click', this.close)
  },
  beforeDestroy () {
    // console.log('hoo')
    document.removeEventListener('click',this.close)
  },
  methods:{
      close(e) {
        if (!this.$el.contains(e.target)) {
        this.paymentSelect=false
      }
  }
  }
};
</script>

<style>
/* .z-kill {
  z-index: 150 ;
} */
</style>
