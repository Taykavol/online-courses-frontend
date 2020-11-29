<template>
  <div class="lg:container mx-auto">
      <div class="grid grid-cols-10 mt-3  ">
          <div class="col-span-7 grid grid-cols-3 text-xl">
              <!-- <div class=" col-span-1"></div> -->
                <div class=" col-span-2  font-medium pt-2 ">Created courses</div>
                <div class=" col-span-1 flex justify-end -mb-2"> 
                <div class=" mr-5 cursor-pointer duration-150 transform hover:scale-105">
                  <svg @click="createCourse"  class=" w-10 h-10 " height="640pt" viewBox="-30 0 640 640" width="640pt" xmlns="http://www.w3.org/2000/svg"><path d="m300.585938 101.449219-15.308594-101.449219h-224.601563c-33.820312 0-60.675781 27.554688-60.675781 61.371094v424.71875c0 33.816406 26.855469 60.8125 60.675781 60.8125h213.054688l153.492187-232.402344v-165.734375zm0 0" fill="#00acea"/><path d="m285.277344.140625 141.527344 148.625h-94.210938c-26.164062 0-47.316406-21.152344-47.316406-47.316406zm0 0" fill="#00efd1"/><g fill="#083863"><path d="m279.851562 318.675781h-181.324218c-7.652344 0-13.917969 6.265625-13.917969 13.917969 0 7.65625 6.265625 13.914062 13.917969 13.914062h181.324218c7.652344 0 13.917969-6.257812 13.917969-13.914062 0-7.652344-6.121093-13.917969-13.917969-13.917969zm0 0"/><path d="m98.527344 276.929688h140.96875c7.652344 0 13.917968-6.261719 13.917968-13.917969 0-7.652344-6.265624-13.914063-13.917968-13.914063h-140.96875c-7.652344 0-13.917969 6.261719-13.917969 13.914063 0 7.65625 6.265625 13.917969 13.917969 13.917969zm0 0"/><path d="m234.066406 389.648438h-135.539062c-7.652344 0-13.917969 6.265624-13.917969 13.914062 0 7.65625 6.265625 13.917969 13.917969 13.917969h135.539062c7.65625 0 13.917969-6.261719 13.917969-13.917969 0-7.648438-6.261719-13.914062-13.917969-13.914062zm0 0"/></g><path d="m426.804688 286.8125c86.28125 12.101562 152.65625 86.136719 152.65625 175.753906 0 97.96875-79.457032 177.433594-177.425782 177.433594-67.351562 0-126.078125-37.574219-156-92.960938-13.636718-25.1875-21.429687-53.992187-21.429687-84.609374 0-97.96875 79.460937-177.429688 177.429687-177.429688 8.351563.140625 16.558594.699219 24.769532 1.8125zm0 0" fill="#fedb41"/><path d="m458.671875 449.488281h-42.582031v-43.277343c0-7.65625-6.261719-13.917969-13.917969-13.917969-7.652344 0-13.914063 6.261719-13.914063 13.917969v43.277343h-43.277343c-7.65625 0-13.917969 6.261719-13.917969 13.914063 0 7.65625 6.261719 13.921875 13.917969 13.921875h43.277343v42.582031c0 7.652344 6.261719 13.917969 13.914063 13.917969 7.65625 0 13.917969-6.265625 13.917969-13.917969v-42.582031h42.582031c7.65625 0 13.914063-6.265625 13.914063-13.921875 0-7.652344-6.257813-13.914063-13.914063-13.914063zm0 0" fill="#083863"/></svg>
                </div>
                
                <!-- <div @click="createCourse" class=" ml-2 col-span-3  mr-5  border-2 text-blue-700 border-blue-700 px-2  hover:bg-blue-700 hover:text-white cursor-pointer ">Create a new course</div> -->
              </div>
          </div>
      </div>
      
      <div class="grid grid-cols-10 mt-2    ">
        <div v-if="courses" class=" col-span-7  grid ph:grid-cols-2 gap-5  mr-6  ">
                <card  v-for="item in courses" :key='item.id' class=" col-span-1 " mode="TEACHER" :course ="{...item,authorName:profile.teacherName,pictureUri:item.pictureUri?'https://chess-courses.hb.bizmrg.com/'+ item.pictureUri:'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'}"/>
        </div>
        
        <div v-else class="col-span-7 grid  row-gap-2 ph:grid-cols-2"></div>
        
        <div class=" col-span-3 -mt-5 h-64 ">
            <Aside v-if="profile" :profile="profile" class="mt-4" />
            <!-- <TeacherSettings v-if="profile" :profile="profile" class=" mt-4"/> -->
            <div class=" mt-4  flex items-baseline" > 
                <div class="text-xl font-medium mt-2">Profile</div>
                <!-- <div class=" ml-auto">Upload photo</div> -->
                        <div class=" ml-auto relative self-center w-8  mr-2 duration-150 transform hover:scale-110  ">
                            <input
                                accept=".jpg, .jpeg, .png"
                                @change="
                                handleImageUpload($event);
                                isActive = true;
                                "
                                type="file"
                                class="  relative block  w-8 h-8 overflow-hidden mx-auto status bg-green-800  opacity-0 z-20"
                            />
                            <svg class="svg-inline--fa fa-camera-retro fa-w-16 w-8 h-8   absolute inset-0 text-center text-gray-700  cursor-pointer border-yellow-700 flex justify-around" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera-retro"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm0 32h106c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6V80c0-8.8 7.2-16 16-16zm426 96H38c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h138l30.2-45.3c1.1-1.7 3-2.7 5-2.7H464c8.8 0 16 7.2 16 16v74c0 3.3-2.7 6-6 6zM256 424c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm-48 104c-8.8 0-16-7.2-16-16 0-35.3 28.7-64 64-64 8.8 0 16 7.2 16 16s-7.2 16-16 16c-17.6 0-32 14.4-32 32 0 8.8-7.2 16-16 16z"></path></svg>
                        </div>
            </div>
              <div v-if="profile" class=" relative border bg-white ">
                    <div class="relative">
                        <div class="w-full relative flex justify-center bg-green-300">
                            <img class=" h-64  object-contain w-1/2  " :src="currentUrl?currentUrl:'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'" onerror="this.src='https://ssl.gstatic.com/accounts/ui/avatar_2x.png'" alt="">
                        </div>
                        <div class=" absolute bottom-0 bg-gray-900 h-12 w-full opacity-75"></div>
                        <div class=" absolute bottom-0 flex h-12 items-center text-lg text-white  w-full">
                            <div  class="ml-2 bg-blue-700  px-1 rounded-lg font-sans font-semibold  ">{{profile.title}}</div>
                            <input v-focus v-if="nameVisible" @change="changeProfileTeacherName()"  v-model="profile.teacherName" @keypress.enter="nameVisible=false" @blur="nameVisible=false" placeholder="Input your name"  class=" ml-1 bg-transparent outline-none ">
                             <div v-else class=" flex ml-1">
                                <div  class="">{{profile.teacherName}}</div>
                                <div @click="nameVisible=true" class=" ml-1  cursor-pointer self-center ">
                                    <svg class="w-5 h-5 hover:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 pt-2 w-full flex">
                      <div v-if="!aboutVisible" class=" w-full whitespace-pre-line ">{{profile.aboutMe}}</div>
                      <textarea @keypress.enter="aboutVisible=false;" v-focus v-else @blur="aboutVisible=false;" @change="changeProfileTeacherName()" v-model="profile.aboutMe"  class=" resize-none  w-full outline-none h-32"/>
                      <div v-if="!aboutVisible" class="">
                        <div @click="aboutVisible=true" class="   cursor-pointer self-center inline-block ">
                            <svg class="w-4 h-4 transform scale-150 hover:text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                          </div>
                      </div>
                    </div>
                </div>
        </div>
      </div>
  </div>
