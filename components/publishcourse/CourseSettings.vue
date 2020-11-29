<template>
  <!-- component -->
  <div class=" flex flex-col-reverse lg:flex-row">
    
    <div class="bg-white border flex flex-col w-full lg:w-6/10 p-5  ">
      <div class=" flex justify-center mb-8 ">
        <div
          @click="isActive ? save() : ''"
          class=" w-full text-center"
          :class="
            isActive
              ? 'bg-blue-500 px-5 text-xl mt-2 py-1  cursor-pointer text-white'
              : 'bg-gray-200 cursor-not-allowed px-5 text-xl mt-2 py-1'
          "
        >
          Save
        </div>
      </div>
      <div class="-mx-3 md:flex mb-3">
        <div class=" w-full px-3  md:mb-0">
          <label
            class="block  tracking-wide   font-bold  text-center"
          >
            Course name <span class=" text-red-500">*</span>
          </label>
          <input
            @input="isActive = true"
            v-model="title"
            :class="[
              ' outline-none block w-full border   p-2  text-xl   '
            ]"
            type="text"
            placeholder="Course name*"
          />
        </div>
      </div>
      <div class=" w-full  mb-3">
        <label
          class="block  tracking-wide   font-bold  text-center "
        >
          Subtitle
        </label>
        <input
          @input="isActive = true"
          v-model="subtitle"
          :class="[
            'outline-none block w-full border p-2 italic text-xl    '
          ]"
          type="text"
          placeholder="Subtitle"
        />
       
      </div>
      <div class="-mx-3 md:flex mb-3">
        <div class="md:w-full px-3 ">
          <label
            class="block  tracking-wide   font-bold  text-center"
          >
            About course
          </label>
          <textarea
            @input="isActive = true"
            v-model="description"
            rows="5"
            class=" outline-none  appearance-none resize-none block w-full text-grey-darker border  rounded pt-3 px-4 "
            type="password"
            placeholder=""
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-3">
        <div class="md:w-full px-3 ">
          <label
            class="block  tracking-wide   font-bold  text-center"
          >
            Who this course is for?
          </label>
          <textarea
            @input="isActive = true"
            v-model="forWho"
            rows="5"
            class=" outline-none  appearance-none resize-none block w-full text-grey-darker border  rounded pt-3 px-4 "
            type="password"
            placeholder=""
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-3">
        <div class="md:w-full px-3 ">
          <label
            class="block  tracking-wide   font-bold  text-center "
          >
            What your students get from studying this course?
          </label>
          <textarea
            @input="isActive = true"
            v-model="whatStudentsGet"
            rows="5"
            class=" outline-none  appearance-none resize-none block w-full text-grey-darker border  rounded pt-3 px-4 "
            type="password"
            placeholder=""
          />
        </div>
      </div>
      <div class=" ">
         <label class="block  tracking-wide   font-bold  text-center">What your students will learn</label>
              <div v-for="(item,index) in sentences" :key="index" class="flex items-center   ">
                <div class=" transform scale-150 ">&#8226;</div>
                <input @change=" isActive=true" class="border-gray-300 border m-1 p-1 outline-none w-3/4" v-model="sentences[index]" type="text" placeholder="Subject">
                <div v-if="sentences.length!=1" @click="sentences.splice(index,1);isActive=true" class=" m-2 px-2 bg-red-700 hover:bg-red-600 text-white cursor-pointer">-</div>
                <div v-if="index==sentences.length-1" @click="addSentence()" class=" m-2 px-2 bg-blue-700 hover:bg-blue-600 text-white cursor-pointer">+</div>
              </div>
              
        </div>
      <div class=" flex ">
        <div class=" flex flex-col  justify-around mb-2 w-full">
          <div class=" px-3">
            <label
              class="block  tracking-wide   font-bold  text-center"
              for="grid-state"
            >
              Category
            </label>
            <div class="relative">
              <select
                @change="isActive = true"
                v-model="category"
                class="block appearance-none w-full border  py-3 px-4 pr-8 rounded outline-none"
              >
                <option value="OPENINGS">Openings</option>
                <option value="MIDDLEGAME">Middlegame</option>
                <option value="ENDGAME">Endgame</option>
                <option value="GAMES">Games</option>
                <option value="BASICS">Basics</option>
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
          <!-- <div class=" px-3 mt-2  ">
            <label
              class="block tracking-wide  font-bold text-center"
            >
              Level
            </label>
            <div class="relative">
              <select
                @change="isActive = true"
                v-model="level"
                class="block appearance-none w-full  border py-3 px-4 pr-8 rounded outline-none"
              >
                <option value="BASIC">Basic (1000-1500 ELO)</option>
                <option value="INTERMEDIATE"
                  >Intermediate (1500-1900 ELO)</option
                >
                <option value="ADVANCED">Advanced (1900-2300 ELO) </option>
                <option value="PROFESSIONAL"
                  >Professional (2300-3000 ELO)</option
                >
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
          </div> -->
          <div class=" flex">
            <div class="w-1/2 px-3 mt-2  ">
              <label
                class="block  tracking-wide   font-bold  text-center"
              >
                Price
              </label>
              <div class="relative">
                <select
                  @change="isActive = true"
                  v-model="price"
                  class="block appearance-none w-full  border py-3 px-4 pr-8 rounded outline-none"
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
           
            <div v-if="isSale" class="w-1/2 px-3  ">
              <label
                class="block uppercase tracking-wide text-center text-xs font-bold mb-2"
              >
                Price
              </label>
              <div class="relative">
                <select
                  @change="isActive = true"
                  v-model="salePrice"
                  class="block appearance-none w-full border py-3 px-4 pr-8 rounded outline-none"
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
        </div>
      </div>
       
      <div class=" my-4  ">
         <label class="block  tracking-wide   font-bold  text-center">level</label>
        <VueSlider :lazy="true" @change="isActive=true" class=" " :marks="marks1" v-model="value" :data="data" >
          <template v-slot:label="{ label,  value }">
            <div class="vue-slider-mark-label " :class="{'bg-blue-700 text-white px-1 rounded-lg font-sans font-semibold text-xs':value==2500,
             'bg-red-700 text-white px-1 rounded-lg font-sans font-semibold text-xs':value==2400,
             'bg-gray-700 text-white px-1 rounded-lg font-sans font-semibold text-xs':value==2300,
             'bg-wk w-5 h-5  ':value==2800,
             'bg-wch w-5 h-5  ':value==2900,
              }">{{label}}</div>
          </template>
        </VueSlider>

      </div>
      <!-- <div class="">
        <UploadPhoto/>
      </div> -->
      
    </div>
    <div class="  flex flex-col p-5 pt-0 w-full lg:w-4/10">
      <!-- ?'https://chess-courses.hb.bizmrg.com/'+course.pictureUri:'https://ssl.gstatic.com/accounts/ui/avatar_2x.png' -->
      <div class="">
        <Card
          onerror="this.src='https://ssl.gstatic.com/accounts/ui/avatar_2x.png'"
          :course="{
            pictureUri: currentUrl,
            title: title,
            authorName: $store.getters.profile.teacherName,
            price: price,
            duration: course.duration
          }"
        />
      </div>
      <div class=" flex flex-col mt-6 w-full ">
        <div class=" flex justify-between items-center">
          <label class="block uppercase tracking-wide text-grey-darker text-sm mb-1 text-center border-b-2 border-blue-300 ">Image preview <span class=" text-red-500">*</span></label>
          
          <div class=" relative self-center w-8 overflow-hidden mb-1 transform duration-150 hover:scale-110 ">
          <input
            accept=".jpg, .jpeg, .png"
            @change="
              handleImageUpload($event);
            "
            type="file"
            class="  relative block  w-8 mx-auto status  opacity-0 z-20"
          />
            <svg class="svg-inline--fa fa-camera-retro fa-w-16 w-8 h-8   absolute inset-0 text-center text-gray-700  cursor-pointer border-yellow-700 flex justify-around" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera-retro"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm0 32h106c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6V80c0-8.8 7.2-16 16-16zm426 96H38c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h138l30.2-45.3c1.1-1.7 3-2.7 5-2.7H464c8.8 0 16 7.2 16 16v74c0 3.3-2.7 6-6 6zM256 424c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm-48 104c-8.8 0-16-7.2-16-16 0-35.3 28.7-64 64-64 8.8 0 16 7.2 16 16s-7.2 16-16 16c-17.6 0-32 14.4-32 32 0 8.8-7.2 16-16 16z"></path></svg>

          <!-- <div  class=" absolute inset-0 text-center w-48 text-yellow-700  cursor-pointer border-2 px-2 border-yellow-700 flex justify-around">
            <div class="">
                Upload image
            </div>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
            
          </div> -->
        </div>
        </div>
        <div class=" relative w-full">
          <img
            onerror="this.src='https://ssl.gstatic.com/accounts/ui/avatar_2x.png'"
            class=" h-64 w-full  object-cover mb-1"
            :src="currentUrl"
            alt=""
          />
          <!-- v-if="photoSave" -->
          <!-- <div v-if="photoSave" class="absolute inset-0 flex items-center justify-center text-green-500">
              <svg class="w-20 h-20 opacity-0 animate-popup " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            </div> -->
          <!-- <div class=" absolute top-0 right-0 mt-2 mr-2 opacity-0 px-1 bg-yellow-300  text-xl font-semibold text-white  animate-popup  ">Saved!</div> -->
        </div>
      </div>
      <div class=" w-48 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500  self-center my-3"></div>
      <div class=" flex flex-col  ">
        <div class=" flex justify-between items-center">
          <label class="block uppercase tracking-wide text-grey-darker text-sm mb-1 text-center border-b-2 border-gray-300">Promotional video</label>
          <div
          class=" relative  flex    w-10  self-center mb-2 transform duration-200 hover:scale-110 "
        >
          <input
            accept="video/mp4,video/x-m4v,video/*"
            ref="promoVideo"
            @change="uploadPromoVideo(`promoVideo`)"
            type="file"
            class=" relative block  w-10 mx-auto status  opacity-0 z-20  "
          />

          <svg
                          version="1.1"
                          class="w-8 h-8 absolute inset-0  text-gray-700 cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="96.992px"
                          height="96.992px"
                          viewBox="0 0 96.992 96.992"
                          style="enable-background:new 0 0 96.992 96.992;"
                          xml:space="preserve"
                        >
                          <g>
                            <path
                              fill="currentColor"
                              d="M82.297,17.002L66.028,0.732C65.559,0.263,64.924,0,64.26,0H16.463c-1.381,0-2.5,1.119-2.5,2.5v91.992
                        c0,1.381,1.119,2.5,2.5,2.5h64.066c1.381,0,2.5-1.119,2.5-2.5V18.769C83.029,18.105,82.766,17.471,82.297,17.002z M67.787,58.854
                        c0,0.104-0.062,0.201-0.156,0.244c-0.035,0.018-0.074,0.023-0.111,0.023c-0.062,0-0.125-0.021-0.174-0.064l-9.236-7.953v7.985
                        c0,0.591-0.479,1.07-1.071,1.07H30.275c-0.591,0-1.07-0.479-1.07-1.07V37.902c0-0.59,0.479-1.07,1.07-1.07h26.762
                        c0.593,0,1.07,0.48,1.07,1.07v7.985l9.238-7.953c0.078-0.068,0.189-0.083,0.284-0.04s0.156,0.139,0.156,0.243L67.787,58.854
                        L67.787,58.854z M62.051,22.342c-0.337,0-0.658-0.133-0.896-0.371c-0.237-0.238-0.372-0.561-0.372-0.897l0.002-15.126L77.18,22.343
                        L62.051,22.342L62.051,22.342z"
                            />
                          </g>
                        </svg>
          <!-- <div v-if="course.promoVideo" class=" absolute inset-0  text-center w-48 text-yellow-700  cursor-pointer border-2 px-2 border-yellow-700">
          Reload promo video
          </div>
          <div v-else class=" absolute inset-0  text-center w-48 text-yellow-700  cursor-pointer border-2 px-2 border-yellow-700">
          Upload promo video
          </div> -->
        </div>
        </div>
        <div class=" relative" >
          <Plyr class="" v-if="course.promoVideo" :id="course.promoVideo" />
          <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80" v-else class="">
          <div v-if="uploadStatus!='invisible'" class=" absolute bg-blue-700  inset-0 flex justify-center items-center text-white ">
            Video will be available soon
          </div>
        </div>
        
        <div v-if="course.promoVideo" class=" self-center text-sm text-red-700 text-right">If video is unable, please wait couple of hours, render is happening.* </div>
        
        <div v-if="uploadStatus!='invisible'" class=" flex flex-col">
          <div class="shadow bg-gray-100 mt-2">
            <div
              class=" bg-teal-500 text-xs leading-none py-1 text-center text-white duration-500"
              :style="'width:' + uploadProgress + '%'"
            >
              {{uploadProgress}}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageCompression from "browser-image-compression";
