<template>
  <div class=" my-32 mx-32  h-full p-10 border-2">
    <div class=" w-2/3">
      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
        <div class="flex -mr-px">
          <span
            class="flex text-2xl text-gray-700 font-semibold font-sans items-center leading-normal bg-gray-200 rounded rounded-r-none border border-r-0  px-3 whitespace-no-wrap  "
            >Course name</span
          >
        </div>
        <input
          @input="hello"
          ref="inputCourseName"
          type="text"
          class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 outline-none rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
          placeholder="my-course"
          maxlength="50"
        />
        <div class=" absolute top-0 right-0 bg-gray-600 h-full p-1 w-10 flex justify-center text-white font-bold text-xl"> {{courseLength}}</div>
      </div>
      
      
    </div>
    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
        <div class="flex -mr-px">
          <span
            class="flex text-2xl text-gray-700 font-semibold font-sans items-center leading-normal bg-gray-200 rounded rounded-r-none border border-r-0  px-3 whitespace-no-wrap  "
            >Subtitle</span
          >
        </div>
        <input
          @input="hello2"
          type="text"
          ref="inputDescriptionName"
          class="flex-shrink flex-grow flex-auto leading-normal outline-none w-px border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
          placeholder="my-subtitle"
          maxlength="100"
        />
        <div class=" absolute top-0 right-0 bg-gray-600 h-full p-1 w-10 flex justify-center text-white font-bold text-xl"> {{descriptionLength}}</div>
      </div>
      <upload-photo></upload-photo>
  </div>
</template>

<script>
import UploadPhoto from '~/components/publishcourse/UploadPhoto'
export default {
    data() {
        return {
            isMounted:false,
            courseLength:50,
            descriptionLength:100
        }
    },
    components:{
        UploadPhoto
    },
    computed: {
            // courseLenght() {
                
            //     if(this.isMounted) {
            //         const value = this.$refs.inputCourseName.value.length
            //         return (50-value)
            //     }
            // }
    },
    mounted () {
        // this.isMounted=true
        // console.log(this.$refs.inputCourseName.value.length)
    },
    methods:{
        hello() {
            this.courseLength=50-this.$refs.inputCourseName.value.length
        },
        hello2() {
            this.descriptionLength=100-this.$refs.inputDescriptionName.value.length
        },
    }
};
</script>

<style></style>
