<template>
  <div>
    <draggable
      @sort="onSort"
      :disabled="!sortableElement"
      class=""
      :list="course"
      :animation="500"
      group="mod"
    >
      <div
        v-for="(item, parent_index) in course"
        :key="item.name"
        class=" m-16 bg-gray-200 border-2 rounded-lg p-8 cursor-move "
      >
        <div class=" text-5xl flex items-baseline">
          <div
            class="mr-6 span--module flex justify-center items-center font-bold text-yellow-500"
          >
            {{ parent_index + 1 }}
          </div>
          <div class="">
            <input
              v-once
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
        <!-- 1 Button on the left -->
        <div
          :class="
            !payload[course[parent_index].lessons[0].order + parent_index]
              ? 'visible h-8'
              : 'invisible h-0'
          "
        >
          <div
            @click="
              payloadCreate(
                course[parent_index].lessons[0].order + parent_index
              )
            "
            class="h-full bg-gray-200 flex items-center opacity-0 cursor-pointer hover:opacity-100 hover:bg-teal-700 z-20 relative "
          >
            <div class=" h-full w-full">button2 0</div>
          </div>
        </div>

        <draggable
          :animation="200"
          @sort="onSort"
          :list="course[parent_index].lessons"
          group="people"
          :disabled="!sortableElement"
        >
          <div
            v-for="(lesson, index) in course[parent_index].lessons"
            :key="lesson.name"
          >
            <!-- Lesson -->
            <div
              class="flex mx-6 bg-white shadow-lg rounded-lg overflow-hidden lesson"
            >
              <div class="w-2 bg-gray-800"></div>
              <div class="flex items-center px-2 py-3">
                <div class=" text-4xl  ">{{ index + 1 }}</div>
                <div class="mx-3">
                  <div class="">
                    <input
                      placeholder="Chapter"
                      v-focus="true"
                      @focus="stopSort"
                      @keypress.enter="onChangeLessonInput(lesson)"
                      @blur="onChangeLessonInput(lesson)"
                      v-if="showLessonInput[lesson.order]"
                      type="text"
                      class=" text-xl font-semibold text-gray-800 outline-none"
                      :value="lesson.name"
                    />
                    <h2
                      v-if="!showLessonInput[lesson.order]"
                      @click="
                        showLessonInput[lesson.order] = !showLessonInput[
                          lesson.order
                        ];
                        showLessonInput.splice();
                      "
                      class="text-xl font-semibold text-gray-800 inline-block cursor-pointer"
                    >
                      {{ lesson.name }}
                    </h2>
                    <!-- <div v-if="showLessonInput[lesson.order]" class=" inline-block bg-blue-500">Save</div> -->
                    <!-- <div
                      v-if="!showLessonInput[lesson.order]"
                      @click="
                        showLessonInput[lesson.order] = !showLessonInput[
                          lesson.order
                        ];
                        showLessonInput.splice();
                      "
                      class="inline-block h-6 w-6 cursor-pointer"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="edit"
                        class="  svg-inline--fa fa-edit fa-w-18"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                        ></path>
                      </svg>
                    </div> -->
                  </div>
                  <div class="">
                    <div class=" flex w-64">
                    <div @click="showDescriptionInput[
                          lesson.order
                        ] = !showDescriptionInput[lesson.order];
                        showDescriptionInput.splice();" v-if="!showDescriptionInput[lesson.order]&&lesson.description.length>0" class="text-gray-600 break-words w-2/3 cursor-pointer w-full "> {{lesson.description}} </div>
                    <!-- <div
                      v-if="!showDescriptionInput[lesson.order]"
                      @click="showDescriptionInput[
                          lesson.order
                        ] = !showDescriptionInput[lesson.order];
                        showDescriptionInput.splice();
                      "
                      class="inline-block h-6 w-6 cursor-pointer"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="edit"
                        class=" inline-block pb-2 h-6 w-6 svg-inline--fa fa-edit fa-w-18"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                        ></path>
                      </svg>
                    </div> -->
                    </div>
                    <textarea
                      placeholder="Description"
                      @blur="onChangeDescriptionInput(lesson)"
                      @keypress.enter="onChangeDescriptionInput(lesson)"
                      v-if="showDescriptionInput[lesson.order]"
                      cols="50"
                      rows="3"
                      v-focus="true"
                      class=" outline-none "
                      type="text"
                      :value="lesson.description"
                    />
                    
                  </div>
                  <!-- <a href="#" class="text-blue-500">Upload Image</a>. -->
                  <!-- </input> -->
                </div>
              </div>
            </div>
            <!-- <div class="lesson">{{ lesson.name }} {{ index }}</div> -->
            <!-- Button -->
            <div class="filtered w-full flex flex-col justify-between  ">
              <div
                :class="
                  !payload[lesson.order + parent_index + 1]
                    ? 'visible h-8'
                    : 'invisible h-0'
                "
                :key="index"
                @click="payloadCreate(lesson.order + parent_index + 1)"
                class=" h-full w-full bg-gray-200 self-start opacity-0 cursor-pointer hover:opacity-100 hover:bg-teal-700 z-20 relative "
              >
                <div
                  :class="
                    !payload[lesson.order + parent_index + 1] ? 'h-8' : 'h-0'
                  "
                >
                  button {{ lesson.order }}
                </div>
              </div>
            </div>
          </div>
        </draggable>
      </div>
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
      tempName: "",
      payload: [],
      tempIndex: 0,
      showLessonInput: [],
      showDescriptionInput: [],
      sortableElement: true
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
    this.inputLessonShowSetFalse();
    this.inputDescriptionShowSetFalse();
    
  },
  methods: {
    onChangeDescriptionInput(lesson) {
      lesson.description = event.target.value;
      console.log(event.target.value)
      this.showDescriptionInput[lesson.order] = false;
      this.showDescriptionInput.splice();
      this.course.splice();
      this.startSort()
    },
    onChangeLessonInput(lesson) {
      lesson.name = event.target.value;
      this.showLessonInput[lesson.order] = false;
      this.showLessonInput.splice();
      this.course.splice();
      this.startSort()
    },
    onChangeName(index) {
      this.course[index].name = event.target.value;
      console.log(event.target.value);
      this.startSort()
    },
    startSort() {
      console.log("startSort");
      this.sortableElement = true;
    },
    stopSort() {
      console.log("stopSort");
      this.sortableElement = false;
    },
    onSort() {
      let temp = 0;
      for (let i = 0; i < this.course.length; i++) {
        for (let j = 0; j < this.course[i].lessons.length; j++) {
          this.course[i].lessons[j].order = temp;
          temp++;
        }
        this.course[i].id = i;
      }
      this.course.splice();
    },
    inputLessonShowSetFalse() {
      let temp = 0;
      for (let i = 0; i < this.course.length; i++) {
        for (let j = 0; j < this.course[i].lessons.length; j++) {
          this.showLessonInput[temp] = false;
          temp++;
        }
      }
    },
    inputDescriptionShowSetFalse() {
      let temp = 0;
      for (let i = 0; i < this.course.length; i++) {
        for (let j = 0; j < this.course[i].lessons.length; j++) {
          this.showDescriptionInput[temp] = false;
          temp++;
        }
      }
    },
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
      this.tempName = "";
      this.payload.splice();
    },
    payloadCreate(number) {
      this.payloadSetFalse();
      console.log(number, this.payload[+number]);
      this.payload[+number] = !this.payload[+number];
      this.payload.splice();

      console.log("next");
    }
  }
};
</script>

<style lang="scss" scoped>
.lesson {
  transition: all 2s ease-out;
  @apply cursor-move;
}
// .lesson > div >  svg {
//   padding: 100px;

// }
.span {
  &--module {
    background: #183153;
    border-radius: 20%;
    height: 3.5rem;
    width: 3.5rem;
  }
}
.buttonBuilder {
  @apply visible h-16;
  transition: all 0.5s linear;
  transition-delay: -250ms;
}
.buttonBuilder2 {
  @apply opacity-100;
  transition: opacity 0.5s linear;
}
textarea {
  resize: none;
}
</style>