</template>

<script>
import imageCompression from "browser-image-compression";
import Axios from 'axios'
import Card from '~/components/teacher/teacherCard'
import Aside from '~/components/teacher/Aside'
// import TeacherSettings from "~/components/teacher/TeacherSettings"

// import { Editor, EditorContent,EditorMenuBar } from 'tiptap'
export default {
    directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  
middleware:['auth'],
components:{
    Card,Aside,
},
async created() {
    try {
        if(this.$store.getters.myBuildCourses) {
            this.courses=this.$store.getters.myBuildCourses

            if(this.$store.getters.profile) {
                this.profile = this.$store.getters.profile
                this.currentUrl ='https://chess-courses.hb.bizmrg.com/'+this.profile.avatar
            }
            return;
        }
        Axios.get('/profile').then(data=> 
        {
        this.courses = data.data.myCourses;
        this.profile = {...data.data}
        if(this.profile.avatar)
        this.currentUrl ='https://chess-courses.hb.bizmrg.com/'+this.profile.avatar
        this.$store.commit('setProfile',{...this.profile})
        this.$store.commit('setMyBuildCourses',this.courses)
        })        
    } catch (error) {
        
    }

},
data() {
    return {
        name:'',
        courses:null, 
        nameVisible:false,
        title:null,
        profit:"",
        profile:null,
        file:null,
        currentUrl:null,
        aboutVisible:false
    }
},
computed:{
    // uri() {
    //     if(this.currentUrl==null||this.currentUrl="") 
    // }
},
notifications: {
      successNotification: { 
        title: 'Success',
        message: 'Very good',
        type: 'success' 
      },
      errorNotification: { 
        title: 'Success',
        message: 'Something wrong',
        type: 'error' 
      },
    },
methods:{
    async createCourse() {
      const course = await Axios.post('/buildcourse/create')
      if(!course) return
      const {id} = course.data
      if(!id) return 
      // this.$store.commit('addMyBuildCourses',course)
      setTimeout(()=>{
        this.$router.push('/coursebuild/'+id)
      },3000)
      
    },
    async changeProfileName() {

        await Axios({url:'/profile',method:'POST', data:{
            teacherName:this.name
        },headers:{
            "Content-Type":"application/json"
        }})
        this.$store.commit('setTeacherName',this.name); 

    },
    async changeProfileTeacherName() {
      try {
        await Axios({url:'/profile',method:'POST', data:{
            teacherName:this.profile.teacherName,
            aboutMe:this.profile.aboutMe
            // avatar:this.profile.avatar,
            // title:this.profile.title
        },headers:{
            "Content-Type":"application/json"
        }})
        this.$store.commit('setProfile',{...this.profile})
        this.successNotification({message:"Profile have changed"})
      } catch (error) {
        this.errorNotification()
      }

        
    },
    async savePhoto() {
      try {
        const formData = new FormData();
        formData.append("image", this.file);
        const { data } = await Axios({
          url: `/buildcourse/teacher`,
          method: "PATCH",
          data: formData
        });
        this.successNotification({message:"Photo is downloaded"})
        console.log(data)
        return data;

      } catch (error) {
        this.errorNotification()
      }
    },
    async handleImageUpload(event) {
      const imageFile = event.target.files[0];
      console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
      console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
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

        // this.alert = { mode: "success", message: "Photo is downloaded" };
        // this.photoSave = true
        // setTimeout(() => {
        //   this.alert = null;
        // }, 5000);
      } catch (error) {
          console.log(error)
        // this.alert = { mode: "error", message: "Photo is not downloaded" };
        // setTimeout(() => {
        //   this.alert = null;
        // }, 5000);
        // console.log(error);
      }
    },
  
}
}
</script>

<style>
input[type=file], /* FF, IE7+, chrome (except button) */
input[type=file]::-webkit-file-upload-button { /* chromes and blink button */
    cursor: pointer; 
}
</style>