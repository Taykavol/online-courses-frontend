<template>
  <div >
       <!-- <div class="" @click="">Create module {{parent_index+2}} </div> -->
      <div
                class="ignore-elements-module flex justify-center h-full w-full bg-transparent self-start opacity-0   hover:opacity-100  relative transition-opacity duration-1000"
              >
                <!-- Create lesson Icon -->
                <div
                  @click="createEmptyModule(0)"
                  class="  h-12 w-12  hover:text-red-500   cursor-pointer"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="plus-circle"
                    class=" transition duration-200 transform hover:scale-125  svg-inline--fa fa-plus-circle fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                    ></path>
                  </svg>
                </div>
              </div>

    <draggable
      @sort="onSort"
      filter=".ignore-elements-module"
      :disabled="!sortableElement"
      class=""
      :list="course"
      :animation="500"
      group="mod"
      handle=".module-handle"
    >
    <transition-group :name="transitionName" tag="div">
      <div
        v-for="(item, parent_index) in course"
        :key="item.id"
        class="transition-all duration-1000"
      >
      <div class=" bg-gray-200 border-2 rounded-lg cursor-move module-handle transition-all duration-1000  bigLesson ">
        
        <div class=" text-5xl flex items-baseline mt-2 ml-8">
          <!-- Number module -->
          <div
            :class="
              item.name != ''
                ? 'mr-6 span--module-access flex justify-center items-center font-bold text-yellow-500 p-4'
                : 'mr-6 span--module-fail flex justify-center items-center font-bold text-yellow-500 p-4'
            "
          >
            {{ parent_index + 1 }}
          </div>
          <!-- Input module -->
          <div class="">
            <input
              @focus="stopSort"
              @blur="onChangeName(parent_index)"
              class=" font-sans outline-none w-full max-w-full bg-gray-200  "
              maxlength="40"
              size="49"
              type="text"
              :value="item.name"
              placeholder="Lesson name"
            />
          </div>
        </div>
        <!-- First area between lessons -->
        <div
          class="filtered w-full flex flex-col justify-between module-handle "
        >
          <div
            class=" h-full w-full bg-transparent self-start opacity-0 cursor-move hover:opacity-100  relative transition-opacity duration-1000 "
          >
            <!-- First button add -->
            <div
              @click="createLesson(-1, parent_index)"
              class=" h-12 w-12  hover:text-red-500 ignore-elements-module cursor-pointer "
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus-circle"
                class=" transition duration-200 transform hover:scale-125  svg-inline--fa fa-plus-circle fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <draggable
          :animation="200"
          @sort="onSort"
          :list="course[parent_index].lessons"
          group="people"
          :disabled="!sortableElement"
          filter=".ignore-elements-lesson"
          handle=".lesson-handle"
        >
        <transition-group :name="transitionName2" tag="div">
          <div
            v-for="(lesson, index) in course[parent_index].lessons"
            :key="lesson.id"
            class=" "
          >
            <!-- Lesson -->
            <div
              :id="lesson.order"
              class="flex mx-16 bg-white shadow-lg rounded-lg overflow-hidden  lesson relative ignore-elements-module lesson-handle "
            >
              <!-- Black stripe -->
              <div
                :class="lesson.name ? 'w-2 bg-gray-800' : 'w-2 bg-red-500'"
              ></div>
              <!-- Info -->
              <div class="flex items-center px-2 py-3">
                <!-- Number of chapter -->
                <div class=" text-4xl ">{{ index + 1 }}</div>
                <!-- Main info, includes  -->
                <div class="mx-3">
                  <!-- Lesson name -->
                  <div class="">
                    <input
                      v-focus="true"
                      placeholder="Chapter (require)"
                      @focus="stopSort"
                      @keypress.prevent.enter="onChangeLessonInput(lesson)"
                      @blur="onChangeLessonInput(lesson)"
                      v-if="
                        showLessonInput[lesson.order] || lesson.name.length == 0
                      "
                      type="text"
                      class=" text-2xl font-semibold text-gray-800 outline-none"
                      :value="lesson.name"
                    />
                    <div
                      v-if="!showLessonInput[lesson.order]"
                      @click="
                        showLessonInput[lesson.order] = !showLessonInput[
                          lesson.order
                        ];
                        showLessonInput.splice();
                      "
                      class="text-2xl font-semibold text-gray-800 inline-block cursor-pointer"
                    >
                      {{ lesson.name }}
                    </div>
                  </div>
                  <!-- Description -->
                  <div class="">
                    <div class=" flex description">
                      <!-- Div description  -->
                      <div
                        @click="
                          showDescriptionInput[
                            lesson.order
                          ] = !showDescriptionInput[lesson.order];
                          showDescriptionInput.splice();
                        "
                        v-if="
                          !showDescriptionInput[lesson.order] &&
                            lesson.description.length > 0
                        "
                        class="text-gray-600 break-words cursor-pointer w-full "
                      >
                        {{ lesson.description }}
                      </div>
                      <!-- Input description -->
                      <textarea
                        v-focus
                        placeholder="Description"
                        @focus="stopSort"
                        @blur="onChangeDescriptionInput(lesson)"
                        @keypress.prevent.enter="
                          onChangeDescriptionInput(lesson)
                        "
                        v-if="showDescriptionInput[lesson.order]"
                        rows="1"
                        cols="80"
                        maxlength="150"
                        class=" outline-none w-full h-full rounded-lg break-words overflow-hidden "
                        type="text"
                        :value="lesson.description"
                      />

                      <!-- Button Add description -->
                      <div
                        class=" p-1 bg-blue-500 text-white rounded-lg cursor-pointer align-text-top"
                        @click="
                          showDescriptionInput[
                            lesson.order
                          ] = !showDescriptionInput[lesson.order];
                          showDescriptionInput.splice();
                        "
                        v-if="
                          !showDescriptionInput[lesson.order] &&
                            lesson.description.length == 0
                        "
                      >
                        Add description
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Components for delete -->
              <div  class="border border-dashed border-gray-500 relative h-8 my-6 ">
                <input accept="videos/mp4" :ref="`input${lesson.id}`" @change="consoleMethod(`input${lesson.id}`, lesson)"  type="file" class="cursor-pointer relative block h-8  w-full opacity-0 z-50 ">
                <div class="text-center absolute top-0 right-0 left-0 ">{{lesson.video?lesson.video.name:'Upload video'}}</div>
              </div>
              
              <!-- Delete icon. -->
              <div class=" ml-auto self-center flex cursor-pointer ">
                <div
                  class=" mr-4 rounded-full  "
                  @click.stop="deleteLesson(index, parent_index)"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="trash-alt"
                    class="transition duration-200 h-6 w-6 transform hover:scale-150 text-yellow-900 svg-inline--fa fa-trash-alt fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <!-- Area between lessons: -->
              <div
                class="module-handle h-full w-full bg-transparent self-start opacity-0 cursor-move  hover:opacity-100  relative transition-opacity duration-1000 "
              >
                <!-- Create lesson Icon -->
                <div
                  @click="createLesson(index, parent_index)"
                  class=" h-12 w-12  hover:text-red-500  ignore-elements-module cursor-pointer"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="plus-circle"
                    class=" transition duration-200 transform hover:scale-125  svg-inline--fa fa-plus-circle fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                    ></path>
                  </svg>
                </div>
              </div>
           
          </div>
          </transition-group>
          <!-- End lesson -->
        </draggable>
      </div>
      <!-- <div class="" @click="">Create module {{parent_index+2}} </div> -->
      <div
                class="ignore-elements-module flex justify-center h-full w-full bg-transparent self-start opacity-0   hover:opacity-100  relative transition-opacity duration-1000"
              >
                <!-- Create lesson Icon -->
                <div
                  @click="createEmptyModule(parent_index+1)"
                  class="  h-12 w-12  hover:text-red-500   cursor-pointer"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="plus-circle"
                    class=" transition duration-200 transform hover:scale-125  svg-inline--fa fa-plus-circle fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                    ></path>
                  </svg>
                </div>
              </div>
      </div>
      </transition-group>
    </draggable>

    <rawDisplayer class="col-3" :value="course" title="List" />
    <rawDisplayer class="col-3" :value="payload" title="List" />
    <rawDisplayer class="col-3" :value="showLessonInput" title="List" />
    <rawDisplayer class="col-3" :value="showDescriptionInput" title="List" />
  </div>