import Card from "~/components/teacher/teacherCard";
import Plyr from "~/components/common/PlyrVideo";
// import UploadPhoto from '~/components/publishcourse/UploadPhoto'
import VueSlider from "vue-slider-component";
import axios from "axios";
export default {
  components: {
    Card,
    Plyr,
    // UploadPhoto
    VueSlider
  },
  props: {
    course: {
      type: Object
    }
  },
  created() {
    console.log("course", this.course);
    if(this.course.level.length==0)
    this.value = [1000,2900]
    else
    this.value = this.course.level
    this.isSale = this.course.isSale;
    this.title = this.course.title;
    this.subtitle = this.course.subtitle;
    if(this.course.sentences.length>0)
    this.sentences = this.course.sentences.slice()
    else this.sentences =['']
    this.whatStudentsGet = this.course.whatStudentsGet
    this.forWho = this.course.forWho
    this.category = this.course.category;
    this.currentUrl =
      "https://chess-courses.hb.bizmrg.com/" + this.course.pictureUri;
    this.description = this.course.description;
    this.price = this.course.price;
    // this.level = this.course.level;
    this.salePrice = this.course.salePrice;

    // console.log()
  },
  data() {
    return {
      isActive: false,
      file: "",
      title: "",
      // level: "",
      isSale: false,
      subtitle: "",
      forWho:"",
      whatStudentsGet:"",
      // photoSave:false,
      // https://chess-courses.hb.bizmrg.com/course/image5.jpg
      currentUrl: "",
      description: "",
      category: "",
      sentences:[],
      price: "",
      promoVideoId: null,
      uploadStatus: "invisible",
      uploadProgress: 0,
      pos:10,
      label:'fgd',
      value:[],
      marks1: {
          '1000': {pos:0,label:'1000'},
          '1500': {pos:26.3,label:'1500'},
          '2000': {pos:52.63,label:'2000'},
          '2300': {pos:68.32, label:'FM', },
          '2400': {pos:73.68, label:'IM', },
          '2500': {pos:78.93, label:'GM', },
          '2800': {pos:94.73, label:'', },
          '2900': {pos:100, label:'', },
        },
      data: [
        1000,
        1100,
        1200,
        1300,
        1400,
        1500,
        1600,
        1700,
        1800,
        1900,
        2000,
        2100,
        2200,
        2300,
        2400,
        2500,
        2600,
        2700,
        2800,
        2900
      ]
    };
  },
  notifications: {
      successNotification: { 
        title: 'Success',
        message: 'Very good',
        type: 'success' 
      },
      errorNotification: { 
        title: 'Problem',
        message: 'Something wrong',
        type: 'error' 
      },
    },
  methods: {
    addSentence() {
      if(this.sentences.length<5) {
        this.sentences.push('');
        this.isActive=true
      }
      else this.errorNotification({message:"You can't add more than 5 sentences"})
    },
    saveData() {
    },
    async save() {
      try {
        console.log(this.file);
        // this.saveData()
        this.isActive = false;
        // const formData = new FormData();
        // formData.append("title", this.title);
        // formData.append("subtitle", this.subtitle);
        // formData.append("description", this.description);
        // formData.append("level", this.value);
        // formData.append("category", this.category);
        // formData.append("price", this.price);
        // formData.append("salePrice", this.salePrice);
        // formData.append('image',this.file)
        let temp = this.sentences
        console.log(this.sentences[0],this.sentences.length)
        if(this.sentences.length==1&&this.sentences[0]=="")
        temp = []
        const res = await axios({
          url: `/buildcourse/${this.$route.params.id}`,
          method: "PATCH",
          data: {
            title: this.title,
            subtitle: this.subtitle,
            description: this.description,
            sentences:temp,
            level: this.value,
            category: this.category,
            price: this.price,
            salePrice: this.salePrice,
            forWho:this.forWho,
            whatStudentsGet:this.whatStudentsGet
          }
        });
        this.$set(this.course,'title',this.title)
        if (this.$store.getters.myBuildCourses)
          this.$store.commit("setMyBuildCourseCredentials", {
            courseId: this.$route.params.id,
            title: this.title
          });
        this.successNotification()
      } catch (error) {
        this.errorNotification()
      }
      // console.log(res)
    },
    async savePhoto() {
      const formData = new FormData();
      formData.append("image", this.file);

      const { data } = await axios({
        url: `/buildcourse/${this.$route.params.id}/photo`,
        method: "PATCH",
        data: formData
      });
      
      return data;
    },
    async handleImageUpload(event) {
      const imageFile = event.target.files[0];
      console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
      console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

      const options = {
        maxSizeMB: 0.05,
        maxWidthOrHeight: 1000,
        useWebWorker: true
      };
      try {
        const compressedFile = await imageCompression(imageFile, options);
        console.log(
          "compressedFile instanceof Blob",
          compressedFile instanceof Blob
        ); // true
        console.log(
          `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
        ); // smaller than maxSizeMB
        this.file = compressedFile; // write your own logic
        const {pictureUri} = await this.savePhoto();
        this.currentUrl = URL.createObjectURL(compressedFile);
        console.log('Fantastic',pictureUri)
        this.$set(this.course,'pictureUri',pictureUri)

          this.successNotification({message:'Photo is downloaded'})
        // this.photoSave = true
        
      } catch (error) {
        this.errorNotification()
      }
    },
    async uploadPromoVideo(ref) {
      // if(lesson.video.vimeoId) {
      // }
      let tus = require("tus-js-client");
      const file = this.$refs.promoVideo.files[0];
      console.log(file);
      if (!file) {
        return;
      }
      if (this.course.promoVideo)
        await axios.delete(
          `/video/promo/${this.course.promoVideo}/${this.$route.params.id}`
        );
      const data = await axios({
        url: `video/promo/${this.$route.params.id}`,
        method: "POST",
        data: {
          size: file.size
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      const { vimeoId, uploadLink } = data.data;
      this.uploadStatus = "start";
      let upload = new tus.Upload(file, {
        uploadUrl: uploadLink,
        onError(error) {
          console.log("Failed because: " + error);
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
          this.uploadProgress = percentage
          console.log(bytesUploaded, bytesTotal, percentage + "%");
        },
        onSuccess: () => {
          this.uploadStatus = "finish"
          this.$set(this.course, 'promoVideo', vimeoId)
          console.log("Download %s from %s", upload.file.name, upload.url);
        }
      });
      upload.start();

      if (event) event.target.value = "";
    }
  }
};
</script>

<style>
@import url('vue-slider-component/theme/antd.css');
input[type=file], /* FF, IE7+, chrome (except button) */
input[type=file]::-webkit-file-upload-button { /* chromes and blink button */
    cursor: pointer; 
}

.status:hover + div {
  @apply bg-yellow-700 text-white;
}


  .bg-wk {
    background-image: url('/images/courselist/star.svg');
    background-repeat: no-repeat;
  }
  .bg-wch {
    background-image: url('/images/courselist/trophy-solid.svg');
    background-repeat: no-repeat;
  }
</style>
