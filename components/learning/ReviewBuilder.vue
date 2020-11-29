<template>
<div class=" flex flex-col p-6 pt-3 border-8 bg-white ">
  <div class="  px-5  h-full  relative flex flex-col">
      <div class=" text-center text-2xl italic leading-tight ">{{course.course.title}}</div>
      <div  class=" flex items-center mt-3 h-12 ">
            <svg @click="onClick" @mouseover="rating=index+1;isHover=true" @mouseleave="rating=0;isHover=false" :class="{'text-yellow-500':rating>index||(result>index&&!isHover)}" class="star w-8 h-8 text-gray-500 cursor-pointer " v-for="(item,index) in 5" :key="index" viewBox="0 0 20 20" fill="currentColor" ><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <div class=" flex items-center"> 
                <div v-show="result>0" class="ml-4 text-3xl">
                    {{result}}
                </div>
                <div class=" text-xl  ml-2">
                     ({{text}}) 
                </div>
            </div>
      </div>
      <div class="">
        <!-- <input v-model="authorName" type="text"   placeholder="Your Name" class=" border-b-2 p-2 w-full mt-3 outline-none"> -->
        <input v-model="reviewSubtitle" type="text"   placeholder="Subtitle" class="border p-2 w-full mt-3 outline-none">
        <textarea  class="border p-2 mt-3 w-full outline-none resize-none" v-model="reviewMessage"   maxlength="150" cols="10" rows="4"  placeholder="Tell something about your vote."></textarea>
      </div>
        <div class=" flex flex-col justify-center items-center ">
            <div class=" text-xl font-semibold mb-5">This is how review will look like</div>
            <div class=" flex items-center mb-1 ">
                <input type="checkbox" class=" w-5 h-6" v-model="isAnonymous" >
                <div class=" ml-1">Be anonymous</div>
            </div>
            <small-review class=" border-2" :review='{authorName:helperAuthorName,reviewSubtitle,reviewMessage,review:result}'></small-review>
        </div>
      <p class="font-bold text-sm mt-3">You are able to review only 1 time *</p>
      <div @click="result?onSubmit():''"  :class="{'bg-blue-600 hover:bg-blue-500 text-white cursor-pointer ':result,' border-2 border-blue-600 text-blue-600 cursor-not-allowed ':!result}" class="w-full p-2  mt-auto outline-none text-center text-xl font-bold">
          Sent review
      </div>
      <!-- my bad -->
  </div>
  <!-- <div class="">Some new</div> -->
</div>
</template>

<script>
import SmallReview from "~/components/common/Review"
import axios from 'axios'
export default {
    components:{
        SmallReview
    },
props:{
    course:{
        type:Object
    },
    fn:{
        type:Function
    }
},
data() {
    return {
        rating:0,
        isHover:false,
        result:0,
        reviewMessage:'',
        reviewSubtitle:'',
        isAnonymous:true,
        authorName:localStorage.getItem('email') ,
        // text:''
    }
},
computed:{
    text() {
        switch(this.result) {
            case 0: return 'Select starts'
            case 1: return 'Terrible';break;
            case 2: return 'So bad';break;
            case 3: return 'Expected better';break;
            case 4: return 'Good course';break;
            case 5: return 'Awesome course';break;
        }
    },
    helperAuthorName() {
        if(this.isAnonymous) {
            let temp = this.authorName.split('')
            for(let i=0;i<temp.length;i++)
             {
                 if(i==0||i==temp.length-1||temp[i]=='@') {
    
                 } else {
                     temp[i]='*'
                 }
             }
             return temp.join('')
        }
        return this.authorName
    }
},
created() {
    // this.authorName = localStorage.getItem('email') 
    // console.log(typeof(this.authorName),this.authorName.length)
    // if(this.authorName) {
    //      this.authorName = this.helperAuthorName
    //     return
    // }

    // this.authorName = 'anonymous'
    console.log('Course', this.course)
},
methods:{
    onClick() {
        this.result=this.rating
        // this.isSelect=true
    },
    async onSubmit() {
        const result = await axios({
            method:'POST',
            url:`/boughtCourse/${this.course.id}/review`,
            headers:{
              "Content-type":"application/json"  
            },
            data:{
                "review":this.result,
                "reviewMessage":this.reviewMessage,
                "reviewSubtitle":this.reviewSubtitle,
                "authorName":this.helperAuthorName
            }
        })
        console.log(result)
        this.fn(this.course.id)
        this.$modal.hide(`review${this.course.id}`)
    }
}
}
</script>

<style>

</style>