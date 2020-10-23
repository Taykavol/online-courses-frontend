<template>
  <div class="">
      <div class="  h-16 bg-white mt-4 border flex items-center ">
        <div class=" bg-blue-700 text-white px-1 rounded-lg font-sans font-semibold text-xs ml-4 mr-1">{{title}}</div>
        <div class=" flex">
            <!-- <input  v-focus @change="changeProfileName" @keypress.enter="nameVisible=false" @blur="nameVisible=false" v-if="nameVisible" v-model="name" type="text" placeholder="FORMAT: SURNAME NAME" size="30" class="  border-b-2 h-6 outline-none mx-2 ">
            <div v-else class=" flex">
            <div  class="">{{name}}</div>
            <div @click="nameVisible=true" class=" ml-1 mr-5 cursor-pointer ">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
            </div>

            </div> -->
        </div>
        <div class="">Payout method:</div>
        <div class=" ml-1 mr-5 text-sm  border-2 text-green-700 border-green-700 px-1  hover:bg-green-700 hover:text-white cursor-pointer ">Select</div>
        <div v-if="profile" class="">Your profit: {{profile.profit}}%</div>
        <div class="ml-auto">Teacher account status: <span class=" font-semibold">Not visible</span></div>
        <div class=" ml-2 col-span-3  mr-5  border-2 text-blue-700 border-blue-700 px-2  hover:bg-blue-700 hover:text-white cursor-pointer ">Edit</div>


      </div>
      <div class="grid grid-cols-10 mt-4  ">
          <div class="col-span-7 grid grid-cols-3 text-xl">
              <div class=" col-span-1"></div>
              <div class=" col-span-1 text-center font-medium ">Created courses</div>
              <div class=" col-span-1 flex justify-end"> 
              <div @click="createCourse" class=" ml-2 col-span-3  mr-5  border-2 text-blue-700 border-blue-700 px-2  hover:bg-blue-700 hover:text-white cursor-pointer ">Create a new course</div>
              </div>
          </div>
          <div class=" col-span-3">
            <div class="">payments</div>
            
          </div>
      </div>
      
      <div class="grid grid-cols-10 mt-4    ">
        <div v-if="courses" class=" col-span-7  grid ph:grid-cols-2 gap-5  mr-6  ">
                <card  v-for="item in courses" :key='item.id' class=" col-span-1 " mode="TEACHER" :course ="{...item,authorName:profile.teacherName,pictureUri:item.pictureUri?'https://chess-courses.hb.bizmrg.com/'+ item.pictureUri:'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'}"/>
        </div>
        
        <div v-else class="col-span-7 grid  row-gap-2 ph:grid-cols-2"></div>
        
        <div class=" col-span-3 -mt-5 h-64 ">
            <Aside class="mt-4" />
            <!-- <TeacherSettings v-if="profile" :profile="profile" class=" mt-4"/> -->
            <div class=" mt-4  flex items-baseline" > 
                <div class="text-xl font-medium">You profile</div>
                <!-- <div class=" ml-auto">Upload photo</div> -->
                        <div class=" ml-auto relative self-center w-48 overflow-hidden mb-1  ">
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
              <div v-if="profile" class=" border bg-white ">
                    <div class="relative">

                        <img class=" h-64 object-cover w-full" :src="currentUrl?currentUrl:'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'" onerror="this.src='https://ssl.gstatic.com/accounts/ui/avatar_2x.png'" alt="">
                        <div class=" absolute bottom-0 bg-gray-900 h-12 w-full opacity-75"></div>
                        <div class=" absolute bottom-0 flex h-12 items-center text-lg text-white  w-full">
                            <div  class="ml-2 bg-blue-700  px-1 rounded-lg font-sans font-semibold  ">{{profile.title}}</div>
                            <input v-focus v-if="nameVisible" @change="changeProfileTeacherName()"  v-model="profile.teacherName" @keypress.enter="nameVisible=false" @blur="nameVisible=false" placeholder="Input your name"  class=" ml-1 bg-transparent outline-none ">
                             <div v-else class=" flex ml-1">
                                <div  class="">{{profile.teacherName}}</div>
                                <div @click="nameVisible=true" class=" ml-1  cursor-pointer self-center ">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                </div>

                                </div>
                        </div>
                        
                    </div>
                    <textarea @change="changeProfileTeacherName()" v-model="profile.aboutMe" class=" p-4 w-full outline-none"/>
                    
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
      // определение директивы
      inserted: function(el) {
        // console.log('sdf',el.value)
        // if(el.value)        
        el.focus();
      }
    }
  },
middleware:['auth'],
components:{
    Card,Aside,
},
mounted() {
    // this.editor = new Editor({
    //     content: '<p>DSF</p>'
    // })
},
async created() {

    try {
        if(this.$store.getters.myBuildCourses) {
            this.courses=this.$store.getters.myBuildCourses
            // if(this.$store.getters.teacherName) {
            //     this.name = this.$store.getters.teacherName
            // }
            // if(this.$store.getters.title) {
            //     this.title = this.$store.getters.title
            // }
            if(this.$store.getters.profile) {
                this.profile = this.$store.getters.profile
                this.currentUrl ='https://chess-courses.hb.bizmrg.com/'+this.profile.avatar
            }
            return;
        }
        Axios.get('/profile').then(data=> 
        {
            console.log('data',data.data)
        // this.name = data.data.authorName;
        // this.title =data.data.title; 
        this.courses = data.data.myCourses;
        // this.profit = data.data.profit*100
        this.profile = {title:data.data.title, 
        teacherName:data.data.teacherName, 
        aboutMe:data.data.aboutMe , 
        avatar:data.data.avatar,
        profit:data.data.profit}
        if(this.profile.avatar)
        this.currentUrl ='https://chess-courses.hb.bizmrg.com/'+this.profile.avatar
        this.$store.commit('setProfile',{...this.profile})
        // this.$store.commit('setTeacherName',this.name); 
        // this.$store.commit('setTitle',this.title)
        this.$store.commit('setMyBuildCourses',this.courses)

        })
        // const data = await Axios({url:'/buildcourse/all', method:"GET"})
        // if(typeof(data.data)=="string") {
        //   return
        // } 
        // this.$store.commit('setMyBuildCourses',data.data)
        // this.courses=data.data
        
    } catch (error) {
        
    }
    
    // console.log(this.courses)
    // this.course = await Axios.post('http://localhost:4000/buildcourse/create')
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
        currentUrl:null
    }
},
computed:{
    // uri() {
    //     if(this.currentUrl==null||this.currentUrl="") 
    // }
},
methods:{
    async createCourse() {

      const course = await Axios.post('http://localhost:4000/buildcourse/create')
      if(!course) return
      const {id} = course.data
      if(!id) return 

      this.$router.push('/coursebuild/'+id)
      
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
        console.log('oh')
        await Axios({url:'/profile',method:'POST', data:{
            teacherName:this.profile.teacherName,
            aboutMe:this.profile.aboutMe
            // avatar:this.profile.avatar,
            // title:this.profile.title
        },headers:{
            "Content-Type":"application/json"
        }})
        this.$store.commit('setProfile',{...this.profile})   
    },
    async savePhoto() {
      const formData = new FormData();
      formData.append("image", this.file);

      const { data } = await Axios({
        url: `/buildcourse/teacher`,
        method: "PATCH",
        data: formData
      });
      console.log(data)
      return data;
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

</style>