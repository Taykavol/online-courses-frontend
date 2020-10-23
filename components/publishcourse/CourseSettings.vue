<template>
  <!-- component -->
  <div class=" flex flex-col-reverse lg:flex-row">
    <Alert
      v-if="alert"
      class=" absolute right-0 z-50 animate-popup opacity-0"
      :alert="alert"
    />
    <div class="bg-white border flex flex-col w-full lg:w-6/10 p-5 ">
      <div class="-mx-3 md:flex">
        <div class=" w-full px-3  md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2 text-center"
          >
            Course name
          </label>
          <input
            @change="isActive = true"
            v-model="title"
            :class="[
              ' outline-none block w-full border  border-gray-400 p-2  text-xl   '
            ]"
            type="text"
            placeholder="Course name*"
          />
          <p
            :class="title.length == 0 ? 'text-red-500 ' : ' invisible '"
            class="text-xs italic"
          >
            Please fill out this field.
          </p>
        </div>
      </div>
      <div class=" w-full  mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2 text-center "
        >
          Subtitle
        </label>
        <input
          @change="isActive = true"
          v-model="subtitle"
          :class="[
            'outline-none block w-full border border-gray-400 p-2 italic text-xl    '
          ]"
          type="text"
          placeholder="Subtitle (quote e.g.)"
        />
        <p
          :class="subtitle.length == 0 ? 'text-red-500 ' : ' invisible'"
          class="text-xs italic"
        >
          Please fill out this field.
        </p>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2 text-center"
          >
            Description
          </label>
          <textarea
            @change="isActive = true"
            v-model="description"
            rows="8"
            class=" outline-none  appearance-none resize-none block w-full text-grey-darker border  rounded py-3 px-4 mb-1"
            type="password"
            placeholder=""
          />
        </div>
      </div>
      <div class=" flex ">
        <div class=" flex flex-col  justify-around mb-2 w-full">
          <div class=" px-3">
            <label
              class="block uppercase tracking-wide text-center text-xs font-bold mb-2"
              for="grid-state"
            >
              category
            </label>
            <div class="relative">
              <select
                @change="isActive = true"
                v-model="category"
                class="block appearance-none w-full border-2  py-3 px-4 pr-8 rounded outline-none"
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
          <div class=" px-3  ">
            <label
              class="block uppercase tracking-wide text-center text-xs font-bold mb-2"
            >
              Level
            </label>
            <div class="relative">
              <select
                @change="isActive = true"
                v-model="level"
                class="block appearance-none w-full  border-2 py-3 px-4 pr-8 rounded outline-none"
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
          </div>
          <div class=" flex">
            <div class="w-1/2 px-3  ">
              <label
                class="block uppercase tracking-wide text-center text-xs font-bold mb-2"
              >
                Price
              </label>
              <div class="relative">
                <select
                  @change="isActive = true"
                  v-model="price"
                  class="block appearance-none w-full  border-2 py-3 px-4 pr-8 rounded outline-none"
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
      <!-- <div class="">
        <UploadPhoto/>
      </div> -->
      <div class=" flex justify-center">
        <div
          @click="isActive ? save() : ''"
          :class="
            isActive
              ? 'bg-blue-500 px-5 text-xl mt-2 py-1  cursor-pointer text-white'
              : 'bg-gray-200 cursor-not-allowed px-5 text-xl mt-2 py-1'
          "
        >
          Save
        </div>
      </div>
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
          <label class="block uppercase tracking-wide text-grey-darker text-sm mb-1 text-center border-b-2 border-blue-300">Image preview</label>
          <div class=" relative self-center w-48 overflow-hidden mb-1  ">
          <input
            accept="image/jpeg"
            @change="
              handleImageUpload($event);
              isActive = true;
            "
            type="file"
            class="  relative block  w-48 mx-auto status  opacity-0 z-20"
          />
          <div  class=" absolute inset-0 text-center w-48 text-yellow-700  cursor-pointer border-2 px-2 border-yellow-700 flex justify-around">
            <div class="">
                Upload image
            </div>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
            
          </div>
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
          <label class="block uppercase tracking-wide text-grey-darker text-sm mb-1 text-center border-b-2 border-blue-300">Promotional video</label>
          <div
        v-if="uploadStatus=='invisible'"
          class=" relative  flex   w-48 overflow-hidden self-center mb-1 "
        >
          <input
            accept="video/mp4,video/x-m4v,video/*"
            ref="promoVideo"
            @change="uploadPromoVideo(`promoVideo`)"
            type="file"
            class=" relative block  w-48 mx-auto status  opacity-0 z-20  "
          />
          <div v-if="course.promoVideo" class=" absolute inset-0  text-center w-48 text-yellow-700  cursor-pointer border-2 px-2 border-yellow-700">
          Reload promo video
          </div>
          <div v-else class=" absolute inset-0  text-center w-48 text-yellow-700  cursor-pointer border-2 px-2 border-yellow-700">
          Upload promo video
          </div>
        </div>
        </div>
        <div class="promovideo relative" >
          <Plyr v-if="course.promoVideo" :id="course.promoVideo" />
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
import Alert from "~/components/common/Alert";
// import UploadPhoto from '~/components/publishcourse/UploadPhoto'
// import VueSlider from "vue-slider-component";
import axios from "axios";
export default {
  components: {
    Card,
    Plyr,
    Alert
    // UploadPhoto
    // VueSlider
  },
  props: {
    course: {
      type: Object
    }
  },
  created() {
    console.log("course", this.course);
    this.isSale = this.course.isSale;
    this.title = this.course.title;
    this.subtitle = this.course.subtitle;
    this.category = this.course.category;
    this.currentUrl =
      "https://chess-courses.hb.bizmrg.com/" + this.course.pictureUri;
    this.description = this.course.description;
    this.price = this.course.price;
    this.level = this.course.level;
    this.salePrice = this.course.salePrice;
    this.value[0] = +this.course.level.split(" ")[0];
    this.value[1] = +this.course.level.split(" ")[1];
    // console.log()
  },
  data() {
    return {
      isActive: false,
      file: "",
      title: "",
      level: "",
      isSale: false,
      subtitle: "",
      // photoSave:false,
      alert: null,
      // https://chess-courses.hb.bizmrg.com/course/image5.jpg
      currentUrl: "",
      description: "",
      category: "",
      price: "",
      promoVideoId: null,
      uploadStatus: "invisible",
      uploadProgress: 0,
      value: [1500, 2200],
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
  methods: {
    async save() {
      console.log(this.file);

      this.isActive = false;
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("subtitle", this.subtitle);
      formData.append("description", this.description);
      formData.append("level", this.level);
      formData.append("category", this.category);
      formData.append("price", this.price);
      formData.append("salePrice", this.salePrice);
      // formData.append('image',this.file)
      const res = await axios({
        url: `/buildcourse/${this.$route.params.id}`,
        method: "PATCH",
        data: {
          title: this.title,
          subtitle: this.subtitle,
          description: this.description,
          level: this.level,
          category: this.category,
          price: this.price,
          salePrice: this.salePrice
        }
      });
      if (this.$store.getters.myBuildCourses)
        this.$store.commit("setMyBuildCourseCredentials", {
          courseId: this.$route.params.id,
          title: this.title
        });
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
        this.currentUrl = URL.createObjectURL(compressedFile);
        this.file = compressedFile; // write your own logic
        await this.savePhoto();
        this.alert = { mode: "success", message: "Photo is downloaded" };
        // this.photoSave = true
        setTimeout(() => {
          this.alert = null;
        }, 5000);
      } catch (error) {
        this.alert = { mode: "error", message: "Photo is not downloaded" };
        setTimeout(() => {
          this.alert = null;
        }, 5000);
        console.log(error);
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
input[type=file], /* FF, IE7+, chrome (except button) */
input[type=file]::-webkit-file-upload-button { /* chromes and blink button */
    cursor: pointer; 
}

.status:hover + div {
  @apply bg-yellow-700 text-white;
}
.promovideo {
   /* height: 20rem ; */
   /* width: 20rem ; */
}
</style>
