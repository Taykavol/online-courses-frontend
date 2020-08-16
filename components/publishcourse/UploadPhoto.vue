<template>
  <div class="">
      <!-- <template id="image-template"> -->
          <div  class=" text-2xl w-1/3 text-center font-bold ">Landing photo(750*429px)</div>
      <div ref="li"  :class="isPhoto? 'p-1 w-1/3 h-48 block':'p-1 w-1/3 h-48 hidden'">
        <article tabindex="0" class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
          <img  ref="img" alt="upload preview" src="https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-preview w-full h-full sticky  rounded-md bg-fixed" />

          <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
            <h1 ref="fileName" class="flex-1">Your landing photo</h1>
            <div class="flex">
              <span class="p-1">
                <i>
                  <svg class="fill-current w-4 h-4 ml-auto pt-" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                  </svg>
                </i>
              </span>

              <p ref="size" class="p-1 size text-xs"></p>
              <button @click="deleteFile()"  ref="delete" class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path class="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                </svg>
              </button>
            </div>
          </section>
        </article>
      </div>
    <!-- </template> -->
    <div   :class="isPhoto? 'relative  w-1/3 h-48 cursor-pointer border-dashed border-2 hidden':'relative  w-1/3 h-48 cursor-pointer border-dashed border-2' ">
                  <input ref="file" @change="e=>addFile(e.target.files[0])  " accept="image/x-png,image/gif,image/jpeg"  type="file" class=" relative block  bg-gray-900 w-full h-full  opacity-0 z-30 ">
                  <div class=" absolute inset-0  flex justify-center items-center ">
                      <div class="">
                            
                    <button id="button" class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
                    Upload a file
                </button>
                      </div>
                  </div>
                  <!-- <svg class="w-8 h-8 absolute inset-0 text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>                 -->
                <!-- <div class="text-center absolute top-0 left-0 ">{{lesson.video?lesson.video.name:''}}</div> -->
              </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            FILES:{},
            isPhoto:true
        }
    },
methods: {
    deleteFile() {
        this.addFile(new File([],'Great'))
        
        this.isPhoto = false
    },
    addFile(file) {
    // const isImage = file.type.match("image.*"),
    console.log('sgdg')
     if(file) {

         const objectURL = URL.createObjectURL(file);
         console.log(objectURL)
     
     //   const clone = isImage
     //     ? imageTempl.content.cloneNode(true)
     //     : fileTempl.content.cloneNode(true);
         console.log(this.$refs.fileName,this.$refs.li)
         
       this.$refs.fileName.textContent = file.name;
       this.$refs.li.id = objectURL;
       this.$refs.delete.dataset.target = objectURL;
       this.$refs.size.textContent =
         file.size > 1024
           ? file.size > 1048576
             ? Math.round(file.size / 1048576) + "mb"
             : Math.round(file.size / 1024) + "kb"
           : file.size + "b";
         this.$refs.img.src = objectURL
         // Object.assign(this.$refs.img, {
         //   src: objectURL,
         //   alt: file.name
         // });
         this.isPhoto=true
     }

//   empty.classList.add("hidden");
//   target.prepend(clone);

//   this.FILES[objectURL] = file;
}
}
}
</script>

<style>
.hasImage:hover section {
  background-color: rgba(5, 5, 5, 0.4);
}
.hasImage:hover button:hover {
  background: rgba(5, 5, 5, 0.45);
}

#overlay p,
i {
  opacity: 0;
}

#overlay.draggedover {
  background-color: rgba(255, 255, 255, 0.7);
}
#overlay.draggedover p,
#overlay.draggedover i {
  opacity: 1;
}

.group:hover .group-hover\:text-blue-800 {
  color: #2b6cb0;
}
</style>