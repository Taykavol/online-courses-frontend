<template>
  <!-- component -->
  <div class="  flex justify-center items-center h-screen  ">
    <div
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-3/4   "
    >
      <div class="-mx-3 md:flex mb-6">
        <div class=" w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide  text-xs font-bold mb-2 ">
            Title
          </label>
          <input
            @change="isActive=true"
            v-model="title"
            :class="[
              title.length == 0 ? 'border-red-500' : 'border-black',
              'appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 '
            ]"
            type="text"
            placeholder="My course name"
          />
          <p
            :class="
              title.length == 0
                ? 'text-red-500 text-xs italic'
                : ' invisible text-xs italic'
            "
          >
            Please fill out this field.
          </p>
        </div>
      </div>
      <div class=" w-full  mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide  text-xs font-bold mb-2 "
          for="grid-first-name"
        >
          Subtitle
        </label>
        <input
         @change="isActive=true"
          v-model="subtitle"
          :class="[
            subtitle.length == 0 ? 'border-red-500' : 'border-black',
            'appearance-none block w-full bg-gray-100 text-gray-500 border  rounded py-3 px-4 '
          ]"
          type="text"
          placeholder="My course name"
        />
        <p
          :class="
            subtitle.length == 0
              ? 'text-red-500 text-xs italic'
              : ' invisible text-xs italic'
          "
        >
          Please fill out this field.
        </p>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            Description
          </label>
          <textarea
            @change="isActive=true"
            v-model="description"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            type="password"
            placeholder=""
          />
          <p class="text-grey-dark text-xs italic">
            Tell students what they will learn.
          </p>
        </div>
      </div>
      <div class="-mx-3 md:flex md:items-center mb-2">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide  text-xs font-bold mb-2 ">
            Level {{value[0]}}-{{value[1]}} Elo
          </label>
          <vue-slider
            @change="isActive=true"
            v-model="value"
            :adsorb="true"
            :data="data"
            class=""
            :tooltip="'none'"
            :tooltip-placement="['bottom', 'bottom']"
          >
          </vue-slider>
          
        </div>
        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-state"
          >
            category
          </label>
          <div class="relative">
            <select
              @change="isActive=true"
              v-model="category"
              class="block appearance-none w-full bg-gray-100 border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded outline-none"
            >
              <option value="Openings">Openings</option>
              <option value="Middlegame">Middlegame</option>
              <option value="Endgame">Endgame</option>
              <option value="Games">Games</option>
              <option value="Basics">Basics</option>
            </select>
            <div
              class="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2 text-grey-darker "
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3  ">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            Price
          </label>
          <div class="relative">
            <select
            @change="isActive=true"
              v-model="price"
              class="block appearance-none w-full bg-gray-100 border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded outline-none"
            >
              <option value="10">10$</option>
              <option value="15">15$</option>
              <option value="20">20$</option>
              <option value="25">25$</option>
              <option value="30">30$</option>
            </select>
            <div
              class="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2 text-grey-darker"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    <div class=" flex justify-center">
      <div @click="isActive?save():''" :class="isActive?'bg-blue-500 px-5 text-xl mt-2 py-1  cursor-pointer text-white':'bg-gray-200 cursor-not-allowed px-5 text-xl mt-2 py-1' ">Save</div>
    </div>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import axios from "axios"
export default {
  components: {
    VueSlider
  },
  props: {
    course: {
      type: Object
    }
  },
  created() {
    this.title = this.course.title
    this.subtitle = this.course.subtitle
    this.category = this.course.category
    this.description = this.course.description
    this.price = this.course.price
    this.value[0] = +this.course.level.split(" ")[0]
    this.value[1] = +this.course.level.split(" ")[1]
    // console.log()
  },
  data() {
    return {
      isActive:false,
      title: "",
      subtitle: "",
      description:"",
      category: "",
      price:"",
      value: [1500, 2200],
      data:[1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900]
    };
  },
  methods:{
    async save() {
      this.isActive=false
      const level = this.value.join(" ")
      const res = await axios({url:`/buildcourse/${this.$route.params.id}`,method:"PATCH", data:{
        title:this.title,
        subtitle:this.subtitle,
        description:this.description,
        level,
        category:this.category,
        price:+this.price
      }})
      console.log(res)
    }
  }
};
</script>

<style>
@import url("~/node_modules/vue-slider-component/theme/antd.css");
</style>