</template>
<script>
import draggable from "vuedraggable";
import RawDisplayer from "~/components/RawDisplayer";
export default {
  directives: {
    focus: {
      // определение директивы
      inserted: function(el) {
        el.focus();
      }
    }
  },
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
    RawDisplayer
  },
  data() {
    return {
      payload: [],
      tempIndex: 0,
      showLessonInput: [],
      showDescriptionInput: [],
      videos:[],
      sortableElement: true,
      moduleID:0,
      lessonID:0,
      transitionName:'',
      transitionName2:''
    };
  },
  props: {
    course: {
      type: Array,
      require: true
    }
  },
  created() {
    this.onSort();
    this.payloadSetFalse();
    this.initialazeModuleIDs();
    this.initialazeLessonIDs();
  },
  methods: {
      initialazeVideos() {
        this.videos
      },
      consoleMethod(ref, lesson) {
        this.$set(lesson,'video',{name:this.$refs[ref][0].files[0].name})
        // lesson.video = this.$refs[ref][0].files[0].name;
        console.log(this.$refs[ref][0].files[0])
      },
    //on Change

    onChangeDescriptionInput(lesson) {
      lesson.description = event.target.value;
      this.showDescriptionInput[lesson.order] = false;
      // this.showDescriptionInput.splice();
      // this.course.splice();
      this.startSort();
    },
    onChangeLessonInput(lesson) {
      lesson.name = event.target.value;
      this.showLessonInput[lesson.order] = false;
      // this.showLessonInput.splice();
      // this.course.splice();
      this.startSort();
    },
    onChangeName(index) {
      console.log(index, event.target.value)
      this.$set(this.course[index],'name',event.target.value)
      // this.course[index].name = event.target.value;
      this.startSort();
    },

    // Handle sorting

    startSort() {
      // console.log("startSort");
      this.sortableElement = true;
    },
    stopSort() {
      // console.log("stopSort");
      this.sortableElement = false;
    },
    onSort(trans2=true) {
      if(trans2)
      this.transitionName2=''
      this.transitionName=''
      let temp = 0;
      for (let i = 0; i < this.course.length; i++) {
        for (let j = 0; j < this.course[i].lessons.length; j++) {
          // this.course[i].length[j].order =temp
          this.$set(this.course[i].lessons[j],'order',temp)
          temp++;
        }
        // this.course[i].order = i
        this.$set(this.course[i],'order',i)
      }
    },
    initialazeLessonIDs() {
      for(let i =0; i<this.course.length; i++) {
        for (let j = 0; j < this.course[i].lessons.length; j++) {
          this.$set(this.course[i].lessons[j],'id',this.lessonID++)
        }
      }
    },
    initialazeModuleIDs() {
      for (let i = 0; i < this.course.length; i++) {
        this.$set(this.course[i],'id',this.moduleID++)
      }
    },
    // Payload 
    payloadSetFalse() {
      let temp = 0;
      for (let i = 0; i < this.course.length; i++) {
        for (let j = 0; j < this.course[i].lessons.length; j++) {
          this.payload[temp] = false;
          temp++;
        }
        this.payload[temp] = false;
        temp++;
      }
      this.payload.splice();
    },
    createPayload(number) {
      this.payload.splice(number, 0, false);
    },

    // Lesson

    createLesson(number, group) {
      let bool = false;
      let j = 0;
      let index;
      while (bool == false && j < this.course.length) {
        bool = this.course[j].lessons.some(lesson => lesson.name == "");
        index = this.course[j].lessons.find(lesson => lesson.name == "");
        if (index) index = index.order;
        j++;
      }

      if (bool) {
        window.location.href = `#${index}`;
      } else {
        this.transitionName2="list2"
        this.course[group].lessons.splice(number + 1, 0, {
          name: "",
          description: "",
          id:this.lessonID++
        });
        this.onSort(false);
        this.createPayload(number);
        this.payloadSetFalse();
      }
    },
    deleteLesson(number, group) {
      if (this.course[0].lessons.length == 1 && this.course.length == 1) {
        this.course[0].name = "";
        this.course[0].lessons[0] = { name: "", description: "", order: "0", id:"" };
        this.course.splice();
      } else if (this.course[group].lessons.length == 1) {
       this.transitionName='list'
       this.course.splice(group, 1);
       

      } else {
        this.transitionName2="list2"
        this.course[group].lessons.splice(number, 1);
        this.onSort(false);
        this.payload.pop();
        this.payloadSetFalse();
      }
    },

    createEmptyModule(number) {
      this.transitionName='list'
      console.log(number)
      for(let i=number; i<this.course.length;i++) {
        // this.course[i].id++
        this.$set(this.course[i],'order',this.course[i].order+1)
      }
      this.course.splice(number,0,{order:number,id:this.moduleID++,name:'',lessons:[{name:'',description:'',id:this.lessonID++}]})
      // this.onSort()
      
    }
  },
};
</script>

<style lang="scss" scoped>
.bigLesson {
  height: 120%
}
.lesson {
  transition: transform 2s;
  @apply cursor-move;
}

.span {
  &--module-access {
    background: #183153;
    border-radius: 20%;
    height: 3.5rem;
    width: 3.5rem;
  }
  &--module-fail {
    background: #b40036;
    border-radius: 20%;
    height: 3.5rem;
    width: 3.5rem;
  }
}
textarea {
  resize: none;
}
.description {
  width: 30rem;
}
.list-leave-active {
  transition: all 0s;
  opacity: 0;
  position: absolute;
}
  .list-move {
    transition: all .5s;
  }
.list-enter-active {
  // transition: all .5s;
  transition: all .5s;
  transform: translate(30px);
  position: absolute;
} 
.list-enter {
  opacity: 0;
}
.list-enter-to {
  // transition: all .5s;
}
.list2-leave-active {
  opacity: 0;
  position: absolute;
}
  .list2-move {
    transition: all .5s;
  }
.list2-enter-active {
  position: absolute;
}





.trash {
  transform: translate(50%, -50%);
}
</style>
